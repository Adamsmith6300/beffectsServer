var createScene2 = function (engine, canvas) {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    var assetPath = "https://raw.githubusercontent.com/eldinor/ForBJS/master/Lava_005_SD/";

  //var assetPath = "https://raw.githubusercontent.com/eldinor/ForBJS/master/Lava_005_SD/";
  //var gthub = "https://github.com/Adamsmith6300/MagnetarBabylonEffects/blob/develop/Rain.png?raw=true"
  // var gthub = "https://raw.githubusercontent.com/Adamsmith6300/MagnetarBabylonEffects/develop/Rain.png/"
    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.8;
    light.specular = new BABYLON.Color3(0.9, 0.4, 0.9);

    var gl = new BABYLON.GlowLayer("glow", scene);
    gl.intensity = 0.1;
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 2;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
 //   var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
   
    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground",assetPath+
        "Lava_005_DISP.png",
        10, 10, 400, 0, 0.4, scene, false);


    var material = new BABYLON.PBRMaterial("mat", scene);
    material.albedoTexture = new BABYLON.Texture(assetPath+"Lava_005_COLOR.jpg", scene);

    material.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
    material.bumpTexture.level = 0.9;
    //   material.bumpTexture.uScale = 2;
    //       material.bumpTexture.vScale = 2;
    material.emissiveTexture = new BABYLON.Texture(assetPath+"spider_webs_compressed.jpg", scene);
    material.emissiveColor = new BABYLON.Color3(245/255, 20/255, 20/255);
//    material.specularTexture = new BABYLON.Texture("Lava_005_DISP.jpg", scene);
    material.ambientTexture = new BABYLON.Texture(assetPath+"Lava_005_OCC.jpg", scene);

    material.metallicTexture = new BABYLON.Texture(assetPath+"Lava_005_ROUGH.jpg", scene);

    material.roughness = 1;
    material.metallic = 0.1;
        material.useRoughnessFromMetallicTextureAlpha = true;
    material.useRoughnessFromMetallicTextureGreen = false;
    material.useMetallnessFromMetallicTextureBlue = false;
    ground.material = material;
    sphere.material = material;
/*
material.clearCoat.isEnabled = true;
material.clearCoat.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
material.clearCoat.bumpTexture.level = 0.0;
*/
    var alpha = 0;
    scene.registerBeforeRender(function () {
      material.albedoTexture.uOffset += 0.001;
       material.bumpTexture.uOffset += 0.001;
     //   material.bumpTexture.vOffset -= 0.01;
        material.ambientTexture.uOffset += 0.001;
      material.metallicTexture.uOffset += 0.001;   
      material.emissiveTexture.uOffset += 0.01; 
     material.emissiveTexture.vOffset -= 0.005; 
      ground.scaling.y += Math.sin(alpha) / 300;   
        //  material.diffuseTexture.vOffset += 0.005;
        //    material.bumpTexture.vOffset += 0.005;
  //      material.bumpTexture.level += Math.sin(alpha) / 200;
        gl.intensity += Math.sin(alpha*2) / 100;
  //      console.log(material.bumpTexture.level);
   //  console.log(gl.intensity );
       alpha += 0.01;
 //  console.log(ground.scaling.y);

 //material.clearCoat.bumpTexture.level  += Math.sin(alpha) / 100;
    });


    scene.createDefaultEnvironment({
        createGround: false,
        createSkybox: false,
    });
//scene.debugLayer.show();
    return scene;

};


