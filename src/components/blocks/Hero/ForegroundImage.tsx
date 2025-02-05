import { useLoader, useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TextureLoader } from 'three';

interface Props {
  textureUrl: string;
  position: [number, number, number];
  size: [number, number];
  adjustWithScroll?: boolean;
  adjustsWithScrollFactor?: number;
}

function ForegroundImage({
  textureUrl,
  position = [0, 0, 1],
  size = [16, 9],
  adjustWithScroll = false,
  adjustsWithScrollFactor = 10,
}: Props) {
  const [adjustedSize, setAdjustedSize] = useState<[number, number]>(size);
  const [adjustedPosition, setAdjustedPosition] =
    useState<[number, number, number]>(position);
  const texture = useLoader(TextureLoader, textureUrl);

  useEffect(() => {
    const useScroll = () => {
      if (!adjustWithScroll || window.innerWidth < 1025) return;

      const normalizedScroll = Math.min(window.scrollY / window.innerHeight, 1);

      if (normalizedScroll > 1) return;

      setAdjustedSize([
        size[0] + normalizedScroll ** 1 * adjustsWithScrollFactor,
        size[1] + (9 / 16) * normalizedScroll ** 1 * adjustsWithScrollFactor,
      ]);

      setAdjustedPosition([
        position[0],
        position[1] - normalizedScroll * adjustsWithScrollFactor * 0,
        position[2],
      ]);
    };

    document.addEventListener('scroll', useScroll);

    return () => {
      document.removeEventListener('scroll', useScroll);
    };
  }, []);

  return (
    <mesh position={adjustedPosition}>
      <planeGeometry args={adjustedSize} />
      <meshBasicMaterial map={texture} transparent={true} side={2} />
    </mesh>
  );
}

export default ForegroundImage;
