/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import useMobileMedia from '../../hooks/useMobileMedia';
import CanvasLoader from '../CanvasLoader';

const Astro = () => {
  const astro = useGLTF('./astro/scene.gltf');
  const isMobile = useMobileMedia();

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
  return (
    <Canvas
      frameloop="demand"
      shadows
      //isMobile ? 35 :
      camera={{ position: [20, 3, 25], fov: 17 }}
      gl={{ preserveDrawingBufferSize: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={-3}
        />
        <Astro />
      </Suspense>
    </Canvas>
  );
};

export default AstroCanvas;