/*************************
SUN PARTICLE SYSTEM VERSION
**************************/
var createScene = function(engine, canvas) {

    let scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0, 0, 0);
    var camera = new BABYLON.ArcRotateCamera(
      "ArcRotateCamera",
      1,
      0.8,
      10,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(canvas, true);
    let light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 1.5),
      scene
    );
    light.intensity = 0.4;
    var ground2 =  BABYLON.Mesh.CreateGround("ground", 10, 10, 10, scene);
    // ground2.position.x  =  2;
    ground2.position.y  =  0.7;
    // ground2.position.z  =  4;
    var material2 = new BABYLON.StandardMaterial("std", scene);
    ground2.material = material2;  

    var particleSystem = new BABYLON.ParticleSystem("particles", 8000, scene);
    // var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity:2000 }, scene);

    particleSystem.particleTexture = new BABYLON.Texture("/static/sprites/t_SunSurface1.jpg", scene);

    // particleSystem.BillboardMode =   BABYLON.ParticleSystem.BILLBOARDMODE_Y;

    particleSystem.emitter = new BABYLON.Vector3(-2.5, 0.6, -2.5); 
  
    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0.1, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(5, 0, 5); 
  
    particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
    particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 1);
    particleSystem.addColorGradient(0, new BABYLON.Color4(0.8509,
      0.4784,
      0.1019,
      0));
    particleSystem.addColorGradient(0.4, new BABYLON.Color4(0.6259,
      0.3056,
      0.0619,
      0.5));
    particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.6039,
      0.2887,
      0.0579,
      0.5));
    particleSystem.addColorGradient(1, new BABYLON.Color4( 0.3207,
      0.0713,
      0.0075,
      0));

    particleSystem.minSize = 1;
    particleSystem.maxSize = 1;
    particleSystem.minLifeTime = 1;
    particleSystem.maxLifeTime = 18;
    particleSystem.minSize = 1.1;
    particleSystem.maxSize = 1.5;
    particleSystem.minScaleX = 1;
    particleSystem.maxScaleX = 1;
    particleSystem.minScaleY = 1;
    particleSystem.maxScaleY = 1;
    particleSystem.minAngularSpeed = -0.4;
    particleSystem.maxAngularSpeed = 0.4;
    particleSystem.emitRate = 200;
    particleSystem.updateSpeed = 0.005;
    particleSystem.blendMode = 2;
    particleSystem.preWarmCycles = 100;
    particleSystem.preWarmStepOffset = 10;
    particleSystem.minInitialRotation = -6.283185307179586;
    particleSystem.maxInitialRotation = 6.283185307179586;
    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 0;
    
    
    

    var assetPath = "https://raw.githubusercontent.com/eldinor/ForBJS/master/Lava_005_SD/";
    var static = "/static/"
  
    var gl = new BABYLON.GlowLayer("glow", scene);
    gl.intensity = 0.5;
    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    // var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);
  
    // // Move the sphere upward 1/2 its height
    // sphere.position.y = 2;
  
    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
  //   var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
   
    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground",
        "/static/lava4/DISP.png",
        10, 10, 400, 0, 0.9, scene, false);
  
  
    var material = new BABYLON.PBRMaterial("mat", scene);
    material.albedoTexture = new BABYLON.Texture("/static/lava4/COLOR.jpg", scene);
  
    material.bumpTexture = new BABYLON.Texture("/static/lava4/NORM.jpg", scene);
    material.bumpTexture.level = 1;
    //   material.bumpTexture.uScale = 2;
    //       material.bumpTexture.vScale = 2;
    // material2.emissiveTexture = new BABYLON.Texture("/static/sprites/t_SunSurface1.jpg", scene);
    // material2.emissiveColor = new BABYLON.Color4(180/255, 80/255, 20/255,0);
    // material2.diffuseColor = new BABYLON.Color3(1, 0, 1);
    // material2.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    // material2.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
    material2.diffuseTexture = new BABYLON.Texture("/static/sprites/t_SunSurface1.jpg", scene);
    material2.diffuseTexture.hasAlpha = true;

     material.specularTexture = new BABYLON.Texture("Lava_005_DISP.jpg", scene);
    material.ambientTexture = new BABYLON.Texture("/static/lava4/OCC.jpg", scene);
  
    // material.metallicTexture = new BABYLON.Texture(assetPath+"Lava_005_ROUGH.jpg", scene);
  
    material.roughness = 1;
    material.metallic = 0.1;
        material.useRoughnessFromMetallicTextureAlpha = true;
    material.useRoughnessFromMetallicTextureGreen = false;
    material.useMetallnessFromMetallicTextureBlue = false;
    ground.material = material;
    // sphere.material = material;
  /*
  material.clearCoat.isEnabled = true;
  material.clearCoat.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
  material.clearCoat.bumpTexture.level = 0.0;
  */
    var alpha = 0;
    scene.registerBeforeRender(function () {
      // material.albedoTexture.uOffset += 0.0001;
      //  material.bumpTexture.uOffset += 0.001;
     //   material.bumpTexture.vOffset -= 0.01;
        // material.ambientTexture.uOffset += 0.001;
      // material.metallicTexture.uOffset += 0.001;   
    //   material2.emissiveTexture.uOffset += 0.0007; 
    //  material2.emissiveTexture.vOffset -= 0.005; 
      // ground.scaling.y += Math.sin(alpha) / 300;   
        //  material.diffuseTexture.vOffset += 0.005;
        //    material.bumpTexture.vOffset += 0.005;
  //      material.bumpTexture.level += Math.sin(alpha) / 200;
        gl.intensity += Math.sin(alpha*2) / 100;
  //      console.log(material.bumpTexture.level);
   //  console.log(gl.intensity );
       alpha += 0.01;
  //  console.log(ground.scaling.y);
  
  //material.clearCoat.bumpTexture.level  += Math.sin(alpha) / 100;
    });
  
  
    scene.createDefaultEnvironment({
        createGround: false,
        createSkybox: false,
    });


  
    // particleSystem.start();
    

  return scene;
};

