$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(300, 650, 200, 10, "red");
  createPlatform(600, 350, 400, 10, "white");
  createPlatform(200, 450, 200, 10, "blue");
  createPlatform(1100, 250, 200, 10, "green");
  createPlatform(600, 550, 200, 10, "gold");
  createPlatform(1250, 450, 150, 10, "purple");
  createPlatform(1250, 350, 10, 100, "brown");
  createPlatform(950, 550, 200, 10, "black");




    // TODO 3 - Create Collectables
    createCollectable("pelicans", 300 , 300 , 0.9, 0.7);
    createCollectable("saints", 1300 , 300 , 0.9, 0.7);
    createCollectable("crawFish", 600 , 200 , 0.9, 0.7);
    createCollectable("flag", 900 , 300 , 0.9, 0.7);
    createCollectable("state", 1050 , 300 , 0.9, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("left", 250, 1000);
    createCannon("top", 250, 1000);
    createCannon("bottom", 500, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
