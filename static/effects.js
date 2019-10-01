// Get the canvas element from our HTML above
let canvas = document.getElementById("renderCanvas");

// Load the BABYLON 3D engine
let engine = new BABYLON.Engine(canvas);

// Create a scene
let createScene = function() {
  // Now create a basic Babylon Scene object
  let scene = new BABYLON.Scene(engine);

  // Change the scene background color to black.
  scene.clearColor = new BABYLON.Color3(0, 0, 0);
  var light0 = new BABYLON.PointLight(
    "Omni",
    new BABYLON.Vector3(0, 2, 8),
    scene
  );
  var camera = new BABYLON.ArcRotateCamera(
    "ArcRotateCamera",
    1,
    0.8,
    20,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,1.5 - to the sky.
  let light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 1.5),
    scene
  );
  // Dim the light a small amount
  light.intensity = 0.4;
  BABYLON.Mesh.CreateGround("ground", 12, 12, 12, scene);


  return scene;
};

let genLava = function(scene){
  // var sphere = BABYLON.Mesh.CreateGround("ground", 500, 500, 100, scene);

  return scene;
}

// create a scene
var scene = createScene();

//add lava to scene
scene = genLava(scene);

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
  scene.render();
});

// Watch for window resize events
window.addEventListener("resize", function() {
  engine.resize();
});
