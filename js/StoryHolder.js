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
				position: { x: 0, y: 200 },
				choiceNodeArrow: "top"
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
					description: "Go back the way you came",
					navText: "Return to Kathmandu"
				},
				position: { x: -130, y: 400 },
				choiceNodeArrow: "left"
			},
			{
				pointsTo: "stone3",
				displayText: {
					title: "Path to Stone 3",
					description: "Onwards to stone 3!",
					navText: "Follow the Path"
				},
				position: { x: -100, y: 600 },
				choiceNodeArrow: "top"
			}
		],
		backgroundImage: "simikot.jpg"
	},
	stone3: {
		id: 3,
		title: "End of the trail",
		textnodes: [
			"this is the end"
		],
		choices: [
			{
				pointsTo: "INTRODUCTION",
				displayText: {
					title: "Path to Stone 1",
					description: "Go back the way you came",
					navText: "Follow the Path"
				},
				position: { x: 40, y: 100 },
				choiceNodeArrow: "bottom"
			}
		],
		backgroundImage: "cloudvalley.jpg"
	}
}

// ———————— ———————— ———————— ———————— ———————— ———————— ————————  MAP

StoryHolder.map = {
	INTRODUCTION: {
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
	}
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
