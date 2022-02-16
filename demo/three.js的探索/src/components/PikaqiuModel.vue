<script setup>
// 导入整个 three.js核心库
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Three.js代码
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 鼠标事件
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseup, false);

// 滚轮事件
 document.addEventListener('mousewheel', onMousewheel, false);

// 加载模型
let carModel;// 汽车模型
let allTexture;// 质地贴图
const loader = new GLTFLoader();
loader.load('/static/pikaqiu/scene.gltf', function(gltf) {
  carModel = gltf.scene
  loadAllTexture(() => {
    modelAddImage(carModel)
    scene.add(gltf.scene);

    // 光源
    const light = new THREE.PointLight( 0xffffff, 1, 0 );// 参数：color 十六进制光照颜色、intensity 光照强度、distance 这个距离表示从光源到光照强度为0的位置
    light.position.set( 10, 10, 10 );
    scene.add( light );

    // 执行动画
    animate();
  })
}, undefined, function(error) {
	console.error(error);
});

// 加载贴图文件到内存里
function loadAllTexture(cb){
  allTexture = {};

  let loadIndex = 0;
  let textures = [
    "Material.009_baseColor",
    "Material.009_metallicRoughness",
    "Material.010_normal",
    "Material.011_baseColor",
    "Material.011_normal",
    "Material.012_baseColor",
    "Material.012_normal",
    "Material.017_baseColor"
  ];

  function loadNextTexture(){
    let textureName = textures[loadIndex];
    let extName = '.png';
    if (textureName == 'Material.012_normal' || textureName == 'Material.017_baseColor') {
      extName = '.jpeg'
    }
    let textUrl = `static/car/textures/${textureName}${extName}`;
    loadTexture(textUrl, function(texture){
      if(loadIndex < textures.length - 1){
        allTexture[textureName] = {
            texture: texture
        };
        loadIndex++;
        loadNextTexture();
      }else{
        if(cb) cb();
      }
    });
  }
  loadNextTexture();
}

function loadTexture(filePath, cb){
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(filePath, cb);
}

// 为模型添加贴图
function modelAddImage(carModel) {
  // 根据图片名称手动一一对应
  const textureArr = carModel.children[0].children[0].children;
  for(let i = 0; i < textureArr.length; i++){
    let modelObj = textureArr[i];
    // console.log(modelObj)
    modelObj.material = new THREE.MeshStandardMaterial();
    switch(modelObj.name) {
      case 'Object_2':
        // 车窗、车灯
        modelObj.material.map = allTexture["Material.012_baseColor"].texture;
        break;
      case 'Object_3':
        // 倒后镜
        modelObj.material.map = allTexture["Material.012_baseColor"].texture;
        break;
      case 'Object_4':
        // 前车灯
        modelObj.material.map = allTexture["Material.009_metallicRoughness"].texture;
        break;
      case 'Object_5':
        // 车身两侧后部的灯
        modelObj.material.map = allTexture["Material.011_baseColor"].texture;
        break;
      case 'Object_6':
        // 后排车边框、后尾箱后部
        modelObj.material.map = allTexture["Material.011_baseColor"].texture;
        break;
      case 'Object_7':
        // 车标
        modelObj.material.map = allTexture["Material.012_normal"].texture;
        break;
      case 'Object_8':
        // 排气管
        modelObj.material.map = allTexture["Material.011_baseColor"].texture;
        break;
      case 'Object_9':
        // 车身细边线
        modelObj.material.map = allTexture["Material.012_baseColor"].texture;
        break;
      case 'Object_10':
        // 车轮
        modelObj.material.map = allTexture["Material.012_baseColor"].texture;
        break;
      case 'Object_11':
        // 车身
        modelObj.material.map = allTexture["Material.011_baseColor"].texture;
        break;
      case 'Object_12':
        // 车牌
        modelObj.material.map = allTexture["Material.009_baseColor"].texture;
        break;
      case 'Object_13':
        // 车底盘
        modelObj.material.map = allTexture["Material.012_baseColor"].texture;
        break;
      case 'Object_14':
        // 看不出
        modelObj.material.map = allTexture["Material.010_normal"].texture;
        break;
      case 'Object_15':
        // 后轮胎
        modelObj.material.map = allTexture["Material.012_baseColor"].texture;
        break;
      case 'Object_16':
        // 前轮胎
        modelObj.material.map = allTexture["Material.012_baseColor"].texture;
        break;
      case 'Object_17':
        // 车轮转动板前部
        modelObj.material.map = allTexture["Material.012_baseColor"].texture;
        break;
      case 'Object_18':
        // 车轮转动板后部
        modelObj.material.map = allTexture["Material.009_metallicRoughness"].texture;
        break;
      case 'Object_19':
        // 前车轮转动板后部底色
        modelObj.material.map = allTexture["Material.009_metallicRoughness"].texture;
        break;
      case 'Object_20':
        // 看不出
        modelObj.material.map = allTexture["Material.010_normal"].texture;
        break;
      default:
        modelObj.material.map = allTexture["Material.011_baseColor"].texture;// material.map 普通贴图
        // modelObj.material.normalMap = allTexture["Material.011_baseColor"].texture;// material.normalMap，让细节程度较低的表面生成高细节程度的精确光照方向和反射效果
        // modelObj.material.aoMap = allTexture["Material.011_baseColor"].texture;// material.aoMap，用来描绘物体和物体相交或靠近的时候遮挡周围漫反射光线的效果
        break;
    }
  }
}

// 动画
function animate() {
  requestAnimationFrame( animate );
  // carModel.rotation.y += 0.01;
  renderer.render( scene, camera );
};

// 鼠标移动控制模型旋转
let rotateStart = new THREE.Vector2();

/*
  鼠标移动控制模型旋转思想：
  当按下鼠标时及时当前鼠标的水平坐标clientX1，在鼠标移动的过程中不断触发onMouseMove事件，
  不停的记录鼠标的当前坐标clientX2，由当前坐标减去记录的上一个水平坐标，
  并且将当前的坐标付给上一个坐标clientX1，计算两个坐标的之间的差clientX2-clientX1，
  将得到的差值除以一个常量（这个常量可以根据自己的需要调整），得到旋转的角度
*/
let mouseDown;
let mouseX;
let mouseY;
function onMouseDown(event){
  event.preventDefault();
  mouseDown = true;
  mouseX = event.clientX;// 触发事件时的鼠标指针的水平坐标
  mouseY = event.clientY;// 触发事件时的鼠标指针的垂直坐标

  rotateStart.set( event.clientX, event.clientY );
  document.addEventListener( 'mousemove', onMouseMove, false );
}

function onMouseup(){      
  mouseDown = false;
  document.removeEventListener("mousemove", onMouseMove);
}

function onMouseMove(event){
  if(!mouseDown){
    return;
  }       
  let deltaX = event.clientX - mouseX;
  let deltaY = event.clientY - mouseY;
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateScene(deltaX, deltaY);        
}

// 模型旋转
function rotateScene(deltaX, deltaY){
  // 设置模型旋转速度
  let degY = deltaX / 279;
  let degX = deltaY / 279;

  carModel.rotation.y += degY;
  carModel.rotation.x += degX;
  render();
}

function onMousewheel(event){
  // 设置模型Z轴的移动距离
  let degZ = -(event.deltaY / 500);

  carModel.position.z += degZ;
}

function render() {
  renderer.render(scene, camera);  
}
</script>

<template></template>

<style scoped></style>
