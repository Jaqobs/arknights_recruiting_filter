var list_of_ops = [
    {"name": "Haze", "rarity": 4, "tags": ["DPS", "Debuff", "Caster", "Ranged"]},
    {"name": "Gitano", "rarity": 4, "tags": ["AoE", "Caster", "Ranged"]},
    {"name": "Lava", "rarity": 3, "tags": ["AoE", "Caster", "Ranged"]},
    {"name": "Steward", "rarity": 3, "tags": ["DPS", "Caster", "Ranged"]},
    {"name": "Durin", "rarity": 2, "tags": ["Starter", "Caster", "Ranged"]},
    {"name": "12F", "rarity": 2, "tags": ["Starter", "Caster", "Ranged"]},
    {"name": "Nearl", "rarity": 5, "tags": ["Defense", "Healing", "Defender", "Melee", "Senior Operator"]},
    {"name": "Liskarm", "rarity": 5, "tags": ["Defense", "DPS", "Defender", "Melee", "Senior Operator"]},
    {"name": "Croissant", "rarity": 5, "tags": ["Defense", "Shift", "Defender", "Melee", "Senior Operator"]},
    {"name": "Vulcan", "rarity": 5, "tags": ["Survival", "Defense", "DPS", "Defender", "Melee", "Senior Operator"]},
    {"name": "Matterhorn", "rarity": 4, "tags": ["Defense", "Defender", "Melee"]},
    {"name": "Cuora", "rarity": 4, "tags": ["Defense", "Defender", "Melee"]},
    {"name": "Gummy", "rarity": 4, "tags": ["Defense", "Healing", "Defender", "Melee"]},
    {"name": "Beagle", "rarity": 3, "tags": ["Defense", "Defender", "Melee"]},
    {"name": "Noir Corne", "rarity": 2, "tags": ["Starter", "Defender", "Melee"]},
    {"name": "Indra", "rarity": 5, "tags": ["DPS", "Survival", "Guard", "Melee", "Senior Operator"]},
    {"name": "Specter", "rarity": 5, "tags": ["AoE", "Survival", "Guard", "Melee", "Senior Operator"]},
    {"name": "Dobermann", "rarity": 4, "tags": ["DPS", "Support", "Guard", "Melee"]},
    {"name": "Matoimaru", "rarity": 4, "tags": ["Survival", "DPS", "Guard", "Melee"]},
    {"name": "Frostleaf", "rarity": 4, "tags": ["Slow", "DPS", "Guard", "Melee"]},
    {"name": "Estelle", "rarity": 4, "tags": ["AoE", "Survival", "Guard", "Melee"]},
    {"name": "Melantha", "rarity": 3, "tags": ["DPS", "Survival", "Guard", "Melee"]},
    {"name": "Castle-3", "rarity": 1, "tags": ["Support", "Robot", "Guard", "Melee"]},
    {"name": "Ptilopsis", "rarity": 5, "tags": ["Healing", "Support", "Medic", "Ranged", "Senior Operator"]},
    {"name": "Silence", "rarity": 5, "tags": ["Healing", "Medic", "Ranged", "Senior Operator"]},
    {"name": "Myrrh", "rarity": 4, "tags": ["Healing", "Medic", "Ranged"]},
    {"name": "Perfumer", "rarity": 4, "tags": ["Healing", "Medic", "Ranged"]},
    {"name": "Hibiscus", "rarity": 3, "tags": ["Healing", "Medic", "Ranged"]},
    {"name": "Ansel", "rarity": 3, "tags": ["Healing", "Medic", "Ranged"]},
    {"name": "Lancet-2", "rarity": 1, "tags": ["Healing", "Robot", "Medic", "Ranged"]},
    {"name": "Blue Poison", "rarity": 5, "tags": ["DPS", "Sniper", "Ranged", "Senior Operator"]},
    {"name": "Platinum", "rarity": 5, "tags": ["DPS", "Sniper", "Ranged", "Senior Operator"]},
    {"name": "Meteorite", "rarity": 5, "tags": ["AoE", "Debuff", "Sniper", "Ranged", "Senior Operator"]},
    {"name": "Provence", "rarity": 5, "tags": ["DPS", "Sniper", "Ranged", "Senior Operator"]},
    {"name": "Firewatch", "rarity": 5, "tags": ["DPS", "Nuker", "Sniper", "Ranged", "Senior Operator"]},
    {"name": "Jessica", "rarity": 4, "tags": ["DPS", "Survival", "Sniper", "Ranged"]},
    {"name": "Meteor", "rarity": 4, "tags": ["DPS", "Debuff", "Sniper", "Ranged"]},
    {"name": "Shirayuki", "rarity": 4, "tags": ["AoE", "Slow", "Sniper", "Ranged"]},
    {"name": "Kroos", "rarity": 3, "tags": ["DPS", "Sniper", "Ranged"]},
    {"name": "Adnachiel", "rarity": 3, "tags": ["DPS", "Sniper", "Ranged"]},
    {"name": "Rangers", "rarity": 2, "tags": ["Starter", "Sniper", "Ranged"]},
    {"name": "Project Red", "rarity": 5, "tags": ["Fast-Redeploy", "Crowd-Control", "Specialist", "Melee", "Senior Operator"]},
    {"name": "Cliffheart", "rarity": 5, "tags": ["Shift", "DPS", "Specialist", "Melee", "Senior Operator"]},
    {"name": "Manticore", "rarity": 5, "tags": ["DPS", "Survival", "Specialist", "Melee", "Senior Operator"]},
    {"name": "FEater", "rarity": 5, "tags": ["Shift", "Slow", "Specialist", "Melee", "Senior Operator"]},
    {"name": "Gravel", "rarity": 4, "tags": ["Fast-Redeploy", "Defense", "Specialist", "Melee"]},
    {"name": "Rope", "rarity": 4, "tags": ["Shift", "Specialist", "Melee"]},
    {"name": "Shaw", "rarity": 4, "tags": ["Shift", "Specialist", "Melee"]},
    {"name": "Mayer", "rarity": 5, "tags": ["Summon", "Crowd-Control", "Supporter", "Ranged", "Senior Operator"]},
    {"name": "Pramanix", "rarity": 5, "tags": ["Debuff", "Supporter", "Ranged", "Senior Operator"]},
    {"name": "Istina", "rarity": 5, "tags": ["Slow", "DPS", "Supporter", "Ranged", "Senior Operator"]},
    {"name": "Earthspirit", "rarity": 4, "tags": ["Slow", "Supporter", "Ranged"]},
    {"name": "Orchid", "rarity": 3, "tags": ["Slow", "Supporter", "Ranged"]},
    {"name": "Zima", "rarity": 5, "tags": ["DP-Recovery", "Support", "Vanguard", "Melee", "Senior Operator"]},
    {"name": "Texas", "rarity": 5, "tags": ["DP-Recovery", "Crowd-Control", "Vanguard", "Melee", "Senior Operator"]},
    {"name": "Scavenger", "rarity": 4, "tags": ["DP-Recovery", "DPS", "Vanguard", "Melee"]},
    {"name": "Vigna", "rarity": 4, "tags": ["DPS", "DP-Recovery", "Vanguard", "Melee"]},
    {"name": "Fang", "rarity": 3, "tags": ["DP-Recovery", "Vanguard", "Melee"]},
    {"name": "Vanilla", "rarity": 3, "tags": ["DP-Recovery", "Vanguard", "Melee"]},
    {"name": "Plume", "rarity": 3, "tags": ["DPS", "DP-Recovery", "Vanguard", "Melee"]},
    {"name": "Yato", "rarity": 2, "tags": ["Starter", "Vanguard", "Melee"]},
    {"name": "Exusiai", "rarity": 6, "tags": ["DPS", "Sniper", "Ranged", "Top Operator"]},
    {"name": "Siege", "rarity": 6, "tags": ["DP-Recovery", "DPS", "Vanguard", "Melee", "Top Operator"]}, //
    {"name": "Ifrit", "rarity": 6, "tags": ["AoE", "Debuff", "Caster", "Ranged", "Top Operator"]},
    {"name": "Shining", "rarity": 6, "tags": ["Healing", "Support", "Medic", "Ranged", "Top Operator"]},
    {"name": "Nightingale", "rarity": 6, "tags": ["Healing", "Support", "Medic", "Ranged", "Top Operator"]},
    {"name": "Hoshiguma", "rarity": 6, "tags": ["Defense", "DPS", "Defender", "Melee", "Top Operator"]},
    {"name": "Saria", "rarity": 6, "tags": ["Defense", "Healing", "Support", "Defender", "Melee", "Top Operator"]},
    {"name": "SilverAsh", "rarity": 6, "tags": ["DPS", "Support", "Guard", "Melee", "Top Operator"]}
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
    var filters = [];
    var collection = document.getElementsByClassName("active");
    var l = collection.length;
    for (i = 0; i < l; i++) {
        filters.push(collection[i].id);
    }

    return filters;
};

