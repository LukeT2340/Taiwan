import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { lerp } from 'three/src/math/MathUtils.js';

function CameraController() {
  const cameraRef = useRef<any>();
  const timeRef = useRef(0);

  const zAnimation = {
    duration: 2,
    startZ: 1.8,
    endZ: 3,
  };

  useFrame((state, delta) => {
    if (window.scrollY / window.innerHeight > 1) return;

    if (!cameraRef.current) {
      cameraRef.current = state.camera;
      cameraRef.current.position.z = zAnimation.startZ;
    }

    timeRef.current += delta;
    const progress = Math.min(timeRef.current / zAnimation.duration, 1);
    const eased = 1 - Math.pow(1 - progress, 2);

    let targetX = 0;
    let targetY = 0;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    targetX = lerp(cameraRef.current.position.x, mouseX * 0.72, 0.01);
    targetY = lerp(
      cameraRef.current.position.y,
      mouseY - (window.scrollY / window.innerHeight) * 2,
      0.01
    );

    cameraRef.current.position.x = targetX;
    cameraRef.current.position.y = targetY;
    cameraRef.current.position.z = lerp(
      zAnimation.startZ,
      zAnimation.endZ - (window.scrollY / window.innerHeight) * 1.2,
      eased
    );
  });

  return null;
}

export default CameraController;
