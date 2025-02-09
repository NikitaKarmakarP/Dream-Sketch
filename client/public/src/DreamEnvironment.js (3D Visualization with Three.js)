import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function DreamEnvironment({ environmentData }) {
  const sceneRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Render dream elements
    environmentData.objects.forEach(obj => {
      const geometry = new THREE.SphereGeometry(obj.size);
      const material = new THREE.MeshStandardMaterial({ color: obj.color });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(obj.x, obj.y, obj.z);
      scene.add(sphere);
    });

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, [environmentData]);

  return <div ref={sceneRef}></div>;
}

export default DreamEnvironment;
