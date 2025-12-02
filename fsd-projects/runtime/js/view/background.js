var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'green');// draws a rectangle and stores it in backgroundFill
            background.addChild(backgroundFill);//add background fill to the background object
            
            // TODO 2: - Add a moon and starfield
            
            for(var i = 0; i< 50; i++){
            var circle = draw.circle(1, "white", "LightGray", 2);// creates a circle  with a specified radius bordercolor, fill color, and alpha(opacity) stores it in the variablw
            circle.x = canvasWidth * Math.random();// sets a random x position with in canvas width
            circle.y = groundY * Math.random();// sets a random y position with in ground y
            background.addChild(circle);// makes us see the stars
            }

            var moon = draw.bitmap("img/moon.png");//creates a bit mat object using the moon image and stores it in the variable moon
            moon.x = canvas.width - 400;// sets the moon x position
            moon.y = groundY - 400;//sets the moons y position
            moon.scaleX = 0.75;// scales the moons width
            moon.scaleY = 0.75;// scales the moons height
            background.addChild(moon);// adds the moon to the prodject

            
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; ++i) {// creates five buildings
                var buildingColors = ["Red", "Blue", "Black", "Purple", "Orange" ];// store color variables
                var buildingHeight = 300 * Math.random(200, 700);// store the value that represents the height
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);//draws a rectangle and uses the arguemants to make a building 
                building.x = 400 * i;// gives it an x value
                building.y = groundY - buildingHeight;// gives tha building a y value by subtracting ground y by building height
                background.addChild(building);// takes the building and adds it to the bacground
                buildings.push(building);// takes that building and pushes it to the building array to be stored
            }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");//created a bitmat image using a tree image and stores it in the tree variable
            tree.x = 600;//sets the x value of the tree
            tree.y = groundY - 230;//sets the y value of the tree
            background.addChild(tree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 3;// moves the tree to the left be subtracting from it current x position
            
            // checks if the tree has gone to the left an resets it
            if (tree.x < -200) {
             tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];//it puls out a building from a building array and places it in the variable
                building.x -=1;//takes a building subtracts the x value to make it move
                if(building.x < -200){//it checcks to see if the building has run off the screen and if it has it puts it at the right side
                    building.x = canvas.width;
                }
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
