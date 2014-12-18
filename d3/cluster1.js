var $ = jQuery;
$(document).ready(function () {
    var rotate = 0;

    // size of the diagram
    var w = $(document).width();
    var h = $(document).height();
    var rx = w / 2;
    var ry = h / 2;

    // panning variables
    var duration = 750;
    var panSpeed = 200;

    var panTimer;
    var scale;
    var scaleX;
    var scaleY;

    var root;

    var cluster = d3.layout.cluster()
        .size([360, ry - 120])
        .sort(null);

    var diagonal = d3.svg.diagonal.radial()
        .projection(function (d) {
            return [d.y, d.x / 180 * Math.PI];
        });

    var svg = d3.select("#body").append("div")
        .style("width", w + "px")
        .style("height", w + "px");

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
            panTimer = setTimeout(function () {
                pan(domNode, speed, direction);
            }, 50);
        }
    }

    function centerNode(source) {
        var scale = zoomListener.scale();
        var x = -source.y0;
        var y = -source.x0;
        x = x * scale + w / 2;
        y = y * scale + h / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

    // Define the zoom function for the zoomable tree
    function zoom() {
        console.log("zoom");
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

    var vis = svg.append("svg:svg")
        .attr("width", w)
        .attr("height", w)
        .call(zoomListener);

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = vis.append("g");

    svgGroup.append("svg:path")
        .attr("class", "arc")
        .attr("d", d3.svg.arc().innerRadius(ry - 120).outerRadius(ry).startAngle(0).endAngle(2 * Math.PI));

    var groupCircleSize = 12;
    var specieCircleSize = 4;
    var rootCircleSize = 8;

    var groupTextFontSize = 12;
    var specieTextFontSize = 12;
    var typeTextFontSize = 20;

    var defaultLinkColor = "lightgray";
    var highlightLinkColor = "gray";
    var linkColor = defaultLinkColor;

    function update(source) {
        console.log("update");

        var nodes = cluster.nodes(source);

        var link = svgGroup.selectAll("path.link")
            .data(cluster.links(nodes))
            .enter().append("svg:path")
            .attr("class", "link")
            .attr("d", diagonal)
            .style("stroke",function(d) {
                //remove links to the center;
                if (d.source.depth === 0) {
                    return "white";
                }
                //console.log(linkColor);
                return linkColor;
            });

        var node = svgGroup.selectAll("g.node")
            .data(nodes);

        var nodeEnter = node.enter().append("svg:g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
            })
            .on('click', click);

        nodeEnter.append("svg:circle")
            .attr('class', 'nodeCircle')
            .attr("r", function(d){
                if (d.depth == 0) {
                    return rootCircleSize;
                }
                else if (d.depth === 2) {
                    return groupCircleSize;
                }
                return specieCircleSize;
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

        nodeEnter.append("svg:text")
            .attr("dx", function (d) {
                if (d.depth === 1) {
                    return 0; //return d.x > 180 ? 2 : -2;
                } else if (d.depth === 2) {
                    return 0;
                }
                return d.x < 180 ? 8 : -8;
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
                if (d.depth === 1) {
                    return "gray";
                }
                else if (d.depth === 2) {
                    return "white";
                }
                return "black";
            })
            .attr("dy", ".31em")
            .attr("text-anchor", function (d) {
                //console.log("text-anchor: ", d, " name: " + d.name);
                if (d.depth === 1) {
                    return d.x < 180 ? "end" : "start";
                } else if (d.depth === 2) {
                    return "middle";
                }
                return d.x < 180 ? "start" : "end";
            })
            .attr("transform", function (d) {
                if (d.depth <= 2) {
                    return "rotate(" + (90 - d.x) + ")";
                }else {
                    return d.x < 180 ? null : "rotate(180)";
                }
            })
            .text(function (d) {
                return d.name;
            });

        // Define the root
        root = source;
        root.x0 = 0;
        root.y0 = 0;

        centerNode(root);
    }

    d3.json("data/forest_species.json", function (json) {
        update(json)
    });

    function click(d) {
        if (d3.event.defaultPrevented) return; // click suppressed
        console.log("click: ", d);

        // high light the selections
        var depth =  d.depth;
        var nodeColor = d.color;
        if (depth === 1 || depth === 2) {
            if (depth === 1) {
                nodeColor = highlightLinkColor;
            }
        } else if (depth === 0) {
            nodeColor = defaultLinkColor;
        }

        var links = svgGroup.selectAll("path.link");
        //console.log(links);
        var paths = links[0];
        for (var i=0; i<paths.length; i++) {
            var link = paths[i];
            var data = link.__data__;
            if(data.source.depth === 0)continue;

            if (data.source.name === d.name) {
                link.style.stroke = nodeColor;
            }else {
                link.style.stroke = defaultLinkColor;
            }
        }
    }

});
