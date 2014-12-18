// Get JSON data
treeJSON = d3.json("data/forest_species.json", function(error, treeData) {

    // Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;

    // panning variables
    var panSpeed = 200;

    // Misc. variables
    var i = 0;
    var duration = 750;
    var root;

    // size of the diagram
    var viewerWidth = $(document).width();
    var viewerHeight = $(document).height();

    viewerWidth = viewerWidth / 2;

    console.log(viewerHeight, viewerWidth);

    var groupCircleSize = 14;
    var specieCircleSize = 5;
    var rootCircleSize = 0; //8;

    var groupTextFontSize = 15;
    var specieTextFontSize = 10;
    var typeTextFontSize = 20;

    var tree = d3.layout.tree()
        .size([viewerHeight, viewerWidth]);

    var dw = 20;
    // define a d3 diagonal projection for use by the node paths later on.
    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            return [d.y, d.x];
        });

//    var ry = viewerHeight / 2;
//    var tree = d3.layout.cluster()
//        .size([360, ry - 120])
//        .sort(null);
//
//    var diagonal = d3.svg.diagonal.radial()
//        .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

    // A recursive helper function for performing some setup by walking through all nodes
    function visit(parent, visitFn, childrenFn) {
        if (!parent) return;

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);
            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(
        treeData,
        function(d) {
            totalNodes++;
            maxLabelLength = Math.max(d.name.length, maxLabelLength);
        },
        function(d) {
            return d.children && d.children.length > 0 ? d.children : null;
        }
    );


    // sort the tree according to the node names
    function sortTree() {
        tree.sort(function(a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
    }
    // Sort the tree initially in case the JSON isn't in a sorted order.
    //sortTree();

    // TODO: Pan function, can be better implemented.
    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            translateCoords = d3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            scaleX = translateCoords.scale[0];
            scaleY = translateCoords.scale[1];
            scale = zoomListener.scale();
            svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListener.scale(zoomListener.scale());
            zoomListener.translate([translateX, translateY]);
            panTimer = setTimeout(function() {
                pan(domNode, speed, direction);
            }, 50);
        }
    }

    // Define the zoom function for the zoomable tree

    function zoom() {
        console.log("zoom");
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }


    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

    // define the baseSvg, attaching a class for styling and the zoomListener
    var baseSvg = d3.select("#tree-container").append("svg")
        .attr("width", viewerWidth)
        .attr("height", viewerHeight)
        .attr("class", "overlay")
        .call(zoomListener);

    // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.
    function centerNode(source) {
        var scale = zoomListener.scale();
        var x = -source.y0;
        var y = -source.x0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");

        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

    function click(d) {
        if (d3.event.defaultPrevented) return; // click suppressed
        console.log("click: ", d);
    }

    function update(source) {
        // Compute the new height, function counts total children of root node and sets tree height accordingly.
        // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
        // This makes the layout more consistent.
        var levelWidth = [1];
        var childCount = function(level, n) {

            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0);

                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function(d) {
                    childCount(level + 1, d);
                });
            }
        };
        childCount(0, root);
        var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line
        tree = tree.size([newHeight, viewerWidth]);

        tree.separation(function separation(a, b) {
            //return (a.parent == b.parent ? 1 : 2) / a.depth;
            return (a.parent == b.parent ? 0.1 : 0.2);
        });

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function(d) {
            d.y = (d.depth * (maxLabelLength * 0.8)); //maxLabelLength * 10px
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        });

        // Update the nodes…
        node = svgGroup.selectAll("g.node")
            .data(nodes, function(d) {
                return d.id || (d.id = ++i);
            });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', click);

        //
        nodeEnter.append("rect")
            //.attr("transform", "translate(" + d.y + "," + d.x + ")")
            .style("fill", function(d) {
                if(d.depth === 2) {
                    if (d.order <= 16)
                        return "#807070";
                    else
                        return "#807070";
                }
                return "#1e4004";
            })
            .attr("x", -100)
            .attr("y", function(d){
                if(d.depth === 2) {
                    console.log(d);
                    var w = d.children.length * 22;

                    // some special cases
                    if(d.order === 1) {
                        return - (w - 10)/2;
                    } else if (d.order === 16) {
                        return -(w + 30 + 60)/2;
                    } else if (d.order === 17) {
                        return -(w - 30)/2;
                    } else if (d.order === 28) {
                        return -(w + 30 + 60)/2;
                    }

                    return -(w + 30 + 10)/2;
                }

                return 0;
            })
            .attr("width", function(d) {
                if(d.depth === 2) {
                    return 23;
                }
                return 0;
            })
            .attr("height", function(d) {
                if(d.depth === 2) {
                    console.log(d);
                    var w = d.children.length * 22;
                    return w + 30;
                }
                return 0;
            });

        nodeEnter.append("circle")
            .attr('class', 'nodeCircle')
            .attr('id', function(d){
                var order = 0;
                if(d.order)order = d.order;
                return 'C-' + d.depth + "-" + order;
            })
            .attr("r", 0)
            .style("fill", function(d) {
                if(d.color) {
                    return d.color;
                }else {
                    if(d.depth == 1) {
                        return "white";
                    }
                    else{
                        return "lightgray";
                    }
                }
            });
