import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Models/Model.jsx';
export default function Renderer() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 35, zoom: 0.1, near: 1, far: 1000 }}
      style={{
        backgroundColor: '#111a21',
        width: '100%',
        height: '100vh',
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