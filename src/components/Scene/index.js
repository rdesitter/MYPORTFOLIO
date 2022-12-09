import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './RaphAnim';

const Scene = () => {
  useEffect(() => {
    console.log(window.innerWidth)
    if(window.innerWidth < 701) {
      // console.log(positionElt)
      // return position = [-0.825, -0.9, 0];
    }
  }, [])
  return (
    <Canvas
        camera={{ position: [-4, 0, 12.25], fov: 15 }}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute'
        }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
