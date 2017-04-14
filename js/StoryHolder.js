var StoryHolder = {} || StoryHolder;

StoryHolder.story1 = {
	// ———————————————————————— TEMPLATE
	template: {
		title: "Template",
		textnodes: [
			"", 
			"",
			""
		],
		guidebook: "",
		choices: [
			{
				pointsTo: "",
				displayText: {
					title: "",
					description: "",
					navText: ""
				},
				position: {x: 0, y: 45 },
				type: "hand"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "cloudvalley.jpg"
	},
	// ———————————————————————— /TEMPLATE
	characterIntro: {
		title: "Who are you?",
		textnodes: [
			"You are a geology researcher who just received a grant to explore the ecology of the Kailash Sacred Region. You are a bookish person, more comfortable in a library than outdoors. You are apprehensive about this trip to say the least.", 
			"You decide to explore this region for a short trip of 10 days, to learn more about the region, you will return for a longer trip later, if you find something interesting here."
		],
		choices: [
			{
				pointsTo: "INTRODUCTION",
				displayText: {
					title: "Travel to Kathmandu",
					description: "Remember, you just have 10 days this time, each place you visit takes 1 day of your time.",
					navText: "Board the Plane"
				},
				position: { x: 0, y: 45 },
				type: "arrow-right"
			}
		],
		backgroundImage: "black.gif"
	},
	INTRODUCTION: {
		id: 1,
		title: "Prologue: Kathmandu",
		textnodes: [
			"Your journey begins here today.", 
			"You never thought you would actually get this grant, and with it a unique opportunity to come study this region in person. You weren’t even going to send in the application, but your professor at university insisted. Now that you are here, you can’t remember why you hesitated. What was left for you in that city? Only complications and interferences.",
			"Here you can forget all that. Here, all you need is around you. ",
			"Your host had told you about the mythic history of the city–According to Swayambhu Purana, present-day Kathmandu was once a huge and deep lake named Nagdaha – as it was full of snakes. The lake was drained by Bodhisatwa Manjusri with his sword, and the water removed from it. After sometime, a demon named Banasur closed the outlet, and the valley was again a lake. Then lord Krishna came to Nepal, killed Banasur, and again drained out the water. ",
			"Kathmandu is a capital city in the global south. Tradition and modernity walk hand in hand here, and you were both amazed and overwhelmed by the bustling metropolis. While you were in Kathmandu, you couldn’t wait to leave. But now, in this isolated stretch of road, you can’t help but feel wistful about that chaotic calm of the big city."
		],
		choices: [
			{
				pointsTo: "simikot",
				displayText: {
					title: "Fly to Simikot",
					description: "",
					navText: "Board the Plane"
				},
				position: { x: 40, y: 20 },
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 90, y: 90 },
			found: false
		},
		backgroundImage: "kathmandu.jpg"
	},
	simikot: {
		title: "Simikot",
		textnodes: [
			"You are flying into Simikot, which is an experience unto itself. You fly just above the mountain ridges, and then bank and swoop down and land on the flattened ridge of one of the many mountains in the area.",
			"Your stomach lurches, and you close your eyes reciting a prayer your grandmother taught you when you were a child.",
			"You catch yourself with surprise – you are not religious. You remind yourself that you are a scientist, not a pilgrim."
		],
		guidebook: "Simikot: Translates to Swampy Fort, and gets it&rsquo;s name from a swamp just below the airport, with a ruined fort (Kot) of the Malla Kings. Simikot runs on a market economy, unlike the rest of the region which follows the traditional barter system.",
		choices: [
			{
				pointsTo: "teVillage",
				displayText: {
					title: "Go East",
					description: "East of Simikot is Te Village. It sounds like it might be worth spending a day there.",
					navText: "Follow the Path to Te Village"
				},
				position: { x: 30, y: 50 },
				type: "arrow-right"
			},
			{
				pointsTo: "upperLimiValley",
				displayText: {
					title: "Go West",
					description: "You have little time here, let's head out! ",
					navText: "Go West to the Upper Limi Valley"
				},
				position: { x: -30, y: 40 },
				type: "arrow-up"
			},
			{
				pointsTo: "simikot2",
				displayText: {
					title: "Explore Simikot",
					description: "Simikot is worth seeing for one more day.",
					navText: "Poke Around"
				},
				position: {x: 0, y: 45 },
				type: "arrow-left"
			}
		],
		map: {
			position: { x: 75.3, y: 75.1 },
			found: false
		},
		backgroundImage: "simikot.jpg"
	},
	simikot2: {
		title: "Exploring Simikot",
		textnodes: [
			"Simikot is an important town in the most remote district of Nepal. Although dominated by the Airport, the town is split into four parts. South of the Airport are the main government buildings, schools, post office and guest houses. To the east and northwest are two large settlements of the Chhetri and Dum community.",
			"Any research in this region begins here, since Simikot is connected directly to Hilsa by road. Hilsa is last checkpost in Nepal, and the entry point into the Tibetian Autonomous Region, making it an important transit location. This is the popular route taken by pilgrims and tourists. You really hope you can avoid it.",
			"After flying into Simikot, you walk around the city trying to find an alternative route to Kailash. "			
		],
		guidebook: "Simikot is the administrative headquarters of Humla District of Karnali Zone in the mountain region of northwestern Nepal. Remember, this is a very remote part of Nepal, so be prepared for solitude and not a lot of tourists!",
		choices: [
			{
				pointsTo: "twoFish",
				displayText: {
					title: "Humla River",
					description: "Someone said something about a two interesting rocks.",
					navText: "Explore the Humla River"
				},
				position: { x: -15, y: 30 },
				type: "arrow-left"
			},
			{
				pointsTo: "herderCairns",
				displayText: {
					title: "Stone Cairns",
					description: "Near a herder camp, there are some stone Carns",
					navText: "Take a closer look"
				},
				position: { x: 23, y: 30 },
				type: "arrow-right"
			},
			{
				pointsTo: "ralingGompa",
				displayText: {
					title: "Raling Gompa",
					description: "Good thing you hung around! There&rsquo;s a famous monestary close by.",
					navText: "Check it out."
				},
				position: { x: -3, y: 55 },
				type: "arrow-up"
			}
			
		],
		map: {
			position: { x: 76.3, y: 75.1 },
			found: false
		},
		backgroundImage: "buildingCollage.jpg"
	},
	ralingGompa: {},
	twoFish: {
		id: 3,
		title: "The Two Fish",
		textnodes: [
			"You come up to two rocks by the side of Humla River. They seem ordinary enough, but there was something about them that made him want to look closer. Were they glittering? Were these boulders made up of Lepidolite?",
			"Should you check them or keep going?"
		],
		choices: [
			{
				pointsTo: "checkBoulder",
				displayText: {
					title: "Check out the Boulder",
					description: "",
					navText: "These deserve a closer look..."
				},
				position: { x: 40, y: 10 },
				type: "arrow-up"
			},
			{
				pointsTo: "trailhead",
				displayText: {
					title: "To the Trailhead",
					description: "",
					navText: "Continue your journey"
				},
				position: { x: 10, y: 10 },
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 71.2, y: 71 },
			found: false
		},
		backgroundImage: "village.jpg"
	},
	checkBoulder: {
		title: "Myth of the Two Fish",
		textnodes: [
			"You walk up closer and put your hand on one of the rocks. You start to feel faint, everything starts to get brighter around you. ",
			"Matsaya and Devi were an aging fish couple that left their home seeking Mount Kailash, the abode of the gods and the place where they thought they would find salvation themselves. ",
			"Matsaya was despairing at the impact his life had had on the world, so his wife Devi suggested that they make a pilgrimage to Mount Kailash, like the humans, and find salvation in the after life. Althought Matsaya agreed, he wasn't convinced. He complained and doubted their journey right from the first day. All of Devi's efforts were in vain, including the story of Lord Vishnu, a Hundu God, who was disguised as a small fish and after being rescued by Manu, the first Man, played a vital role in ensuring the fate of humanity.", 
			"Eventually, the strain of the voyage was too much on the two old fish, and they realized they wouldn't make it Mount Kailash afterall. Giving in to his despair, Matsaya asks Devi if this pointless journey was worth it, and to answer him, she asks him to turn around. Behind them lay a valley that was as green as emeralds with rice paddies. Swimming up river, they carried rice seeds with them, which grew along the river beds. Although they were just two fish, Matsaya and Devi left their mark, and blessings on the valley with their gift of Rice."
		],
		choices: [
			{
				pointsTo: "simikot2",
				displayText: {
					title: "Back to Simikot",
					description: "",
					navText: "Let's see if there's something else at Simikot."
				},
				position: { x: 4, y: 70 },
				type: "arrow-left"
			},
			{
				pointsTo: "trailhead",
				displayText: {
					title: "To the Trailhead",
					description: "",
					navText: "Continue your journey"
				},
				position: { x: -10, y: 10 },
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 63.9, y: 67.9 },
			found: false
		},
		backgroundImage: "cloudvalley.jpg"
	},
	trailhead: {
		title: "Tshongsa Valley",
		textnodes: [
			"You are in Tshongsa Valley, onward lies Limi Valley, and with it, a wealth of villages and natural sights. Before you, alpine meadow meets a sub-alpine forest. Suffice to say, it is breathtaking.", 
			"A forking path lies before you at Salli Khola, the trailhead. You can either keep going East towards the Hilsa chekpoint on the Greater Himalayan Trail, or go north into Upper Limi Valley."
		],
		guidebook: "West Nepal has a strong belief of a variety of demi gods who protect the rich pasture lands, and even influence local social governance. All resources goverened by these demigods need to be paid for, and it is common for hunters to pacify them. This system maintained law and order and even controlled border crossings for many years. ",
		choices: [
			{
				pointsTo: "hilsa",
				displayText: {
					title: "Continue East",
					description: "",
					navText: "Travel East towards Hilsa"
				},
				position: {x: 0, y: 45 },
				type: "arrow-right"
			},
			{
				pointsTo: "upperLimiValley",
				displayText: {
					title: "Travel through the Limi Valley",
					description: "",
					navText: "Continue North"
				},
				position: {x: 0, y: 0 },
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 60.1, y: 68.2 },
			found: false
		},
		backgroundImage: "stones2.jpg"
	},
	herderCairns: {
		title: "Stone Carns",
		textnodes: [
			"After a long hike through the valley and up into the mountains, the trail opens onto a large, flat, rocky area with many stone prayer cairns. You catch a glimpse of a mountain lake from here as well.",
			"Neatly piled rocks are scattered around the field, and in this mist, they look like a small army of dieties manifesting on earth.",
			"While you were never particularly religious, but even you are struck by the stillness here. Something compels you to pay your respects with a moment of silence for the prayers of others, if not your own. "
		],
		choices: [
			{
				pointsTo: "exploreLake",
				displayText: {
					title: "To the Lake",
					description: "The Lake looks like something worth spending a little time investigating.",
					navText: "Explore the Lake"
				},
				position: {x: 0, y: 45 },
				type: "arrow-up"
			},
			{
				pointsTo: "herderCamp",
				displayText: {
					title: "Talk to the Herders",
					description: "",
					navText: "Go North to the Herder Camp"
				},
				position: {x: 0, y: 45 },
				type: "arrow-right"
			}
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "cloudvalley.jpg"
	},
	herderCamp: {
		title: "Herder Village",
		textnodes: [
			"You see some more stone structures, and wonder if they are more cairns. Instead, you find make-shift stone houses. Looking around, you notice a wary herder looking at you from a nearby hill. You tentatively wave as greeting to him.",
			"The herder comes down from the hill and greets you. He asks why you were looking into his house. You apologize and ask him about this village. You tell him that you are curious about this region and are here to learn more about it.", 
			"The herder seems satisfied. He tells you that there are several temporary stone houses built by local herders who use the area during seasonal grazing. These used to be sacred grazing lands, goverened by fierce demigods." 
		],
		choices: [
		{
			pointsTo: "learnFromHerder",
			displayText: {
				title: "Talk with the Herder more",
				description: "",
				navText: "Spending some extra time here would be fantastic!"
			},
			position: {x: 0, y: 45 },
			type: "arrow-up"
		},
		{
			pointsTo: "nyaluLa",
			displayText: {
				title: "Continue Onwards",
				description: "",
				navText: "No time, and we'd like to get to Nyalu La Summit!"
			},
			position: {x: 0, y: 45 },
			type: "arrow-right"
		}],
		backgroundImage: "village.jpg"
	},
	learnFromHerder: {
		title: "Learn from the Herders",
		textnodes: [
			"You accompany the herder with his animals as they walk to a small mountain lake south of the herder camp. This lake makes this part of the Tshongsa Valley an ideal spot for herders grazing livestock. ",
			"Your new friend tells you about this meadow in Tshongsa Valley. It used to be an ancient trading place between Tibet and Nepal. Traditionally, it was beleived that this meadow has nine corners and beautiful waterfalls, all under the protection of Jowo Changtsen Chhenpo, the lord of the northern demigods. Venerated by all the Bhod Shamans of Humla, until recently he was venerated by sheep sacrifices. Now, dough effigies are used instead.",
			"Limi Valley is changing with the times, but for this herder, time seems to have stopped in this meadow, steeped in history and tradition."
		],
		guidebook: "The people of Limi Valley used to traditionally be semi-nomadic. Although citizens of Nepal, they had winter grazing rights in Tibet. Following the boundary demarcation between China and Nepal, these rights were retracted in 1961.",
		choices: [
		],
		map: {
			position: { x: 0, y: 0},
			found: false
		},
		backgroundImage: "stones3.jpg"
	},
	nayaluLa: {},
	roadToHilsa: {
		title: "Hilsa",
		textnodes: [
			"You notice that they have a measured way around the rough path by the river. They barely look at the ground, but their passage over it looks practiced. Compared to your new hiking shoes, their roughshod footwear looks shabby, but anyone looking could clearly see how you didn’t belong here. You were a tourist. Much like them, you wore your colours as blatantly as any tribal person. Only yours were bland and mass-produced.",
			"Caught in your reverie, you slip quite badly and manage to twist your ankle. You yell out in surprise and find your left ankle throbbing with pain. Some of the locals look back at you in concern."
		],
		guidebook: "Karnali River has many names; it is called Ghagra on the Indian side, Kung-chiao Ho on the Chinese side, and is one of the significant rivers of the region. It originates near the Manasarowar Lake in Tibet. Stretching for 1080 kms, Karnali is an important tributary of the Ganges. This is specifically important to India, given the spiritual significance of the Ganges, as well as a large part of Karnali is in India. Total catchment area of Karnali being 127,950 sq km of which 45% is in India. Ghagra River passes through Nepal where it is known as Karnali or Kauriala. It joins the Ganges at Chapra in Bihar. This river is the main source of water in Bara-Banki District of Uttar Pradesh. Rapti, Little Gandak, Sarda and Sarju are the major tributaries of this river.",
		choices: [
			{
				pointsTo: "karnaliRiver",
				displayText: {
					title: "Karnali River",
					description: "",
					navText: "Follow the River"
				},
				position: { x: 10, y: 10 },
				type: "arrow-up"
			}
		],
		map: {
			position: { x: 55.5, y: 66.7 },
			found: false
		},
		backgroundImage: "stones2.jpg"
	}
}

/*
Notes: 
	Animation from left=>right
	Interactive Elements: Cairns
	Map:
		Position
		Unlockable pieces
		Overlay
		player position on map
		navigational
*/
