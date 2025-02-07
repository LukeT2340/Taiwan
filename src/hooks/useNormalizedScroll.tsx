import { useEffect, useState } from 'react';

const useNormalizedScroll = (ref: any) => {
  const [normScroll, setNormScroll] = useState<number>(0);

  useEffect(() => {
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (ticking) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          if (!ref.current) return;

          const rect = ref.current.getBoundingClientRect();
          const normScroll = -rect.top / (rect.height - window.innerHeight);
          setNormScroll(normScroll);

          ticking = false;
        });
      }, 5);
      ticking = true;
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return normScroll;
};

export default useNormalizedScroll;
