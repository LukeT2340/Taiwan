import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Clouds, Cloud } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import CameraController from './CameraController';
import ForegroundImage from './ForegroundImage';
import HeroText from './HeroText';
import imageOne from '/assets/images/desktop/1.jpg';
import heroMobile from '/assets/images/desktop/hero-entire.jpg';
import { MotionImage } from '../../miscellaneous';
import useShowCanvas from '../../../hooks/useShowCanvas';
import front from '/assets/images/desktop/Front.png';
import mid from '/assets/images/desktop/Mid-extended.png';
import back from '/assets/images/desktop/Back.png';
import silhouette from '/assets/images/desktop/Back-Silhouette.png';
import sky from '/assets/images/desktop/Sky.png';

const Hero: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const showCanvas = useShowCanvas();

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
          <div className="relative mx-auto max-w-[336px] md:max-w-[500px]">
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
        <div className="block-one relative z-10 h-[160vh] w-screen bg-orange">
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
                fov: 70,
                near: 1,
                far: 17,
              }}
            >
              <CameraController />

              <ForegroundImage
                textureUrl={front}
                position={[0, 0, -2]}
                size={[16, 9]}
                adjustWithScroll={true}
                adjustsWithScrollFactor={6}
              />
              <ForegroundImage
                textureUrl={mid}
                position={[0, 0, -4]}
                size={[24, 13.5]}
                adjustWithScroll={true}
                adjustsWithScrollFactor={3}
              />
              <ForegroundImage
                textureUrl={back}
                position={[0, 0, -6]}
                size={[28, 15.75]}
                adjustWithScroll={true}
                adjustsWithScrollFactor={1}
              />
              <ForegroundImage
                textureUrl={silhouette}
                position={[0, 0, -8]}
                size={[34, 19.7]}
                adjustWithScroll={false}
                adjustsWithScrollFactor={24}
              />
              <ForegroundImage
                textureUrl={sky}
                position={[0, 0, -14]}
                size={[60, 33.75]}
                adjustWithScroll={false}
              />

              <Clouds material={THREE.MeshBasicMaterial} position={[0, 5, -3]}>
                <Cloud
                  segments={85}
                  bounds={[8, 0, 5]}
                  volume={0.5}
                  color="white"
                  speed={0.3}
                  seed={19}
                  opacity={0.2}
                />
              </Clouds>

              <HeroText />

              <EffectComposer multisampling={0}>
                <DepthOfField
                  focusDistance={0.11}
                  focalLength={0.1}
                  bokehScale={0.001}
                  height={120}
                  width={120}
                />
              </EffectComposer>
            </Canvas>
          </motion.div>
        </div>
      )}
      <div className="block-two bg-orange pb-[75px] pt-[85px] lg:px-[20px] lg:pt-[76px]">
        <div className="flex flex-col items-center justify-center gap-[54px] px-[30px] text-white lg:flex-row lg:gap-[65px]">
          <motion.div className="block-copy md:max-w-[600px] lg:mb-[130px] lg:max-w-[298px]">
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
          <div className="md:w-[600px]">
            <MotionImage
              src={imageOne}
              alt="From Taipei’s shimmering skyscrapers and exciting food scene to the misty mountains of the Central Range, Taiwan packs the best of Asia into an island roughly half the size of Tasmania."
              className="w-full rounded-[30px] md:rounded-[40px] lg:w-auto lg:rounded-[30px]"
            />
          </div>
          <motion.div className="block-copy md:max-w-[600px] lg:mt-[190px] lg:max-w-[300px]">
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
