import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const BobaModel = () => {
    const refContainer = useRef(null);

    useEffect(() => {
        // Initialize Three.js components
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(refContainer.current.clientWidth, refContainer.current.clientHeight); // Set renderer size based on container
        renderer.setClearColor(0xffffff); // Set background color
        refContainer.current.appendChild(renderer.domElement);

        // Handle window resizing
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Ambient light to illuminate the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);

        // Directional light for additional lighting and shadows
        const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
        dirLight.position.set(10, 10, 10);
        scene.add(dirLight);



        // Load the 3D model
        const loader = new GLTFLoader();
        let cafeLatteModel;

        loader.load(
            '/models/matcha_bubble_tea.glb',
            function (gltf) {
                cafeLatteModel = gltf.scene;
                scene.add(cafeLatteModel);

                // Calculate bounding box of the model
                const box = new THREE.Box3().setFromObject(cafeLatteModel);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                const maxSize = Math.max(size.x, size.y, size.z);
                const cameraDistance = maxSize * 2; // Adjust multiplier for desired distance

                // Position camera to look down from above the model
                camera.position.copy(center);
                camera.position.x += cameraDistance;
                camera.position.y += cameraDistance;
                camera.position.z += cameraDistance;
                camera.lookAt(center);
            },
            undefined,
            function (error) {
                console.error('Error loading GLTF model:', error);
            }
        );

        // Animation function
        const animate = function () {
            requestAnimationFrame(animate);

            // Rotate the model (if needed)
            if (cafeLatteModel) {
                cafeLatteModel.rotation.y += 0.03;
            }

            // Render the scene
            renderer.render(scene, camera);
        };

        // Start animation loop
        animate();

        // Cleanup: Remove renderer's DOM element
        return () => {
            renderer.domElement.remove();
            renderer.dispose();
        };

        
    }, []); // Empty dependency array ensures useEffect runs only once

    return <div ref={refContainer} style={{ width: '50%', height: '50vh' }}></div>; // Set container dimensions
};

export default BobaModel;
