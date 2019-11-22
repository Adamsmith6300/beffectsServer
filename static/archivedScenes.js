
   //
  // LIGHTNING

  ///TRAIL PARTICLE
//   var createScene = function() {  
//     // Scene
//      var scene = new BABYLON.Scene(engine);
//      scene.clearColor = BABYLON.Color3.Black();
//      var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
//      camera.attachControl(canvas, true);  
//      var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, -0.5), scene);
//      camera.setPosition(new BABYLON.Vector3(0, 0, -200));
 
//      var size = 120.0;				// world size
//      var particleNb = 1;			// particle number
//      var trailNb = 200;				// number in the trail
//      var limit = size / 2.0;
//      // var model = BABYLON.MeshBuilder.CreateDisc("model", {tessellation: 3, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
//      var model = BABYLON.MeshBuilder.CreateSphere("model", {size : 3}, scene);
//      //var model = BABYLON.MeshBuilder.CreateTorusKnot("model", {radius : size / 40, radialSegments: 32, tubularSegments: 4}, scene);
//      var sps = new BABYLON.SolidParticleSystem("sps", scene);
//      sps.addShape(model, particleNb * trailNb);
//      model.dispose();
//      sps.buildMesh();
//      sps.mesh.hasVertexAlpha = true;
 
//      var color4 = new BABYLON.Color4(0.0, 0.0, 0.0, 1.0);
//      var vect3 = new BABYLON.Vector3(0, -1, 0);
//      var scl = 0.0;
//      var initialRadius = 0.4;
//      var speedModerator = 5;
//      sps.initParticles = function() {
//          for (var p = 0; p < particleNb; p++) {
//              color4.r = 1
//              color4.g = 1
//              color4.b = 1
//              color4.a = 1.0;
//              // vect3.copyFromFloats((Math.random() - 0.5) * size * initialRadius, (Math.random() - 0.5) * size * initialRadius, (Math.random() - 0.5) * size * initialRadius);
//              scl = 0.5;
//              for (var t = 0; t < trailNb; t++) {
//                  // var x = (Math.random()*2)-1;
//                  var cur = sps.particles[p * trailNb + t];       // current particle
//                  cur.color.copyFrom(color4);
//                  cur.color.a = (1 + t) / trailNb;
//                  cur.position.copyFrom(vect3);
//                  cur.velocity.copyFrom(vect3).scaleInPlace(speedModerator);
//                  cur.rotation.copyFrom(cur.velocity);
//                  var scal = scl * (1 + t) / trailNb;
//                  cur.scale.copyFromFloats(scal, scal, scal);
//              }
//          }
//      };
 
//      sps.initParticles();
//      sps.computeParticleTexture = false;
//      sps.mesh.freezeWorldMatrix();
//      sps.setParticles();
 
//      var remainder = trailNb - 1;
//    var timeVector = BABYLON.Vector3.Zero();
//      sps.updateParticle = function(p) {
//          if (p.idx % trailNb != remainder ) {
//              p.position.copyFrom(sps.particles[p.idx + 1].position);
//              p.rotation.copyFrom(sps.particles[p.idx + 1].rotation);
//          } else {
//        timeVector.copyFromFloats(0,  Math.cos(Date.now()  / (100 + p.idx / 10)) * speedModerator * size / 3.0, 0);
//               p.position.addInPlace(p.velocity);//.addInPlace(timeVector);
//              //  p.rotation.x += 0.05;
//              //  p.rotation.y -= 0.01;
//              //  p.rotation.z += 0.05;
//          }
//      // world limits
//          if (p.position.x > limit || p.position.x < -limit) { 
//              p.alive = false;
//              p.isVisible = false;
//              sps.removeParticles(0,remainder);
//              }
//          if (p.position.y > limit || p.position.y < -limit) { 
//              p.alive = false;
//              p.isVisible = false;
//              sps.removeParticles(0,remainder);
//              }
//          if (p.position.z > limit || p.position.z < -limit) { 
//              p.alive = false;
//              p.isVisible = false;
//              sps.removeParticles(0,remainder);
//              }
//      };
     
       
//      //scene.debugLayer.show();
//      scene.registerBeforeRender(function() {
//          sps.setParticles();
//      });
 
//      return scene;
//  };
  


