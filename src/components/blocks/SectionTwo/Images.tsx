import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MotionImage } from '../../miscellaneous';
import imageFour from '/assets/images/desktop/4.png';
import imageSix from '/assets/images/desktop/6.png';
import imageTen from '/assets/images/desktop/10.png';
import imageEleven from '/assets/images/desktop/11.png';
import imageTwelve from '/assets/images/desktop/12.png';
import imageThirteen from '/assets/images/desktop/13.png';
import bearOne from '/assets/images/desktop/bear-1.svg';
import bearTwo from '/assets/images/desktop/bear-2.svg';
import bearThree from '/assets/images/desktop/bear-3.svg';

interface Props {
  normalizedScroll: number;
}

const Images: React.FC<Props> = ({ normalizedScroll }) => {
  const sectionInsetRef = useRef<HTMLDivElement>(null);
  const leftImagesWrapperRef = useRef<HTMLDivElement>(null);
  const innerImageContainerRef = useRef<HTMLDivElement>(null);
  const [showImage, setShowImage] = useState<number>(0);
  const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
      if (innerImageContainerRef.current) {
        setImageHeight(
          innerImageContainerRef.current.getBoundingClientRect().height
        );
      }
    };

    document.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      document.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (
      !sectionInsetRef.current ||
      !leftImagesWrapperRef.current ||
      !innerImageContainerRef.current
    )
      return;

    const imageHeight =
      innerImageContainerRef.current.getBoundingClientRect().height;

    if (normalizedScroll > 1) {
      leftImagesWrapperRef.current.style.removeProperty('top');
      leftImagesWrapperRef.current.style.bottom = `${(1 / 2) * innerHeight - (1 / 2) * imageHeight}px`;
      setShowImage(5);
      leftImagesWrapperRef.current.style.position = 'absolute';
      return;
    } else {
      leftImagesWrapperRef.current.style.removeProperty('bottom');
      leftImagesWrapperRef.current.style.top = `${(1 / 2) * innerHeight - (1 / 2) * imageHeight}px`;
    }

    if (normalizedScroll < 0) {
      leftImagesWrapperRef.current.style.position = 'absolute';
      return;
    }

    leftImagesWrapperRef.current.style.position = 'fixed';

    if (normalizedScroll < 0.11) {
      setShowImage(0);
    } else if (normalizedScroll < 0.28) {
      setShowImage(1);
    } else if (normalizedScroll > 0.32 && normalizedScroll < 0.5) {
      setShowImage(2);
    } else if (normalizedScroll > 0.49 && normalizedScroll < 0.64) {
      setShowImage(3);
    } else if (normalizedScroll > 0.74 && normalizedScroll < 0.88) {
      setShowImage(4);
    } else if (normalizedScroll > 0.87) {
      setShowImage(5);
    } else {
      setShowImage(-1);
    }
  }, [normalizedScroll]);

  return (
    <>
      <div className="absolute inset-0 h-full" ref={sectionInsetRef} />
      <div
        ref={leftImagesWrapperRef}
        className="absolute lg:right-[calc(50vw)] xl:right-[calc(50vw+90px)]"
        style={{ top: `${(1 / 2) * innerHeight - (1 / 2) * imageHeight}px` }}
      >
        <div
          className="relative lg:w-[600px] 2xl:w-[762px]"
          ref={innerImageContainerRef}
        >
          <MotionImage
            src={imageFour}
            alt="By Rail"
            className="relative"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={
              showImage === 0
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(20px)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <MotionImage
            src={imageSix}
            alt="By Rail"
            className="absolute inset-0"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={
              showImage === 1
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(20px)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <motion.h3
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap"
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 0% 100%)' }}
            animate={
              showImage === 0 || showImage === 1
                ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }
                : { opacity: 0, clipPath: 'inset(0% 0% 0% 100%)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          >
            By rail
          </motion.h3>
          <MotionImage
            src={bearOne}
            alt="Bear cartoon"
            className="absolute -bottom-[40px] left-[calc(50%-90px)]"
            initial={{ opacity: 0 }}
            animate={
              showImage === 0 || showImage === 1
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <MotionImage
            src={bearThree}
            alt="Bear cartoon"
            className="absolute -bottom-[40px] left-[calc(50%-100px)] z-10"
            initial={{ opacity: 0 }}
            animate={
              showImage === 4 || showImage === 5
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <MotionImage
            src={imageTwelve}
            alt="From up high"
            className="absolute inset-0"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={
              showImage === 4
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(20px)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <MotionImage
            src={imageThirteen}
            alt="From up high"
            className="absolute inset-0"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={
              showImage === 5
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(20px)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <motion.h3
            className="absolute left-1/2 top-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 0% 100%)' }}
            animate={
              showImage === 4 || showImage === 5
                ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }
                : { opacity: 0, clipPath: 'inset(0% 0% 0% 100%)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          >
            From up high
          </motion.h3>
        </div>
      </div>
      <div className="fixed left-1/2 top-[calc(50vh-350px)] xl:left-[calc(50vw+100px)]">
        <div className="relative lg:w-[600px] 2xl:w-[762px]">
          <MotionImage
            src={imageTen}
            alt="On two wheels"
            className="relative"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={
              showImage === 2
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(20px)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <MotionImage
            src={imageEleven}
            alt="On two wheels"
            className="absolute inset-0"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={
              showImage === 3
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(20px)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <MotionImage
            src={bearTwo}
            alt="Bear cartoon"
            className="absolute -bottom-[40px] right-[calc(50%-100px)]"
            initial={{ opacity: 0 }}
            animate={
              showImage === 2 || showImage === 3
                ? { opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          />
          <motion.h3
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' }}
            animate={
              showImage === 2 || showImage === 3
                ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }
                : { opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' }
            }
            transition={{ duration: 0.7, ease: 'linear', delay: 0 }}
          >
            On two wheels
          </motion.h3>
        </div>
      </div>
    </>
  );
};

export default Images;
