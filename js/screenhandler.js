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
	ScreenHandler.gotoStoryNode("stone1");
	ScreenHandler.storyOverlay = $("#storyOverlay");
	$("#descriptionBox").on("click", function() {
		$(this).toggleClass("opened");
	});
});

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
	console.log("story node " + StoryHolder.story1[_id].title);
	console.log(ScreenHandler.imageArray[_id].src);

	//switch out image
	$(".fullpage").css("background-image", "url("+ScreenHandler.imageArray[_id].src+")");

	$("#descriptionBox").children("h1").text(StoryHolder.story1[_id].title);

	//cycle through text nodes. Displayed under the title
	var tNodeNum = 0;
	var tNodeTotal = StoryHolder.story1[_id].textnodes.length;
	$("#descriptionBox").children("p").text(StoryHolder.story1[_id].textnodes[tNodeNum]);
	$("#descriptionBox").children("p").on("click", function (){
		tNodeNum++;
		tNodeNum %= tNodeTotal;
		$(this).text(StoryHolder.story1[_id].textnodes[ tNodeNum ])
	});

	//hide all choice nodes
	$(".choiceNode").remove();

	//display each choice node:
	$.each(StoryHolder.story1[_id].choices, function (index, value) {
		ScreenHandler.spawnChoiceNode(value);
	});
	$(".choiceNode").on("click", function () {
		ScreenHandler.openOverlay( $(this).attr("data-story"), $(this).attr("data-navigation-goto") );
		ScreenHandler.storyOverlay.on("click", function () { ScreenHandler.closeOverlay();});
	});
}

ScreenHandler.spawnChoiceNode = function( _nodeData ) {
	/*
		node data looks like this:
		{
			pointsTo: [string to another story Node],
			displayText: [string to display],
			position: {int x, int y}
		}
	*/
	var _html = "<div class='choiceNode' data-navigation-goto='";
	_html += _nodeData.pointsTo + "' style='left:";
	_html += _nodeData.position.x + "px; top:"+_nodeData.position.y+"px;'>";
	_html += _nodeData.displayText + "</div>";
	$(".current").append(_html);
}

ScreenHandler.openOverlay = function ( _storyText, _gotoHere) {
	this.storyOverlay.css("display", "table");
	$textHolder = $("#textHolder");
	$textHolder.children("h1").text(_storyText);
	$textHolder.children(".navigation").on("click", function(event) {
		event.preventDefault();
		ScreenHandler.gotoStoryNode( $(this).attr("data-navigation-goto")) ;
	});
}

ScreenHandler.closeOverlay = function () {
	ScreenHandler.storyOverlay.css("display", "none");
}

ScreenHandler.preload = function() {
	var loader = new PxLoader();
	ScreenHandler.imageArray = []; // stores an img object in an associative array
	//each key is the name of a storynode.
	// if we do other stories, we'll have to create a preload for those stories as well
	$.each(Object.keys(StoryHolder.story1), function (index, value) {
		// story1.stone1.backgroundImage;
		ScreenHandler.imageArray[value] = loader.addImage("images/"+StoryHolder.story1[value].backgroundImage);
	});
	console.log(ScreenHandler.imageArray);
	// console.log( Object.keys(StoryHolder.story1));
	//imageArray[""] = loader.addImage('images/headerbg.jpg');
	
	loader.start();
};











