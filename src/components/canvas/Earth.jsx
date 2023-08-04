import React from 'react'
import {Suspense } from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { SectionWrapper } from '../../hoc';

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf');
  return (
    <>
        <hemisphereLight 
            intensity={2.5}
        />
        <spotLight 
            position = {[-20, 50, 10]}
            angle = {0.12}
            penumbra = {1}
            intensity = {1}
            castShadow 
            shadow-mapSize = {1024}
        />
        <primitive 
            object={earth.scene}
            scale={1.9}
        />
    </>    
  );
};

const EarthCanvas = () => {
    return(
        <Canvas
            shadows
            frameloop='demand'
            gl={{preserveDrawingBuffer: true}}
            camera={{ 
            }}
            style={{cursor: "grab"}}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />   
            </Suspense>

        </Canvas>
    )
}
export default EarthCanvas;