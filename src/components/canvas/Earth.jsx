import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';
import useMobileMedia from '../../hooks/useMobileMedia';
import useInView from '../../hooks/useInView';
import CanvasLoader from '../CanvasLoader';
import ThrottledAutoRotateControls from './ThrottledAutoRotateControls';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  const { isMobile } = useMobileMedia();
  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 3 : 1.8}
      position-y={0}
      rotation-y={0}
    ></primitive>
  );
};

const EarthCanvas = () => {
  //Render only when 10% is visible for performance
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div ref={ref} className="w-full h-full">
      {inView && (
        <Canvas
          // shadows
          frameloop="demand"
          dpr={[1, 1.2]}
          gl={{ antialias: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ThrottledAutoRotateControls autoRotate />
            <Earth />
            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;
