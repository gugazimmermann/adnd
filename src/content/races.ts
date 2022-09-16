import { RACES, CLASSES, ATTRIBUTE } from '../ts/enums';
import { ContentRaceType } from '../ts/types';
const racesContent: ContentRaceType[] = [
  {
    "portait": "MDWBA02L",
    "name": RACES.DWARF,
    "description": "Dwarves are short, stocky fellows, easily identified by their size and shape. They average 4 to 4½ feet tall. They have ruddy cheeks, dark eyes, and dark hair. Dwarves generally live for 350 years.\n\nDwarves tend to be dour and taciturn. They are given to hard work and care little for most humor. They are strong and brave. They enjoy beer, ale, mead, and even stronger drink. Their chief love, however, is precious metal, particularly gold. They prize gems, of course, especially diamonds and opaque gems (except pearls, which they do not like). Dwarves like the earth and dislike the sea. Not overly fond of elves, they have a fierce hatred of orcs and goblins. Their short, stocky builds make them ill-suited for riding horses or other large mounts (although ponies present no difficulty), so they tend to be a trifle dubious and wary of these creatures. They are ill-disposed toward magic and have little talent for it, but revel in fighting, warcraft, and scientific arts such as engineering.\n\nThough dwarves are suspicious and avaricious, their courage and tenacity more than compensate for these short-comings.",
    "ability-adjustments": {
      [ATTRIBUTE.STRENGTH]: 0,
      [ATTRIBUTE.DEXTERITY]: 0,
      [ATTRIBUTE.CONSTITUTION]: 1,
      [ATTRIBUTE.INTELLIGENCE]: 0,
      [ATTRIBUTE.WISDOM]: 0,
      [ATTRIBUTE.CHARISMA]: -1
    },
    "classes": [
      CLASSES.CLERIC,
      CLASSES.FIGHTER,
      CLASSES.THIEF,
      CLASSES.FIGHTERTHIEF,
      CLASSES.FIGHTERCLERIC
    ],
    "languages": ["common", "dwarf", "gnome", "goblin", "kobold", "orc"],
    "advantages": [
      "magical resistance",
      "poison",
      "small-size",
      "infravision",
      "underground informations"
    ],
    "disadvantages": ["magical resistance"],
    "favorite-enemies": ["orc", "half-orc", "goblin", "hobgoblin"]
  },
  {
    "portait": "MELCL03L",
    "name": RACES.ELF,
    "description": "Elves tend to be somewhat shorter and slimmer than normal humans. Their features are finely chiseled and delicate, and they speak in melodic tones. Although they appear fragile and weak, as a race they are quick and strong. Elves often live to be over 1,200 years old, although long before this time they feel compelled to depart the realms of men and mortals. Where they go is uncertain, but it is an undeniable urge of their race.\n\nThere are five branches of the elven race; aquatic, gray, high, wood, and dark. To the eye of outsiders, the differences between the groups are mostly cosmetic, but most elves maintain that there are important cultural differences between the various groups. Aquatic elves spend their lives beneath the waves and have adapted to these conditions. Gray elves are considered the most noble and serious-minded of this breed. High elves are the most common. Wood elves are considered to be wild, temperamental, and savage. All others hold that the subterranean dark elves are corrupt and evil, no longer part of the elven community.\n\nElves are often considered frivolous and aloof. In fact, they are not, although humans often find their personalities. impossible to fathom. They concern themselves with natural. beauty, dancing and frolicking, playing and singing, unless necessity dictates otherwise. They are not fond of ships or mines, but enjoy growing things and gazing at the open sky. Even though elves tend toward haughtiness and arrogance at times, they regard their friends and associates as equals. They do not make friends easily, but a friend (or enemy) is never forgotten. They prefer to distance themselves from humans, have little love for dwarves, and hate the evil denizens of the woods.\n\nThere are five branches of the elven race; aquatic, gray, high, wood, and dark. To the eye of outsiders, the differences between the groups are mostly cosmetic, but most elves maintain that there are important cultural differences between the various groups. Aquatic elves spend their lives beneath the waves and have adapted to these conditions. Gray elves are considered the most noble and serious-minded of this breed. High elves are the most common. Wood elves are considered to be wild, temperamental, and savage. All others hold that the subterranean dark elves are corrupt and evil, no longer part of the elven community.\n\nTheir humor is clever, as are their songs and poetry. Elves are brave but never foolhardy. They eat sparingly; they drink mead and wine, but seldom to excess. While they find well-wrought jewelry a pleasure to behold, they are not overly interested in money or gain. They find Je and swordplay (or any refined combat art) fascinating. If they have a weakness it lies in these interests.\n\nThere are five branches of the elven race; aquatic, gray, high, wood, and dark. To the eye of outsiders, the differences between the groups are mostly cosmetic, but most elves maintain that there are important cultural differences between the various groups. Aquatic elves spend their lives beneath the waves and have adapted to these conditions. Gray elves are considered the most noble and serious-minded of this breed. High elves are the most common. Wood elves are considered to be wild, temperamental, and savage. All others hold that the subterranean dark elves are corrupt and evil, no longer part of the elven community.",
    "ability-adjustments": {
      [ATTRIBUTE.STRENGTH]: 0,
      [ATTRIBUTE.DEXTERITY]: 1,
      [ATTRIBUTE.CONSTITUTION]: -1,
      [ATTRIBUTE.INTELLIGENCE]: 0,
      [ATTRIBUTE.WISDOM]: 0,
      [ATTRIBUTE.CHARISMA]: 0
    },
    "classes": [
      CLASSES.CLERIC,
      CLASSES.FIGHTER,
      CLASSES.MAGE,
      CLASSES.THIEF,
      CLASSES.RANGER,
      CLASSES.FIGHTERMAGE,
      CLASSES.FIGHTERTHIEF,
      CLASSES.MAGETHIEF
    ],
    "languages": [
      "common",
      "elf",
      "gnome",
      "halfling",
      "goblin",
      "hobgoblin",
      "orc",
      "gnoll"
    ],
    "advantages": [
      "resistance to sleep",
      "resistance to charm",
      "bow",
      "short sword",
      "long sword",
      "moves silently",
      "infravision",
      "detect secret doors"
    ],
    "disadvantages": [],
    "favorite-enemies": []
  },
  {
    "portait": "MGNMA04L",
    "name": RACES.GNOME,
    "description": "Kin to dwarves, gnomes are noticeably smaller than their distant cousins. Gnomes, as they proudly maintain, are also less rotund than dwarves. Their noses, however, are significantly larger. Most gnomes have dark tan or brown skin and white hair. A typical gnome lives for 350 years.\n\nGnomes have lively and sly senses of humor, especially for practical jokes. They have a great love of living things and finely wrought items, particularly gems and senses Gnomes love all sorts of precious stones and are masters of gem polishing and cutting.\n\nGnomes prefer to live in areas of rolling, rocky hills, well wooded and uninhabited by humans. Their diminutive stature has made them suspicious of the larger races - humans and elves - although they are not hostile. They are sly and furtive with those they do not know or trust, and somewhat reserved even under the best of circumstances. Dwelling in mines and burrows, they are sympathetic to dwarves, but find their cousins’ aversion to surface dwellers foolish.",
    "ability-adjustments": {
      [ATTRIBUTE.STRENGTH]: 0,
      [ATTRIBUTE.DEXTERITY]: 0,
      [ATTRIBUTE.CONSTITUTION]: 0,
      [ATTRIBUTE.INTELLIGENCE]: 1,
      [ATTRIBUTE.WISDOM]: -1,
      [ATTRIBUTE.CHARISMA]: 0
    },
    "classes": [
      CLASSES.FIGHTER,
      CLASSES.THIEF,
      CLASSES.CLERIC,
      CLASSES.ILLUSIONIST,
      CLASSES.FIGHTERCLERIC,
      CLASSES.FIGHTERILLUSIONIST,
      CLASSES.FIGHTERTHIEF,
      CLASSES.CLERICILLUSIONIST,
      CLASSES.CLERICTHIEF,
      CLASSES.ILLUSIONISTTHIEF
    ],
    "languages": [
      "common",
      "dwarf",
      "gnome",
      "halfling",
      "goblin",
      "kobold",
      "burrowing mammals"
    ],
    "advantages": [
      "magical resistance",
      "small-size",
      "infravision",
      "underground informations"
    ],
    "disadvantages": ["magical resistance"],
    "favorite-enemies": ["goblin", "kobold"]
  },
  {
    "portait": "MHURA01L",
    "name": RACES.HALFELF,
    "description": "Half-elves are the most common mixed-race beings. The relationship between elf, human, and half-elf is defined as follows:\n\n1) Anyone with both elven and human ancestors is either a human or a half-elf (elves have only elven ancestors).\n\n2) If there are more human ancestors than elven, the person is human; if there are equal numbers or more elves, the person is half-elven.\n\nHalf-elves are usually much like their elven parent in appearance. They are handsome folk, with the good features of each of their races. They mingle freely with either race, being only slightly taller than the average elf (5 feet 6 inches on average) and weighing about 150 pounds. They. typically live about 160 years. They do not have all the abilities of the elf, nor do they have the flexibility of unlimited level advancement of the human. Finally, in some of the less-civilized nations, half-elves are viewéd with suspicion and superstition.\n\nIn general, a half-elf has the curiosity, inventiveness, and ambition of his human ancestors and the refined senses, love of nature, and artistic tastes of his elven ancestors.\n\nHalf-elves do not form communities among themselves; rather, they can be found living in both elven and human communities. The reactions of humans and elves to half-elves ranges from intrigued fascination to outright bigotry.",
    "ability-adjustments": {
      [ATTRIBUTE.STRENGTH]: 0,
      [ATTRIBUTE.DEXTERITY]: 0,
      [ATTRIBUTE.CONSTITUTION]: 0,
      [ATTRIBUTE.INTELLIGENCE]: 0,
      [ATTRIBUTE.WISDOM]: 0,
      [ATTRIBUTE.CHARISMA]: 0
    },
    "classes": [
      CLASSES.BARD,
      CLASSES.CLERIC,
      CLASSES.DRUID,
      CLASSES.FIGHTER,
      CLASSES.ILLUSIONIST,
      CLASSES.RANGER,
      CLASSES.MAGE,
      CLASSES.THIEF,
      CLASSES.FIGHTERCLERIC,
      CLASSES.FIGHTERDRUID,
      CLASSES.FIGHTERTHIEF,
      CLASSES.FIGHTERMAGE,
      CLASSES.CLERICRANGER,
      CLASSES.CLERICMAGE,
      CLASSES.DRUIDRANGER,
      CLASSES.DRUIDMAGE,
      CLASSES.MAGETHIEF,
      CLASSES.FIGHTERMAGECLERIC,
      CLASSES.FIGHTERMAGEDRUID,
      CLASSES.FIGHTERMAGETHIEF,
    ],
    "languages": [
      "common",
      "elf",
      "gnome",
      "halfling",
      "goblin",
      "hobgoblin",
      "orc",
      "gnoll"
    ],
    "advantages": [
      "resistance to sleep",
      "resistance to charm",
      "infravision",
      "detect secret doors"
    ],
    "disadvantages": [],
    "favorite-enemies": []
  },
  {
    "portait": "MHATH03L",
    "name": RACES.HALFLING,
    "description": "Halflings are short, generally plump people, very much like small humans. Their faces are round and broad and often quite florid. Their hair is typically curly and the tops of their feet are covered with coarse hair. They prefer not to wear shoes whenever possible. Their typical life expectancy is approximately 150 years.\n\nHalflings are sturdy and industrious, generally quiet and peaceful. Overall they prefer the comforts of home to dangerous adventuring. They enjoy good living, rough humor, and homespun stories. Halflings are not forward, but they are observant and conversational if in friendly company. Halflings see wealth only as a means of gaining creature comforts, which they love. Though they are not overly brave or ambitious, ae are generally honest and hard working when there is need.\n\nHalfling homes are well-furnished burrows, although most of their work is done on the surface. Elves generally like them in a patronizing sort of way. Dwarves cheerfully tolerate them, thinking halflings somewhat soft and harmless. Gnomes, although they drink more and eat less, like halflings best, feeling them kindred spirits. Because halflings are more open and outgoing than any of these other three, they get along with other races far better.\n\nThere are three types of halflings: Hairfeets, Tallfellows, and Stouts. Hairfeets are the most common type.",
    "ability-adjustments": {
      [ATTRIBUTE.STRENGTH]: -1,
      [ATTRIBUTE.DEXTERITY]: 1,
      [ATTRIBUTE.CONSTITUTION]: 0,
      [ATTRIBUTE.INTELLIGENCE]: 0,
      [ATTRIBUTE.WISDOM]: 0,
      [ATTRIBUTE.CHARISMA]: 0
    },
    "classes": [CLASSES.CLERIC, CLASSES.FIGHTER, CLASSES.THIEF, CLASSES.FIGHTERTHIEF],
    "languages": [
      "common",
      "halfling",
      "dwarf",
      "elf",
      "gnome",
      "goblin",
      "orc"
    ],
    "advantages": [
      "magical resistance",
      "poison",
      "slings",
      "thrown weapons",
      "moves silently",
      "small-size"
    ],
    "disadvantages": [],
    "favorite-enemies": []
  },
  {
    "portait": "MHUPA09L",
    "name": RACES.HUMAN,
    "description": "Although humans are treated as a single Humans ace in the AD&D game, they come in all the varieties we know on Earth.\n\nHumans have only one special ability: They can be of any character class and rise to any level in any class. Other PC races have limited choices in these areas.\n\nHumans are also more social and tolerant than most other races, accepting the company of elves, dwarves, and the like with noticeably less complaint.\n\nBecause of these abilities and tendencies, humans have become significant powers within the world and often rule empires that other races (because of their racial tendencies) would find difficult to manage.",
    "ability-adjustments": {
      [ATTRIBUTE.STRENGTH]: 0,
      [ATTRIBUTE.DEXTERITY]: 0,
      [ATTRIBUTE.CONSTITUTION]: 0,
      [ATTRIBUTE.INTELLIGENCE]: 0,
      [ATTRIBUTE.WISDOM]: 0,
      [ATTRIBUTE.CHARISMA]: 0
    },
    "classes": [
      CLASSES.BARD,
      CLASSES.CLERIC,
      CLASSES.DRUID,
      CLASSES.FIGHTER,
      CLASSES.RANGER,
      CLASSES.PALADIN,
      CLASSES.MAGE,
      CLASSES.ILLUSIONIST,
      CLASSES.THIEF,
    ],
    "languages": [
      "common",
      "elf",
      "dwarf",
      "gnome",
      "halfling",
      "goblin",
      "kobold",
      "orc",
      "goblin",
      "hobgoblin",
      "gnoll"
    ],
    "advantages": [],
    "disadvantages": [],
    "favorite-enemies": []
  }
];

export default racesContent;
