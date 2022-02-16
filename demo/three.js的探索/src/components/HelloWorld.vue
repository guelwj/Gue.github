<script setup>
import { ref } from 'vue'
import { socket } from '@/utils/socket'

// 导入整个 three.js核心库
import * as THREE from 'three';

defineProps({
  msg: String
})

const count = ref(0)

const handleChange = (e) => {
  console.log(e.target.value)
  socket.emit('chat', e.target.value)
}

// Three.js代码
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// 圆形
const circleGeometry = new THREE.CircleGeometry( 3, 100, 2, 10 );
const circleMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const circle = new THREE.Mesh( circleGeometry, circleMaterial );
// scene.add( circle );

// 锥体
const coneGeometry = new THREE.ConeGeometry( 2, 8, 32 );
const coneMaterial = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cone = new THREE.Mesh( coneGeometry, coneMaterial );
// scene.add( cone );

// 改变材质种类
let cube2;
const changeMaterial = () => {
  // 实例化一个加载器loader
  const loader = new THREE.TextureLoader();

  // 加载一张材质图片
  loader.load(
    // 'src/assets/logo.png',   // 图片路径
    'http://renyuan.bos.xyz/FloorsCheckerboard_S_Diffuse.jpg', // 图片路径

    // 加载完贴图后的回调函数
    function (texture) {
      // 当材质加载完成之后，我们创建一个新的mesh对象，为这个对象创建几何和材质，为材质附上一张贴图
      const cube2Material = new THREE.MeshBasicMaterial({
        map: texture // 将材质的map属性设置为加载的图片
      });
      const cube2Geometry = new THREE.BoxGeometry(1, 1, 1);  // 一个正方体几何体，长宽高都为1
      cube2 = new THREE.Mesh(cube2Geometry, cube2Material);  // 创建这个mesh对象

      scene.add(cube2); // 将新创建的带贴图的几何体添加到场景内，我们就可以看到了

      animate();
    },

    // 目前不支持加载贴图过程中的回调函数
    undefined,

    // 加载出错时候的回调函数
    function (err) {
      console.error('An error happened.');
    }
  );
}
changeMaterial()

// 动画
function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube2.rotation.x -= 0.01;
  cube2.rotation.y += 0.01;

  renderer.render( scene, camera );
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <input type="text" @change="handleChange"/>
</template>

<style scoped></style>
