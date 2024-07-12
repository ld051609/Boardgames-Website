import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const DrinkModel = () => {
    const refContainer = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, cafeLatteModel;

        // Initialize Three.js components
        function initThree() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(20, refContainer.current.clientWidth / refContainer.current.clientHeight, 0.1, 100);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(refContainer.current.clientWidth, refContainer.current.clientHeight);
            renderer.setClearColor(0xffffff);
            refContainer.current.appendChild(renderer.domElement);

            // Handle window resizing
            window.addEventListener('resize', () => {
                camera.aspect = refContainer.current.clientWidth / refContainer.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(refContainer.current.clientWidth, refContainer.current.clientHeight);
            });

            // Ambient light to illuminate the scene
            const ambientLight = new THREE.AmbientLight(0xffffff, 2);
            scene.add(ambientLight);

            // Directional light for additional lighting and shadows
            const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
            dirLight.position.set(10, 10, 10);
            scene.add(dirLight);
        }

        // Load the 3D model
        function loadModel() {
            const loader = new GLTFLoader();
            loader.load(
                '/models/cafe-latte.glb',
                function (gltf) {
                    cafeLatteModel = gltf.scene;
                    scene.add(cafeLatteModel);

                    // Calculate bounding box of the model
                    const box = new THREE.Box3().setFromObject(cafeLatteModel);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());
                    const maxSize = Math.max(size.x, size.y, size.z);
                    const cameraDistance = maxSize * 2; // Adjust multiplier for desired distance

                    // Position camera to look at the model
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
        }

        // Animation function
        function animate() {
            requestAnimationFrame(animate);

            // Rotate the model (if needed)
            if (cafeLatteModel) {
                cafeLatteModel.rotation.y += 0.01;
            }

            // Render the scene
            renderer.render(scene, camera);
        }

        // Start Three.js setup and animation
        initThree();
        loadModel();
        animate();

        // Cleanup: Remove renderer's DOM element
        return () => {
            if (renderer) {
                renderer.domElement.remove();
                renderer.dispose();
            }
        };
    }, []);

    return <div ref={refContainer} style={{ width: '100%', height: '50vh' }}></div>; 
};

export default DrinkModel;
