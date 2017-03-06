var ScreenHandler = ScreenHandler || {};

$(document).ready( function(){
	ScreenHandler.preload();

	//old method
	/*$(".navigation").on("click", function() {
		$(this).parent(".fullpage").addClass("hidden");
		$(this).parent(".fullpage").removeClass("current");
		$("#" + $(this).attr("data-navigation-goto") ).removeClass("hidden");
		$("#" + $(this).attr("data-navigation-goto") ),addClass("current");
	});*/
	// ————— ————— ————— ————— ————— ————— ————— Story Overlay Control
	ScreenHandler.storyOverlay = $("#storyOverlay");
	ScreenHandler.storyOverlay.on("click", function () { 
		ScreenHandler.closeOverlay();
	});
	// ————— ————— ————— ————— ————— ————— ————— Overlay Controls
	ScreenHandler.mapOverlay = $("#mapOverlay");
	ScreenHandler.mapOverlay.on("click", function() {
		ScreenHandler.closeMapOverlay();
	});

	// —————————————— —————————————— —————————————— Add Click Handlers
	$("#mapButton").on("click", function() {
		$(this).toggleClass("opened");
	});
	$("#showMap").on("click", function () {
		ScreenHandler.openMapOverlay();
	});
	$("#showAbout").on("click", function () {
		ScreenHandler.openAboutOverlay();
	});
	$("#aboutOverlay").on("click", function() {
		ScreenHandler.closeAboutOverlay();
	});
	$("#fieldGuideInformationButton").on("click", function() {
		$("#descriptionBox").toggleClass("opened");
	});
	$("#restart").on("click", function () {
		window.location.reload();
	});
	$("#bottomNavigation").on("click", function(){
		ScreenHandler.openOverlay($(this), true);
	});
});

// —————————————— —————————————— —————————————— ——————————————  Story Node Handling
var firstTime = true;
ScreenHandler.gotoStoryNode = function( _id ){
	// used to display text from a story node
	/* story nodes look like this:
		StoryHolder.story1[_id]: {
			id: int,
			title: string,
			textnodes: [ string, string ],
			choices: { objects },
			backgroundImage: string
		}
	*/
	// console.log("story node " + StoryHolder.story1[_id].title);
	// console.log(ScreenHandler.imageArray[_id].src);
	if (firstTime) {
		firstTime = false;
		var $firstNode = $("#bottomNavigation .node").first();
		$firstNode.attr("data-navigation-goto", "INTRODUCTION");
		$firstNode.attr("data-navigationText", "Kathmandu");
		$firstNode.addClass("visited");
	} else {
		/* 
		right now, every place you visit becomes a node, even if you go backwards. 
		This is the easier version to code. To test earlier visits, we'll have to put in some more functionality
		*/
		var $firstNode = $("#bottomNavigation .visited").next();
		$firstNode.attr("data-navigation-goto", _id);
		$firstNode.attr("data-navigationText", StoryHolder.story1[_id].title);
		$firstNode.addClass("visited");
	}

	//switch out image
	$(".fullpage").css("background-image", "url("+ScreenHandler.imageArray[_id].src+")");
	// close description box if necessary 
	$("#descriptionBox").removeClass("opened");
	// --------------------------------------------------- Handle Description Text
	var _html = "<h1>"+StoryHolder.story1[_id].title+"</h1>";
	$.each(StoryHolder.story1[_id].textnodes, function(index, value) {
		_html += "<p>"+value+"</p>";
	});
	$("#descriptionBox").html(_html);
	// --------------------------------------------------- Handle Choice Nodes
	//hide all choice nodes
	$(".choiceNode").remove();
	//display each choice node:
	$.each(StoryHolder.story1[_id].choices, function (index, value) {
		ScreenHandler.spawnChoiceNode(value);
	});
	$(".choiceNode").on("click", function () {
		ScreenHandler.openOverlay( $(this) );
	});

	// —————————————————————————————————————————————————— Update Visited Nodes
	if (StoryHolder.map[_id] != undefined) StoryHolder.map[_id].found = true;
}

