import { motion } from 'framer-motion';
import { CustomLink, MotionImage } from '../../miscellaneous';
import instagram from '/assets/images/common/instagram-logo.svg';
import facebook from '/assets/images/common/facebook-logo.svg';
import home from '/assets/images/common/home-icon.svg';

const SectionFour = () => {
  return (
    <section className="relative bg-footer bg-cover bg-[-435px_0px] bg-no-repeat pb-[350px] pt-[75px] md:bg-[-40vw_0] md:pb-[400px] lg:bg-center lg:pb-[490px] lg:pt-[158px] 3xl:pb-[750px] 3xl:pt-[200px]">
      <div className="mx-[40px] flex flex-col items-start justify-center gap-[43px] md:mx-auto md:max-w-[387px] lg:max-w-full lg:flex-row lg:items-center">
        <div className="max-w-[387px]">
          <motion.h4
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            Follow Taiwan Tourism for more updates on Taiwan travel and to get
            the support you will need
          </motion.h4>
        </div>
        <div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <CustomLink
              href="https://www.instagram.com/taiwan_tourism_aunz/"
              className="mb-[20px] flex items-center justify-start gap-[16px]"
            >
              <div className="w-[30px]">
                <MotionImage
                  src={instagram}
                  alt="Instragram icon"
                  className="mx-auto"
                />
              </div>
              <h5>@Taiwan_Tourism_AUNZ</h5>
            </CustomLink>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            <CustomLink
              href="https://www.facebook.com/TaiwanTourismANZ/"
              className="mb-[20px] flex items-center justify-start gap-[16px]"
            >
              <div className="w-[30px]">
                <MotionImage
                  src={facebook}
                  alt="Facebook icon"
                  className="mx-auto"
                />
              </div>
              <h5>@TaiwanTourismANZ</h5>
            </CustomLink>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            <CustomLink
              href="https://eng.taiwan.net.tw/"
              className="flex items-center justify-start gap-[16px]"
            >
              <div className="w-[30px]">
                <MotionImage src={home} alt="Home icon" className="mx-auto" />
              </div>
              <h5>https://eng.taiwan.net.tw/</h5>
            </CustomLink>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 z-20 h-[183px] w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default SectionFour;