///OBJECT FOLLOWING LINE
// var createScene = function () {
//   var scene = new BABYLON.Scene(engine);

//   // Setup environment
//   var light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 2, 8), scene);
//   var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 20, new BABYLON.Vector3(0, 0, 0), scene);
//   camera.attachControl(canvas, true);

  
//   var path = [new BABYLON.Vector3(0,100,0),
//           new BABYLON.Vector3(0,80,0),
//           new BABYLON.Vector3(20,60,0),
//           new BABYLON.Vector3(0,40,0),
//           new BABYLON.Vector3.Zero()
//           ]; //[{x:0, y:0, z: 0}, {x:10, y:00, z: 10}, {x:20, y:20, z: 20}, {x:30, y:30, z: 30}, {x:40, y:0, z: 35}];
//   var points = [];
//   var xOffset = 1;
//   var y = 100; 
//   for(var i = 0; i < 100; i++){
//       if(i % 20 == 0){
//           xOffset = -15;
//       }
//       if(i % 40 == 0){
//           xOffset = 15;
//       }
//       points.push(new BABYLON.Vector3(xOffset,y,0));
//       y--;
//   }
//       // var catmullRom = BABYLON.Curve3.CreateCatmullRomSpline(
//       //     path,
//       //     60
//       // );

//   var catmullRomSpline = BABYLON.Mesh.CreateLines("catmullRom", points, scene);
//   // catmullRomSpline.color=new BABYLON.Color3(1,0,0);

// // Create Path3D from array of points
// var path3d = new BABYLON.Path3D(points);
// var curve = path3d.getCurve(); // create the curve
// var tangents = path3d.getTangents();  //array of tangents to the curve
// var normals = path3d.getNormals(); //array of normals to the curve
// var binormals = path3d.getBinormals(); //array of binormals to curve

// //Create and draw a plane in xy plane to trace the curve at (0, 0, 0)
// var box = BABYLON.MeshBuilder.CreateBox("box", {size: 01}, scene);
// var norm = new BABYLON.Vector3(0, 0, 1); //normal to plane
// var pos_of_norm = new BABYLON.Vector3(0, 0, 0);  // position of normal (for display)

// //Draw the normal line in red
// var normLine = BABYLON.Mesh.CreateLines("normLine", [pos_of_norm, pos_of_norm.add(norm).scale(2)], scene);	
// normLine.color = BABYLON.Color3.Red();

// //Set box as parent of normal line so they move and turn as one
// normLine.parent = box;

//   var animationPosition = new BABYLON.Animation("animPos", "position", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
// var animationRotation = new BABYLON.Animation("animRot", "rotation", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);	

//   var keysPosition = []; 
//   var keysRotation = [];

//   for(p = 0; p < points.length; p++) {
//       keysPosition.push({
//           frame: p,
//           value: points[p]
//       });

//       keysRotation.push({
//           frame: p,
//           value: BABYLON.Vector3.RotationFromAxis(normals[p], binormals[p], tangents[p])
//       });
//   }

//   animationPosition.setKeys(keysPosition);
//   animationRotation.setKeys(keysRotation);

//   // Create the animation group
//   var animationGroup = new BABYLON.AnimationGroup("Group");
//   animationGroup.addTargetedAnimation(animationPosition, box);
//   animationGroup.addTargetedAnimation(animationRotation, box);

// animationGroup.play(true);
// ////////////////////////////////////////////////////////////////////////////
//   // Fountain object
//   //var fountain = BABYLON.Mesh.CreateBox("foutain", 1.0, scene);

//   // Ground
//   var ground = BABYLON.Mesh.CreatePlane("ground", 50.0, scene);
//   ground.position = new BABYLON.Vector3(0, -10, 0);
//   ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);

//   ground.material = new BABYLON.StandardMaterial("groundMat", scene);
//   ground.material.backFaceCulling = false;
//   ground.material.diffuseColor = new BABYLON.Color3(0.3, 0.3, 1);

//   // Create a particle system
//   var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

//   //Texture of each particle
//   particleSystem.particleTexture = new BABYLON.Texture("textures/flare.png", scene);

//   // Where the particles come from
//   particleSystem.emitter = box; // the starting object, the emitter
//   particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, -1); // Starting all from
//   particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...

