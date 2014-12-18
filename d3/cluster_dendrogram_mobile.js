//        dojo.require("esri.layers.RasterFunction");

var groupColors = [
    {color: "#C7EAFB"},
    {color: "#ABE1FA"},
    {color: "#7ED3F7"},
    {color: "#44C8F5"},
    {color: "#00B6F1"},
    {color: "#009BDF"},
    {color: "#007DC5"},
    {color: "#0061AF"},
    {color: "#17479E"},
    {color: "#192F7C"},
    {color: "#522E91"},
    {color: "#7B5AA6"},
    {color: "#9E76B4"},
    {color: "#C786BA"},
    {color: "#BD4B9B"},
    {color: "#9B1F87"},
    {color: "#ED1B2F"},
    {color: "#F7941E"},
    {color: "#FFC20E"},
    {color: "#FFDD00"},
    {color: "#FFF200"},
    {color: "#E2E41A"},
    {color: "#BFD730"},
    {color: "#8DC63F"},
    {color: "#00A651"},
    {color: "#009247"},
    {color: "#006F45"},
    {color: "#004416"}
];

var groupFunctionNames = [
    {"name":"Group_01-White-Red-Jack_pine","description":"A raster function template.","help":"White Red Jack Pine"},
    {"name":"Group_02-Spruce-fir","description":"A raster function template.","help":"Spruce Fir"},
    {"name":"Group_03-Longleaf-slash_pine","description":"A raster function template.","help":"Longleaf Slash Pine"},
    {"name":"Group_04-Loblolly_shortleaf_Pine","description":"A raster function template.","help":"Lobolly Shortleaf Pine"},
    {"name":"Group_05-Pinyon_Juniper_pine","description":"A raster function template.","help":"Pinyon Juniper Pine"},
    {"name":"Group_06-Douglas-fir","description":"A raster function template.","help":"Douglas Fir"},
    {"name":"Group_07-Ponderosa_pine","description":"A raster function template.","help":"Ponderosa Pine"},
    {"name":"Group_08-Western_White_pine","description":"A raster function template.","help":"Western White Pine"},
    {"name":"Group_09-Fir_spruce_mountain_hemlock","description":"A raster function template.","help":"Fir Spruce Mountain Hemlock"},
    {"name":"Group_10-Lodgepole_pine","description":"A raster function template.","help":"Lodgepole Pine"},
    {"name":"Group_11-Hemlock-Sitka_spruce","description":"A raster function template.","help":"Hemlock Sitka Spruce"},
    {"name":"Group_12-Western_larch","description":"A raster function template.","help":"Western Larch"},
    {"name":"Group_13-Redwood","description":"A raster function template.","help":"Redwood"},
    {"name":"Group_14-Other_western_softwoods","description":"A raster function template.","help":"Other Western Softwoods"},
    {"name":"Group_15-California_mixed_conifer","description":"A raster function template.","help":"California Mixed Conifer"},
    {"name":"Group_16-Exotic_softwoods","description":"A raster function template.","help":"Exotic Softwoods"},
    {"name":"Group_17-Oak_pine","description":"A raster function template.","help":"Oak Pine"},
    {"name":"Group_18-Oak_hickory","description":"A raster function template.","help":"Oak Hickory"},
    {"name":"Group_19-oak_gum_cypress","description":"A raster function template.","help":"Oak gum Cypress"},
    {"name":"Group_20-Elm_ash_cottonwood","description":"A raster function template.","help":"Elm ash Cottonwood"},
    {"name":"Group 21: Maple/beech/birch","description":"A raster function template.","help":"Maple Beach Birch"} ,
    {"name":"Group_22-Aspen_birch","description":"A raster function template.","help":"Aspen Birch"},
    {"name":"Group_23-Alder_maple","description":"A raster function template.","help":"Alder Maple"},
    {"name":"Group_24-Western_oak","description":"A raster function template.","help":"Western oak"},
    {"name":"Group_25-Tanoak_laurel","description":"A raster function template.","help":"Tanoak Laurel"},
    {"name":"Group_26-Other_western_hardwoods","description":"A raster function template.","help":"Other Western Hardwoods"},
    {"name":"Group_27-Tropical_hardwoods","description":"A raster function template.","help":"Tropical Hardwoods"},
    {"name":"Group 28: Exotic hardwoods","description":"A raster function template.","help":"Exotic Hardwoods"},
    {"name":"Hardwood_Groups","description":"A raster function template.","help":"Hardwood Groups"},
    {"name":"Softwood_Groups","description":"A raster function template.","help":"Softwood Groups"},

    {"name":"CONUS_ForestGroups","description":"A raster function template.","help":""}
];

