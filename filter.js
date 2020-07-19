var list_of_ops = [
    {"name": "Haze", "rarity": 4, "tags": ["DPS", "Debuff", "Caster", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_50_i.png"},
    {"name": "Gitano", "rarity": 4, "tags": ["AoE", "Caster", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_49_i.png"},
    {"name": "Lava", "rarity": 3, "tags": ["AoE", "Caster", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_70_i.png"},
    {"name": "Steward", "rarity": 3, "tags": ["DPS", "Caster", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_65_i.png"},
    {"name": "Durin", "rarity": 2, "tags": ["Starter", "Caster", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_80_i.png"},
    {"name": "12F", "rarity": 2, "tags": ["Starter", "Caster", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_78_i.png"},
    {"name": "Nearl", "rarity": 5, "tags": ["Defense", "Healing", "Defender", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_12_i.png"},
    {"name": "Liskarm", "rarity": 5, "tags": ["Defense", "DPS", "Defender", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_19_i.png"},
    {"name": "Croissant", "rarity": 5, "tags": ["Defense", "Shift", "Defender", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_14_i.png"},
    {"name": "Vulcan", "rarity": 5, "tags": ["Survival", "Defense", "DPS", "Defender", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_37_i.png"},
    {"name": "Matterhorn", "rarity": 4, "tags": ["Defense", "Defender", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_47_i.png"},
    {"name": "Cuora", "rarity": 4, "tags": ["Defense", "Defender", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_51_i.png"},
    {"name": "Gummy", "rarity": 4, "tags": ["Defense", "Healing", "Defender", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_46_i.png"},
    {"name": "Beagle", "rarity": 3, "tags": ["Defense", "Defender", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_68_i.png"},
    {"name": "Noir Corne", "rarity": 2, "tags": ["Starter", "Defender", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_82_i.png"},
    {"name": "Indra", "rarity": 5, "tags": ["DPS", "Survival", "Guard", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_39_i.png"},
    {"name": "Specter", "rarity": 5, "tags": ["AoE", "Survival", "Guard", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_28_i.png"},
    {"name": "Dobermann", "rarity": 4, "tags": ["DPS", "Support", "Guard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_40_i.png"},
    {"name": "Matoimaru", "rarity": 4, "tags": ["Survival", "DPS", "Guard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_60_i.png"},
    {"name": "Frostleaf", "rarity": 4, "tags": ["Slow", "DPS", "Guard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_44_i.png"},
    {"name": "Estelle", "rarity": 4, "tags": ["AoE", "Survival", "Guard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_61_i.png"},
    {"name": "Mousse", "rarity": 4, "tags": ["DPS", "Guard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_58_i.png"},
    {"name": "Melantha", "rarity": 3, "tags": ["DPS", "Survival", "Guard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_67_i.png"},
    {"name": "Castle-3", "rarity": 1, "tags": ["Support", "Robot", "Guard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_83_i.png"},
    {"name": "Ptilopsis", "rarity": 5, "tags": ["Healing", "Support", "Medic", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_16_i.png"},
    {"name": "Silence", "rarity": 5, "tags": ["Healing", "Medic", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_17_i.png"},
    {"name": "Warfarin", "rarity": 5, "tags": ["Healing", "Support", "Medic", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_36_i.png"},
    {"name": "Myrrh", "rarity": 4, "tags": ["Healing", "Medic", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_45_i.png"},
    {"name": "Perfumer", "rarity": 4, "tags": ["Healing", "Medic", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_53_i.png"},
    {"name": "Hibiscus", "rarity": 3, "tags": ["Healing", "Medic", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_71_i.png"},
    {"name": "Ansel", "rarity": 3, "tags": ["Healing", "Medic", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_66_i.png"},
    {"name": "Lancet-2", "rarity": 1, "tags": ["Healing", "Robot", "Medic", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_84_i.png"},
    {"name": "Blue Poison", "rarity": 5, "tags": ["DPS", "Sniper", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_29_i.png"},
    {"name": "Platinum", "rarity": 5, "tags": ["DPS", "Sniper", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_31_i.png"},
    {"name": "Meteorite", "rarity": 5, "tags": ["AoE", "Debuff", "Sniper", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_20_i.png"},
    {"name": "Provence", "rarity": 5, "tags": ["DPS", "Sniper", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_30_i.png"},
    {"name": "Firewatch", "rarity": 5, "tags": ["DPS", "Nuker", "Sniper", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_21_i.png"},
    {"name": "Jessica", "rarity": 4, "tags": ["DPS", "Survival", "Sniper", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_59_i.png"},
    {"name": "Meteor", "rarity": 4, "tags": ["DPS", "Debuff", "Sniper", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_57_i.png"},
    {"name": "Shirayuki", "rarity": 4, "tags": ["AoE", "Slow", "Sniper", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_48_i.png"},
    {"name": "Kroos", "rarity": 3, "tags": ["DPS", "Sniper", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_69_i.png"},
    {"name": "Adnachiel", "rarity": 3, "tags": ["DPS", "Sniper", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_76_i.png"},
    {"name": "Rangers", "rarity": 2, "tags": ["Starter", "Sniper", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_79_i.png"},
    {"name": "Project Red", "rarity": 5, "tags": ["Fast-Redeploy", "Crowd-Control", "Specialist", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_13_i.png"},
    {"name": "Cliffheart", "rarity": 5, "tags": ["Shift", "DPS", "Specialist", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_24_i.png"},
    {"name": "Manticore", "rarity": 5, "tags": ["DPS", "Survival", "Specialist", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_34_i.png"},
    {"name": "FEater", "rarity": 5, "tags": ["Shift", "Slow", "Specialist", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_22_i.png"},
    {"name": "Gravel", "rarity": 4, "tags": ["Fast-Redeploy", "Defense", "Specialist", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_55_i.png"},
    {"name": "Rope", "rarity": 4, "tags": ["Shift", "Specialist", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_56_i.png"},
    {"name": "Shaw", "rarity": 4, "tags": ["Shift", "Specialist", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_41_i.png"},
    {"name": "Mayer", "rarity": 5, "tags": ["Summon", "Crowd-Control", "Supporter", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_33_i.png"},
    {"name": "Pramanix", "rarity": 5, "tags": ["Debuff", "Supporter", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_23_i.png"},
    {"name": "Istina", "rarity": 5, "tags": ["Slow", "DPS", "Supporter", "Ranged", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_26_i.png"},
    {"name": "Earthspirit", "rarity": 4, "tags": ["Slow", "Supporter", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_54_i.png"},
    {"name": "Orchid", "rarity": 3, "tags": ["Slow", "Supporter", "Ranged"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_74_i.png"},
    {"name": "Zima", "rarity": 5, "tags": ["DP-Recovery", "Support", "Vanguard", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_25_i.png"},
    {"name": "Texas", "rarity": 5, "tags": ["DP-Recovery", "Crowd-Control", "Vanguard", "Melee", "Senior Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_15_i.png"},
    {"name": "Scavenger", "rarity": 4, "tags": ["DP-Recovery", "DPS", "Vanguard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_43_i.png"},
    {"name": "Vigna", "rarity": 4, "tags": ["DPS", "DP-Recovery", "Vanguard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_42_i.png"},
    {"name": "Fang", "rarity": 3, "tags": ["DP-Recovery", "Vanguard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_72_i.png"},
    {"name": "Vanilla", "rarity": 3, "tags": ["DP-Recovery", "Vanguard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_73_i.png"},
    {"name": "Plume", "rarity": 3, "tags": ["DPS", "DP-Recovery", "Vanguard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_75_i.png"},
    {"name": "Yato", "rarity": 2, "tags": ["Starter", "Vanguard", "Melee"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_81_i.png"},
    {"name": "Exusiai", "rarity": 6, "tags": ["DPS", "Sniper", "Ranged", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_2_i.png"},
    {"name": "Siege", "rarity": 6, "tags": ["DP-Recovery", "DPS", "Vanguard", "Melee", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_6_i.png"}, //
    {"name": "Ifrit", "rarity": 6, "tags": ["AoE", "Debuff", "Caster", "Ranged", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_3_i.png"},
    {"name": "Shining", "rarity": 6, "tags": ["Healing", "Support", "Medic", "Ranged", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_7_i.png"},
    {"name": "Nightingale", "rarity": 6, "tags": ["Healing", "Support", "Medic", "Ranged", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_9_i.png"},
    {"name": "Hoshiguma", "rarity": 6, "tags": ["Defense", "DPS", "Defender", "Melee", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_1_i.png"},
    {"name": "Saria", "rarity": 6, "tags": ["Defense", "Healing", "Support", "Defender", "Melee", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_5_i.png"},
    {"name": "SilverAsh", "rarity": 6, "tags": ["DPS", "Support", "Guard", "Melee", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_4_i.png"}
];

var list_of_tag_combinations = [
    {"combination": ["guard"]}, {"combination": ["guard", "melee"]}, {"combination": ["guard", "survival", "melee"]}
]

/** 
* Checks which filters have been selected and returns them in a list.
* 
* @return {boolean}  Returns true if tag is in array.
*/
function get_filters() {
    console.log("Get filters")
    var filters = [];
    var collection = document.getElementsByClassName("active");
    var l = collection.length;
    for (i = 0; i < l; i++) {
        filters.push(collection[i].id);
    }
    console.log(filters)
    return filters;
};


/** 
* Reset all filters.
* 
* @return {boolean}  Returns true if tag is in array.
*/
function refresh_div() {
    console.log("Refresh tags.")
    var collection = document.getElementsByClassName("active");
    // var l = collection.length;

    // for (i = 0; i < l; i++) {
    //     collection[i].classList.remove("active");
    // }
    while (collection[0]) {
        collection[0].classList.remove("active");
    }
    document.getElementById("content-results").innerHTML = "";
};


/** 
* Mark div with active class on click/unclick. 
* 
*/
function click_div(id) {
    var element = document.getElementById(id);

    if (element.classList.contains("active")) {
        element.classList.remove("active");

    } else {
        element.classList.add("active")
    }
};


/** 
* Checks if operator matches one of the passed tags. Loops through filter_tags
* until at least one tag matches and returns true.
* 
* @param  {object} operator The operator object to check
* @param  {array} filter_tags The list of filters to check against
* @return {boolean} bool Returns true if at least one tag matches
*/
function check_tags(operator, filter_tags) {
    console.log("Checking tags")
    var bool = filter_tags.some(r=> operator.tags.includes(r));
    console.log(bool)
    return bool;
};


/** 
* Returns ops that match the filter tags.
* 
* @param  {array} filter_tags list of tags to search for
* @return {array} result list of ops that match at least one filter tag
*/
function get_ops(filter_tags) {
    console.log("Getting Operators")
    result = [];
    list_of_ops.forEach(function(ops) {
        console.log("Checking " + ops.name);
        if (check_tags(ops, filter_tags)) {
            console.log("Pushing operator to result[]")
            result.push(ops);
        }
    })
    console.log(result)
    return result;
};


/**
 * Returns TRUE if the first specified array contains all elements
 * from the second one. FALSE otherwise.
 *
 * @param {array} superset
 * @param {array} subset
 *
 * @returns {boolean}
 */
function arrayContainsArray (superset, subset) {
    console.log("Comparing tags...")
    if (0 === subset.length) {
        console.log("Error: Subset longer than superset.")
        return false;
    }
    return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
    });
}


/**
 * Assigns operators to each tag combination. Removes tag combinations with
 * empty operator array at the end.
 *
 * @param {array} filter_combinations Tag combinations
 * @param {array} operators Array with operators
 *
 * @returns {array} returns an array that contains a dictionary with 
 * tag combinations and operators that match these tags
 */
function intersection(filter_combinations, operators) {
    console.log("Ordering tag combinations and operators...")
    var sorted_operators = new Object();
    // sorted[{'tags': 'sniper', 'operators': [meteorite, Exusiai,...]},
    //           {'tags': 'caster', 'operators': [haze, ...]}]
    var sorted = [];
    var ele;
    var ops;
    for (ele of filter_combinations) {
        sorted.push({"tags" : ele, "operators" : []});
    }

    for (ele of sorted) {
        for (ops of operators) {
            if (arrayContainsArray(ops.tags, ele["tags"])) {
                console.log(ele["tags"] + " is a subset of " + ops.name)
                ele["operators"].push(ops)
            }
        }
    }

    //get rid of empty combinations
    var i = sorted.length
    while (i--) {
        if (sorted[i]['operators'].length < 1) { 
            sorted.splice(i, 1);
        } 
    }

    console.log(sorted)

    return sorted
};


/** 
* Create a list of user input combinations
*/
function create_result_list(input) {
    console.log("Creating tag combinations...")
    var result = [];
    var f = function(prefix=[], array) {
    for (var i = 0; i < array.length; i++) {
        result.push([...prefix, array[i]]);
        f([...prefix, array[i]], array.slice(i + 1));
        }
    }
    f('', input);
    console.log("Tag combinations: " + result)

    return result;
}


function sort_result_list(array) {
    //sort array based on longest tag combination first
    array.sort((a, b) => b["tags"].length - a["tags"].length);
    console.log(array)
    //sort operators based on highest rarity first
    let tag_combination;
    for (tag_combination of array) {
        console.log("Loop: " + tag_combination)
        tag_combination["operators"].sort((a, b) => b["rarity"] - a["rarity"]);
    }

    return array
}


function create_HTML_content(array) {
    let ops_tag;
    let ops;
    let s = "";

    //loop through tag combinations
    for (ops_tag of array) { 
        s += "<div class=\"content-results-section-header\"><h3>" + ops_tag["tags"] + "</h3></div>"; //generate section header and section
        s += "<div class=\"content-results-section\">";

        //loop through ops for each tag combination
        for (ops of ops_tag["operators"]) {
            //generate content-results-operator, content-results-operator-img and content-results-operator-name
            s += "<div class=\"content-results-operator\" style=\"";
            switch (ops['rarity']) {
                case 6:
                    s += "background-color:#FF5733\"";
                    break;
                case 5:
                    s += "background-color:#E3983F\"";
                    break;
                case 4:
                    s += "background-color:#4A73AD\"";
                    break;
                case 3:
                    s += "background-color:#57BF7A\"";
                    break;
                case 2:
                    s += "background-color:#878b91\"";
                    break;
                default:
                    s += "background-color:#F0F4F2\"";
                    break;
            }
            s += "><div class=\"content-results-operator-img\"><img src=\"" + ops['img-url'] + "\"></div>"
            s += "<div class=\"content-results-operator-name\">" + ops['name'] + "</div></div>"
        }
        s += "</div>"         //close div
    }
    console.log(s);

    return s
}

/** 
* Start of script when user presses submit
*/
function start() {
    //get active filters from divs
    var filter_input = get_filters();
    if (filter_input.length > 5 || filter_input.length < 1) {
        console.log("Error: Invalid number of tags chosen.")
        alert('Please choose up to 5 tags.');
        refresh_div();
    } else {
        console.log(filter_input);

        //get list of ops that fit the filter
        var operators = get_ops(filter_input);

        //get list of tag combinations
        var input_combinations = create_result_list(filter_input);

        //asign operators to tag combinations
        var sorted = intersection(input_combinations, operators);
        sorted = sort_result_list(sorted);
        s = create_HTML_content(sorted);
        document.getElementById("content-results").innerHTML = s;
    }
};