//   // Colors of all particles
//   particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
//   particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
//   particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

//   // Size of each particle (random between...
//   particleSystem.minSize = 0.1;
//   particleSystem.maxSize = 0.5;

//   // Life time of each particle (random between...
//   particleSystem.minLifeTime = 0.3;
//   particleSystem.maxLifeTime = 1.5;

//   // Emission rate
//   particleSystem.emitRate = 1500;

//   // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
//   particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

//   // Set the gravity of all particles
//   // particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

//   // Direction of each particle after it has been emitted
//   particleSystem.direction1 = new BABYLON.Vector3(0, -1, 0);
//   particleSystem.direction2 = new BABYLON.Vector3(0, -1, 0);

//   // Angular speed, in radians
//   particleSystem.minAngularSpeed = 0;
//   particleSystem.maxAngularSpeed = 0;

//   // Speed
//   particleSystem.minEmitPower = 1;
//   particleSystem.maxEmitPower = 1;
//   particleSystem.updateSpeed = 0.005;

//   // Start the particle system
//   particleSystem.start();

//   // Fountain's animation
//   // var keys = [];
//   // var animation = new BABYLON.Animation("animation", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
//   //                                                                 BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
//   // // At the animation key 0, the value of scaling is "1"
//   // keys.push({
//   //     frame: 0,
//   //     value: 0
//   // });

//   // // At the animation key 50, the value of scaling is "0.2"
//   // keys.push({
//   //     frame: 50,
//   //     value: Math.PI
//   // });

//   // // At the animation key 100, the value of scaling is "1"
//   // keys.push({
//   //     frame: 100,
//   //     value: 0
//   // });

//   // // Launch animation
//   // animation.setKeys(keys);
//   // fountain.animations.push(animation);
//   // scene.beginAnimation(fountain, 0, 100, true);


//   return scene;
// }















// var createScene2 = function (engine, canvas) {

//     // This creates a basic Babylon Scene object (non-mesh)
//     var scene = new BABYLON.Scene(engine);

//     var assetPath = "https://raw.githubusercontent.com/eldinor/ForBJS/master/Lava_005_SD/";

//   //var assetPath = "https://raw.githubusercontent.com/eldinor/ForBJS/master/Lava_005_SD/";
//   //var gthub = "https://github.com/Adamsmith6300/MagnetarBabylonEffects/blob/develop/Rain.png?raw=true"
//   // var gthub = "https://raw.githubusercontent.com/Adamsmith6300/MagnetarBabylonEffects/develop/Rain.png/"
//     // This creates and positions a free camera (non-mesh)
//     var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

//     // This targets the camera to scene origin
//     camera.setTarget(BABYLON.Vector3.Zero());

//     // This attaches the camera to the canvas
//     camera.attachControl(canvas, true);

//     // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
//     var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

//     // Default intensity is 1. Let's dim the light a small amount
//     light.intensity = 0.8;
//     light.specular = new BABYLON.Color3(0.9, 0.4, 0.9);

//     var gl = new BABYLON.GlowLayer("glow", scene);
//     gl.intensity = 0.1;
//     // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
//     var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);

//     // Move the sphere upward 1/2 its height
//     sphere.position.y = 2;

//     // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
//  //   var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
   
//     var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground",assetPath+
//         "Lava_005_DISP.png",
//         10, 10, 400, 0, 0.4, scene, false);


//     var material = new BABYLON.PBRMaterial("mat", scene);
//     material.albedoTexture = new BABYLON.Texture(assetPath+"Lava_005_COLOR.jpg", scene);

//     material.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
//     material.bumpTexture.level = 0.9;
//     //   material.bumpTexture.uScale = 2;
//     //       material.bumpTexture.vScale = 2;
//     material.emissiveTexture = new BABYLON.Texture(assetPath+"spider_webs_compressed.jpg", scene);
//     material.emissiveColor = new BABYLON.Color3(245/255, 20/255, 20/255);
// //    material.specularTexture = new BABYLON.Texture("Lava_005_DISP.jpg", scene);
//     material.ambientTexture = new BABYLON.Texture(assetPath+"Lava_005_OCC.jpg", scene);

//     material.metallicTexture = new BABYLON.Texture(assetPath+"Lava_005_ROUGH.jpg", scene);

