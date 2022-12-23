import {
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";
import WebGL from "../../utils/WebGL";

const container = document.getElementById("app-background");

if (container && (WebGL.isWebGL2Available() || WebGL.isWebGLAvailable())) {
  start();
}

//

function start() {
  const { scene, camera, renderer, sphere } = init3D();

  window.addEventListener("resize", onWindowResize);

  animate();

  //

  function onWindowResize() {
    const { width, height } = container.getBoundingClientRect();

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  }

  //

  function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.y += 0.001;

    renderer.render(scene, camera);
  }

  //

  function init3D() {
    const { width, height } = container.getBoundingClientRect();

    // Scene

    const scene = new Scene();
    scene.background = new Color(0x666666);

    // Camera

    const camera = new PerspectiveCamera(60, width / height, 1, 100000);
    camera.position.z = 3200;

    // Sphere

    const sphere = new Mesh(
      new SphereGeometry(100, 32, 16),
      new MeshBasicMaterial({
        color: 0xffffff,
        refractionRatio: 0.95,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      })
    );

    sphere.scale.x = sphere.scale.y = sphere.scale.z = 10;

    scene.add(sphere);

    // Renderer

    const renderer = new WebGLRenderer();

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Context

    return { scene, camera, renderer, sphere };
  }
}
