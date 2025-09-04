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
    toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(300, 650, 200, 10);
  createPlatform(550, 550, 200, 10);
  createPlatform(700, 450, 200, 10);
  createPlatform(800, 350, 200, 10);
  createPlatform(500, 250, 200, 10);



    // TODO 3 - Create Collectables
    createCollectable("max", 300 , 300 , 0.9, 0.7);
    createCollectable("max", 10 , 300 , 0.9, 0.7);
    createCollectable("max", 600 , 200 , 0.9, 0.7);
    createCollectable("max", 900 , 300 , 0.9, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("left", 400, 1000);
    createCannon("top", 550, 1000);
    createCannon("right", 200, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
