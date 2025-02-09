import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { lerp } from 'three/src/math/MathUtils.js';

const HeroText = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  let scaleTarget = 1; // Store the target scale value
  let scaleCurrent = 1; // Store the current scale value

  useFrame(() => {
    if (!textContainerRef.current || window.innerWidth < 1025) return;

    const normalizedScroll = window.scrollY / window.innerHeight;

    if (normalizedScroll > 1) return;

    // Define target scale
    scaleTarget = 1 + normalizedScroll * 0.5;

    // Smoothly interpolate current scale towards target scale
    scaleCurrent = lerp(scaleCurrent, scaleTarget, 0.1);

    // Apply the smoothed scale
    textContainerRef.current.style.scale = scaleCurrent.toString();
  });

  return (
    <mesh position={[0, 0, -2]}>
      <Html className="pointer-events-none" center={true} zIndexRange={[0, 10]}>
        <motion.div
          className="mx-auto max-w-[541px] font-taiwan 3xl:max-w-[800px]"
          ref={textContainerRef}
        >
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.1, ease: 'easeOut' }}
          >
            Travel through Taiwan
          </motion.h1>
          <div className="ml-5 lg:ml-10">
            <motion.h2
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.1, ease: 'easeOut' }}
            >
              your way
            </motion.h2>
          </div>
        </motion.div>
      </Html>
    </mesh>
  );
};

export default HeroText;
