import { useScroll } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { ThreeImageProps } from '../../types';

function ThreeImage({
  textureUrl,
  position = [0, 0, -4],
  size = [16, 9],
}: ThreeImageProps) {
  const texture = useLoader(TextureLoader, textureUrl);

  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} transparent={true} side={2} />
    </mesh>
  );
}

export default ThreeImage;
