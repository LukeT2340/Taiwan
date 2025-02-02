import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const HeroText = () => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textContainerRef.current || window.innerWidth < 1025) return;

      const normalizedScroll = window.scrollY / window.innerHeight;

      if (normalizedScroll > 1) return;

      textContainerRef.current.style.scale = (
        1 +
        normalizedScroll ** 1 * 3
      ).toString();
      textContainerRef.current.style.transform = `translateY(${-16 * normalizedScroll}vh)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <mesh position={[0, 0, 0]}>
      <Html className="pointer-events-none" center={true} zIndexRange={[0, 10]}>
        <motion.div
          className="mx-auto max-w-[541px] font-taiwan"
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
