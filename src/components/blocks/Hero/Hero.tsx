import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Clouds, Cloud } from '@react-three/drei';
import { Vignette } from '@react-three/postprocessing';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import CameraController from './CameraController';
import ThreeImage from '../../miscellaneous/ThreeImage';
import HeroText from './HeroText';
import imageOne from '/assets/images/desktop/1.jpg';
import heroMobile from '/assets/images/desktop/hero-entire.jpg';
import { MotionImage } from '../../miscellaneous';
import useShowCanvas from '../../../hooks/useShowCanvas';
import front from '/assets/images/desktop/Front.png';
import mid from '/assets/images/desktop/Mid.png';
import back from '/assets/images/desktop/Back.png';
import silhouette from '/assets/images/desktop/Back-Silhouette.png';
import sky from '/assets/images/desktop/Sky.png';
import { useMediaQuery } from 'react-responsive';

const Hero: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const showCanvas = useShowCanvas();
  const wideScreen = useMediaQuery({ maxAspectRatio: '16/9' });

  useEffect(() => {
    if (!showCanvas) return;

    const handleScroll = () => {
      if (!canvasContainerRef.current) return;

      const scrollY = window.scrollY;
      const normalizedScroll = scrollY / window.innerHeight;

      if (normalizedScroll > 1) {
        canvasContainerRef.current.style.position = 'absolute';
        return;
      }

      canvasContainerRef.current.style.position = 'fixed';
      canvasContainerRef.current.style.opacity = (
        1 -
        (normalizedScroll - 0.5) / 0.5
      ).toString();
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [showCanvas]);

  return (
    <section className="hero relative z-10 overflow-hidden">
      {!showCanvas ? (
        <div className="relative overflow-hidden py-[229px] md:py-[50vw] lg:flex lg:h-screen lg:w-screen lg:items-center lg:justify-center lg:py-0">
          <MotionImage
            src={heroMobile}
            alt="Hero image"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, delay: 0.1, ease: 'easeOut' }}
          />
          <div className="relative mx-auto max-w-[336px] lg:max-w-[500px]">
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
          </div>
        </div>
      ) : (
        <div className="block-one relative z-10 h-[150vh] w-screen bg-orange">
          <motion.div
            className="inset-0 z-10 h-screen w-screen"
            ref={canvasContainerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0, ease: 'easeOut' }}
          >
            <Canvas
              camera={{
                position: [0, 0, 3],
                fov: wideScreen ? 80 : 70,
                near: 1,
                far: 24,
              }}
            >
              <Suspense fallback={null}>
                <CameraController />
                <ThreeImage
                  position={[0, 0, -5]}
                  size={[30, 16.875]}
                  textureUrl={front}
                />
                <ThreeImage
                  position={[0, 0, -8]}
                  size={[44, 24.75]}
                  textureUrl={mid}
                />
                <ThreeImage
                  position={[0, 0, -12]}
                  size={[60, 33.75]}
                  textureUrl={back}
                />
                <ThreeImage
                  position={[0, 0, -14]}
                  size={[70, 40]}
                  textureUrl={silhouette}
                />
                <ThreeImage
                  position={[0, 0, -16]}
                  size={[70, 40]}
                  textureUrl={sky}
                />
                <Clouds
                  material={THREE.MeshBasicMaterial}
                  position={[5, 10, -7]}
                >
                  <Cloud
                    segments={40}
                    bounds={[20, 0, 5]}
                    volume={0.1}
                    color="white"
                    speed={0.3}
                    seed={28}
                    opacity={0.25}
                  />
                </Clouds>
                <EffectComposer multisampling={0}>
                  <Bloom
                    luminanceThreshold={0.5}
                    luminanceSmoothing={0.9}
                    intensity={0.3}
                  />
                </EffectComposer>

                <HeroText />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      )}
      <div className="block-two -mt-[2px] bg-orange pb-[75px] pt-[85px] lg:px-[20px] lg:pt-[76px]">
        <div className="flex flex-col items-center justify-center gap-[54px] px-[30px] text-white lg:flex-row lg:gap-[40px] 2xl:gap-[65px]">
          <motion.div
            className="block-copy md:max-w-[600px] lg:mb-[130px] lg:max-w-[298px]"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <p>
              From Taipei’s shimmering skyscrapers and exciting food scene to
              the misty mountains of the Central Range, Taiwan packs the best of
              Asia into an island roughly half the size of Tasmania.
            </p>
            <p>
              Majestic mountain ranges are a striking backdrop to stunning
              coastlines, and traditional cultural heritage weaves through
              modern cities with cutting-edge tech. Taiwan is a country of
              exhilarating contrasts, but what really sets it apart is how it
              connects these from coast to coast.
            </p>
          </motion.div>
          <div className="md:w-[600px] lg:w-auto">
            <MotionImage
              src={imageOne}
              alt="From Taipei’s shimmering skyscrapers and exciting food scene to the misty mountains of the Central Range, Taiwan packs the best of Asia into an island roughly half the size of Tasmania."
              className="w-full rounded-[30px] md:rounded-[40px] lg:max-w-[550px] lg:rounded-[30px]"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            />
          </div>
          <motion.div
            className="block-copy md:max-w-[600px] lg:max-w-[300px] lg:pt-[190px]"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <p>
              Stellar infrastructure means hiking through dramatic gorges,
              cycling along scenic coastlines or criss-crossing the island by
              high-speed train with ease. Many towns and cities are near major
              hiking trails, and the impressive web of bike paths and train
              stations allows you to effortlessly mix and match these transport
              modes, giving you the freedom to experience this island gem in
              ways few other destinations allow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
