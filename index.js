var Game = {};
Game.canvas = {};


Game.canvas.sizeCanvas = function(){
	Game.canvas.canvas[0].width = document.body.clientWidth;
    Game.canvas.canvas[0].height = document.body.clientHeight;
};

//the initial startup function that inits everything for the render loop
Game.canvas.renderCanvas = function(){
	
	Game.canvas.backgroundImage = new Image();
	Game.canvas.backgroundImage.src = "image/map.jpg";
	
	Game.canvas.canvas = $("<canvas></canvas>");
	Game.canvas.sizeCanvas();
	$(document.body).append(Game.canvas.canvas);
	
	//Xia.canvas.canvas.bind("mousemove", Xia.canvas.trackMouse);
	//Xia.canvas.canvas.bind("mousedown", Xia.canvas.mouseDown);
	
	//$(window).bind("mouseup", function(event){
	//	Xia.canvas.mouseIsDown = false;
	//});
	
	//this will correct the canvas if the user decides to resize the window for anything
	$(window).bind("resize", Game.canvas.sizeCanvas);

	if(Game.canvas.canvas[0].getContext)
    {
        Game.canvas.c2 = Game.canvas.canvas[0].getContext('2d');
		
		Game.canvas.drawCanvasFrame();
    }
};

Game.canvas.drawCanvasFrame = function(){
	
	Game.canvas.c2.drawImage(Game.canvas.backgroundImage, 0, 0, Game.canvas.canvas[0].width, Game.canvas.canvas[0].height);
	
	/*var activeHexes = Xia.allHex;
	for(var i = 0; i < activeHexes.length; i++)
		activeHexes[i].renderInitial();//draw all hex "background" stuff
	
	var activeHexes = Xia.allHex;
	for(var i = 0; i < activeHexes.length; i++)
		activeHexes[i].renderFinal();//draw all hex "foreground" stuff
	
	var activeTiles = Xia.tile.activeTiles;
	for(var i = 0; i < activeTiles.length; i++)
		activeTiles[i].render();//draw all render material at the tile level
	*/
	
	setTimeout(Game.canvas.drawCanvasFrame, 30);
};

$(document).ready(function(){
	
	/*Xia.player.createPlayers();
	
	Xia.shuffleThings();
	
	Xia.tile.layOutStartingTiles();
	
	Xia.createPlayerDock();
	
	//Xia.playerSetup();
	Xia.automatePlayerSetup();*/
	
	Game.canvas.renderCanvas();
	
	
	
	//Xia.createShipTest();
	
	/*Xia.actionButton = $("<input type=\"button\" value=\"Enter Buy Mode\"/>");
	Xia.actionButton.bind("click", Xia.enterBuyMode);
	$(document.body).append(Xia.actionButton);
	
	Xia.actionButton2 = $("<input type=\"button\" style=\"display:none\" value=\"Place Part\"/>");
	Xia.actionButton2.bind("click", Xia.placePart);
	$(document.body).append(Xia.actionButton2);
	
	Xia.actionButton3 = $("<input type=\"button\" style=\"display:none\" value=\"Cancel Buy Mode\"/>");
	Xia.actionButton3.bind("click", Xia.cancelBuyMode);
	$(document.body).append(Xia.actionButton3);*/
	
});