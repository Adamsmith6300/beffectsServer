// Get the canvas element from our HTML above
window.addEventListener("DOMContentLoaded", function(){
  // setTimeout(function(){ }, 5000);
  setupBabylonJS();
  
});

var setupBabylonJS = function(){
  var canvas = document.getElementById("renderCanvas");
  // Load the BABYLON 3D engine
  var engine = new BABYLON.Engine(canvas);
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 2, 150, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
	// Add lights to the scene
  // var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  var plane = BABYLON.MeshBuilder.CreatePlane("plane", {width: 100, size:100}, scene);
  

  // add lava to scene
  //scene, plane
  //directionX (+1 for right, -1 for left, null for no movement)
  //directionY (+1 for up, -1 for down, null for no movement)
  //speed,tilesize
  scene = createLava(scene, plane, 1, 1, 1, 1);

  // Register a render loop to repeatedly render the scene
  engine.runRenderLoop(function() {
    scene.render();
  });
  // Watch for window resize events
  window.addEventListener("resize", function() {
    engine.resize();
  });
}


var createLava = function (scene, plane, directionX, directionY, speed, tilesize) {

  var staticAssets = "./static/lavaDev/lava5/"
  var material = new BABYLON.PBRMaterial("mat", scene);

  //main texture tile image
  // material.albedoTexture = new BABYLON.Texture(staticAssets+"COLOR.jpg", scene);
  material.albedoTexture = new BABYLON.Texture("./static/lavaDev/lavaTile.jpg");
  // material.albedoTexture = new BABYLON.Texture("./static/lavaDev/lavaTileDarkish.png");
  // material.albedoTexture = new BABYLON.Texture("./static/lavaDev/lavaTileFire.png");
  // material.albedoTexture = new BABYLON.Texture("./static/lavaDev/lavaTileForge.png");
  // material.albedoTexture = new BABYLON.Texture("./static/lavaDev/lavaTileMagma.jpg");

  material.bumpTexture = new BABYLON.Texture(staticAssets+"NRM.jpg", scene);
  material.bumpTexture.level = 0.5;
  material.ambientTexture = new BABYLON.Texture(staticAssets+"OCC.jpg", scene);
  material.metallicTexture = new BABYLON.Texture(staticAssets+"DISP.png", scene);
  material.roughness = 1;
  material.metallic = 0.1;
  material.useRoughnessFromMetallicTextureAlpha = true;
  material.useRoughnessFromMetallicTextureGreen = false;
  material.useMetallnessFromMetallicTextureBlue = false;
  material.albedoTexture.uScale = parseFloat(tilesize);
  material.albedoTexture.vScale = parseFloat(tilesize);
  material.bumpTexture.uScale = parseFloat(tilesize);
  material.bumpTexture.vScale = parseFloat(tilesize);
  material.invertNormalMapY = true;

	// var pat = BABYLON.Mesh.FLIP_N_ROTATE_ROW;
	// var av = BABYLON.Mesh.CENTER;
	// var ah =BABYLON.Mesh.CENTER;
  // var f = new BABYLON.Vector4(0,0, 0.5, 1); // front image = half the whole image along the width 
	// var b = new BABYLON.Vector4(0.5,0, 1, 1); // back image = second half along the width
	
	// var options = {
	// 	sideOrientation: BABYLON.Mesh.DOUBLESIDE,
  //       frontUVs: f,
	// 	backUVs: b,
	// 	pattern: pat,
	// 	alignVertical: av,
	// 	alignHorizontal: ah,
	// 	width: 4,
	// 	height: 4,
	// 	tileSize: 1
	// }
  // var plane = BABYLON.MeshBuilder.CreateTiledPlane("", {...options}, scene);

  plane.material = material;

  if(speed != null){
    speed = speed * 0.001;
  }
   //directionX
  if(directionX != null){
    var xVector = directionX > 0 ? -speed : speed;
  }
  //directionY
  if(directionY != null){
    var yVector = directionY > 0 ? -speed : speed;
  }
  var alpha = 0;
  scene.registerBeforeRender(function () {
    
    //directionX
    if(directionX){
      material.albedoTexture.uOffset += xVector;
      material.bumpTexture.uOffset += xVector;   
    }
    //directionY
    if(directionY){
      material.albedoTexture.vOffset += yVector;
      material.bumpTexture.vOffset += yVector;     
    }
    //alpha += 0.001;
  });


  scene.createDefaultEnvironment({
      createGround: false,
      createSkybox: false,
  });


  return scene;

};


















