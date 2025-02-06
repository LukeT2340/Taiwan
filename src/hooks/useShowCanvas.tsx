// @ts-nocheck
import * as THREE from 'three';
import { useEffect, useState } from 'react';

const useShowCanvas: boolean = () => {
  const [showCanvas, setShowCanvas] = useState<boolean>(false);

  useEffect(() => {
    const fetchBrowserSpecs = () => {
      const minCpuCores = 4;
      const minRam = 2;

      const supportsWebGL =
        THREE.WebGLRenderer && new THREE.WebGLRenderer().capabilities.isWebGL2;
      const cpuCores = navigator.hardwareConcurrency || 2;
      const ram = navigator.deviceMemory || 2;
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      const isDesktop = window.innerWidth > 1025;

      let meetsRequirements =
        cpuCores >= minCpuCores &&
        ram >= minRam &&
        supportsWebGL &&
        !isSafari &&
        isDesktop;

      setShowCanvas(meetsRequirements);
    };

    fetchBrowserSpecs();

    window.addEventListener('resize', fetchBrowserSpecs);

    return () => window.removeEventListener('resize', fetchBrowserSpecs);
  }, []);

  return showCanvas;
};

export default useShowCanvas;