//            .style("fill", function(d) {
//                return d._children ? "lightsteelblue" : "#fff";
//            });



        nodeEnter.append("text")
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("dy", ".35em")
            .attr('class', 'nodeText')
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            })
            .style("fill-opacity", 0);


        // alias
        nodeEnter.append("text")
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("dy", ".35em")
            .attr('class', 'nodeText1')
            .attr("text-anchor", function(d) {
                return "start";
            })
            .attr("fill", function(d){
                return "white";
            })
            .attr("font-size", function(d){
                return groupTextFontSize-2;
            })
            .attr("dy", function(d){
                if (d.depth === 2) {
                    var dd = -0.4 - d.children.length * 0.75;
                    return dd+"em";
                }
                return ".31em";
            })
            .text(function(d) {
                return d.alias;
            })
            .style("fill-opacity", 1);


        // add two graphics to the view
        nodeEnter.append("image")
            .attr("xlink:href", function(d){
                if (d.depth === 1) {
                    if(d.name === 'Softwoods') {
                        return 'img/Softwood.png';
                    }else {
                        return 'img/Hardwood.png';
                    }
                }else {
                    return '';
                }
            })
            .attr("x", "-100")
            .attr("y", "6")
            .attr("width", function(d){
                if (d.depth === 1) {
                    return 46;
                }
                return 0;
            })
            .attr("height", function(d){
                if (d.depth === 1) {
                    return 104;
                }
                return 0;
            });


//        // phantom node to give us mouseover in a radius around it
//        nodeEnter.append("circle")
//            .attr('class', 'ghostCircle')
//            .attr("r", 30)
//            .attr("opacity", 0.2) // change this to zero to hide the target area
//            .style("fill", "red");

        // Update the text to reflect whether node has children or not.
        node.select('text.nodeText')
            .attr("x", function(d) {
                if (d.depth === 2) {
                    return -0.5;
                }
                return d.children || d._children ? -10 : 10;
            })
            .attr("font-size", function(d){
                if (d.depth === 1) {
                    return typeTextFontSize;
                } else if (d.depth === 2) {
                    return groupTextFontSize;
                }
                return specieTextFontSize;
            })
            .attr("fill", function(d){
                return "white";
            })
            .attr("text-anchor", function(d) {
                if (d.depth === 2) {
                    return "middle";
                }
                return d.children || d._children ? "end" : "start";
            })
            .attr("dy", function(d){
                if (d.depth === 1) {
                    if(d.name === 'Softwoods') {
                        return "-43.0em"
                    }else {
                        return "-45.2em"
                    }
                }
                return ".31em";
            })
            .text(function(d) {
                return d.name;
            });

        // Change the circle fill depending on whether it has children and is collapsed
        node.select("circle.nodeCircle")
            //.attr("r", 4.5)
            .attr("r", function(d){
                if (d.depth == 0) {
                    return rootCircleSize;
                }
                else if (d.depth === 1) {
                    return 0;
                }
                else if (d.depth === 2) {
                    return groupCircleSize;
                }
                return specieCircleSize;
            })
            .attr('id', function(d){
                var order = 0;
                if(d.order)order = d.order;
                return 'C-' + d.depth + "-" + order;
            })
            .style("stroke-width", function(d) {
                if(d.depth === 3)
                    return 0.5;
                else
                    return 0;
            })
            .style("stroke", function(d) {
                return "white";
            })
            .style("fill", function(d) {
                if(d.color) {
                    return d.color;
                }else {
                    if(d.depth == 1) {
                        return "white";
                    }
                    else{
                        return "lightgray";
                    }
                }
            });


        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Fade the text in
        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select("circle")
            .attr("r", 0);

        nodeExit.select("text")
            .style("fill-opacity", 0);

//        // Update the links…
//        var link = svgGroup.selectAll("path.link")
//            .data(links, function(d) {
//                return d.target.id;
//            });
//
//        // Enter any new links at the parent's previous position.
//        link.enter().insert("path", "g")
//            .attr("class", "link")
//            .style("stroke",function(d) {
//                //remove links to the center;
////                if (d.source.depth === 0) {
////                    return "white";
////                }
////                //console.log(linkColor);
////                if(d.source.depth === 1) {
////                    console.log(d);
////                    if(d.target.order === 1 || d.target.order === 16 || d.target.order === 17 || d.target.order === 28) {
////                        return "white";
////                    }
////                }
//                if(d.source.depth === 0) {
//                    console.log(d);
//                    return "#1e4004";
//                }
//                return "#1e4004";
//            })
//            .style("stroke-width", 5)
//            .attr("d", function(d) {
//                var o = {
//                    x: source.x0,
//                    y: source.y0
//                };
//
//                if(d.source.depth === 1) {
//                    console.log(d);
//                    console.log(source.x0, source.y0);
//                }
//
//                return diagonal({
//                    source: o,
//                    target: o
//                });
//            });
//
//        // Transition links to their new position.
//        link.transition()
//            .duration(duration)
//            .attr("d", diagonal);
//
//        // Transition exiting nodes to the parent's new position.
//        link.exit().transition()
//            .duration(duration)
//            .attr("d", function(d) {
//                var o = {
//                    x: source.x,
//                    y: source.y
//                };
//                return diagonal({
//                    source: o,
//                    target: o
//                });
//            })
//            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    // Define the root
    root = treeData;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;

    // Layout the tree initially and center on the root node.
    update(root);
    centerNode(root);
});