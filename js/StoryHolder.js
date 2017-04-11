var StoryHolder = {} || StoryHolder;

StoryHolder.story1 = {
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
				position: { x: 0, y: 20 },
				type: "hand"
			},
			{
				pointsTo:"INTRODUCTION",
				displayText: {
					title: "Kathmandu",
					description: "Your host had told you about the mythic history of the city–According to Swayambhu Purana, present-day Kathmandu was once a huge and deep lake named Nagdaha – as it was full of snakes. The lake was drained by Bodhisatwa Manjusri with his sword, and the water removed from it. After sometime, a demon named Banasur closed the outlet, and the valley was again a lake. Then lord Krishna came to Nepal, killed Banasur, and again drained out the water. ",
					navText: ""
				},
				position: { x: 0, y: 40 },
				type: "symbol"
			}
		],
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
					description: "Kathmandu is a capital city in the global south. Tradition and modernity walk hand in hand there, and you were both amazed and overwhelmed by the bustling metropolis. While you were in Kathmandu, you couldn’t wait to leave. But now, in this isolated stretch of road, you can’t help but feel wistful about that chaotic calm of the big city.",
					navText: "Return to Kathmandu"
				},
				position: { x: -30, y: 40 },
				type: "tree"
			},
			{
				pointsTo: "afterSimikot",
				displayText: {
					title: "Leave Simikot",
					description: "You’ve been studying this mountain for so long that you stopped believing you’d ever see it. Not in this life, at least! Ever since you heard about Kailash, you have been captivated. A student of geology, this region fascinates you. You have not stopped scribbling notes in your diary: <br> <i>Wide scale faulting of metamorphosed late Cretaceous to mid Cenozoic sedimentary rocks which have been intruded by igneous Cenozoic granitic rocks.</i>",
					navText: "Follow the Path"
				},
				position: { x: -10, y: 60 },
				type: "tower"
			}
		],
		backgroundImage: "simikot.jpg"
	},
	afterSimikot: {
		id: 3,
		title: "Path out of Simikot",
		textnodes: [
			"You are going to make the journey from Simikot to Hilsa this week. It’s supposed to be quiet and beautiful, just what you want. You are curious to gather some samples of the sedimentary rocks that line this region. "
		],
		choices: [
			{
				pointsTo: "simikot",
				displayText: {
					title: "Back to Simikot",
					description: "All this feels like too much too soon. Perhaps it&rsquo;s best to return to Simikot, maybe fly back to Kathmandu, to the familiar noise and chaos of urban cities in the global south. ",
					navText: "Return to Simikot"
				},
				position: { x: 40, y: 10 },
				choiceNodeArrow: "left"
			},
			{
				pointsTo: "karnaliRiver",
				displayText: {
					title: "Karnali River",
					description: "Karnali River has many names; it is called Ghagra on the Indian side, Kung-chiao Ho on the Chinese side, and is one of the significant rivers of the region. It originates near the Manasarowar Lake in Tibet. Stretching for 1080 kms, Karnali is an important tributary of the Ganges. This is specifically important to India, given the spiritual significance of the Ganges, as well as a large part of Karnali is in India. Total catchment area of Karnali being 127,950 sq km of which 45% is in India. Ghagra River passes through Nepal where it is known as Karnali or Kauriala. It joins the Ganges at Chapra in Bihar. This river is the main source of water in Bara-Banki District of Uttar Pradesh. Rapti, Little Gandak, Sarda and Sarju are the major tributaries of this river.",
					navText: "Follow the River"
				},
				position: { x: 10, y: 10 },
				choiceNodeArrow: "top"
			},
			{
				pointsTo: "roadToHilsa",
				displayText: {
					title: "Hilsa",
					description: "Hilsa, your destination, is a town on the northwestern corner of Nepal bordering Tibet Autonomous Region (China) where the Humla Karnali crosses from the Tibetan Plateau into the mountain regions on its descent to the Ganges. Hilsa is in Humla District, Karnali Zone facing Burang County, Ngari the westernmost prefecture of the T.A.R.",
					navText: "Continue to Hilsa"
				},
				position: { x: 10, y: 23 },
				choiceNodeArrow: "right"
			}
		],
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
		backgroundImage: "stones2.jpg"
	}
}
// ———————— ———————— ———————— ———————— ———————— ———————— ————————  NAVIGATION NODES
StoryHolder.visitedNodes = {}; // we'll use this if we want to prevent backtracking. 

// ———————— ———————— ———————— ———————— ———————— ———————— ————————  MAP

StoryHolder.map = {
	/*INTRODUCTION: {
		position: { x: 0, y: 200 },
		label: "Standing Stones",
		found: false
	},
	stone2: {
		position: { x: 0, y: -100 },
		label: "Standing Stones",
		found: false
	},
	stone3: {
		position: { x: 40, y: 0 },
		label: "Standing Stones",
		found: false
	}*/
}
/*
Notes: 
	Animation from left=>right
	Altitude meter
	Altitude for each place
	Interactive Elements: Cairns
	Map:
		Position
		Unlockable pieces
		Overlay
		player position on map
		navigational
*/