//     material.roughness = 1;
//     material.metallic = 0.1;
//         material.useRoughnessFromMetallicTextureAlpha = true;
//     material.useRoughnessFromMetallicTextureGreen = false;
//     material.useMetallnessFromMetallicTextureBlue = false;
//     ground.material = material;
//     sphere.material = material;
// /*
// material.clearCoat.isEnabled = true;
// material.clearCoat.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
// material.clearCoat.bumpTexture.level = 0.0;
// */
//     var alpha = 0;
//     scene.registerBeforeRender(function () {
//       material.albedoTexture.uOffset += 0.001;
//        material.bumpTexture.uOffset += 0.001;
//      //   material.bumpTexture.vOffset -= 0.01;
//         material.ambientTexture.uOffset += 0.001;
//       material.metallicTexture.uOffset += 0.001;   
//       material.emissiveTexture.uOffset += 0.01; 
//      material.emissiveTexture.vOffset -= 0.005; 
//       ground.scaling.y += Math.sin(alpha) / 300;   
//         //  material.diffuseTexture.vOffset += 0.005;
//         //    material.bumpTexture.vOffset += 0.005;
//   //      material.bumpTexture.level += Math.sin(alpha) / 200;
//         gl.intensity += Math.sin(alpha*2) / 100;
//   //      console.log(material.bumpTexture.level);
//    //  console.log(gl.intensity );
//        alpha += 0.01;
//  //  console.log(ground.scaling.y);

//  //material.clearCoat.bumpTexture.level  += Math.sin(alpha) / 100;
//     });


//     scene.createDefaultEnvironment({
//         createGround: false,
//         createSkybox: false,
//     });
// //scene.debugLayer.show();
//     return scene;

// };


// /*************************
// SUN PARTICLE SYSTEM VERSION
// **************************/
// var createScene = function(engine, canvas) {

//     let scene = new BABYLON.Scene(engine);
//     scene.clearColor = new BABYLON.Color3(0, 0, 0);
//     var camera = new BABYLON.ArcRotateCamera(
//       "ArcRotateCamera",
//       1,
//       0.8,
//       10,
//       new BABYLON.Vector3(0, 0, 0),
//       scene
//     );
//     camera.attachControl(canvas, true);
//     let light = new BABYLON.HemisphericLight(
//       "light",
//       new BABYLON.Vector3(0, 1, 1.5),
//       scene
//     );
//     light.intensity = 0.4;
//     var ground2 =  BABYLON.Mesh.CreateGround("ground", 10, 10, 10, scene);
//     // ground2.position.x  =  2;
//     ground2.position.y  =  0.7;
//     // ground2.position.z  =  4;
//     var material2 = new BABYLON.StandardMaterial("std", scene);
//     ground2.material = material2;  

//     var particleSystem = new BABYLON.ParticleSystem("particles", 8000, scene);
//     // var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity:2000 }, scene);

//     particleSystem.particleTexture = new BABYLON.Texture("/static/sprites/t_SunSurface1.jpg", scene);

//     // particleSystem.BillboardMode =   BABYLON.ParticleSystem.BILLBOARDMODE_Y;

//     particleSystem.emitter = new BABYLON.Vector3(-2.5, 0.6, -2.5); 
  
//     particleSystem.minEmitBox = new BABYLON.Vector3(0, 0.1, 0);
//     particleSystem.maxEmitBox = new BABYLON.Vector3(5, 0, 5); 
  
//     particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
//     particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
//     particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 1);
//     particleSystem.addColorGradient(0, new BABYLON.Color4(0.8509,
//       0.4784,
//       0.1019,
//       0));
//     particleSystem.addColorGradient(0.4, new BABYLON.Color4(0.6259,
//       0.3056,
//       0.0619,
//       0.5));
//     particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.6039,
//       0.2887,
//       0.0579,
//       0.5));
//     particleSystem.addColorGradient(1, new BABYLON.Color4( 0.3207,
//       0.0713,
//       0.0075,
//       0));

