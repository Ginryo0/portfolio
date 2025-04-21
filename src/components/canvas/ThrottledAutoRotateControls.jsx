import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';

const ThrottledAutoRotateControls = () => {
  const controlsRef = useRef();
  const { invalidate } = useThree();
  const lastTime = useRef(0);

  useFrame((state) => {
    const now = state.clock.getElapsedTime();
    const controls = controlsRef.current;

    // Rotate only every 1/15th of a second (~15 FPS)
    if (now - lastTime.current > 1 / 15) {
      if (controls) {
        controls.update();
        invalidate();
      }
      lastTime.current = now;
    }
  });

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    // Invalidate on interaction
    const handleStart = () => invalidate();
    const handleChange = () => invalidate();

    controls.addEventListener('start', handleStart);
    controls.addEventListener('change', handleChange);

    return () => {
      controls.removeEventListener('start', handleStart);
      controls.removeEventListener('change', handleChange);
    };
  }, [invalidate]);

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate
      autoRotateSpeed={-2}
      enableZoom={false}
      enablePan={false}
      enableDamping
      dampingFactor={0.1}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

export default ThrottledAutoRotateControls;