/*******************
 * LAVA FROM HEIGHTMAP
 *******************/
var createScene2 = function (engine, canvas) {

  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new BABYLON.Scene(engine);

  var assetPath = "https://raw.githubusercontent.com/eldinor/ForBJS/master/Lava_005_SD/";

  var camera = new BABYLON.ArcRotateCamera(
    "ArcRotateCamera",
    1,
    0.8,
    20,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.8;
  light.specular = new BABYLON.Color3(0.9, 0.4, 0.9);

  var gl = new BABYLON.GlowLayer("glow", scene);
  gl.intensity = 0.5;
  // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
  // var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);

  // // Move the sphere upward 1/2 its height
  // sphere.position.y = 2;

  // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
//   var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
 
  var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground",assetPath+
      "Lava_005_DISP.png",
      10, 10, 10, 0, 0.4, scene, false);


  var material = new BABYLON.PBRMaterial("mat", scene);
  material.albedoTexture = new BABYLON.Texture(assetPath+"Lava_005_COLOR.jpg", scene);

  material.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
  material.bumpTexture.level = 0.9;
  //   material.bumpTexture.uScale = 2;
  //       material.bumpTexture.vScale = 2;
  // material.emissiveTexture = new BABYLON.Texture(assetPath+"spider_webs_compressed.jpg", scene);
  // material.emissiveColor = new BABYLON.Color3(245/255, 20/255, 20/255);
//    material.specularTexture = new BABYLON.Texture("Lava_005_DISP.jpg", scene);
  material.ambientTexture = new BABYLON.Texture(assetPath+"Lava_005_OCC.jpg", scene);

  material.metallicTexture = new BABYLON.Texture(assetPath+"Lava_005_ROUGH.jpg", scene);

  material.roughness = 1;
  material.metallic = 0.1;
      material.useRoughnessFromMetallicTextureAlpha = true;
  material.useRoughnessFromMetallicTextureGreen = false;
  material.useMetallnessFromMetallicTextureBlue = false;
  ground.material = material;
  // sphere.material = material;
/*
material.clearCoat.isEnabled = true;
material.clearCoat.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
material.clearCoat.bumpTexture.level = 0.0;
*/
  var alpha = 0;
  scene.registerBeforeRender(function () {
    material.albedoTexture.uOffset += 0.001;
     material.bumpTexture.uOffset += 0.001;
   //   material.bumpTexture.vOffset -= 0.01;
      material.ambientTexture.uOffset += 0.001;
    material.metallicTexture.uOffset += 0.001;   
  //   material.emissiveTexture.uOffset += 0.01; 
  //  material.emissiveTexture.vOffset -= 0.005; 
    ground.scaling.y += Math.sin(alpha) / 300;   
      //  material.diffuseTexture.vOffset += 0.005;
      //    material.bumpTexture.vOffset += 0.005;
//      material.bumpTexture.level += Math.sin(alpha) / 200;
      gl.intensity += Math.sin(alpha*2) / 100;
//      console.log(material.bumpTexture.level);
 //  console.log(gl.intensity );
     alpha += 0.01;
//  console.log(ground.scaling.y);

//material.clearCoat.bumpTexture.level  += Math.sin(alpha) / 100;
  });


  scene.createDefaultEnvironment({
      createGround: false,
      createSkybox: false,
  });
//scene.debugLayer.show();
  return scene;

};