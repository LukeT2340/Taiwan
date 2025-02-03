import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import {
  ImageProps,
  CustomLinkProps,
  ButtonProps,
  MotionImageProps,
} from '../../types';

export const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />;
};

export const CustomLink = ({
  href,
  className = '',
  children,
}: CustomLinkProps) => {
  return (
    <>
      {' '}
      <a
        href={href}
        className={className}
        target="_blank"
        rel="sponsored noopener noreferrer"
      >
        {children}
      </a>{' '}
    </>
  );
};

export const MotionImage: React.FC<MotionImageProps> = (props) => (
  <motion.img {...props} />
);

export const Button: React.FC<ButtonProps> = ({
  href,
  text,
  className,
  bgColor = 'black',
  textColor = 'white',
}) => {
  return (
    <a
      href={href}
      className={`${bgColor} hover:opacity-90 ${textColor} z-10 mx-auto block text-center font-bold ${className}`}
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      <p>{text}</p>
    </a>
  );
};

export const Inner: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="px-[20px] lg:max-w-[98vw] lg:px-0 2xl:max-w-[95vw]">
    {children}
  </div>
);

export const CopyContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="lg:max-w-auto mx-[30px] w-fit md:mx-auto md:max-w-[600px] lg:mx-0">
      {children}
    </div>
  );
};

export const ImageWithText = ({
  text,
  image,
  noWrap = false,
  hideByDefault = false,
  animationDirection = 'right',
}: {
  text: string;
  image: string;
  noWrap?: boolean;
  hideByDefault?: boolean;
  animationDirection?: 'right' | 'left';
}) => {
  return (
    <div
      className={`absolute inset-0 ${hideByDefault ? 'fade-out' : 'fade-in'}`}
    >
      <div className="relative">
        <MotionImage src={image} alt={text} className="relative w-full" />
        <motion.h3
          className="absolute left-1/2 top-1/2 max-w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            textWrap: noWrap ? 'nowrap' : 'pretty',
          }}
          initial={{
            clipPath:
              animationDirection === 'right'
                ? 'inset(0 100% 0 0)'
                : 'inset(0 0 0 100%)',
          }}
          whileInView={{ clipPath: 'inset(0 0% 0 0%)' }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          {text}
        </motion.h3>
      </div>
    </div>
  );
};
