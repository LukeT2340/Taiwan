import { useEffect, useRef } from 'react';
import { ImageWithText, MotionImage } from '../../miscellaneous';
import imageTwo from '/assets/images/desktop/2.jpg';
import imageThree from '/assets/images/desktop/3.jpg';
import imageFour from '/assets/images/desktop/4.png';

const SectionTwo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRect.top - sectionRect.bottom;
      console.log(sectionHeight);
      //const normalizedScroll
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="section-two relative bg-yellow pt-[109px]"
      ref={sectionRef}
    >
      <div className="absolute left-[10vw] top-[62px]">
        <div className="relative lg:w-[40vw] 2xl:w-[762px]">
          <ImageWithText text="By rail" image={imageFour} noWrap={true} />
        </div>
      </div>
      <div className="max-w-[692px] translate-x-[55vw] rounded-[30px] bg-white px-[96px] py-[104px]">
        <p>
          Taiwan’s well-developed rail network is a convenient and enjoyable way
          to travel around the island. High-speed options, the metro (MRT) and
          local routes offer unique glimpses into the island’s varied and
          stunning landscapes, big cities, and quieter rural towns.
        </p>
        <p>
          If you want to explore the major cities along the west coast, the
          Taiwan High Speed Rail (THSR) is the way to go. This Japanese-built
          bullet train service connects bustling Taipei in the north to
          impressive Kaohsiung in the south in just 90 minutes. From rice
          paddies to rolling hills, it’s the perfect introduction to the
          island’s natural diversity.
        </p>
        <p>
          For a more leisurely journey, take a ride on one of Taiwan’s iconic
          scenic trains, like the Alishan Forest Railway, which is an attraction
          in its own right.
        </p>
        <MotionImage
          src={imageTwo}
          alt="Taiwan’s well-developed rail network is a convenient and enjoyable way to travel around the island. High-speed options, the metro (MRT) and local routes offer unique glimpses into the island’s varied and stunning landscapes, big cities, and quieter rural towns."
          className="mb-[30px] w-full rounded-[20px]"
        />
        <p>
          The narrow-gauge vintage train was originally built by the Japanese to
          transport timber and travels through 50 tunnels and across 77 bridges
          to Alishan, Taiwan’s top mountain destination. Winding its way up to
          ancient trees past tea plantations and through mountains cloaked in
          ethereal mist, expect views of 2,000-year-old cypress trees, cherry
          blossoms, views of Yushan (or Jade Mountain, Northeast Asia’s tallest)
          and if you’re up early enough, a magnificent sunrise above the clouds.
        </p>
        <p>
          Another narrow-gauge ride can be found on the Pingxi Line, winding
          through rural villages and past waterfalls as it connects Taipei with
          the highly scenic Keelung River Valley. And to experience the famous
          mass sky lantern releases during Lunar New Year, this is the line you
          need.
        </p>
        <p>
          Another narrow-gauge ride can be found on the Pingxi Line, winding
          through rural villages and past waterfalls as it connects Taipei with
          the highly scenic Keelung River Valley. And to experience the famous
          mass sky lantern releases during Lunar New Year, this is the line you
          need.
        </p>
        <p>
          With gorgeous mountainous terrain – more than 260 peaks form the spine
          of the island – it’s no surprise that two of the world’s most
          well-known bike companies, Giant and Merida, began in Taiwan in 1972.
          In fact, Taiwanese people are passionate cyclists, and Taiwan is one
          of the only places in the world with bike lanes that extend throughout
          the country.
        </p>
        <p>
          Both recreational and long-distance cycling enthusiasts are drawn to
          Taiwan for its scenic, bike-friendly routes and diverse landscapes.
          Rides span high-mountain trails, lakeside and coastal tracks, rice
          paddy-lined trails and even routes along decommissioned railways.
        </p>
        <p>
          Taiwan’s most famous is the 960-kilometre Taiwan Cycling Route No. 1
          (TCR1), an around-the-island adventure named one of the best bike
          routes in the world. You’ll glide along stunning coastline, fertile
          plains, and take on Taiwan’s signature, winding mountain highways.
        </p>
        <MotionImage
          src={imageThree}
          alt="Taiwan’s most famous is the 960-kilometre Taiwan Cycling Route No. 1 (TCR1), an around-the-island adventure named one of the best bike routes in the world. You’ll glide along stunning coastline, fertile plains, and take on Taiwan’s signature, winding mountain highways."
          className="mb-[30px] w-full rounded-[20px]"
        />
        <p>
          For a shorter scenic ride, Sun Moon Lake in central Taiwan is regarded
          as one of the most picturesque spots on the island and was the 2024
          location for L’Etape by Tour de France.
        </p>
        <p>
          On the lesser-explored east coast, the beautiful 300-kilometre East
          Coast Route connects Hualien in the north to Taitung in the south with
          breathtaking views of the Pacific Ocean.
        </p>
        <p>
          For seasoned cyclists, the iconic Central Cross-Island Highway travels
          from west to east coast via the Central Mountain Range. The
          challenging yet rewarding ride provides steep climbs, winding roads
          and glorious views of verdant forests, high-altitude peaks, and deep
          valleys.
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
