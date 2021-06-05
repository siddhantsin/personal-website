import * as THREE from "three";

const clock = new THREE.Clock();

export default function animate() {
  // On mouse move
  const elapsedTime = clock.getElapsedTime();

  window.TARGET_X = window.MOUSE_X * 0.001;
  window.TARGET_Y = window.MOUSE_X * 0.001;

  window.BALL.rotation.y = 0.5 * elapsedTime; // Default spin
  window.BALL.rotation.x += 0.05 * (window.TARGET_Y - window.BALL.rotation.x); // On mouse move spin
  window.BALL.rotation.y += 0.5 * (window.TARGET_X - window.BALL.rotation.y); // On mouse move spin
  window.BALL.position.z += 0.05 * (window.TARGET_Y - window.BALL.rotation.x); // On mouse move spin

  if (process.env.NODE_ENV === "development") {
    window.CONTROLS.update();
  }
  window.RENDERER.render(window.SCENE, window.CAMERA);
  requestAnimationFrame(animate);
}
