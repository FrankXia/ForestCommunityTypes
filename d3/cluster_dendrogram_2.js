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
    {"order":16,"color":"#44C8F5","name":"16_Shortleaf_pine","description":"A raster function template.","help":"Shortleaf pine"},
    {"order":17,"color":"#44C8F5","name":"17_Virginia_pine","description":"A raster function template.","help":"Virginia pine"},
    {"order":18,"color":"#44C8F5","name":"18_Sand_pine","description":"A raster function template.","help":"Sand pine"},
    {"order":19,"color":"#44C8F5","name":"19_Table_mountain_pine","description":"A raster function template.","help":"Table Mountain pine"},
    {"order":20,"color":"#44C8F5","name":"20_Pond_pine","description":"A raster function template.","help":"Pond pine"},
    {"order":21,"color":"#44C8F5","name":"21_Pitch_pine","description":"A raster function template.","help":"Pitch pine"},
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
    {"order":45,"color":"#17479E","name":"45_Alaska_mountain_cedar","description":"A raster function template.","help":"Alaska-yellow-cedar"},
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
    {"order":72,"color":"#ED1B2F","name":"72_Loblolly_pine_hardwood","description":"A raster function template.","help":"Loblolly pine / hardwood"},
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
    {"order":83,"color":"#F7941E","name":"82_Sweetgum_yellow_poplar","description":"A raster function template.","help":"Bur oak"},
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
    "esri/layers/RasterFunction", "esri/dijit/BasemapGallery",
    "esri/layers/ArcGISTiledMapServiceLayer",

    "esri/arcgis/utils",
    "dojo/domReady!",
    "dojo/ready",
    "dijit/layout/BorderContainer","dojox/layout/FloatingPane",
    "dijit/layout/ContentPane","dijit/TitlePane"
], function(
    Map, ArcGISImageServiceLayer,
    ImageServiceParameters, parser, dom,
    RasterFunction, BasemapGallery, ArcGISTiledMapServiceLayer
    ) {
    parser.parse();

    console.log("window width: " + window.innerWidth);

    dom.byId("dentrogram").style.width= window.innerWidth * 0.36+"px";
    console.log("left pane width: " + window.innerWidth * 0.36 + " " + dom.byId("dentrogram").style.width);

    map = new Map("map", {
        center: [-93.5, 36.972],
        zoom: 4
    });

    var baseUrl = "http://tiles4.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Dark_Gray_Base_Beta/MapServer/";
    var myLayer = new ArcGISTiledMapServiceLayer(baseUrl);
    map.addLayer(myLayer);

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

    var groupCircleSize = 12;
    var specieCircleSize = 4;
    var rootCircleSize = 8;

    var groupTextFontSize = 10;
    var specieTextFontSize = 10;
    var typeTextFontSize = 20;

    var zoomListener;
    var svgGroup;
    var diagonal;
    var cluster;


    var defaultLinkColor = "lightgray";
    var highlightLinkColor = "gray";
    var linkColor = defaultLinkColor;

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
                return "black";
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

        if (d.depth === 2) {
            fontSize2 = groupTextFontSize;
            fontSize1 = groupTextFontSize + 7;
            color1 = "white";
            color2 = "white";
        }
        if(d.depth === 3) {
            fontSize2 = specieTextFontSize;
            fontSize1 = specieTextFontSize + 7;
            color1 = "black";
            color2 = "black";
        }

        text.transition((on==true) ? 0:550)
            //.style("fill",(on==true) ? "#000" : "#777")
            .style("fill",(on==true) ? color1 : color2)
            .style("font-size",(on==true) ? fontSize1 + "px" : fontSize2 + "px")
            .style("stroke-width",((on==true) ? 2 : 0));


        id_text = "C-" + d.depth + "-" + order;
        var circ = d3.select(document.getElementById(id_text));
        circ.transition((on==true) ? 150:550)
            .style("stroke",(on==true) ? "#000" : "#000")
            .style("stroke-width",((on==true) ?1 :0));
    }


    function click(d) {
        if (d3.event.defaultPrevented) return; // click suppressed
        console.log("click: ", d);

        highlightSelections(d);
        highlightImageService(d);
    }
    function highlightSelections(d) {
        var depth =  d.depth;
        var nodeColor = d.color;
        if (depth === 1) {
            nodeColor = highlightLinkColor;
        } else if (depth === 0) {
            nodeColor = defaultLinkColor;
        }

        var links = svgGroup.selectAll("path.link");

        links.style("stroke",function(dd) {
            if (dd.source.depth === 0) {
                return "white";
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
            document.getElementById("title").innerHTML = "Forest Cover Groups";

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

            document.getElementById("title").innerHTML = "Forest Cover Groups <font size='5'>(Selected: </font><font size='5' color='#C0C0C0'>" + groupFunctionNames[index].help + "</font><font size='5'>)</font>";

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
            document.getElementById("title").innerHTML = "Forest Cover Groups <font size='5'>(selected: <font size='5' color='" + groupColors[i].color + "'>" + groupFunctionNames[i].help + "</font><font size='5'>)</font>";

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
            document.getElementById("title").innerHTML = "Forest Cover Groups <font size='5'>(selected: <font size='5' color='" + speciesFunctionNames[k].color + "'>" + speciesFunctionNames[k].help + "</font><font size='5'>)</font>";

        }
    }

    function jQueryReady(){

        // size of the diagram
        dendrogram_panel_w = $( window ).width() * 0.35 - 20;
        dendrogram_panel_h = $( window ).height() * 0.90;
        var ry = dendrogram_panel_h / 2;
        var dendrogram_size = (dendrogram_panel_w > dendrogram_panel_h)?dendrogram_panel_w:dendrogram_panel_h;

        console.log("left pane w: " + dendrogram_panel_w  + " h: " + dendrogram_panel_h + " ry: " + ry + " dendrogram_size: " + dendrogram_size);


        cluster = d3.layout.cluster()
            .size([360, ry - 120])
            .sort(null);

        diagonal = d3.svg.diagonal.radial()
            .projection(function (d) {
                return [d.y, d.x / 180 * Math.PI];
            });

        var svg = d3.select("#dentrogram").append("div")
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
});