import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import "./style.css";


const app = document.querySelector(".app");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, app.clientWidth / app.clientHeight, 0.1, 1000);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer({
	antialias: true,
});

scene.background = new THREE.Color().setRGB(0.0, 0.001, 0.05);

renderer.setSize(app.clientWidth, app.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio, 2);
renderer.setAnimationLoop(renderLoop);

const canvas = renderer.domElement;
app.appendChild(canvas);

camera.position.z = 2;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = false;
controls.autoRotate = false;


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00aaff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function renderLoop() {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(renderLoop);
}
