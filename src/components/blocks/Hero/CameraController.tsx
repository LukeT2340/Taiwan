import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { lerp } from 'three/src/math/MathUtils.js';

function CameraController() {
  const cameraRef = useRef<any>();
  const timeRef = useRef(0);
  // const [deviceMotion, setDeviceMotion] = useState({
  //   alpha: 0,
  //   beta: 0,
  //   gamma: 0,
  // });
  // const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 1025 });

  useEffect(() => {
    // const detectMobile = () => {
    //   return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    // };
    // setIsMobile(detectMobile());
    // if (detectMobile()) {
    //   const handleOrientation = (event: DeviceOrientationEvent) => {
    //     const normalizedScroll = window.scrollY / window.innerHeight;
    //     if (normalizedScroll > 1) return;
    //     setDeviceMotion({
    //       alpha: event.alpha || 0, // Yaw
    //       beta: event.beta || 0, // Pitch
    //       gamma: event.gamma || 0, // Roll
    //     });
    //   };
    //   window.addEventListener('deviceorientation', handleOrientation);
    //   return () => {
    //     window.removeEventListener('deviceorientation', handleOrientation);
    //   };
    // }
  }, []);

  useFrame((state, delta) => {
    if (!cameraRef.current) {
      cameraRef.current = state.camera;
      cameraRef.current.position.z = 3;
    }

    timeRef.current += timeRef.current = state.clock.elapsedTime;

    let targetX = 0;
    let targetY = 0;

    if (mobile) {
      // Smooth oscillation effect
      const offsetX = Math.sin(timeRef.current * 0.5) * 0.1;
      const offsetY = Math.cos(timeRef.current * 0.5) * 0.3;

      targetX = offsetX;
      targetY = offsetY;
    } else {
      // Use mouse-based control for desktop
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;
      targetX = lerp(cameraRef.current.position.x, mouseX * 0.4, 0.015);
      targetY = lerp(cameraRef.current.position.y, mouseY * 0.4, 0.015);
    }

    cameraRef.current.position.x = targetX;
    cameraRef.current.position.y = targetY;
  });

  return null;
}

export default CameraController;
