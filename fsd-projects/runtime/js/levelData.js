var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 120, damage: 10, rotation: 0, image: "img/arrow.png", offsetX: -50, offsetY: -40, sizeX: 0.1, sizeY: 0.09, hitZone: 40},
          { type: "obstacle", x: 600, y: groundY - 10, damage: 20, rotation: 0, image: "img/arrow.png", offsetX: -50, offsetY: -40, sizeX: 0.1, sizeY: 0.09, hitZone: 40},
          { type: "obstacle", x: 800, y: groundY - 110, damage: 30, rotation: 0, image: "img/arrow.png", offsetX: -50, offsetY: -40, sizeX: 0.1, sizeY: 0.09, hitZone: 40},
          { type: "enemy", x: 400, y: groundY - 50, hitZoneSize: 25, image: "img/theRock.png", offsetX: -75, offsetY: -60, sizeX: 0.5, sizeY: 0.5, speed: 3, damage: 10, points: 100},
          { type: "enemy", x: 1900, y: groundY - 50, hitZoneSize: 25, image: "img/theRock.png", offsetX: -75, offsetY: -60, sizeX: 0.5, sizeY: 0.5, speed: 3, damage: 10, points: 100},
          { type: "enemy", x: 3000, y: groundY - 50, hitZoneSize: 25, image: "img/theRock.png", offsetX: -75, offsetY: -60, sizeX: 0.5, sizeY: 0.5, speed: 3, damage: 10, points: 100},
          { type: "reward", x: 600, y: groundY - 110, hitZoneSize: 25, image: "img/coin.png", offsetX: -29, offsetY: -26, sizeX: 0.25, sizeY: 0.25, speed: 2, healthGained: 10, points: 100},
          { type: "reward", x: 1000, y: groundY - 110, hitZoneSize: 25, image: "img/coin.png", offsetX: -29, offsetY: -26, sizeX: 0.25, sizeY: 0.25, speed: 2, healthGained: 10, points: 100},
          { type: "reward", x: 2500, y: groundY - 110, hitZoneSize: 25, image: "img/coin.png", offsetX: -29, offsetY: -26, sizeX: 0.25, sizeY: 0.25, speed: 2, healthGained: 10, points: 100},
          { type: "level marker", x: 3900, y: groundY - 110, hitZoneSize: 25, image: "img/portal.png", offsetX: -70, offsetY: -26, sizeX: 0.5, sizeY: 0.5, speed: 2, healthGained: 100},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY, damage:20, rotation: 0, image: "img/arrow.png", offsetX: -50, offsetY: -40, sizeX: 0.1, sizeY: 0.09, hitZone: 40},
          { type: "obstacle", x: 600, y: groundY, damage: 30, rotation: 0, image: "img/arrow.png", offsetX: -50, offsetY: -40, sizeX: 0.1, sizeY: 0.09, hitZone: 40},
          { type: "obstacle", x: 900, y: groundY, damage: 10, rotation: 0, image: "img/arrow.png", offsetX: -50, offsetY: -40, sizeX: 0.1, sizeY: 0.09, hitZone: 40},
          { type: "enemy", x: 400, y: groundY - 50, hitZoneSize: 25, image: "img/theRock.png", offsetX: -75, offsetY: -60, sizeX: 0.5, sizeY: 0.5, speed: 3, damage: 10, points: 100},
          { type: "enemy", x: 1900, y: groundY - 50, hitZoneSize: 25, image: "img/theRock.png", offsetX: -75, offsetY: -60, sizeX: 0.5, sizeY: 0.5, speed: 3, damage: 10, points: 100},
          { type: "enemy", x: 2500, y: groundY - 50, hitZoneSize: 25, image: "img/theRock.png", offsetX: -75, offsetY: -60, sizeX: 0.5, sizeY: 0.5, speed: 3, damage: 10, points: 100},
          { type: "reward", x: 600, y: groundY - 110, hitZoneSize: 25, image: "img/coin.png", offsetX: -29, offsetY: -26, sizeX: 0.25, sizeY: 0.25, speed: 2, healthGained: 10, points: 100},
          { type: "reward", x: 1000, y: groundY - 110, hitZoneSize: 25, image: "img/coin.png", offsetX: -29, offsetY: -26, sizeX: 0.25, sizeY: 0.25, speed: 2, healthGained: 10, points: 100},
          { type: "reward", x: 1500, y: groundY - 110, hitZoneSize: 25, image: "img/coin.png", offsetX: -29, offsetY: -26, sizeX: 0.25, sizeY: 0.25, speed: 2, healthGained: 10, points: 100},
          { type: "level marker", x: 3900, y: groundY - 110, hitZoneSize: 25, image: "img/portal.png", offsetX: -70, offsetY: -26, sizeX: 0.5, sizeY: 0.5, speed: 2, healthGained: 100},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