var alaskaGroupFunctionNames = [
    {"name":""},
    {"name":"AlaskaGroup02","description":"A raster function template.","help":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":"AlaskaGroup09","description":"A raster function template.","help":""},
    {"name":"AlaskaGroup10","description":"A raster function template.","help":""},
    {"name":"AlaskaPGroup11","description":"A raster function template.","help":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":"AlaskaPGroup20","description":"A raster function template.","help":""},
    {"name":""},
    {"name":"AlaskaPGroup22","description":"A raster function template.","help":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":""},
    {"name":"AlaskaHardwoods","description":"A raster function template.","help":""},
    {"name":"AlaskaSoftwoods","description":"A raster function template.","help":""},
    {"name":"AlaskaForestGroup","description":"A raster function template.","help":""}
];

var speciesFunctionNames = [
    {"order":1,"color":"#C7EAFB","name":"1_Jack_pine","description":"A raster function template.","help":"Jack pine"},
    {"order":2,"color":"#C7EAFB","name":"2_Red_pine","description":"A raster function template.","help":"Red pine"},
    {"order":3,"color":"#C7EAFB","name":"3_Eastern_white_pine","description":"A raster function template.","help":"Eastern white pine"},
    {"order":4,"color":"#C7EAFB","name":"4_Eastern_white_pine-Eastern_hemlock","description":"A raster function template.","help":"Eastern white pine / eastern hemlock"},
    {"order":5,"color":"#C7EAFB","name":"5_Eastern_hemlock","description":"A raster function template.","help":"Eastern hemlock"},
    {"order":6,"color":"#ABE1FA","name":"6-Balsam_fir","description":"A raster function template.","help":"Balsam fir"},
    {"order":7,"color":"#ABE1FA","name":"7_White_spruce","description":"A raster function template.","help":"White spruce"},
    {"order":8,"color":"#ABE1FA","name":"8_Red_spruce","description":"A raster function template.","help":"Red spruce"},
    {"order":9,"color":"#ABE1FA","name":"9_Red_spruce-Balsam_fir","description":"A raster function template.","help":"Red spruce / balsam fir"},
    {"order":10,"color":"#ABE1FA","name":"10_Black_spruce","description":"A raster function template.","help":"Black spruce"},
    {"order":11,"color":"#ABE1FA","name":"11_Tamarack","description":"A raster function template.","help":"Tamarack"},
    {"order":12,"color":"#ABE1FA","name":"12_Northern_white_cedar","description":"A raster function template.","help":"Nothern white-cedar"},
    {"order":13,"color":"#7ED3F7","name":"13_Longleaf_pine","description":"A raster function template.","help":"Longleaf pine"},
    {"order":14,"color":"#7ED3F7","name":"14_Slash_pine","description":"A raster function template.","help":"Slash pine"},
    {"order":15,"color":"#44C8F5","name":"15_Loblolly_pine","description":"A raster function template.","help":"Loblolly pine"},
    {"order":21,"color":"#44C8F5","name":"16_Shortleaf_pine","description":"A raster function template.","help":"Shortleaf pine"},
    {"order":17,"color":"#44C8F5","name":"17_Virginia_pine","description":"A raster function template.","help":"Virginia pine"},
    {"order":18,"color":"#44C8F5","name":"18_Sand_pine","description":"A raster function template.","help":"Sand pine"},
    {"order":19,"color":"#44C8F5","name":"19_Table_mountain_pine","description":"A raster function template.","help":"Table Mountain pine"},
    {"order":20,"color":"#44C8F5","name":"20_Pond_pine","description":"A raster function template.","help":"Pond pine"},
    {"order":16,"color":"#44C8F5","name":"21_Pitch_pine","description":"A raster function template.","help":"Pitch pine"},
    {"order":22,"color":"#44C8F5","name":"22_Spruce_pine","description":"A raster function template.","help":"Spruce pine"},
    {"order":23,"color":"#00B6F1","name":"23_Eastern_red_cedar","description":"A raster function template.","help":"Eastern redcedar"},
    {"order":24,"color":"#00B6F1","name":"24_Rocky_mountain_juniper","description":"A raster function template.","help":"Rocky Mountain juniper"},
    {"order":25,"color":"#00B6F1","name":"25_Western_juniper","description":"A raster function template.","help":"Western juniper"},
    {"order":26,"color":"#00B6F1","name":"26_Juniper_woodland","description":"A raster function template.","help":"Juniper woodland"},
    {"order":27,"color":"#00B6F1","name":"27_Pinyon_juniper_woodland","description":"A raster function template.","help":"Pinyon / juniper woodland"},
    {"order":28,"color":"#009BDF","name":"28_Douglas_fir","description":"A raster function template.","help":"Douglas-fir"},
    {"order":29,"color":"#009BDF","name":"29_Port_orford_cedar","description":"A raster function template.","help":"Port-Orford-cedar"},
    {"order":30,"color":"#007DC5","name":"30_Ponderosa_pine","description":"A raster function template.","help":"Ponderosa pine"},
    {"order":31,"color":"#007DC5","name":"","description":"A raster function template.","help":"Incense-cedar"},
    {"order":32,"color":"#007DC5","name":"32_Jeffery_Coulter_Bigcone_Douglas_fir","description":"A raster function template.","help":"Jeffrey pine / Coulter pine / bigcone Douglas-fir"},
    {"order":33,"color":"#007DC5","name":"33_Sugar_pine","description":"A raster function template.","help":"Sugar pine"},
    {"order":34,"color":"#0061AF","name":"34_Western_white_pine","description":"A raster function template.","help":"Western white pine"},
    {"order":35,"color":"#17479E","name":"35_White_fir","description":"A raster function template.","help":"White fir"},
    {"order":36,"color":"#17479E","name":"36_Red_fir","description":"A raster function template.","help":"Red fir"},
    {"order":37,"color":"#17479E","name":"37_Noble_fir","description":"A raster function template.","help":"Noble fir"},
    {"order":38,"color":"#17479E","name":"38_Pacific_silver_fir","description":"A raster function template.","help":"Pacific silver fir"},
    {"order":39,"color":"#17479E","name":"39_Engelmann_spruce","description":"A raster function template.","help":"Engelmann spruce"},
    {"order":40,"color":"#17479E","name":"40_Engelmann_spruce_subalpine_fir","description":"A raster function template.","help":"Engelmann spruce / subalpine fir"},
    {"order":41,"color":"#17479E","name":"41_Grand_fir","description":"A raster function template.","help":"Grand fir"},
    {"order":42,"color":"#17479E","name":"42_Subalpine_fir","description":"A raster function template.","help":"Subalpine fir"},
    {"order":43,"color":"#17479E","name":"43_Blue_spruce","description":"A raster function template.","help":"Blue spruce"},
    {"order":44,"color":"#17479E","name":"44_Mountain_hemlock","description":"A raster function template.","help":"Mountain hemlock"},
    {"order":45,"color":"#17479E","name":"","description":"A raster function template.","help":"Alaska-yellow-cedar"},
    {"order":46,"color":"#192F7C","name":"46_Lodgepole_pine","description":"A raster function template.","help":"Lodgepole pine"},
    {"order":47,"color":"#522E91","name":"47_Western_hemlock","description":"A raster function template.","help":"Western hemlock"},
    {"order":48,"color":"#522E91","name":"48_Western_red_cedar","description":"A raster function template.","help":"Western redcedar"},
    {"order":49,"color":"#522E91","name":"49_Sitka_spruce","description":"A raster function template.","help":"Sitka spruce"},
    {"order":50,"color":"#7B5AA6","name":"50_Western_larch","description":"A raster function template.","help":"Western larch"},
    {"order":51,"color":"#9E76B4","name":"51_Redwood","description":"A raster function template.","help":"Redwood"},
    {"order":52,"color":"#9E76B4","name":"52_Giant_sequoia","description":"A raster function template.","help":"Giant sequoia"},
    {"order":53,"color":"#C786BA","name":"53_knobcone_pine","description":"A raster function template.","help":"Knobcone pine"},
    {"order":54,"color":"#C786BA","name":"","description":"A raster function template.","help":"Southwestern white pine"},
    {"order":55,"color":"#C786BA","name":"","description":"A raster function template.","help":"Bishop pine"},
    {"order":56,"color":"#C786BA","name":"","description":"A raster function template.","help":"Monterey pine"},
    {"order":57,"color":"#C786BA","name":"57_Foxtail_pine_Bristlecone_pine","description":"A raster function template.","help":"Foxtail pine / bristlecone pine"},
    {"order":58,"color":"#C786BA","name":"58_Limber_pine","description":"A raster function template.","help":"Limber pine"},
    {"order":59,"color":"#C786BA","name":"59_Whitebark_pine","description":"A raster function template.","help":"Whitebark pine"},
    {"order":60,"color":"#C786BA","name":"60_misc_Western_softwoods","description":"A raster function template.","help":"Misc. western softwoods"},
    {"order":61,"color":"#BD4B9B","name":"61_California_mixed_conifers","description":"A raster function template.","help":"California mixed conifer"},
    {"order":62,"color":"#9B1F87","name":"62_Scotch_pine","description":"A raster function template.","help":"Scotch pine"},
    {"order":63,"color":"#9B1F87","name":"","description":"A raster function template.","help":"Australian pine"},
    {"order":64,"color":"#9B1F87","name":"64_other_exptic_softwoods","description":"A raster function template.","help":"Other exotic softwoods"},
    {"order":65,"color":"#9B1F87","name":"65_Norway_spruce","description":"A raster function template.","help":"Norway spruce"},
    {"order":66,"color":"#9B1F87","name":"","description":"A raster function template.","help":"Introduced larch"},
    {"order":67,"color":"#ED1B2F","name":"67_Eastern_white_pine_No_red_oak","description":"A raster function template.","help":"Eastern white pine / Northern red oak / white ash"},
    {"order":68,"color":"#ED1B2F","name":"68_Eastern_redcedar_hardwood","description":"A raster function template.","help":"Eastern redcedar / hardwood"},
    {"order":69,"color":"#ED1B2F","name":"69_Longleaf_pine_oak","description":"A raster function template.","help":"Longleaf pine / oak"},
    {"order":70,"color":"#ED1B2F","name":"70_Shortleaf_pine_oak","description":"A raster function template.","help":"Shortleaf pine / oak"},
    {"order":71,"color":"#ED1B2F","name":"71_Virginia_pine_So_red_oak","description":"A raster function template.","help":"Virginia pine / Southern red oak"},
    {"order":72,"color":"#ED1B2F","name":"72_loblolly_pine_hardwood.rtf","description":"A raster function template.","help":"Loblolly pine / hardwood"},
    {"order":73,"color":"#ED1B2F","name":"73_Slash_pine_hardwood","description":"A raster function template.","help":"Slash pine / hardwood"},
    {"order":74,"color":"#ED1B2F","name":"74_Other_pine_hardwood","description":"A raster function template.","help":"Other pine / hardwood"},
    {"order":75,"color":"#F7941E","name":"75_Post_oak_blackjack_oak","description":"A raster function template.","help":"Post oak / blackjack oak"},
    {"order":76,"color":"#F7941E","name":"76_Chestnut_oak","description":"A raster function template.","help":"Chestnut oak"},
    {"order":77,"color":"#F7941E","name":"77_White_oak_Red_oak_hickory","description":"A raster function template.","help":"White oak / red oak / hickory"},
    {"order":78,"color":"#F7941E","name":"78_white_oak","description":"A raster function template.","help":"White oak"},
    {"order":79,"color":"#F7941E","name":"79_Northern_red_oak","description":"A raster function template.","help":"Northern red oak"},
    {"order":80,"color":"#F7941E","name":"80_Yellow_poplar_whie_oak_No_red_oak","description":"A raster function template.","help":"Yellow-poplar / white oak / Northern red oak"},
    {"order":81,"color":"#F7941E","name":"81_sassafras_persimmon","description":"A raster function template.","help":"Sassafras / persimmon"},
    {"order":82,"color":"#F7941E","name":"82_Sweetgum_yellow_poplar","description":"A raster function template.","help":"Sweetgum / yellow-poplar"},
    {"order":83,"color":"#F7941E","name":"83_Bur_oak","description":"A raster function template.","help":"Bur oak"},
    {"order":84,"color":"#F7941E","name":"84_Scarlet_oak","description":"A raster function template.","help":"Scarlet oak"},
    {"order":85,"color":"#F7941E","name":"85_Yellow_poplar","description":"A raster function template.","help":"Yellow-poplar"},
    {"order":86,"color":"#F7941E","name":"86_Black_walnut","description":"A raster function template.","help":"Black walnut"},
    {"order":87,"color":"#F7941E","name":"87_Black_locust","description":"A raster function template.","help":"Black locust"},
    {"order":88,"color":"#F7941E","name":"88_Southern_scrub_oak","description":"A raster function template.","help":"Southern Scrub oak"},
    {"order":89,"color":"#F7941E","name":"89_Chestnut_oak_black_oak_scarlet_oak","description":"A raster function template.","help":"Chestnut oak / black oak / scarlet oak"},
    {"order":90,"color":"#F7941E","name":"90_Red_maple_oak","description":"A raster function template.","help":"Red maple / oak"},
    {"order":91,"color":"#F7941E","name":"91_Mixed_upland_hardwoods","description":"A raster function template.","help":"Mixed upland hardwoods"},
    {"order":92,"color":"#FFC20E","name":"92_Swamp_chestnut_oak_cherrybark_oak","description":"A raster function template.","help":"Swamp chestnut oak / cherrybark oak"},
    {"order":93,"color":"#FFC20E","name":"93_Sweetgum_nuttall_oak_willow_oak","description":"A raster function template.","help":"Sweetgum / Nuttall oak / willow oak"},
    {"order":94,"color":"#FFC20E","name":"94_overcup_oak_water_hickory","description":"A raster function template.","help":"Overcup oak / water hickory"},
    {"order":95,"color":"#FFC20E","name":"95_Atlantic_white_cedar","description":"A raster function template.","help":"Atlantic white-cedar"},
    {"order":96,"color":"#FFC20E","name":"96_Baldcypress_water_tupelo","description":"A raster function template.","help":"Baldcypress / water tupelo"},
    {"order":97,"color":"#FFC20E","name":"97_Sweetbay_swamp_tupelo_red_maple","description":"A raster function template.","help":"Sweetbay / swamp tupelo / red maple"},
    {"order":98,"color":"#FFDD00","name":"98_Black_ask_american_elm_red_maple","description":"A raster function template.","help":"Black ash / American elm / red maple"},
    {"order":99,"color":"#FFDD00","name":"99_River_birch_sycamore","description":"A raster function template.","help":"River birch / sycamore"},
    {"order":100,"color":"#FFDD00","name":"100_Cottonwood","description":"A raster function template.","help":"Cottonwood"},
    {"order":101,"color":"#FFDD00","name":"101_willow","description":"A raster function template.","help":"Willow"},
    {"order":102,"color":"#FFDD00","name":"102_Sycamore_pecan_american_elm","description":"A raster function template.","help":"Sycamore / pecan / American elm"},
    {"order":103,"color":"#FFDD00","name":"103_Sugarberry_hackberry_elm_green_ash","description":"A raster function template.","help":"Sugarberry / hackberry / elm / green ash"},
    {"order":104,"color":"#FFDD00","name":"104_Silver_maple_american_elm","description":"A raster function template.","help":"Silver maple / American elm"},
    {"order":105,"color":"#FFDD00","name":"105_Red_maple_lowland","description":"A raster function template.","help":"Red maple / lowland"},
    {"order":106,"color":"#FFDD00","name":"106_Cottonwood_willow","description":"A raster function template.","help":"Cottonwood / willow"},
    {"order":107,"color":"#FFDD00","name":"107_Oregon_ash","description":"A raster function template.","help":"Oregon ash"},
    {"order":108,"color":"#FFF200","name":"108_Sugar_maple_beech_yellow_birch","description":"A raster function template.","help":"Sugar maple / beech / yellow birch"},
    {"order":109,"color":"#FFF200","name":"109_Black_cherry","description":"A raster function template.","help":"Black cherry"},
    {"order":110,"color":"#FFF200","name":"110_Cherry_ash_yellow_poplar","description":"A raster function template.","help":"Cherry / white ash / yellow-poplar"},
    {"order":111,"color":"#FFF200","name":"111_Hard_maple_basswood","description":"A raster function template.","help":"Hard maple / basswood"},
    {"order":112,"color":"#FFF200","name":"112_Elm_ash_black_locust","description":"A raster function template.","help":"Elm / ash / black locust"},
    {"order":113,"color":"#FFF200","name":"113_Red_maple_upland","description":"A raster function template.","help":"Red maple / upland"},
    {"order":114,"color":"#E2E41A","name":"114_Aspen","description":"A raster function template.","help":"Aspen"},
    {"order":115,"color":"#E2E41A","name":"115_Paper_birch","description":"A raster function template.","help":"Paper birch"},
    {"order":116,"color":"#E2E41A","name":"116_Balsam_poplar","description":"A raster function template.","help":"Balsam poplar"},
    {"order":117,"color":"#BFD730","name":"117_Red_alder","description":"A raster function template.","help":"Red alder"},
    {"order":118,"color":"#BFD730","name":"118_Bigleaf_maple","description":"A raster function template.","help":"Bigleaf maple"},
    {"order":119,"color":"#8DC63F","name":"119_Gray_pine","description":"A raster function template.","help":"Gray pine"},
    {"order":120,"color":"#8DC63F","name":"120_California_black_oak","description":"A raster function template.","help":"California black oak"},
    {"order":121,"color":"#8DC63F","name":"121_Oregon_white_oak","description":"A raster function template.","help":"Oregon white oak"},
    {"order":122,"color":"#8DC63F","name":"122_Blue_oak","description":"A raster function template.","help":"Blue oak"},
    {"order":123,"color":"#8DC63F","name":"123_Deciduous_oak_woodlands","description":"A raster function template.","help":"Deciduous oak woodland"},
    {"order":124,"color":"#8DC63F","name":"124_Coast_live_oak","description":"A raster function template.","help":"Coast live oak"},
    {"order":125,"color":"#8DC63F","name":"125_Canyon_live_oak_Interior_live_oak","description":"A raster function template.","help":"Canyon live oak / interior live oak"},
    {"order":126,"color":"#00A651","name":"126_Tanoak","description":"A raster function template.","help":"Tanoak"},
    {"order":127,"color":"#00A651","name":"127_California_laurel","description":"A raster function template.","help":"California laurel"},
    {"order":128,"color":"#00A651","name":"128_Giant_chinkapin","description":"A raster function template.","help":"Giant chinkapin"},
    {"order":129,"color":"#009247","name":"129_Pacific_madrone","description":"A raster function template.","help":"Pacific madrone"},
    {"order":130,"color":"#009247","name":"130_Mesquite_woodland","description":"A raster function template.","help":"Mesquite woodland"},
    {"order":131,"color":"#009247","name":"131_Cercocarpus_woodland","description":"A raster function template.","help":"Cercocarpus woodland"},
    {"order":132,"color":"#009247","name":"132_Intermountain_maple_woodland","description":"A raster function template.","help":"Intermountain maple woodland"},
    {"order":133,"color":"#009247","name":"133_Misc_western_woodland_hardwoods","description":"A raster function template.","help":"Misc. western woodland hardwoods"},
    {"order":134,"color":"#006F45","name":"134_Sable_palm","description":"A raster function template.","help":"Sable palm"},
    {"order":135,"color":"#006F45","name":"135_Mangrove","description":"A raster function template.","help":"Mangrove"},
    {"order":136,"color":"#006F45","name":"","description":"A raster function template.","help":"Other tropical hardwoods"},
    {"order":137,"color":"#004416","name":"","description":"A raster function template.","help":"Paulownia"},
    {"order":138,"color":"#004416","name":"","description":"A raster function template.","help":"Melaleuca"},
    {"order":139,"color":"#004416","name":"139_Eucalyptus","description":"A raster function template.","help":"Eucalyptus"},
    {"order":140,"color":"#004416","name":"140_Other_exptic_hardwoods","description":"A raster function template.","help":"Other exotic hardwoods"}
];
var alaskaSpeciesFunctionNames = [
    {"order":1,"name":"","description":"","help":""},
    {"order":2,"name":"","description":"","help":""},
    {"order":3,"name":"","description":"","help":""},
    {"order":4,"name":"","description":"","help":""},
    {"order":5,"name":"","description":"","help":""},
    {"order":6,"name":"","description":"","help":""},
    {"order":7,"name":"7_White_spruce","description":"A raster function template.","help":"White spruce"},
    {"order":8,"name":"","description":"","help":""},
    {"order":9,"name":"","description":"","help":""},
    {"order":10,"name":"10_Black_spruce","description":"A raster function template.","help":"Black spruce"},
    {"order":11,"name":"","description":"","help":""},
    {"order":12,"name":"","description":"","help":""},
    {"order":13,"name":"","description":"","help":""},
    {"order":14,"name":"","description":"","help":""},
    {"order":15,"name":"","description":"","help":""},
    {"order":16,"name":"","description":"","help":""},
    {"order":17,"name":"","description":"","help":""},
    {"order":18,"name":"","description":"","help":""},
    {"order":19,"name":"","description":"","help":""},
    {"order":20,"name":"","description":"","help":""},
    {"order":21,"name":"","description":"","help":""},
    {"order":22,"name":"","description":"","help":""},
    {"order":23,"name":"","description":"","help":""},
    {"order":24,"name":"","description":"","help":""},
    {"order":25,"name":"","description":"","help":""},
    {"order":26,"name":"","description":"","help":""},
    {"order":27,"name":"","description":"","help":""},
    {"order":28,"name":"","description":"","help":""},
    {"order":29,"name":"","description":"","help":""},
    {"order":30,"name":"","description":"","help":""},
    {"order":31,"name":"","description":"","help":""},
    {"order":32,"name":"","description":"","help":""},
    {"order":33,"name":"","description":"","help":""},
    {"order":34,"name":"","description":"","help":""},
    {"order":35,"name":"","description":"","help":""},
    {"order":36,"name":"","description":"","help":""},
    {"order":37,"name":"","description":"","help":""},
    {"order":38,"name":"","description":"","help":""},
    {"order":39,"name":"","description":"","help":""},
    {"order":40,"name":"","description":"","help":""},
    {"order":41,"name":"","description":"","help":""},
    {"order":42,"name":"","description":"","help":""},
    {"order":43,"name":"","description":"","help":""},
    {"order":44,"name":"44_Mountain_hemlock","description":"A raster function template.","help":"Mountain hemlock"},
    {"order":45,"name":"45_Alaska_yellow_cedar","description":"A raster function template.","help":"Alaska-yellow-cedar"},
    {"order":46,"name":"46_Lodgepole_pine","description":"A raster function template.","help":"Lodgepole pine"},
    {"order":47,"name":"47_Western_hemlock","description":"A raster function template.","help":"Western hemlock"},
    {"order":48,"name":"48_Western_red_cedar","description":"A raster function template.","help":"Western redcedar"},
    {"order":49,"name":"49_Sitka_spruce","description":"A raster function template.","help":"Sitka spruce"},
    {"order":50,"name":"","description":"","help":""},
    {"order":51,"name":"","description":"","help":""},
    {"order":52,"name":"","description":"","help":""},
    {"order":53,"name":"","description":"","help":""},
    {"order":54,"name":"","description":"","help":""},
    {"order":55,"name":"","description":"","help":""},
    {"order":56,"name":"","description":"","help":""},
    {"order":57,"name":"","description":"","help":""},
    {"order":58,"name":"","description":"","help":""},
    {"order":59,"name":"","description":"","help":""},
    {"order":60,"name":"","description":"","help":""},
    {"order":61,"name":"","description":"","help":""},
    {"order":62,"name":"","description":"","help":""},
    {"order":63,"name":"","description":"","help":""},
    {"order":64,"name":"","description":"","help":""},
    {"order":65,"name":"","description":"","help":""},
    {"order":66,"name":"","description":"","help":""},
    {"order":67,"name":"","description":"","help":""},
    {"order":68,"name":"","description":"","help":""},
    {"order":69,"name":"","description":"","help":""},
    {"order":70,"name":"","description":"","help":""},
    {"order":71,"name":"","description":"","help":""},
    {"order":72,"name":"","description":"","help":""},
    {"order":73,"name":"","description":"","help":""},
    {"order":74,"name":"","description":"","help":""},
    {"order":75,"name":"","description":"","help":""},
    {"order":76,"name":"","description":"","help":""},
    {"order":77,"name":"","description":"","help":""},
    {"order":78,"name":"","description":"","help":""},
    {"order":79,"name":"","description":"","help":""},
    {"order":80,"name":"","description":"","help":""},
    {"order":81,"name":"","description":"","help":""},
    {"order":82,"name":"","description":"","help":""},
    {"order":83,"name":"","description":"","help":""},
    {"order":84,"name":"","description":"","help":""},
    {"order":85,"name":"","description":"","help":""},
    {"order":86,"name":"","description":"","help":""},
    {"order":87,"name":"","description":"","help":""},
    {"order":88,"name":"","description":"","help":""},
    {"order":89,"name":"","description":"","help":""},
    {"order":90,"name":"","description":"","help":""},
    {"order":91,"name":"","description":"","help":""},
    {"order":92,"name":"","description":"","help":""},
    {"order":93,"name":"","description":"","help":""},
    {"order":94,"name":"","description":"","help":""},
    {"order":95,"name":"","description":"","help":""},
    {"order":96,"name":"","description":"","help":""},
    {"order":97,"name":"","description":"","help":""},
    {"order":98,"name":"","description":"","help":""},
    {"order":99,"name":"","description":"","help":""},
    {"order":100,"name":"100_Cottonwood","description":"A raster function template.","help":"Cottonwood"},
    {"order":101,"name":"101_Willow","description":"A raster function template.","help":"Willow"},
    {"order":102,"name":"","description":"","help":""},
    {"order":103,"name":"","description":"","help":""},
    {"order":104,"name":"","description":"","help":""},
    {"order":105,"name":"","description":"","help":""},
    {"order":106,"name":"106_Cottonwood_willow","description":"A raster function template.","help":"Cottonwood / willow"},
    {"order":107,"name":"","description":"","help":""},
    {"order":108,"name":"","description":"","help":""},
    {"order":109,"name":"","description":"","help":""},
    {"order":110,"name":"","description":"","help":""},
    {"order":111,"name":"","description":"","help":""},
    {"order":112,"name":"","description":"","help":""},
    {"order":113,"name":"","description":"","help":""},
    {"order":114,"name":"114_Aspen","description":"A raster function template.","help":"Aspen"},
    {"order":115,"name":"115_Paper_birch","description":"A raster function template.","help":"Paper birch"},
    {"order":116,"name":"116_Balsam_poplar","description":"A raster function template.","help":"Balsam poplar"},
    {"order":117,"name":"117_Red_alder","description":"A raster function template.","help":"Red alder"},
    {"order":118,"name":"","description":"","help":""},
    {"order":119,"name":"","description":"","help":""},
    {"order":120,"name":"","description":"","help":""},
    {"order":121,"name":"","description":"","help":""},
    {"order":122,"name":"","description":"","help":""},
    {"order":123,"name":"","description":"","help":""},
    {"order":124,"name":"","description":"","help":""},
    {"order":125,"name":"","description":"","help":""},
    {"order":126,"name":"","description":"","help":""},
    {"order":127,"name":"","description":"","help":""},
    {"order":128,"name":"","description":"","help":""},
    {"order":129,"name":"","description":"","help":""},
    {"order":130,"name":"","description":"","help":""},
    {"order":131,"name":"","description":"","help":""},
    {"order":132,"name":"","description":"","help":""},
    {"order":133,"name":"","description":"","help":""},
    {"order":134,"name":"","description":"","help":""},
    {"order":135,"name":"","description":"","help":""},
    {"order":136,"name":"","description":"","help":""},
    {"order":137,"name":"","description":"","help":""},
    {"order":138,"name":"","description":"","help":""},
    {"order":139,"name":"","description":"","help":""},
    {"order":140,"name":"","description":"","help":""}
];

var map;
var CONUSImageServiceLayer;
var alaskaImageServiceLayer;

var CONUSSpeciesImageServiceLayer;
var alaskaSpeciesImageServiceLayer;

require([
    "esri/map", "esri/layers/ArcGISImageServiceLayer",
    "esri/layers/ImageServiceParameters", "dojo/parser", "dojo/dom",
    "esri/layers/RasterFunction", "esri/dijit/BasemapGallery", "dojox/layout/FloatingPane",
    "dojo/on", "dijit/registry",
    "esri/arcgis/utils",
    "dojo/domReady!",
    "dojo/ready",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane","dijit/TitlePane","dijit/form/Button"
], function(
    Map, ArcGISImageServiceLayer,
    ImageServiceParameters, parser, dom,
    RasterFunction,BasemapGallery,FloatingPane,on,registry
    ) {
    parser.parse();

    console.log("window width: " + window.innerWidth);

    map = new Map("map", {
        basemap: "gray",
        center: [-93.5, 36.972],
        zoom: 4
    });

    map.on("load", function () {
        console.log("Map load event");
        // Hook up jQuery
        $(document).ready(jQueryReady);
    });

    var conUSGroupServiceUrl = "http://204.236.162.90:6080/arcgis/rest/services/FIA_Atlas/CONUS_ForestGroupsWeb/ImageServer";
    var alaskaGroupServiceUrl = "http://204.236.162.90:6080/arcgis/rest/services/FIA_Atlas/Alaska_ForestGroups/ImageServer";

    var conUSSpeciesServiceUrl = "http://204.236.162.90:6080/arcgis/rest/services/FOREST_TYPES/conus_foresttypeALB/ImageServer";
    var alaskaSpeciesServiceUrl = "http://204.236.162.90:6080/arcgis/rest/services/FOREST_TYPES/Alaska_ForestTypesALB/ImageServer";

    var params = new ImageServiceParameters();
    params.noData = 0;
    CONUSImageServiceLayer = new ArcGISImageServiceLayer(conUSGroupServiceUrl, {
        imageServiceParameters: params,
        opacity: 0.9
    });
    map.addLayer(CONUSImageServiceLayer);

    alaskaImageServiceLayer = new ArcGISImageServiceLayer(alaskaGroupServiceUrl, {
        alaskaImageServiceLayer: params,
        opacity: 0.9
    });
    map.addLayer(alaskaImageServiceLayer);

    CONUSSpeciesImageServiceLayer = new ArcGISImageServiceLayer(conUSSpeciesServiceUrl, {
        imageServiceParameters: params,
        opacity: 0.9
    });
    map.addLayer(CONUSSpeciesImageServiceLayer);

    alaskaSpeciesImageServiceLayer = new ArcGISImageServiceLayer(alaskaSpeciesServiceUrl, {
        alaskaImageServiceLayer: params,
        opacity: 0.9
    });
    map.addLayer(alaskaSpeciesImageServiceLayer);

    //add the basemap gallery, in this case we'll display maps from ArcGIS.com including bing maps
    var basemapGallery = new BasemapGallery({
        showArcGISBasemaps: true,
        map: map
    }, "basemapGallery");
    basemapGallery.startup();

    basemapGallery.on("error", function(msg) {
        console.log("basemap gallery error:  ", msg);
    });

    var dendrogramButton = dijit.byId("dendrogramButton");
    console.log("digit button: ", dendrogramButton.label);
    dojo.connect(dendrogramButton, "onClick", function(evt){
        console.log("Dendrogram button clicked!");

//        if(cluster) {
//            if(document.getElementById("dendrogramPane").style.display === "none") {
//                document.getElementById("dendrogramPane").style.display = "block";
//                dendrogramButton.setAttribute("label", "Hide Dendrogram");
//            } else {
//                document.getElementById("dendrogramPane").style.display = "none";
//                dendrogramButton.setAttribute("label", "Show Dendrogram");
//            }
//        }else {
//            createDendrogram();
//            document.getElementById("dendrogramPane").style.display = "block";
//            dendrogramButton.setAttribute("label", "Hide Dendrogram");
//        }

        closeOpenWindows("dendrogram");

        if(cluster) {
            if(document.getElementById("dendrogramContainer").style.display === "none") {
                document.getElementById("dendrogramContainer").style.display = "block";
                dendrogramButton.setAttribute("label", "Hide Dendrogram");
                updateDendrogramTitle("ClusterView");
                if(currentSelectedNode) {
                    highlightSelections(currentSelectedNode);
                }
            } else {
                document.getElementById("dendrogramContainer").style.display = "none";
                dendrogramButton.setAttribute("label", "Show Dendrogram");
            }
        }else {
            createDendrogram();
            document.getElementById("dendrogramContainer").style.display = "block";
            dendrogramButton.setAttribute("label", "Hide Dendrogram");
            updateDendrogramTitle("ClusterView");
            if(currentSelectedNode) {
                highlightSelections(currentSelectedNode);
            }
        }
    });

    var listViewButton = dijit.byId("listButton");
    dojo.connect(listViewButton, "onClick", function(evt) {
        console.log("listButton clicked!");

        closeOpenWindows("listView");

        if(tree) {
            if(document.getElementById("listViewContainer").style.display === "none") {
                document.getElementById("listViewContainer").style.display = "block";
                listViewButton.setAttribute("label", "Hide List View");
                updateDendrogramTitle("ListView");
            } else {
                document.getElementById("listViewContainer").style.display = "none";
                listViewButton.setAttribute("label", "Show List View");
            }
        }

    });

    var legendButton = dijit.byId("legendButton");
    var legendDescPane;
//    dojo.connect(legendButton, "onClick", function(evt) {
//        console.log("legendButton clicked!");
//
//        closeOpenWindows("legendPane");
//
//        var legendDijit = dijit.byId("legendPane");
//        if(legendDijit) {
//            console.log("The legend panel already created!");
//        }else {
//            d3.select("#legendContainer").html('');
//            d3.select("#legendContainer").html('<div id="legendDesc" style="overflow:auto;width:100%; height: 100%;background-color: #1e4004"></div>');
//            legendDescPane = new FloatingPane({
//                title: "<b>Dendrogram Legend</b>",
//                resizable: false,
//                dockable: false,
//                closable: true,
//                style: "position:absolute;left:4px;bottom:140px;width:420;height:600px;z-Index:999;background-color: #1e4004;",
//                id: "legendPane"
//            }, dojo.byId("legendDesc"));
//            legendDescPane.startup();
//
//            //legendDescPane.setAttribute("style", "background-color:#1e4004");
////            legendDescPane.setAttribute("content", "<div style='background-color:#1e4004;'><img width='262' height='545' src='img/Legend3.png'> </div>");
//            legendDescPane.setAttribute("content", "<div style='background-color:#1e4004;'><img width='420' height='900' src='img/Legend3.png'> </div>");
//        }
//
//    });

    dojo.connect(legendButton, "onClick", function(evt) {
        console.log("legendButton clicked!");

        closeOpenWindows("legendPane");

        var legendDijit = dijit.byId("legendPane");
        if(legendDijit) {
            console.log("The legend panel already created!");
            if (legendDijit && legendDescPane) {
                legendDescPane.destroy();
                legendButton.setAttribute("label", "Show Legend");
            }
        }else {
            legendButton.setAttribute("label", "Hide Legend");

            d3.select("#legendContainer").html('');
            d3.select("#legendContainer").html('<div id="legendDesc" style="overflow:auto;width:100%; height: 100%;background-color: #1e4004"></div>');
            legendDescPane = new FloatingPane({
                title: "<b>Dendrogram Legend</b>",
                resizable: false,
                dockable: false,
                closable: false,
                style: "position:absolute;left:4px;bottom:145px;width:420px;height:500px;z-Index:999;background-color: #1e4004;",
                id: "legendPane"
            }, dojo.byId("legendDesc"));
            legendDescPane.startup();

            //legendDescPane.setAttribute("style", "background-color:#1e4004");
            legendDescPane.setAttribute("content", "<div style='background-color:#1e4004;'><img width='420' height='900' src='img/Legend3.png'> </div>");
        }

    });

    var descButton = dijit.byId("descButton");
    var descriptionPane;
    dojo.connect(descButton, "onClick", function(evt) {
        console.log("descButton clicked!");

        closeOpenWindows("forestTypeDescPane");

        var descDijit = dijit.byId("forestTypeDescPane");
        if(descDijit) {
            console.log("The description panel already created!");
            if (descDijit && descriptionPane) {
                descriptionPane.destroy();
                descButton.setAttribute("label", "Show Description");
            }

        }else {
            descButton.setAttribute("label", "Hide Description");

            d3.select("#descriptionContainer").html('');
            d3.select("#descriptionContainer").html('<div id="forestTypeDesc" style="overflow:auto;width:100%; height: 100%;background-color: #1e4004"></div>');
            descriptionPane = new FloatingPane({
                title: "<b>Description</b>",
                resizable: false,
                dockable: false,
                closable: false,
                style: "position:absolute;left:4px;bottom:145px;width:500px;height:536px;z-Index:999;",
                id: "forestTypeDescPane"
            }, dojo.byId("forestTypeDesc"));
            descriptionPane.startup();

            var descTextPart1 = '“Certain tree species are often found together in natural forest communities. Likewise, the associated understory vegetation, as well as the wildlife that depends upon it, often occurs in assemblages that are distinctive to the composition of the tree canopy.</br></br>';
            descTextPart1 += 'There are many different approaches to classifying forest communities. These classifications are useful to scientists and natural resource managers alike. However, they inevitably imply distinct boundaries, while real forest communities transition gradually from one to another, both across the landscape and over time. For this reason, classifications of forest communities evolve over time as our understanding of these communities changes.</br></br>';
            descTextPart1 += 'The accompanying chart identifies 140 forest types across the US. These can be aggregated into 28 groups of similar forest types for mapping. This forest community classification scheme is based upon the relative stocking of tree species within stands, reflecting the amount of available light, water, and soil nutrients each used."</br></br>';
            descTextPart1 += '<i>Eyre, F.H. ed. 1980. Forest cover types of the United States and Canada. Washington DC: Society of American Foresters; 148 p.</i>';

            descTextPart1 = "<div style='background-color:#1e4004;'><font size='4' color='white'>"  + descTextPart1 + "</font></div>";

            var descTextPart2 = '“The map depicts the distribution of FIA forest-type groups across the contiguous US. The cyan to violet palette represents softwood forest-type groups while the red to green palette represents hardwood forest-type groups. The distribution of forest types across the US is quite variable. The majority of hardwood forest types are found in the eastern US, from the Midwest to the Northeast, as well as west Texas and the Central Valley of California. Softwood forest types are found primarily in the Southeast and throughout the western US from the Rocky Mountains to the Pacific Northwest.”';
            descTextPart2 =  "<div style='background-color:#28411C;'></br></div><div style='background-color:#28411C;'><font size='4' color='yellow'>"  + descTextPart2 + "</font></div>";

            descriptionPane.setAttribute("style", "background-color:#1e4004");
            descriptionPane.setAttribute("content", descTextPart1);
        }
    });

    var dendrogramDescPane;
    var dendrogramDescButton = dijit.byId("dendrogramDescButton");
    dojo.connect(dendrogramDescButton, "onClick", function(evt) {
        console.log("dendrogramDescButton clicked!");

        var dendroDescDijit = dijit.byId("dendrogramDescPane");
        if(dendroDescDijit) {
            console.log("The description panel already created!");
        }else {
            d3.select("#dendrogramDescContainer").html('');
            d3.select("#dendrogramDescContainer").html('<div id="dendrogramDesc" style="overflow:auto;width:100%; height: 100%;background-color: #1e4004"></div>');
            dendrogramDescPane = new FloatingPane({
                title: "<b>Dendrogram Description</b>",
                resizable: false,
                dockable: false,
                closable: true,
                style: "position:absolute;top:50px;left:300px;width:330px;height:250px;z-Index:999;",
                id: "dendrogramDescPane"
            }, dojo.byId("dendrogramDesc"));
            dendrogramDescPane.startup();

            dendrogramDescPane.setAttribute("style", "background-color:#1e4004");
            dendrogramDescPane.setAttribute("content", "<div style='background-color:#1e4004;'><font size='4' color='white'>This dendrogram depicts the hierarchical relationship among forest types and forest-type groups, here arranged as a circle. The diagram is read from the center of the circle moving outward. All forests can first be divided into hardwood and softwood clusters. Within each of these major clusters, forests can be further subdivided into forest-type groups. Finally, forest-type groups can be broken down into individual forest types.</font></div>");
        }
    });

    var dendrogramDescPane2;
    var dendrogramDescButton2 = dijit.byId("dendrogramDescButton2");
    dojo.connect(dendrogramDescButton2, "onClick", function(evt) {
        console.log("dendrogramDescButton2 clicked!");

        var dendroDescDijit2 = dijit.byId("dendrogramDescPane2");
        if(dendroDescDijit2) {
            console.log("The description panel already created!");
        }else {
            d3.select("#dendrogramDescContainer2").html('');
            d3.select("#dendrogramDescContainer2").html('<div id="dendrogramDesc2" style="overflow:auto;width:100%; height: 100%;background-color: #1e4004"></div>');
            dendrogramDescPane2 = new FloatingPane({
                title: "<b>Dendrogram Description</b>",
                resizable: false,
                dockable: false,
                closable: true,
                style: "position:absolute;top:50px;left:300px;width:330px;height:250px;z-Index:999;",
                id: "dendrogramDescPane2"
            }, dojo.byId("dendrogramDesc2"));
            dendrogramDescPane2.startup();

            dendrogramDescPane2.setAttribute("style", "background-color:#1e4004");
            dendrogramDescPane2.setAttribute("content", "<div style='background-color:#1e4004;'><font size='4' color='white'>This dendrogram depicts the hierarchical relationship among forest types and forest-type groups, here arranged as a list. The diagram is read from left moving to the Right. All forests can first be divided into hardwood and softwood clusters. Within each of these major clusters, forests can be further subdivided into forest-type groups. Finally, forest-type groups can be broken down into individual forest types as shown on the right hand side of the list.</font></div>");
        }
    });


    function closeOpenWindows(keepOpen){
        // close other windows/panels

        if(keepOpen != "dendrogramDescPane") {
            var dendroDescDijit = dijit.byId("dendrogramDescPane");
            if (dendroDescDijit && dendrogramDescPane) {
                dendrogramDescPane.destroy();
            }
        }

        if(keepOpen != "dendrogramDescPane2") {
            var dendroDescDijit2 = dijit.byId("dendrogramDescPane2");
            if (dendroDescDijit2 && dendrogramDescPane2) {
                dendrogramDescPane2.destroy();
            }
        }

        if(keepOpen != "legendPane") {
            var legendDijit = dijit.byId("legendPane");
            if (legendDijit && legendDescPane) {
                legendDescPane.destroy();
                legendButton.setAttribute("label", "Show Legend");
            }
        }

        if (keepOpen != "forestTypeDescPane") {
            var descDijit = dijit.byId("forestTypeDescPane");
            if (descDijit && descriptionPane) {
                descriptionPane.destroy();
                descButton.setAttribute("label", "Show Description");
            }
        }

        if(keepOpen != "dendrogram") {
            if (cluster) {
                if (document.getElementById("dendrogramContainer").style.display === "block") {
                    document.getElementById("dendrogramContainer").style.display = "none";
                    dendrogramButton.setAttribute("label", "Show Dendrogram");
                }
            }
        }

        if(keepOpen != "listView") {
            if (tree) {
                if (document.getElementById("listViewContainer").style.display === "block") {
                    document.getElementById("listViewContainer").style.display = "none";
                    listViewButton.setAttribute("label", "Show List View");
                }
            }
        }
    }


    //
    // dendrogram code
    //
    var rotate = 0;
    var duration = 750;
    var panSpeed = 200;

    var panTimer;
    var root;

    var dendrogram_panel_w;
    var dendrogram_panel_h;

    var defaultGroupCircleSize = 5; //8;
    var defaultSpecieCircleSize = 2; //4;
    var defaultRootCircleSize = 6; //8;

    var defaultGroupTextFontSize = 7; //10;
    var defaultSpecieTextFontSize = 7; //10;
    var defaultTypeTextFontSize = 13; //20;

    var groupCircleSize = 5; //8;
    var specieCircleSize = 2; //4;
    var rootCircleSize = 6; //8;

    var groupTextFontSize = 7; //10;
    var specieTextFontSize = 7; //10;
    var typeTextFontSize = 13; //20;

    var zoomListener;
    var svgGroup;
    var diagonal;
    var cluster;


    var defaultLinkColor = "gray";
    var highlightLinkColor = "lightgray";
    var linkColor = defaultLinkColor;

    var currentSelectedNode;

    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            var translateX;
            var translateY;
            var translateCoords = d3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            var scaleX = translateCoords.scale[0];
            var scaleY = translateCoords.scale[1];
            var scale = zoomListener.scale();
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
        x = x * scale + dendrogram_panel_w / 2;
        y = y * scale + dendrogram_panel_h / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

    // Define the zoom function for the zoomable tree
    function zoom() {
        //console.log("zoom");
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

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
//                if (d.source.depth === 0) {
//                    return "white";
//                }
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
            .on("mouseover", overCircle)
            .on("mouseout", outCircle)
            .on('click', click);


        nodeEnter.append("svg:circle")
            .attr('class', 'nodeCircle')
            .attr('id', function(d){
                var order = 0;
                if(d.order)order = d.order;
                return 'C-' + d.depth + "-" + order;
            })
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
            .attr('class', 'nodeText')
            .attr('id', function(d){
                var order = 0;
                if(d.order)order = d.order;
                return 'T-' + d.depth + "-" + order;
            })
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
                return "white"; //"black";
            })
            //.attr("dy", ".31em")
            .attr("dy", function(d){
                if (d.depth === 1) {
                    return d.x < 180 ? "1.4em" : "-0.2em";
                }
                return ".31em";
            })
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

    function overCircle(d){
        //console.log("mouse over: ", d);
        if(d.depth <= 1)return;

        highlightNode(d, true);

    }
    function outCircle(d){
        //console.log("mouse out: ", d);
        if(d.depth <= 1)return;

        highlightNode(d, false);
    }
    function highlightNode(d, on) {
        var order = 0;
        if(d.order)order = d.order;
        var id_text = "T-" + d.depth + "-" + order;
        var text = d3.select(document.getElementById(id_text));
//        console.log("id: " + id_text);
//        console.log(text);

        var fontSize1 = 15, fontSize2 = 10;
        var color1 = "white", color2 = "white";
        var radius1, radius2;
        if (d.depth === 2) {
            fontSize2 = groupTextFontSize;
            fontSize1 = groupTextFontSize + 5;
            color1 = "white";
            color2 = "white";
            radius1 = groupCircleSize;
            radius2 = radius1 + 6;
        }
        if(d.depth === 3) {
            fontSize2 = specieTextFontSize;
            fontSize1 = specieTextFontSize + 7;
//            color1 = "black";
//            color2 = "black";
            color1 = "white";
            color2 = "white";
            radius1 = specieCircleSize;
            radius2 = radius1 + 2;
        }

        text.transition((on==true) ? 0:550)
            //.style("fill",(on==true) ? "#000" : "#777")
            .style("fill",(on==true) ? color1 : color2)
            .style("font-size",(on==true) ? fontSize1 + "px" : fontSize2 + "px")
            .style("stroke-width",((on==true) ? 2 : 0));


        id_text = "C-" + d.depth + "-" + order;
        var circ = d3.select(document.getElementById(id_text));
        circ.transition((on==true) ? 150:550)
            .attr("r", ((on==true) ? radius2 : radius1))
            .style("stroke",(on==true) ? "#000" : "#000");
            //.style("stroke-width",((on==true) ?1 :0));
    }


    function click(d) {
        //if (d3.event.defaultPrevented) return; // click suppressed
        console.log("click: ", d);

        currentSelectedNode = d;

        highlightSelections(d);
        highlightImageService(d);
        updateDendrogramTitle("ClusterView");
    }
    function highlightSelections(d) {
        var depth =  d.depth;
        var nodeColor = d.color;
        if (depth === 1) {
            nodeColor = highlightLinkColor;
        }
//        else if (depth === 0) {
//            nodeColor = defaultLinkColor;
//        }

        var links = svgGroup.selectAll("path.link");

        links.style("stroke",function(dd) {
            if (dd.source.depth === 0) {
                if (d.name === '') {
                    return highlightLinkColor;
                }
                return defaultLinkColor;
            }

            if (dd.source.name === d.name) {
                return nodeColor;
            }else {
                return defaultLinkColor;
            }
        });

        //console.log(links);
        // here is the hack version which shows how data is attached to an element
//        var paths = links[0];
//        for (var i=0; i<paths.length; i++) {
//            var link = paths[i];
//            //console.log(link);
//            var data = link.__data__;
//            if(data.source.depth === 0)continue;
//
//            if (data.source.name === d.name) {
//                link.style.stroke = nodeColor;
//            }else {
//                link.style.stroke = defaultLinkColor;
//            }
//        }
    }
    function highlightImageService(d){
        var depth =  d.depth;
        if (depth > 3)return;

        var rasterFunction1 = new RasterFunction();
        var rasterFunction2 = new RasterFunction();
        if(depth === 0) {
            CONUSSpeciesImageServiceLayer.setVisibility(false);
            alaskaSpeciesImageServiceLayer.setVisibility(false);

            if (!CONUSImageServiceLayer.visible) {
                CONUSImageServiceLayer.setVisibility(true);
            }
            rasterFunction1.functionName = groupFunctionNames[30].name;
            CONUSImageServiceLayer.setRenderingRule(rasterFunction1);

            rasterFunction2.functionName = alaskaGroupFunctionNames[30].name;
            alaskaImageServiceLayer.setRenderingRule(rasterFunction2);
            if(!alaskaImageServiceLayer.visible) {
                alaskaImageServiceLayer.setVisibility(true);
            }
            //document.getElementById("title").innerHTML = "Forest Cover Groups";
            currentSelectedForestTyeName = '';
            currentSelectedForestTyeColor = '';

        }else if (depth === 1) {
            CONUSSpeciesImageServiceLayer.setVisibility(false);
            alaskaSpeciesImageServiceLayer.setVisibility(false);

            var index = 28;
            if(d.name === 'Softwoods') {
                index = 29;
            }

            if (!CONUSImageServiceLayer.visible) {
                CONUSImageServiceLayer.setVisibility(true);
            }
            rasterFunction1.functionName = groupFunctionNames[index].name;
            CONUSImageServiceLayer.setRenderingRule(rasterFunction1);
            if(!alaskaImageServiceLayer.visible) {
                alaskaImageServiceLayer.setVisibility(true);
            }
            rasterFunction2.functionName = alaskaGroupFunctionNames[index].name;
            alaskaImageServiceLayer.setRenderingRule(rasterFunction2);

            //document.getElementById("title").innerHTML = "Forest Cover Groups <font size='5'>(Selected: </font><font size='5' color='#C0C0C0'>" + groupFunctionNames[index].help + "</font><font size='5'>)</font>";
            currentSelectedForestTyeName = groupFunctionNames[index].help;
            currentSelectedForestTyeColor = '#C0C0C0';

        }else if (depth === 2) {
            CONUSSpeciesImageServiceLayer.setVisibility(false);
            alaskaSpeciesImageServiceLayer.setVisibility(false);

            var i = d.order - 1;

            if (!CONUSImageServiceLayer.visible) {
                CONUSImageServiceLayer.setVisibility(true);
            }
            rasterFunction1.functionName = groupFunctionNames[i].name;
            CONUSImageServiceLayer.setRenderingRule(rasterFunction1);

            if(alaskaGroupFunctionNames[i].name != "") {
                if(!alaskaImageServiceLayer.visible) {
                    alaskaImageServiceLayer.setVisibility(true);
                }
                rasterFunction2.functionName = alaskaGroupFunctionNames[i].name;
                alaskaImageServiceLayer.setRenderingRule(rasterFunction2);
            } else {
                alaskaImageServiceLayer.setVisibility(false);
            }
            //document.getElementById("title").innerHTML = "Forest Cover Groups <font size='5'>(selected: <font size='5' color='" + groupColors[i].color + "'>" + groupFunctionNames[i].help + "</font><font size='5'>)</font>";
            currentSelectedForestTyeName = groupFunctionNames[i].help;
            currentSelectedForestTyeColor = groupColors[i].color;

        } else if (depth === 3) {
            CONUSImageServiceLayer.setVisibility(false);
            alaskaImageServiceLayer.setVisibility(false);

            var k = d.order - 1;
            if(speciesFunctionNames[k].name != "") {
                if (!CONUSSpeciesImageServiceLayer.visible) {
                    CONUSSpeciesImageServiceLayer.setVisibility(true);
                }
                rasterFunction1.functionName = speciesFunctionNames[k].name;
                CONUSSpeciesImageServiceLayer.setRenderingRule(rasterFunction1);
            }else {
                CONUSSpeciesImageServiceLayer.setVisibility(false);
            }

            if(alaskaSpeciesFunctionNames[k].name != "") {
                if(!alaskaSpeciesImageServiceLayer.visible) {
                    alaskaSpeciesImageServiceLayer.setVisibility(true);
                }
                rasterFunction2.functionName = alaskaSpeciesFunctionNames[k].name;
                alaskaSpeciesImageServiceLayer.setRenderingRule(rasterFunction2);
            } else {
                alaskaSpeciesImageServiceLayer.setVisibility(false);
            }

            //document.getElementById("title").innerHTML = "Forest Cover Groups <font size='5'>(selected: <font size='5' color='" + speciesFunctionNames[k].color + "'>" + speciesFunctionNames[k].help + "</font><font size='5'>)</font>";
            currentSelectedForestTyeName = speciesFunctionNames[k].help;
            currentSelectedForestTyeColor = speciesFunctionNames[k].color;

            console.log("speciesFunctionNames[k].name: " + speciesFunctionNames[k].name);
        }
    }

    var dendrogramPane;
    var currentSelectedForestTyeName = "";
    var currentSelectedForestTyeColor = "";

    function updateDendrogramTitle(viewType) {
        var title = "<b>Dendrogram</b>";
        if(viewType === 'ListView') {
            title =  "<b>Dendrogram List View</b>";
        }

        if(currentSelectedForestTyeName != '' && currentSelectedForestTyeColor != '') {
//            title += "<font size='5'> (selected: <font size='5' color='" + currentSelectedForestTyeColor + "'>" + currentSelectedForestTyeName + "</font><font size='5'>)</font>";
            title += " (selected: <font color='" + currentSelectedForestTyeColor + "'>" + currentSelectedForestTyeName + "</font>)";
        }

        if(viewType === 'ListView') {
            listViewPane.setAttribute("title", title);
        } else {
            dendrogramPane.setAttribute("title", title);
        }
    }

    function createDendrogramPane() {

// created a floating pane
//        dendrogramPane = new FloatingPane({
//            title: "Dendrogram",
//            resizable: true,
//            dockable: false,
//            closable: false,
//            style: "position:absolute;bottom:160px;left:10px;width:510px;height:555px;z-Index:999;",
//            id: "dendrogramPane"
//        }, dojo.byId("dendrogramContainer"));
//        dendrogramPane.startup();
//
//        on(dendrogramPane._resizeHandle, "resize", function (e) {
//            // Event handler
//            console.log("floating pane resize - recreate dendrogram");
//            createDendrogram();
//        });
//
//        document.getElementById("dendrogramPane").style.display = "none";

        dendrogramPane = registry.byId("dendrogramContainer");

        on(dendrogramPane._resizeHandle, "resize", function (e) {
            // Event handler
            console.log("floating pane resize - recreate dendrogram");
            createDendrogram();
        });

        document.getElementById("dendrogramContainer").style.display = "none";
    }

    function createDendrogram() {
        // size of the diagram
        dendrogram_panel_w = 500;
        dendrogram_panel_h = 500;

        if(cluster) {
            //remove cluster first
            d3.select("#dendrogram").html("");
            // or d3.select("g.parent").selectAll("*").remove();
        }

        var dendroNode = document.getElementById("dendrogram");
        if(dendroNode) {
            if(dendroNode.parentNode) {
                if (dendroNode.parentNode.parentNode) {
                    var styleW =  dendroNode.parentNode.parentNode.style.width;
                    var styleH =  dendroNode.parentNode.parentNode.style.height;

                    if(styleH.indexOf("px")>0 && styleW.indexOf("px")>0) {
                        dendrogram_panel_w = parseInt(styleW.substring(0,styleW.indexOf("px"))) - 3;
                        dendrogram_panel_h = parseInt(styleH.substring(0,styleH.indexOf("px"))) - 3;
                        console.log("dendrogram_panel_w: " +  dendrogram_panel_w + " dendrogram_panel_h: " + dendrogram_panel_h);
                    }
                }
            }
        }

        var ry = dendrogram_panel_h / 2;

        console.log("left pane w: " + dendrogram_panel_w  + " h: " + dendrogram_panel_h + " ry: " + ry);

        var dendrogram_size = (dendrogram_panel_w > dendrogram_panel_h)?dendrogram_panel_w:dendrogram_panel_h;
        if(dendrogram_size > 500) {
            var ds = Math.floor( (dendrogram_size - 500.0) / 100.0);
            console.log("ds: " + ds);

            groupCircleSize = defaultGroupCircleSize + ds;
            specieCircleSize = defaultSpecieCircleSize + ds/2.0;
            rootCircleSize = defaultRootCircleSize + ds;

            groupTextFontSize = defaultGroupTextFontSize + ds;
            specieTextFontSize = defaultSpecieTextFontSize + ds;
            typeTextFontSize = defaultTypeTextFontSize + ds;
        }

        cluster = d3.layout.cluster()
            .size([360, ry - 120])
            .sort(null);

        diagonal = d3.svg.diagonal.radial()
            .projection(function (d) {
                return [d.y, d.x / 180 * Math.PI];
            });

        var svg = d3.select("#dendrogram").append("div")
            .style("width", dendrogram_size + "px")
            .style("height", dendrogram_size + "px");

        // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
        zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

        var vis = svg.append("svg:svg")
            .attr("width", dendrogram_size)
            .attr("height", dendrogram_size)
            .call(zoomListener);

        // Append a group which holds all nodes and which the zoom Listener can act upon.
        svgGroup = vis.append("g");

        svgGroup.append("svg:path")
            .attr("class", "arc-non-white")
            .attr("d", d3.svg.arc().innerRadius(ry - 120).outerRadius(ry).startAngle(0).endAngle(2 * Math.PI));


        d3.json("data/forest_species.json", function (json) {
            update(json)
        });

        updateDendrogramTitle("ClusterView");
    }

    function jQueryReady(){
        createDendrogramPane();
        //createDendrogramPane0();

        setupListView();
        document.getElementById("listViewContainer").style.display = "none";
    }

    // to be removed
    function createDendrogramPane0() {
        // size of the diagram
        dendrogram_panel_w = 500;
        dendrogram_panel_h = 500;

        var dendroNode = document.getElementById("dendrogram");
        if(dendroNode) {
            if(dendroNode.parentNode) {
                if (dendroNode.parentNode.parentNode) {
                    var styleW =  dendroNode.parentNode.parentNode.style.width;
                    var styleH =  dendroNode.parentNode.parentNode.style.height;

                    if(styleH.indexOf("px")>0 && styleW.indexOf("px")>0) {
                        dendrogram_panel_w = parseInt(styleW.substring(0,styleW.indexOf("px"))) - 3;
                        dendrogram_panel_h = parseInt(styleH.substring(0,styleH.indexOf("px"))) - 3;
                        console.log("dendrogram_panel_w: " +  dendrogram_panel_w + " dendrogram_panel_h: " + dendrogram_panel_h);
                    }
                }
            }
        }

        var ry = dendrogram_panel_h / 2;

        console.log("left pane w: " + dendrogram_panel_w  + " h: " + dendrogram_panel_h + " ry: " + ry);

        var dendrogram_size = (dendrogram_panel_w > dendrogram_panel_h)?dendrogram_panel_w:dendrogram_panel_h;

        cluster = d3.layout.cluster()
            .size([360, ry - 120])
            .sort(null);

        diagonal = d3.svg.diagonal.radial()
            .projection(function (d) {
                return [d.y, d.x / 180 * Math.PI];
            });

        var svg = d3.select("#dendrogram").append("div")
            .style("width", dendrogram_size + "px")
            .style("height", dendrogram_size + "px");

        // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
        zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

        var vis = svg.append("svg:svg")
            .attr("width", dendrogram_size)
            .attr("height", dendrogram_size)
            .call(zoomListener);

        // Append a group which holds all nodes and which the zoom Listener can act upon.
        svgGroup = vis.append("g");

        svgGroup.append("svg:path")
            .attr("class", "arc")
            .attr("d", d3.svg.arc().innerRadius(ry - 120).outerRadius(ry).startAngle(0).endAngle(2 * Math.PI));


        d3.json("data/forest_species.json", function (json) {
            update(json)
        });
    }



//
// functions for List View of the forest dendrogram.
//

    var listViewPane;

    var groupCircleSizeListView = 14;
    var specieCircleSizeListView = 5;
    var rootCircleSizeListView = 0; //8;

    var groupTextFontSizeListView = 15;
    var specieTextFontSizeListView = 10;
    var typeTextFontSizeListView = 20;

    var tree;
    var baseSvgListView;
    var svgGroupListView;
    var rootListView;
    var zoomListenerListView;
    var listViewerHeight = 3600;
    var listViewerWidth = 500;

    // Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;

    function clickListView(d) {
        //if (d3.event.defaultPrevented) return; // click suppressed
        //console.log("click list view: ", d);
        currentSelectedNode = d;

        highlightImageService(d);
        updateDendrogramTitle("ListView");
    }

    function overCircleListView(d){
        //console.log("mouse over: ", d);
        if(d.depth <= 1)return;

        highlightNodeListView(d, true);

    }
    function outCircleListView(d){
        //console.log("mouse out: ", d);
        if(d.depth <= 1)return;

        highlightNodeListView(d, false);
    }
    function highlightNodeListView(d, on) {
        var order = 0;
        if(d.order)order = d.order;
        var id_text = "LT-" + d.depth + "-" + order;
        var text = d3.select(document.getElementById(id_text));
        //console.log("id: " + id_text + " " + text);

        var fontSize1 = 15, fontSize2 = 10;
        var color1 = "white", color2 = "white";
        var radius1, radius2;

        if (d.depth === 2) {
            fontSize2 = groupTextFontSizeListView;
            fontSize1 = groupTextFontSizeListView + 5;
            color1 = "white";
            color2 = "white";
            radius1 = groupCircleSizeListView;
            radius2 = radius1 + 6;
        }
        if(d.depth === 3) {
            fontSize2 = specieTextFontSizeListView;
            fontSize1 = specieTextFontSizeListView + 7;
            color1 = "white";
            color2 = "white";
            radius1 = specieCircleSizeListView;
            radius2 = radius1 + 2;
        }

        text.transition((on==true) ? 0:550)
            //.style("fill",(on==true) ? "#000" : "#777")
            //.style("fill",(on==true) ? color1 : color2)
            .style("font-size",(on==true) ? fontSize1 + "px" : fontSize2 + "px")
            .style("stroke-width",((on==true) ? 2 : 0));


        id_text = "LET-" + d.depth + "-" + order;
        text = d3.select(document.getElementById(id_text));
        text.transition((on==true) ? 0:550)
            //.style("fill",(on==true) ? "#000" : "#777")
            //.style("fill",(on==true) ? color1 : color2)
            .style("font-size",(on==true) ? fontSize1 + "px" : fontSize2 + "px")
            .style("stroke-width",((on==true) ? 2 : 0));


        id_text = "LC-" + d.depth + "-" + order;
        var circ = d3.select(document.getElementById(id_text));
        circ.transition((on==true) ? 150:550)
            .attr("r", ((on==true) ? radius2 : radius1));
            //.style("stroke",(on==true) ? "#000" : "#000");
            //.style("stroke-width",((on==true) ?1 :0));

        console.log("id: " + id_text + " " + radius1 + " " + radius2);

    }

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

    function panListView(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            var translateX;
            var translateY;
            var translateCoords = d3.transform(svgGroupListView.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            var scaleX = translateCoords.scale[0];
            var scaleY = translateCoords.scale[1];
            var scale = zoomListenerListView.scale();
            svgGroupListView.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListenerListView.scale(zoomListenerListView.scale());
            zoomListenerListView.translate([translateX, translateY]);
            panTimer = setTimeout(function() {
                panListView(domNode, speed, direction);
            }, 50);
        }
    }

    function zoomListView() {
        console.log("zoom ListView");
        svgGroupListView.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    function setupListView() {

        listViewPane = registry.byId("listViewContainer");

        tree = d3.layout.tree()
            .size([listViewerHeight, listViewerWidth]);

        // define the zoomListenerListView which calls the zoom function on the "zoom" event constrained within the scaleExtents
        zoomListenerListView = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoomListView);

        // define the baseSvg, attaching a class for styling and the zoomListenerListView
        baseSvgListView = d3.select("#dendrogramListView").append("svg")
            .attr("width", listViewerWidth)
            .attr("height", listViewerHeight)
            .attr("class", "overlay")
            .call(zoomListenerListView);

        // Append a group which holds all nodes and which the zoom Listener can act upon.
        svgGroupListView = baseSvgListView.append("g");

        d3.json("data/forest_species.json", function (json) {
            handleListViewData(json)
        });
    }

    function handleListViewData(treeData) {

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

        // Define the root
        rootListView = treeData;
        rootListView.x0 = listViewerHeight / 2;
        rootListView.y0 = 0;

        rootListView.x0 = 50;
        rootListView.y0 = 120;

        // Layout the tree initially and center on the root node.
        createListView(rootListView);

        var translateX = 120;
        var translateY = 50;
        var scale = 1;

        svgGroupListView.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
        //d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
        zoomListenerListView.scale(zoomListenerListView.scale());
        zoomListenerListView.translate([translateX, translateY]);

        document.getElementById("listViewContainer").style.display = "none";
        updateDendrogramTitle("ListView");
    }

    function createListView(source){
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
        childCount(0, source);
        var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line
        tree = tree.size([newHeight, listViewerWidth]);

        tree.separation(function separation(a, b) {
            //return (a.parent == b.parent ? 1 : 2) / a.depth;
            return (a.parent == b.parent ? 0.1 : 0.2);
        });

        // Compute the new tree layout.
        var nodes = tree.nodes(source).reverse();

        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function(d) {
            d.y = (d.depth * (maxLabelLength * 0.8)); //maxLabelLength * 10px
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        });

        // Update the nodes…
        var node = svgGroupListView.selectAll("g.node")
            .data(nodes);

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                //console.log("transform y:  " + source.y0 + " x: " + source.x0);
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on("mouseover", overCircleListView)
            .on("mouseout", outCircleListView)
            .on('click', clickListView);

        nodeEnter.append("circle")
            .attr('class', 'nodeCircle')
            .attr('id', function(d){
                var order = 0;
                if(d.order)order = d.order;
                return 'LC-' + d.depth + "-" + order;
            })
            .attr("r", function(d){
                if (d.depth == 0) {
                    //todo, if we want to show the root, we need to increase the size of the root circle
                    return rootCircleSizeListView;
                }
                else if (d.depth === 1) {
                    return 0;
                }
                else if (d.depth === 2) {
                    return groupCircleSizeListView;
                }
                return specieCircleSizeListView;
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

        // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr("x", function(d) {
                if (d.depth === 2) {
                    return -0.5;
                }
                return d.children || d._children ? -10 : 10;
            })
            .attr('id', function(d){
                var order = 0;
                if(d.order)order = d.order;
                return 'LT-' + d.depth + "-" + order;
            })
            .attr("font-size", function(d){
                if (d.depth === 1) {
                    return typeTextFontSizeListView;
                } else if (d.depth === 2) {
                    return groupTextFontSizeListView;
                }
                return specieTextFontSizeListView;
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

        // extra text layer for alias of level 2
        nodeEnter.append("text")
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr('id', function(d){
                var order = 0;
                if(d.order)order = d.order;
                return 'LET-' + d.depth + "-" + order;
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
                return groupTextFontSizeListView - 2;
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


        // create two vertical bars by adding a rect to each level node in the tree
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
                    //console.log(d);
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
                    //console.log(d);
                    var w = d.children.length * 22;
                    return w + 30;
                }
                return 0;
            });

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
            .attr("x", -70)
            .attr("y", 10)
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


        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Fade the text in
        nodeUpdate.select("text")
            .style("fill-opacity", 1);

    }
});