//     particleSystem.minSize = 1;
//     particleSystem.maxSize = 1;
//     particleSystem.minLifeTime = 1;
//     particleSystem.maxLifeTime = 18;
//     particleSystem.minSize = 1.1;
//     particleSystem.maxSize = 1.5;
//     particleSystem.minScaleX = 1;
//     particleSystem.maxScaleX = 1;
//     particleSystem.minScaleY = 1;
//     particleSystem.maxScaleY = 1;
//     particleSystem.minAngularSpeed = -0.4;
//     particleSystem.maxAngularSpeed = 0.4;
//     particleSystem.emitRate = 200;
//     particleSystem.updateSpeed = 0.005;
//     particleSystem.blendMode = 2;
//     particleSystem.preWarmCycles = 100;
//     particleSystem.preWarmStepOffset = 10;
//     particleSystem.minInitialRotation = -6.283185307179586;
//     particleSystem.maxInitialRotation = 6.283185307179586;
//     particleSystem.minEmitPower = 0;
//     particleSystem.maxEmitPower = 0;
    
    
    

//     var assetPath = "https://raw.githubusercontent.com/eldinor/ForBJS/master/Lava_005_SD/";
//     var static = "/static/"
  
//     var gl = new BABYLON.GlowLayer("glow", scene);
//     gl.intensity = 0.5;
//     // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
//     // var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);
  
//     // // Move the sphere upward 1/2 its height
//     // sphere.position.y = 2;
  
//     // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
//   //   var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
   
//     var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground",
//         "/static/lava4/DISP.png",
//         10, 10, 400, 0, 0.9, scene, false);
  
  
//     var material = new BABYLON.PBRMaterial("mat", scene);
//     material.albedoTexture = new BABYLON.Texture("/static/lava4/COLOR.jpg", scene);
  
//     material.bumpTexture = new BABYLON.Texture("/static/lava4/NORM.jpg", scene);
//     material.bumpTexture.level = 1;
//     //   material.bumpTexture.uScale = 2;
//     //       material.bumpTexture.vScale = 2;
//     // material2.emissiveTexture = new BABYLON.Texture("/static/sprites/t_SunSurface1.jpg", scene);
//     // material2.emissiveColor = new BABYLON.Color4(180/255, 80/255, 20/255,0);
//     // material2.diffuseColor = new BABYLON.Color3(1, 0, 1);
//     // material2.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
//     // material2.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
//     material2.diffuseTexture = new BABYLON.Texture("/static/sprites/t_SunSurface1.jpg", scene);
//     material2.diffuseTexture.hasAlpha = true;

//      material.specularTexture = new BABYLON.Texture("Lava_005_DISP.jpg", scene);
//     material.ambientTexture = new BABYLON.Texture("/static/lava4/OCC.jpg", scene);
  
//     // material.metallicTexture = new BABYLON.Texture(assetPath+"Lava_005_ROUGH.jpg", scene);
  
//     material.roughness = 1;
//     material.metallic = 0.1;
//         material.useRoughnessFromMetallicTextureAlpha = true;
//     material.useRoughnessFromMetallicTextureGreen = false;
//     material.useMetallnessFromMetallicTextureBlue = false;
//     ground.material = material;
//     // sphere.material = material;
//   /*
//   material.clearCoat.isEnabled = true;
//   material.clearCoat.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
//   material.clearCoat.bumpTexture.level = 0.0;
//   */
//     var alpha = 0;
//     scene.registerBeforeRender(function () {
//       // material.albedoTexture.uOffset += 0.0001;
//       //  material.bumpTexture.uOffset += 0.001;
//      //   material.bumpTexture.vOffset -= 0.01;
//         // material.ambientTexture.uOffset += 0.001;
//       // material.metallicTexture.uOffset += 0.001;   
//     //   material2.emissiveTexture.uOffset += 0.0007; 
//     //  material2.emissiveTexture.vOffset -= 0.005; 
//       // ground.scaling.y += Math.sin(alpha) / 300;   
//         //  material.diffuseTexture.vOffset += 0.005;
//         //    material.bumpTexture.vOffset += 0.005;
//   //      material.bumpTexture.level += Math.sin(alpha) / 200;
//         gl.intensity += Math.sin(alpha*2) / 100;
//   //      console.log(material.bumpTexture.level);
//    //  console.log(gl.intensity );
//        alpha += 0.01;
//   //  console.log(ground.scaling.y);
  
