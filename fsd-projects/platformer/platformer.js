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
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500,525,70,40, "red");
    createPlatform(300,525,70,40, "green");
    createPlatform(700,400,70,40, "yellow");
    createPlatform(1000,400,60,30, "orange");
    createPlatform(1300,300,100,90, "white");




    // TODO 3 - Create Collectables
    createCollectable("steve", 350, 500);
    createCollectable("steve", 550, 500);
    createCollectable("steve", 700, 300);
    createCollectable("steve", 1000, 300);
    createCollectable("steve", 1300, 200);
    createCollectable("steve", 400, 600);
    createCollectable("steve", 600, 600);
    createCollectable("steve", 1300, 500);




    
    // TODO 4 - Create Cannons
    createCannon("top", 350, 1000);
    createCannon("right", 600, 2000);
    createCannon("left", 400, 2500);
    createCannon("left", 200, 2500);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