ScreenHandler.spawnChoiceNode = function( _nodeData ) {
	/* node data looks like this: {
		pointsTo: [string to another story Node],
		displayText: {
			title: [string to display],
			description: [longer paragraph],
			navText: [string for link]
		},
		position: {int x, int y}
	}*/
	// console.log(_nodeData.displayText);
	var _html = "<div class='choiceNode' data-navigation-goto='";
	_html += _nodeData.pointsTo + "' data-node-description='";
	_html += _nodeData.displayText.description;
	console.log(_nodeData.displayText.navText);
	_html += "' data-navigationText='" + _nodeData.displayText.navText + "' style='left:";
	_html += _nodeData.position.x + "%; top:"+_nodeData.position.y+"%;'>";
	_html += _nodeData.displayText.title;
	_html += "<div class='choiceNodeArrow position-"+ _nodeData.choiceNodeArrow +"'></div></div>";
	$(".current").append(_html);
}
// ————— ————— ————— ————— ————— ————— ————— Story Overlay Control
ScreenHandler.openOverlay = function ( _clickedNode, navigationNode ) {
	var isNavNode = (navigationNode === true);
	$("#descriptionBox").removeClass("opened");
	console.log(_clickedNode);
	this.storyOverlay.css("display", "table");
	var _html = (isNavNode) ? "<h1>Travel Back?</h1>" :"<h1>" + _clickedNode.text() + "</h1>";
	_html += (isNavNode) ? "" : "<p>" + _clickedNode.attr("data-node-description") + "</p>";
	if (_clickedNode.attr("data-navigationText") != undefined) {
		_html += "<a class='navigation' href=#>";
		_html += (isNavNode) ? "Return to " + _clickedNode.attr("data-navigationText") : _clickedNode.attr("data-navigationText");
		_html += "</a>";
	}
	
	$("#storyTextHolder").html(_html);

	$("#storyTextHolder").children(".navigation").on("click", function(event) {
		ScreenHandler.gotoStoryNode( _clickedNode.attr("data-navigation-goto") ) ;
	});
}

ScreenHandler.closeOverlay = function () {
	// console.log("closeOverlay");
	$("#storyTextHolder").children(".navigation").off("click");
	ScreenHandler.storyOverlay.css("display", "none");
}

// ————— ————— ————— ————— ————— ————— ————— About Overlay Control

ScreenHandler.openAboutOverlay = function() {
	$("#aboutOverlay").css("display", "table");
}
ScreenHandler.closeAboutOverlay = function() {
	$("#aboutOverlay").css("display", "none");
}

// ————— ————— ————— ————— ————— ————— ————— Map Overlay Control

ScreenHandler.openMapOverlay = function() {
	ScreenHandler.mapOverlay.css("display", "table");
	this.addMapNodes();
}
ScreenHandler.closeMapOverlay = function() {
	ScreenHandler.mapOverlay.css("display", "none");	
}
ScreenHandler.addMapNodes = function() {
	var navMap = $("#navigationMap");
	$(".mapNode").remove();//empty the container
	$.each(StoryHolder.map, function (index, value) {
		console.log(value + " " + index);
		if(value.found == true) {
			var _html = "<div class='mapNode' style='left:";
			_html += value.position.x + "px; top: " + value.position.y + "px;"
			_html += "' data-navigation-goto='"+index+"'><span>"+ value.label +"</span></div>";
			navMap.append(_html);
		}
	});
	$(".mapNode").on("click", function() {
		ScreenHandler.gotoStoryNode( $(this).attr("data-navigation-goto") );
	});
}

// ————— ————— ————— ————— ————— ————— ————— Preloader

ScreenHandler.preload = function() {
	var loader = new PxLoader();
	var loaderDisplay = $("#loadingProgress span");
	ScreenHandler.imageArray = []; 
	// stores an img object in an associative array
	//each key is the name of a storynode.
	// if we do other stories, we'll have to create a preload for those stories as well
	$.each(Object.keys(StoryHolder.story1), function (index, value) {
		// story1.stone1.backgroundImage;
		ScreenHandler.imageArray[value] = loader.addImage("images/"+StoryHolder.story1[value].backgroundImage);
	});
	// console.log(ScreenHandler.imageArray);
	
	loader.addProgressListener(function(e) { 
		loaderDisplay.text(Math.round( e.completedCount/e.totalCount * 100));
	    // console.log(e.resource.getName()); 
	}); 

	// ———————————————— ———————————————— ———————————————— ———————————————— ———————————————— ————————————————  LOAD COMPLETION Script

	loader.addCompletionListener( function () {
		$("#loadingProgress").html("<a id='beginJourney' href=#>Begin Your Journey</a>");
		$("#beginJourney").on("click", function() {
			ScreenHandler.storyOverlay.css("display", "table");
			var _html = "";
			_html += "<p>&#8220;Kailash is not a Mountain to climb physically in this life; it is a holy mountain to climb metaphorically for spiritual transformation&#8221;</p>";
			_html += "<p>– Tshewang Lama</p>";
			
			$("#storyTextHolder").html(_html);
			window.setTimeout( function () {
				//auto advance
				ScreenHandler.storyOverlay.fadeOut();
				ScreenHandler.gotoStoryNode("INTRODUCTION");
				$("#fieldGuideInformationButton").show();
			}, 40);
			$("#loadingScreen").remove();
			$("#mapButton").removeClass("hidden");
			$(".current").removeClass("hidden");
		});
	});

	loader.start();
};











