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
  // This creates and positions a free camera
  // let camera = new BABYLON.FreeCamera(
  //   "camera",
  //   new BABYLON.Vector3(0, 7, -13),
  //   scene
  // );
  // // This targets the camera to scene origin
  // camera.setTarget(BABYLON.Vector3.Zero());
  // // This attaches the camera to the canvas
  // camera.attachControl(canvas, false);

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
  //   let cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene);
  //   // Move the cylinder  upward 1/2 its height
  //   cylinder.position.y = 2;
  // Let's create built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
  BABYLON.Mesh.CreateGround("ground", 12, 12, 12, scene);

  // Create a particle system
  var particleSystem = new BABYLON.ParticleSystem("particles", 10000, scene);

  //Texture of each particle
  particleSystem.particleTexture = new BABYLON.Texture(
    "../static/rainXLargeBgBlack.jpg",
    scene
  );

  // Where the particles come from
  // particleSystem.emitter = new BABYLON.Vector3(0, 0, 0); // the starting object, the emitter
  // particleSystem.minEmitBox = new BABYLON.Vector3(-0.5, -0.5, -0.5); // Starting all from
  // particleSystem.maxEmitBox = new BABYLON.Vector3(0.5, 0.5, 0.5); // To...

  particleSystem.emitter = new BABYLON.Vector3(0, 0, 0); // the starting object, the emitter

  particleSystem.minEmitBox = new BABYLON.Vector3(-10, 15, -10); // Starting all from
  particleSystem.maxEmitBox = new BABYLON.Vector3(10, 10, 10); // To...

  particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

  particleSystem.minScaleX = 0.01;
  particleSystem.maxScaleX = 0.01;

  particleSystem.minScaleY = 0.07;
  particleSystem.maxScaleY = 0.1;

  // particleSystem.minSize = 0.01;
  // particleSystem.maxSize = 0.05;

  particleSystem.emitRate = 2000;
  particleSystem.minEmitPower = -40;
  particleSystem.maxEmitPower = -40;
  particleSystem.updateSpeed = 0.005;

  // particleSystem.direction2 = new BABYLON.Vector3(0, 8, 0);

  // Start the particle system
  particleSystem.start();

  return scene;
};

// create a scene
var scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
  scene.render();
});

// Watch for window resize events
window.addEventListener("resize", function() {
  engine.resize();
});