/** 
* Reset all filters.
* 
* @return {boolean}  Returns true if tag is in array.
*/
function refresh_div() {
    var collection = document.getElementsByClassName("active");
    // var l = collection.length;

    // for (i = 0; i < l; i++) {
    //     collection[i].classList.remove("active");
    // }
    while (collection[0]) {
        collection[0].classList.remove("active");
    }
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
        
    return bool;
};

/** 
* Returns ops that match the filter tags.
* 
* @param  {array} filter_tags list of tags to search for
* @return {array} result list of ops that match at least one filter tag
*/
function get_ops(filter_tags) {
    result = [];
    list_of_ops.forEach(function(ops) {
        console.log("Checking " + ops.name);
        if (check_tags(ops, filter_tags)) {
            console.log("Pushing operator to result[]")
            result.push(ops);
        }
    })
    
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
  if (0 === subset.length) {
    return false;
  }
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
}

function intersection(filter_combinations, operators) {
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
                console.log(ops.name + " is a subset of " + ele["tags"])
                ele["operators"].push(ops)
            }
        }
    }

    console.log(sorted)

    return sorted
};

/** 
* Create a list of user input combinations
*/
function create_result_list(input) {
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

/** 
* Start of script when user presses submit
*/
function start() {
    //get active filters from divs
    var filter_input = get_filters();
    console.log(filter_input);

    //get list of ops that fit the filter
    var operators = get_ops(filter_input);

    //get list of tag combinations
    var input_combinations = create_result_list(filter_input);

    var sorted_operators = new Object();

    var sorted = intersection(input_combinations, operators);
    var ops_tag;
    var s = "Results: ";

    for (ops_tag of sorted) {
        s += "Title:" + ops_tag["tags"] + " - Operators: ";
        for (ops of ops_tag["operators"]) {
            s += ops.name + ", ";
        }
        s += "\n"
    }
    console.log(s);

};
