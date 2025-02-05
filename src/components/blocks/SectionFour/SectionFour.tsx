import { CustomLink, MotionImage } from '../../miscellaneous';
import instagram from '/assets/images/common/instagram-logo.svg';
import facebook from '/assets/images/common/facebook-logo.svg';
import home from '/assets/images/common/home-icon.svg';

const SectionFour = () => {
  return (
    <section className="relative bg-footer bg-cover bg-center pb-[490px] pt-[158px]">
      <div className="flex items-center justify-center gap-[43px]">
        <div className="max-w-[387px]">
          <h4>
            Follow Taiwan Tourism for more updates on Taiwan travel and to get
            the support you will need
          </h4>
        </div>
        <div>
          <CustomLink
            href="#"
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
          <CustomLink
            href="#"
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
          <CustomLink
            href="#"
            className="flex items-center justify-start gap-[16px]"
          >
            <div className="w-[30px]">
              <MotionImage src={home} alt="Home icon" className="mx-auto" />
            </div>
            <h5>https://eng.taiwan.net.tw/</h5>
          </CustomLink>
        </div>
      </div>
      <div className="absolute bottom-0 z-20 h-[183px] w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default SectionFour;
