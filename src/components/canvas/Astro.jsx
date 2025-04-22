/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import useWindowDimensions from '../../hooks/useMobileMedia';
import CanvasLoader from '../CanvasLoader';
import { useSpring, a } from '@react-spring/three';

const Astro = ({ setOnSad, setOnHappy }) => {
  const astro = useGLTF('./astro/scene.gltf');
  const normalFace = useTexture('./astro/textures/face.png');
  const happyFace = useTexture('./astro/textures/face-happy.png');
  const sadFace = useTexture('./astro/textures/face-sad.png');
  const { isMobile, windowDimensions } = useWindowDimensions();
  const [isSadFace, setIsSadFace] = useState(false);
  const faceRef = useRef();

  const xPos = (windowDimensions.width / 1920) * 0.3;

  const changeFace = (face) => {
    setTimeout(() => {
      faceRef.current.material.map = face;
    }, 200);
    if (face == sadFace) {
      setIsSadFace(true);
    }
  };

  useEffect(() => {
    astro.scene.traverse((child) => {
      if (child.name === 'Object_9') {
        faceRef.current = child;

        setOnHappy(() => changeFace.bind(null, happyFace));
        setOnSad(() => changeFace.bind(null, sadFace));
      }
    });
  }, [astro]);

  useEffect(() => {
    if (isSadFace) {
      setTimeout(() => {
        changeFace(normalFace);
        setIsSadFace(false);
      }, 1500);
    }
  }, [isSadFace]);

  // Spring animation for floating effect
  const { position, rotation } = useSpring({
    loop: true,
    config: {
      mass: 15,
      tension: 25,
      friction: 15,
      duration: 3000,
    },
    from: {
      position: [-xPos, -1.5, 0],
      rotation: [-0.2, 0.1, 0.1],
    },
    to: async (next) => {
      while (1) {
        await next({
          position: [-xPos + 0.5, 0.75, 0],
          rotation: [0.2, 0.1, 0.1],
        });
        await next({ position: [-xPos, -1.5, 0], rotation: [-0.2, 0.1, 0.1] });
      }
    },
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={1} castShadow />
      <spotLight
        position={[-10, -1.5, 0]}
        angle={0.5}
        penumbra={0.3}
        intensity={0.7}
        castShadow
        shadow-mapSize={30}
      />
      <a.group position={position} rotation={rotation}>
        <primitive
          object={astro.scene}
          scale={isMobile ? 0.7 : 0.95}
          position={[-xPos, -1.5, 0]}
          rotation={[-0.5, 0.1, 0.1]}
        />
      </a.group>
    </mesh>
  );
};

const AstroCanvas = ({ setOnHappy, setOnSad }) => {
  const { windowDimensions } = useWindowDimensions();

  const { width } = windowDimensions;
  const fovScaler =
    width > 1500
      ? 24
      : width > 1200
      ? 18
      : width > 1000
      ? 20
      : width > 819
      ? 15
      : width > 767
      ? 11
      : width > 500
      ? 3
      : 1.8;

  return (
    <div className="md:w-[25vw] w-full md:h-screen h-52">
      <Canvas
        frameloop="demand"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 25],
          fov: (1920 / width) * fovScaler,
          near: 5,
          far: 40,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            // autoRotate
            // autoRotateSpeed={-3}
          />

          <Astro setOnHappy={setOnHappy} setOnSad={setOnSad} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AstroCanvas;
