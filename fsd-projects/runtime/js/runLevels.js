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
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    function createObstacle(x, y , damage, rotation, image, offsetX, offsetY, sizeX, sizeY, hitZone) {
      var hitZoneSize = hitZone; //where it colodes with hally
      var damageFromObstacle = damage;// how much damage it takes
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the hitzone size and how much damage it should deal and stores it in the variable
      obstacleHitZone.x = x;//sets the x position
      obstacleHitZone.y = y;//sets the y position
      game.addGameItem(obstacleHitZone);// adds the obstacle to the game
      var obstacleImage = draw.bitmap(image);// draws the sawblade image as a bitmat and stores it as an obstacle image
      obstacleHitZone.addChild(obstacleImage);// takes the picture and adds it to the hit zone
      obstacleImage.x = offsetX;// offsets the image horozantaly relative to the hit zone
      obstacleImage.y = offsetY;// offsets the image verticaly relative to the hit zone
      obstacleImage.scaleX = sizeX;
      obstacleImage.scaleY = sizeY;
      
      obstacleHitZone.rotationalVelocity = rotation;
    }

    
    
    
    
    function createEnemy(x, y, hitZoneSize, image, offsetX, offsetY, sizeX, sizeY, speed, damage, points){
    var enemy = game.createGameItem("enemy", hitZoneSize);//creates enemy and makes the hit bot 25
    var enemyImage = draw.bitmap(image);// draws the image of the image and stores into the varaiable
    enemyImage.x = offsetX;//horizontal offset from the image to the hit zone
    enemyImage.y = offsetY;//vertical offset from the image to the hit zone
    enemy.addChild(enemyImage);//attatches the image to the enemy object 
    enemy.x = x;//sets the x position
    enemy.y = y;//sets the y position
    game.addGameItem(enemy);//add the enemy to the game
    enemyImage.scaleX = sizeX;
    enemyImage.scaleY = sizeY;

    enemy.velocityX -= speed;//moving the enemy across the screen
//handles when halle colides with enemy
    enemy.onPlayerCollision = function(){
        game.changeIntegrity(-damage)//reduces player health
      }
//handle swhen halle shoots the enemy
      enemy.onProjectileCollision = function(){
        game.increaseScore(+points);//increases the player score
        enemy.fadeOut();//fades out the enemy when shot
    }
    }


    function createReward(x, y, hitZoneSize, image, offsetX, offsetY, sizeX, sizeY, speed, healthGained, points){
    var reward = game.createGameItem("reward", hitZoneSize);//creates reward and makes the hit bot 25
    var rewardImage = draw.bitmap(image);// draws the image of the image and stores into the varaiable
    rewardImage.x = offsetX;//horizontal offset from the image to the hit zone
    rewardImage.y = offsetY;//vertical offset from the image to the hit zone
    reward.addChild(rewardImage);//attatches the image to the reward object 
    reward.x = x;//sets the x position
    reward.y = y;//sets the y position
    game.addGameItem(reward);//add the reward to the game
    rewardImage.scaleX = sizeX;
    rewardImage.scaleY = sizeY;

    reward.velocityX -= speed;//moving the reward across the screen
//handles when halle colides with reward
    reward.onPlayerCollision = function(){
        game.changeIntegrity(+healthGained)//increaces player health
        game.increaseScore(+points);//increases the player score
        reward.fadeOut();//fades out the reward when shot
    }
    }




    function createLevelMarker(x, y, hitZoneSize, image, offsetX, offsetY, sizeX, sizeY, speed, healthGained){
    var levelMarker = game.createGameItem("level", hitZoneSize);//creates level and makes the hit bot 25
    var levelImage = draw.bitmap(image);// draws the image of the image and stores into the varaiable
    levelImage.x = offsetX;//horizontal offset from the image to the hit zone
    levelImage.y = offsetY;//vertical offset from the image to the hit zone
    levelMarker.addChild(levelImage);//attatches the image to the level object 
    levelMarker.x = x;//sets the x position
    levelMarker.y = y;//sets the y position
    game.addGameItem(levelMarker);//add the level to the game
    levelImage.scaleX = sizeX;
    levelImage.scaleY = sizeY;

    levelMarker.velocityX -= speed;//moving the level across the screen
//handles when halle colides with level
    levelMarker.onPlayerCollision = function(){
      levelMarker.fadeOut();//fades out the level when shot
      startLevel();// changes level
      game.changeIntegrity(+healthGained)//IncreACES player health
    }
    }



    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];//fetches the current level from the level data array and stores it in our current level array
      var levelObjects = level.gameItems;// retrieve the array of game items and stores it in the level obect variable
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.rotation, element.image, element.offsetX, element.offsetY , element.sizeX, element.sizeY, element.hitZone);
        };
        if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.hitZoneSize, element.image, element.offsetX, element.offsetY, element.sizeX, element.sizeY, element.speed, element.damage, element.points);
        };
        if(element.type === "reward"){
          createReward(element.x, element.y, element.hitZoneSize, element.image, element.offsetX, element.offsetY, element.sizeX, element.sizeY, element.speed, element.healthGained, element.points);
        };//x, y, hitZoneSize, image, offsetX, offsetY, sizeX, sizeY, speed, healthGained, points
        if(element.type === "level marker"){
          createLevelMarker(element.x, element.y, element.hitZoneSize, element.image, element.offsetX, element.offsetY, element.sizeX, element.sizeY, element.speed, element.healthGained);
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
