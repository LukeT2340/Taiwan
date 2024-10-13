import { motion } from "framer-motion"
import { ImageProps, CustomLinkProps, ButtonProps, MotionImageProps } from "../../types"

export const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />
}

export const CustomLink = ({ href, className = "", children }: CustomLinkProps) => {
  return (
    <>
      {" "}
      <a href={href} className={className} target="_blank" rel="sponsored noopener noreferrer">
        {children}
      </a>{" "}
    </>
  )
}

export const MotionImage: React.FC<MotionImageProps> = (props) => <motion.img {...props} />

export const Button: React.FC<ButtonProps> = ({
  href,
  text,
  className,
  bgColor = "black",
  textColor = "white",
}) => {
  return (
    <a
      href={href}
      className={`${bgColor} hover:opacity-90 ${textColor} z-10 font-bold text-center block mx-auto ${className}`}
      target="_blank"
      rel="sponsored noopener noreferrer">
      <p>{text}</p>
    </a>
  )
}

export const Inner = ({ children }: { children: React.ReactNode }) => (
  <div className="lg:max-w-[98vw] 2xl:max-w-[95vw] px-[20px] lg:px-0">{children}</div>
)
