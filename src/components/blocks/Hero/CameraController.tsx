import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { lerp } from 'three/src/math/MathUtils.js';

function CameraController() {
  const cameraRef = useRef<any>();
  const timeRef = useRef(0);

  useFrame((state, _) => {
    if (!cameraRef.current) {
      cameraRef.current = state.camera;
      cameraRef.current.position.z = 3;
    }

    timeRef.current += timeRef.current = state.clock.elapsedTime;

    let targetX = 0;
    let targetY = 0;

    // Use mouse-based control for desktop
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    targetX = lerp(cameraRef.current.position.x, mouseX * 0.4, 0.015);
    targetY = lerp(cameraRef.current.position.y, mouseY * 0.4, 0.015);

    cameraRef.current.position.x = targetX;
    cameraRef.current.position.y = targetY;
  });

  return null;
}

export default CameraController;
