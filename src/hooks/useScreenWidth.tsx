import { useEffect, useState } from 'react';

const useScreenWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    document.addEventListener('resize', handleResize);

    return () => document.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useScreenWidth;
