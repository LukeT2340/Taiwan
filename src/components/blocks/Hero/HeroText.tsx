import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const HeroText = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const useScroll = () => {
      if (!textContainerRef.current || window.innerWidth < 1025) return;

      const normalizedScroll = window.scrollY / window.innerHeight;

      if (normalizedScroll > 2) return;

      textContainerRef.current.style.scale = (
        1 +
        normalizedScroll ** 1 * 1
      ).toString();
      textContainerRef.current.style.transform = `translateY(${-10 * normalizedScroll}vh)`;
    };

    document.addEventListener('scroll', useScroll);

    return () => {
      document.removeEventListener('scroll', useScroll);
    };
  }, []);

  return (
    <mesh position={[0, 0, 0]}>
      <Html className="pointer-events-none" center={true} zIndexRange={[0, 10]}>
        <motion.div
          className="3xl:max-w-[800px] mx-auto max-w-[541px] font-taiwan"
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
