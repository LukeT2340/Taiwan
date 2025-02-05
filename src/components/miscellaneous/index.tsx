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
}: {
  text: string;
  image: string;
  noWrap?: boolean;
}) => {
  return (
    <div className={`fixed right-[calc(50vw+40px)] top-[calc(50vw-670px)]`}>
      <motion.div className="relative lg:w-[39vw] 2xl:w-[762px]">
        <MotionImage src={image} alt={text} className="relative w-full" />
        <motion.h3
          className="absolute left-1/2 top-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 text-center"
          style={{
            textWrap: noWrap ? 'nowrap' : 'pretty',
          }}
        >
          {text}
        </motion.h3>
      </motion.div>
    </div>
  );
};
