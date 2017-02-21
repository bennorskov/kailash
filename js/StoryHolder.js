var StoryHolder = {} || StoryHolder;

StoryHolder.story1 = {
	stone1: {
		id: 1,
		title: "Stack of Stones",
		textnodes: [
			"Hello, this is displayed first",
			"This is displayed second",
			"Stares at human while pushing stuff off a table russian blue friends are not food yet cats making all the muffins sniff other cat's butt and hang jaw half open thereafter. I cry and cry and cry unless you pet me, and then maybe i cry just for fun. Lies down hiss at vacuum cleaner purrr purr littel cat, little cat purr purr yet sleep on dog bed, force dog to sleep on floor and brown cats with pink ears. ",
			"Stepping through the story",
			"and some more stuff"
		],
		choices: [
			{
				pointsTo: "stone2",
				displayText: {
					title: "Path to Stone 2",
					description: "A path leading off into the distance. It seems to go to Stone 2.",
					navText: "Follow the Path"
				},
				position: { x: 0, y: 200 },
				choiceNodeArrow: "top"
			},
			{
				pointsTo: "stone3",
				displayText: {
					title: "Path to Stone 3",
					description: "A path leading off into the distance. It seems to go to Stone 3.",
					navText: "Follow the Path"
				},
				position: { x: -20, y: 300 },
				choiceNodeArrow: "right"
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
				displayText: {
					title: "Path to Stone 1",
					description: "Go back the way you came",
					navText: "Follow the Path"
				},
				position: { x: 40, y: 200 },
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
				displayText: {
					title: "Path to Stone 1",
					description: "Go back the way you came",
					navText: "Follow the Path"
				},
				position: { x: 40, y: 100 },
				choiceNodeArrow: "bottom"
			}
		],
		backgroundImage: "stones3.jpg"
	}
}

// ———————— ———————— ———————— ———————— ———————— ———————— ————————  MAP

StoryHolder.map = {
	stone1: {
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
