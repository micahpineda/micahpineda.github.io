var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createObstacle(x, y , damage) {
      var hitZoneSize = 25; //where it colodes with hally
      var damageFromObstacle = damage;// how much damage it takes
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the hitzone size and how much damage it should deal and stores it in the variable
      obstacleHitZone.x = x;//sets the x position
      obstacleHitZone.y = y;//sets the y position
      game.addGameItem(obstacleHitZone);// adds the obstacle to the game
      var obstacleImage = draw.bitmap("img/sawblade.png");// draws the sawblade image as a bitmat and stores it as an obstacle image
      obstacleHitZone.addChild(obstacleImage);// takes the picture and adds it to the hit zone
      obstacleImage.x = -25;// offsets the image horozantaly relative to the hit zone
      obstacleImage.y = -25;// offsets the image verticaly relative to the hit zone
      obstacleHitZone.rotationalVelocity = 10;
    }

    
    
    
    
    function createEnemy(x, y){
    var enemy = game.createGameItem("enemy", 25);//creates enemy and makes the hit bot 25
    var enemyImage = draw.rect(50, 50, "red");// draws the image of the image and stores into the varaiable
    enemyImage.x = -25;//horizontal offset from the image to the hit zone
    enemyImage.y = -25;//vertical offset from the image to the hit zone
    enemy.addChild(enemyImage);//attatches the image to the enemy object 
    enemy.x = x;//sets the x position
    enemy.y = y;//sets the y position
    game.addGameItem(enemy);//add the enemy to the game

    enemy.velocityX -=3;//moving the enemy across the screen
//handles when halle colides with enemy
    enemy.onPlayerCollision = function(){
        game.changeIntegrity(-10)//reduces player health
      }
//handle swhen halle shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(100);//increases the player score
        enemy.fadeOut();//fades out the enemy when shot
    }
    }

    createEnemy(500, groundY - 50);
    createEnemy(900, groundY - 50);

    function createReward(x, y){
    var reward = game.createGameItem("reward", 25);//creates reward and makes the hit bot 25
    var rewardImage = draw.rect(50, 50, "blue");// draws the image of the image and stores into the varaiable
    rewardImage.x = -25;//horizontal offset from the image to the hit zone
    rewardImage.y = -25;//vertical offset from the image to the hit zone
    reward.addChild(rewardImage);//attatches the image to the reward object 
    reward.x = x;//sets the x position
    reward.y = y;//sets the y position
    game.addGameItem(reward);//add the reward to the game

    reward.velocityX -=2;//moving the reward across the screen
//handles when halle colides with reward
    reward.onPlayerCollision = function(){
        game.changeIntegrity(+10)//reduces player health
        game.increaseScore(100);//increases the player score
        reward.fadeOut();//fades out the reward when shot
    }
    }

    createReward(1200, groundY - 100);
    createReward(1400, groundY - 100);
    createReward(1600, groundY - 100);



    function createLevelMarker(x, y){
    var levelMarker = game.createGameItem("level", 25);//creates level and makes the hit bot 25
    var levelImage = draw.rect(50, 50, "yellow");// draws the image of the image and stores into the varaiable
    levelImage.x = -25;//horizontal offset from the image to the hit zone
    levelImage.y = -25;//vertical offset from the image to the hit zone
    levelMarker.addChild(levelImage);//attatches the image to the level object 
    levelMarker.x = x;//sets the x position
    levelMarker.y = y;//sets the y position
    game.addGameItem(levelMarker);//add the level to the game

    levelMarker.velocityX -=2;//moving the level across the screen
//handles when halle colides with level
    levelMarker.onPlayerCollision = function(){
      levelMarker.fadeOut();//fades out the level when shot
      startLevel();// changes level
      game.changeIntegrity(+100)//reduces player health
    }
    }

    createLevelMarker(1800, groundY - 50)


    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];//fetches the current level from the level data array and stores it in our current level array
      var levelObjects = level.gameItems;// retrieve the array of game items and stores it in the level obect variable
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage);
        }
    }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
