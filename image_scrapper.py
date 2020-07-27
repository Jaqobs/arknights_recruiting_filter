import requests

list_of_ops = [
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
    {"name": "Siege", "rarity": 6, "tags": ["DP-Recovery", "DPS", "Vanguard", "Melee", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_6_i.png"}, 
    {"name": "Ifrit", "rarity": 6, "tags": ["AoE", "Debuff", "Caster", "Ranged", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_3_i.png"},
    {"name": "Shining", "rarity": 6, "tags": ["Healing", "Support", "Medic", "Ranged", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_7_i.png"},
    {"name": "Nightingale", "rarity": 6, "tags": ["Healing", "Support", "Medic", "Ranged", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_9_i.png"},
    {"name": "Hoshiguma", "rarity": 6, "tags": ["Defense", "DPS", "Defender", "Melee", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_1_i.png"},
    {"name": "Saria", "rarity": 6, "tags": ["Defense", "Healing", "Support", "Defender", "Melee", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_5_i.png"},
    {"name": "SilverAsh", "rarity": 6, "tags": ["DPS", "Support", "Guard", "Melee", "Top Operator"], "img-url": "https://gamewith-en.akamaized.net/article_tools/arknights/gacha/chara_4_i.png"}
]

def load_image(url, title):

    img_data = requests.get(url).content

    with open(f'img/{title}', 'wb') as handler:
        handler.write(img_data)

def main():
    print(f'Starting to load images for {len(list_of_ops)} operators...')
    for op in list_of_ops:
        print(f"Loading image for {op['name']}...")
        url = op['img-url']
        title = op['img-url'].split('/')[-1]
        load_image(url, title)
        
    #generate string
    # s = ""
    # for op in list_of_ops:
    #     op['img-url'] = f"img/{op['img-url'].split('/')[-1]}"
    #     print(f"{op},")

    # print(s)

if __name__ == '__main__':
    main()