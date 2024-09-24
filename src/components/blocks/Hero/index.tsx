import { motion } from "framer-motion"
import Video from "../../miscellaneous/Video"

const Hero: React.FC = () => (
  <section className="hero relative h-screen bg-blue-500">
    <div className="block-heading flex flex-col h-full items-center justify-center">
      <motion.h1
        className="text-[2rem] lg:text-[5.4rem] text-white leading-normal text-center mb-[20px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "linear" }}>
        headline
      </motion.h1>
      <div className="video-wrapper w-full max-w-[50vw]">
        <Video
          scriptUrl="https://players.brightcove.net/6165065566001/WkAEp4m5G_default/index.min.js"
          playerId="WkAEp4m5G"
          videoId="6350941792112"
          className="w-full"
        />
      </div>
    </div>
  </section>
)

export default Hero
