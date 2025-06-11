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
    createPlatform(500, 600, 50, 8,"black");
    createPlatform(480, 420, 50, 8,"black");
    createPlatform(730, 508, 50, 8, "black");
    createPlatform(1000, 248, 200, 50, "black");
    createPlatform(100, 300, 200, 20, "black");
    createPlatform(500, 200, 90, 20,"black");
    createPlatform(760, 300, 50, 8,"black");
    createPlatform(1300,600, 50, 8,"black");
    createPlatform(900, 210, 50, 8,"black");



    // TODO 3 - Create Collectables
    createCollectable("database", 490, 380),
    createCollectable("database", 1100, 210,)
    createCollectable("database", 1310, 560,)



    
    // TODO 4 - Create Cannons
    createCannon("top", 500, 400);
    createCannon("left", 650, 800);
    createCannon("right", 230, 800)
    createCannon("right", 770, 800)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
