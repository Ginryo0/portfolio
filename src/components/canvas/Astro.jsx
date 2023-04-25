/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Astro = ({ isMobile }) => {
  const astro = useGLTF('./astro/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.15}
      />
      <primitive
        object={astro.scene}
        scale={isMobile ? 0.7 : 0.95}
        position={isMobile ? [2, -3, -0.5] : [5, -3, -0.5]}
        rotation={[-0.2, -0.2, 0.2]}
      />
    </mesh>
  );
};

const AstroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Listen for changes of screen size
    const mediaQuery = window.matchMedia('(max-width: 800px)');

    // Set initial value of 'isMobile' state
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to media query
    const handleMediaChange = (ev) => {
      setIsMobile(ev.matches);
    };

    // Add the callback function to handle changes
    mediaQuery.addEventListener('change', handleMediaChange);

    // Clear event listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      //isMobile ? 35 :
      camera={{ position: [20, 3, 25], fov: 17 }}
      gl={{ preserveDrawingBufferSize: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={-3}
      />
      <Astro isMobile={isMobile} />
      {/* </Suspense> */}
    </Canvas>
  );
};

export default AstroCanvas;