//   //material.clearCoat.bumpTexture.level  += Math.sin(alpha) / 100;
//     });
  
  
//     scene.createDefaultEnvironment({
//         createGround: false,
//         createSkybox: false,
//     });


  
//     // particleSystem.start();
    

//   return scene;
// };

// /*******************
//  * LAVA FROM HEIGHTMAP
//  *******************/
// var createScene2 = function (engine, canvas) {

//   // This creates a basic Babylon Scene object (non-mesh)
//   var scene = new BABYLON.Scene(engine);

//   var assetPath = "https://raw.githubusercontent.com/eldinor/ForBJS/master/Lava_005_SD/";

//   var camera = new BABYLON.ArcRotateCamera(
//     "ArcRotateCamera",
//     1,
//     0.8,
//     20,
//     new BABYLON.Vector3(0, 0, 0),
//     scene
//   );
//   camera.attachControl(canvas, true);

//   // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
//   var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

//   // Default intensity is 1. Let's dim the light a small amount
//   light.intensity = 0.8;
//   light.specular = new BABYLON.Color3(0.9, 0.4, 0.9);

//   var gl = new BABYLON.GlowLayer("glow", scene);
//   gl.intensity = 0.5;
//   // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
//   // var sphere = BABYLON.Mesh.CreateSphere("sphere1", 8, 2, scene);

//   // // Move the sphere upward 1/2 its height
//   // sphere.position.y = 2;

//   // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
// //   var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
 
//   var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground",assetPath+
//       "Lava_005_DISP.png",
//       10, 10, 10, 0, 0.4, scene, false);


//   var material = new BABYLON.PBRMaterial("mat", scene);
//   material.albedoTexture = new BABYLON.Texture(assetPath+"Lava_005_COLOR.jpg", scene);

//   material.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
//   material.bumpTexture.level = 0.9;
//   //   material.bumpTexture.uScale = 2;
//   //       material.bumpTexture.vScale = 2;
//   // material.emissiveTexture = new BABYLON.Texture(assetPath+"spider_webs_compressed.jpg", scene);
//   // material.emissiveColor = new BABYLON.Color3(245/255, 20/255, 20/255);
// //    material.specularTexture = new BABYLON.Texture("Lava_005_DISP.jpg", scene);
//   material.ambientTexture = new BABYLON.Texture(assetPath+"Lava_005_OCC.jpg", scene);

//   material.metallicTexture = new BABYLON.Texture(assetPath+"Lava_005_ROUGH.jpg", scene);

//   material.roughness = 1;
//   material.metallic = 0.1;
//       material.useRoughnessFromMetallicTextureAlpha = true;
//   material.useRoughnessFromMetallicTextureGreen = false;
//   material.useMetallnessFromMetallicTextureBlue = false;
//   ground.material = material;
//   // sphere.material = material;
// /*
// material.clearCoat.isEnabled = true;
// material.clearCoat.bumpTexture = new BABYLON.Texture(assetPath+"Lava_005_NORM.jpg", scene);
// material.clearCoat.bumpTexture.level = 0.0;
// */
//   var alpha = 0;
//   scene.registerBeforeRender(function () {
//     material.albedoTexture.uOffset += 0.001;
//      material.bumpTexture.uOffset += 0.001;
//    //   material.bumpTexture.vOffset -= 0.01;
//       material.ambientTexture.uOffset += 0.001;
//     material.metallicTexture.uOffset += 0.001;   
//   //   material.emissiveTexture.uOffset += 0.01; 
//   //  material.emissiveTexture.vOffset -= 0.005; 
//     ground.scaling.y += Math.sin(alpha) / 300;   
//       //  material.diffuseTexture.vOffset += 0.005;
//       //    material.bumpTexture.vOffset += 0.005;
// //      material.bumpTexture.level += Math.sin(alpha) / 200;
//       gl.intensity += Math.sin(alpha*2) / 100;
// //      console.log(material.bumpTexture.level);
//  //  console.log(gl.intensity );
//      alpha += 0.01;
// //  console.log(ground.scaling.y);

// //material.clearCoat.bumpTexture.level  += Math.sin(alpha) / 100;
//   });


//   scene.createDefaultEnvironment({
//       createGround: false,
//       createSkybox: false,
//   });
// //scene.debugLayer.show();
//   return scene;

// };