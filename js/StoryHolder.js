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
		choices: [
			{
				pointsTo: "",
				displayText: {
					title: "",
					discription: "",
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
		title: "Character Intro",
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
				type: "hand"
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
			"Here you can forget all that. Here, all you need is around you. "
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
				type: "hand"
			},
			{
				pointsTo:"",
				displayText: {
					title: "Kathmandu",
					description: "Your host had told you about the mythic history of the city–According to Swayambhu Purana, present-day Kathmandu was once a huge and deep lake named Nagdaha – as it was full of snakes. The lake was drained by Bodhisatwa Manjusri with his sword, and the water removed from it. After sometime, a demon named Banasur closed the outlet, and the valley was again a lake. Then lord Krishna came to Nepal, killed Banasur, and again drained out the water. ",
					navText: ""
				},
				position: { x: -22, y: 40 },
				type: "symbol"
			},
			{
				pointsTo:"",
				displayText: {
					title: "Exploring Kathmandu",
					description: "Kathmandu is a capital city in the global south. Tradition and modernity walk hand in hand here, and you were both amazed and overwhelmed by the bustling metropolis. While you were in Kathmandu, you couldn’t wait to leave. But now, in this isolated stretch of road, you can’t help but feel wistful about that chaotic calm of the big city.",
					navText: ""
				},
				position: {x: 32, y: 68},
				type: "tower"
			}
		],
		map: {
			position: { x: 90, y: 90 },
			found: false
		},
		backgroundImage: "kathmandu.jpg"
	},
	simikot: {
		id: 2,
		title: "Simikot",
		textnodes: [
			"You are flying into Simikot, which is an experience unto itself. You fly just above the mountain ridges, and then bank and swoop down and land on the flattened ridge of one of the many mountains in the area.",
			"Your stomach lurches, and you close your eyes reciting a prayer your grandmother taught you when you were a child.",
			"You catch yourself with surprise – you are not religious. You remind yourself that you are a scientist, not a pilgrim."
		],
		choices: [
			{	
				pointsTo: "INTRODUCTION",
				displayText: {
					title: "Kathmandu",
					description: "",
					navText: "Return to Kathmandu"
				},
				position: { x: -30, y: 40 },
				type: "hand"
			},
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
				type: "arrow-left"
			},
			{
				pointsTo: "",
				displayText: {
					title: "Guidebook",
					description: "Simikot: Translates to Swampy Fort, and gets it&rsquo;s name from a swamp just below the airport, with a ruined fort (Kot) of the Malla Kings. Simikot runs on a market economy, unlike the rest of the region which follows the traditional barter system.",
					navText: ""
				}, 
				position: { x: 20, y: 15},
				type: "book"
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
		choices: [
			{	
				pointsTo: "",
				displayText: {
					title: "Guidebook",
					description: "Simikot is the administrative headquarters of Humla District of Karnali Zone in the mountain region of northwestern Nepal. Remember, this is a very remote part of Nepal, so be prepared for solitude and not a lot of tourists!",
					navText: ""
				},
				position: { x: -30, y: 40 },
				type: "book"
			},
			{
				pointsTo: "twoFish",
				displayText: {
					title: "The Myth of the Two Fish",
					description: "",
					navText: "Explore the Humla River"
				},
				position: { x: -10, y: 60 },
				type: "arrow-left"
			},
			{
				pointsTo: "herderCairns",
				displayText: {
					title: "Stone Cairns",
					description: "Near a herder camp, there are some stone Carns",
					navText: "Take a closer Look"
				},
				position: { x: 30, y: 35 },
				type: "tower"
			}
			
		],
		map: {
			position: { x: 76.3, y: 75.1 },
			found: false
		},
		backgroundImage: "simikot.jpg"
	},
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
				type: "symbol"
			},
			{
				pointsTo: "trailhead",
				displayText: {
					title: "To the Trailhead",
					description: "",
					navText: "Continue your journey"
				},
				position: { x: 10, y: 10 },
				type: "arrow-top"
			}
		],
		map: {
			position: { x: 71.2, y: 71 },
			found: false
		},
		backgroundImage: "village.jpg"
	},
	karnaliRiver: {
		id: 3,
		title: "Karnali River",
		textnodes: [
			"Something makes you stop. You look up from your diary into the the utter stillness of this wide open space. Such a stark difference from anywhere else that it is terrifying to behold. But then, you remind yourself, you haven’t really been to that many places...",
			"A good student all your life, you have never really seen the world, just studied it fastidiously from afar. You had no plans of changing that either, until the Kailash Sacred Region Research Grant came up.  "
		],
		choices: [
			{
				pointsTo: "you",
				displayText: {
					title: "Your Past",
					description: "Remember why you have come.",
					navText: "More About You"
				},
				position: { x: 40, y: 10 },
				choiceNodeArrow: "left"
			},
			{
				pointsTo: "karnaliRiver",
				displayText: {
					title: "Snap Out of Your Daydream",
					description: "You know you can&rsquo;t just following the river if you ever plan to reach Hilsa. You have a month to explore AND file your report for further funding, and from the city of Tumkot, Karnali runs on a route perpendicular to the trusted Simikot-Hilsa road you were advised to take. But you have a month, so you can explore around a little... ",
					navText: ""
				},
				position: { x: -40, y: 40 },
				choiceNodeArrow: "none"
			},
			{
				pointsTo: "roadToHilsa",
				displayText: {
					title: "Continue to Hilsa",
					description: "You selected this route because Simikot is connected to Hilsa by a road. It&rsquo;s off the beaten path, but at least it&rsquo;s a path! <br> Hilsa is your entry point into Chinese territory. It&rsquo;s a border city that you don&rsquo;t know much about. Your rationale for selecting the Simikot-Hilsa route was that it wasn’t directly on the popular pilgrimage routes, but allowed for a more nature-focussed introduction to Kailash Sacred Landscape. Hilsa remains a mystery to you, but the good thing about mysteries like this, is that all you have to do to solve it, is to just reach your destination.",
					navText: "Road to Hilsa"
				},
				position: { x: 20, y: 30 },
				choiceNodeArrow: "right"
			}
		],
		map: {
			position: { x: 63.9, y: 67.9 },
			found: false
		},
		backgroundImage: "cloudvalley.jpg"
	},
	you: {
		id: 098,
		title: "More About You",
		textnodes: [
			"You are here to study the Kailash Sacred Region’s geological features, officially. Personally, the world has begun to make less and less sense, and you just had to leave. You won’t admit it, but you hope this trip will tell you something about yourself. The world has changed a lot, and no more so than where you come from. Tradition clashing with modern progress, personal beliefs becoming politics, it’s all too much. You wish you could hide somewhere, far away from people. Left alone to do your research. So you naturally came here. Geology is steadfast the way other people rarely are."
		],
		choices: [
			{
				pointsTo: "karnaliRiver",
				displayText: {
					title: "Karnali River",
					description: "Karnali River has many names; it is called Ghagra on the Indian side, Kung-chiao Ho on the Chinese side, and is one of the significant rivers of the region. It originates near the Manasarowar Lake in Tibet. Stretching for 1080 kms, Karnali is an important tributary of the Ganges. This is specifically important to India, given the spiritual significance of the Ganges, as well as a large part of Karnali is in India. Total catchment area of Karnali being 127,950 sq km of which 45% is in India. Ghagra River passes through Nepal where it is known as Karnali or Kauriala. It joins the Ganges at Chapra in Bihar. This river is the main source of water in Bara-Banki District of Uttar Pradesh. Rapti, Little Gandak, Sarda and Sarju are the major tributaries of this river.",
					navText: "Follow the River"
				},
				position: { x: 10, y: 10 },
				choiceNodeArrow: "top"
			}
		],
		map: {
			position: { x: 60.1, y: 68.2 },
			found: false
		},
		backgroundImage: "stones2.jpg"
	},
	roadToHilsa: {
		id: 2331,
		title: "Hilsa",
		textnodes: [
			"You notice that they have a measured way around the rough path by the river. They barely look at the ground, but their passage over it looks practiced. Compared to your new hiking shoes, their roughshod footwear looks shabby, but anyone looking could clearly see how you didn’t belong here. You were a tourist. Much like them, you wore your colours as blatantly as any tribal person. Only yours were bland and mass-produced.",
			"Caught in your reverie, you slip quite badly and manage to twist your ankle. You yell out in surprise and find your left ankle throbbing with pain. Some of the locals look back at you in concern."
		],
		choices: [
			{
				pointsTo: "karnaliRiver",
				displayText: {
					title: "Karnali River",
					description: "Karnali River has many names; it is called Ghagra on the Indian side, Kung-chiao Ho on the Chinese side, and is one of the significant rivers of the region. It originates near the Manasarowar Lake in Tibet. Stretching for 1080 kms, Karnali is an important tributary of the Ganges. This is specifically important to India, given the spiritual significance of the Ganges, as well as a large part of Karnali is in India. Total catchment area of Karnali being 127,950 sq km of which 45% is in India. Ghagra River passes through Nepal where it is known as Karnali or Kauriala. It joins the Ganges at Chapra in Bihar. This river is the main source of water in Bara-Banki District of Uttar Pradesh. Rapti, Little Gandak, Sarda and Sarju are the major tributaries of this river.",
					navText: "Follow the River"
				},
				position: { x: 10, y: 10 },
				choiceNodeArrow: "top"
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
