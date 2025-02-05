import { RefObject } from 'react';
import { ILocomotiveScrollOptions } from 'locomotive-scroll';

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  'data-scroll'?: boolean;
  'data-scroll-speed'?: string;
  index?: number;
};

export type LocomotiveScrollProps = {
  locoScrollRef: RefObject<HTMLElement>;
  children: React.ReactNode;
  el?: HTMLElement;
};

export interface IExtendedLocomotiveScrollOptions
  extends ILocomotiveScrollOptions {
  el: HTMLElement;
}

export type CustomLinkProps = {
  href: string;
  className: string;
  children: React.ReactNode;
};

export type ButtonProps = {
  href: string;
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
};

export type MotionImageProps = {
  src: string;
  alt: string;
  'data-scroll'?: string;
  'data-scroll-speed'?: string;
  initial?: {
    opacity?: number;
    scale?: number;
    x?: number;
    y?: number;
    rotate?: number;
    clipPath?: string;
    filter?: string;
  };
  whileInView?: {
    opacity?: number;
    scale?: number;
    x?: number;
    y?: number;
    rotate?: number;
    clipPath?: string;
    filter?: string;
  };
  animate?: {
    opacity?: number;
    scale?: number;
    x?: number;
    y?: number;
    rotate?: number;
    clipPath?: string;
    filter?: string;
  };
  transition?: { duration: number; delay: number; ease: string | number[] };
  viewport?: { once: boolean };
  className?: string;
};

export interface AnimateTextProps {
  elementRef: RefObject<HTMLDivElement>;
  selector: string;
  delay: number;
  inView: boolean;
}
