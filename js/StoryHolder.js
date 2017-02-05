var StoryHolder = {} || StoryHolder;

StoryHolder.story1 = {
	stone1: {
		id: 1,
		title: "Stack of Stones",
		textnodes: [
			"Hello, this is displayed first",
			"This is displayed second",
			"This should be third",
			"Stepping through the story",
			"and some more stuff"
		],
		choices: [
			{
				pointsTo: "stone2",
				displayText: "Goto Stone 2",
				position: { x: 0, y: 300 }
			},
			{
				pointsTo: "stone3",
				displayText: "goto stone 3",
				position: { x: -20, y: 300 }
			}
		],
		backgroundImage: "stones1.jpg"
	},
	stone2: {
		id: 2,
		title: "Piles and Piles",
		textnodes: [
			"oh no, it's stone 2!"
		],
		choices: [
			{	
				pointsTo: "stone1",
				displayText: "back to stone 1",
				position: { x: 400, y: 300 }
			},
			{
				pointsTo: "stone3",
				displayText: "to stone 3",
				position: { x: 200, y: 300 }
			}
		],
		backgroundImage: "stones2.jpg"
	},
	stone3: {
		id: 3,
		title: "End of the trail",
		textnodes: [
			"this is the end"
		],
		choices: [
			{
				pointsTo: "stone1",
				displayText: "start Over",
				position: { x: 400, y: 100 }
			}
		],
		backgroundImage: "stones3.jpg"
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
