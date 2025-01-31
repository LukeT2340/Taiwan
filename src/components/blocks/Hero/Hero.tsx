import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Clouds, Cloud } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import CameraController from './CameraController';
import Background from './Background';
import ForegroundImage from './ForegroundImage';
import HeroText from './HeroText';
import imageOne from '../../../assets/images/desktop/1.jpg';
import { CopyContainer, MotionImage } from '../../miscellaneous';

const Hero: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!canvasContainerRef.current) return;

      const scrollY = window.scrollY;
      const normalizedScroll = scrollY / window.innerHeight;
      if (normalizedScroll > 1) {
        canvasContainerRef.current.style.display = 'none';
        return;
      }
      canvasContainerRef.current.style.display = 'block';
      canvasContainerRef.current.style.opacity = (
        1 - normalizedScroll
      ).toString();
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero z-10">
      <div className="block-one relative z-10 h-screen w-screen bg-orange">
        <div
          className="fixed inset-0 z-10 h-screen w-screen"
          ref={canvasContainerRef}
        >
          <Canvas
            camera={{
              position: [0, 0, 3],
              fov: 72,
              near: 3,
              far: 30,
            }}
          >
            <CameraController />

            {/* Scene Content */}
            <ForegroundImage
              textureUrl="/src/assets/images/desktop/Front.png"
              position={[0, 0, -2]}
              size={[16, 9]}
              adjustWithScroll={true}
              adjustsWithScrollFactor={4}
            />
            <ForegroundImage
              textureUrl="/src/assets/images/desktop/Mid.png"
              position={[0, 0, -4]}
              size={[24, 13.5]}
              adjustWithScroll={true}
              adjustsWithScrollFactor={4}
            />
            <ForegroundImage
              textureUrl="/src/assets/images/desktop/Back.png"
              position={[0, 0, -6]}
              size={[28, 15.75]}
              adjustWithScroll={true}
              adjustsWithScrollFactor={1}
            />
            <ForegroundImage
              textureUrl="/src/assets/images/desktop/Back-Silhouette.png"
              position={[0, 0, -8]}
              size={[34, 19.7]}
              adjustWithScroll={false}
              adjustsWithScrollFactor={24}
            />
            <Background
              textureUrl="/src/assets/images/desktop/Sky.png"
              position={[0, 0, -14]}
              size={[55, 31]}
            />
            <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -5]}>
              <Cloud
                segments={300}
                bounds={[13, 10, -12]}
                volume={2}
                color="white"
                speed={0.2}
                seed={22}
                opacity={0.1}
              />
            </Clouds>
            <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -3]}>
              <Cloud
                segments={100}
                bounds={[12, 4, -12]}
                volume={4}
                color="white"
                speed={0.2}
                seed={1}
                opacity={0.3}
              />
            </Clouds>
            <Clouds material={THREE.MeshBasicMaterial} position={[0, -2, -1]}>
              <Cloud
                segments={40}
                bounds={[11, 2, -12]}
                volume={5}
                color="white"
                speed={0.2}
                seed={25}
                opacity={0.1}
              />
            </Clouds>

            <HeroText />

            <EffectComposer multisampling={0}>
              <DepthOfField
                focusDistance={0.02}
                focalLength={0.5}
                bokehScale={6}
                height={240}
                width={480}
              />
            </EffectComposer>
          </Canvas>
        </div>
      </div>
      <div className="block-two bg-orange pb-[75px] pt-[60vh]">
        <div className="flex flex-col items-center justify-center gap-[54px] text-white lg:flex-row lg:gap-[65px] lg:px-[30px]">
          <div className="block-copy lg:mb-[130px] lg:max-w-[298px]">
            <CopyContainer>
              <p>
                From Taipei’s shimmering skyscrapers and exciting food scene to
                the misty mountains of the Central Range, Taiwan packs the best
                of Asia into an island roughly half the size of Tasmania.
              </p>
              <p>
                Majestic mountain ranges are a striking backdrop to stunning
                coastlines, and traditional cultural heritage weaves through
                modern cities with cutting-edge tech. Taiwan is a country of
                exhilarating contrasts, but what really sets it apart is how it
                connects these from coast to coast.
              </p>
            </CopyContainer>
          </div>
          <CopyContainer>
            <MotionImage
              src={imageOne}
              alt="From Taipei’s shimmering skyscrapers and exciting food scene to the misty mountains of the Central Range, Taiwan packs the best of Asia into an island roughly half the size of Tasmania."
              className="w-full rounded-[30px] lg:w-auto"
            />
          </CopyContainer>
          <div className="block-copy lg:mt-[190px] lg:max-w-[300px]">
            <CopyContainer>
              <p>
                Stellar infrastructure means hiking through dramatic gorges,
                cycling along scenic coastlines or criss-crossing the island by
                high-speed train with ease. Many towns and cities are near major
                hiking trails, and the impressive web of bike paths and train
                stations allows you to effortlessly mix and match these
                transport modes, giving you the freedom to experience this
                island gem in ways few other destinations allow.
              </p>
            </CopyContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
