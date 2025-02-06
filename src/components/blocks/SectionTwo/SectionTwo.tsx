import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MotionImage } from '../../miscellaneous';
import imageTwo from '/assets/images/desktop/2.jpg';
import imageThree from '/assets/images/desktop/3.jpg';
import imageFive from '/assets/images/desktop/5.jpg';
import imageSeven from '/assets/images/desktop/7.jpg';
import imageEight from '/assets/images/desktop/8.jpg';
import imageNine from '/assets/images/desktop/9.jpg';
import Images from './Images';

const SectionTwo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const copyContainerRef = useRef<HTMLDivElement>(null);
  const [part, setPart] = useState<number>(0);
  const [copyWidth, setCopyWidth] = useState<number | null>(null);
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [normalizedScroll, setNormalizedScroll] = useState<number>(0);

  useEffect(() => {
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (ticking) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !copyContainerRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const normScroll =
            -sectionRect.top / (sectionRect.height - window.innerHeight);
          setNormalizedScroll(normScroll);

          if (normScroll < 0.28) {
            setPart(0);
          } else if (normScroll < 0.7) {
            setPart(1);
          } else {
            setPart(2);
          }
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

  const handleResize = useCallback(() => {
    if (!copyContainerRef.current) return;

    setCopyWidth(copyContainerRef.current.getBoundingClientRect().width);
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <motion.section
      className="section-two relative z-0 hidden bg-yellow pb-[85px] pt-[109px] lg:block"
      ref={sectionRef}
      animate={{
        backgroundColor:
          part === 0 ? '#FFB42E' : part === 1 ? '#C7E5D1' : '#004740',
      }}
      transition={{ duration: 0.6, delay: 0, ease: 'linear' }}
    >
      <Images normalizedScroll={normalizedScroll} />
      <motion.div
        className={`rounded-[30px] bg-white py-[104px] lg:max-w-[520px] lg:px-[60px] xl:max-w-[692px] xl:px-[96px]`}
        ref={copyContainerRef}
        animate={{
          transform:
            part === 1 && copyWidth
              ? `translateX(${innerWidth / 2 - copyWidth - 80}px)`
              : `translateX(${innerWidth / 2 + 80}px)`,
        }}
        transition={{ duration: 0.9, delay: 0, ease: 'easeInOut' }}
      >
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
          In the cities, the MRT has been dubbed one of the best metro systems
          in the world. For smaller towns and countryside, local rail connects
          visitors with stops like Hualien or Tainan, the historic heart of
          Taiwan.
        </p>
        <MotionImage
          src={imageThree}
          alt="Taiwan’s well-developed rail network is a convenient and enjoyable way to travel around the island. High-speed options, the metro (MRT) and local routes offer unique glimpses into the island’s varied and stunning landscapes, big cities, and quieter rural towns."
          className="mb-[250px] w-full rounded-[20px]"
        />
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
          src={imageFive}
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
        <MotionImage
          src={imageSeven}
          alt="Taiwan’s most famous is the 960-kilometre Taiwan Cycling Route No. 1 (TCR1), an around-the-island adventure named one of the best bike routes in the world. You’ll glide along stunning coastline, fertile plains, and take on Taiwan’s signature, winding mountain highways."
          className="mb-[250px] w-full rounded-[20px]"
        />
        <p>
          Taiwan is a hiker’s paradise, with an extensive network of hiking
          routes enticing every type of adventurer. Whether you’re after a
          multi-day trek or a simple day hike, well-marked and accessible trails
          make it a cinch to find yourself immersed in spectacular natural
          surroundings.
        </p>
        <p>
          Beautiful hikes are everywhere, like in Yangmingshan National Park
          with its volcanic landscapes, hot springs, and views of Taipei city,
          or in the nearby Ruifang District, where Teapot Mountain offers a
          short but exhilarating hike with gorgeous mountain and coastline
          views.
        </p>
        <p>
          Or, immerse yourself in the history of the Qing Dynasty by embarking
          on the Caoling Historic Trail. This route, often overlooked, commences
          from Yuanwangken, sweeps across Andiajiao, passes through Fulung, and
          finally reaches the jaw-dropping coastal reserve of Dali.
        </p>
        <MotionImage
          src={imageEight}
          alt="Taiwan’s most famous is the 960-kilometre Taiwan Cycling Route No. 1 (TCR1), an around-the-island adventure named one of the best bike routes in the world. You’ll glide along stunning coastline, fertile plains, and take on Taiwan’s signature, winding mountain highways."
          className="mb-[30px] w-full rounded-[20px]"
        />
        <p>
          While the small-gauge train is famed in the Alishan National Scenic
          Area, it’s also a top hiking destination. There’s a network of trails
          through towering forests and to beautiful viewpoints, like the Giant
          Tree Trail and Alishan Sunrise Trail.
        </p>
        <p>
          For serious hikers, Yushan, Taiwan’s highest peak, offers a
          challenging multi-day trek through diverse ecosystems like tropical
          forests and alpine meadows, rewarding you with stunning views from the
          summit.
        </p>
        <p>
          Taiwan is packed full of wonder and contrasts. Combining rail, trail
          and bike travel, this hiker’s paradise plugs you straight into the
          heart of its captivating natural beauty, cultural heritage, and buzzy
          modern cities.
        </p>
        <MotionImage
          src={imageNine}
          alt="Taiwan’s most famous is the 960-kilometre Taiwan Cycling Route No. 1 (TCR1), an around-the-island adventure named one of the best bike routes in the world. You’ll glide along stunning coastline, fertile plains, and take on Taiwan’s signature, winding mountain highways."
          className="w-full rounded-[20px]"
        />
      </motion.div>
    </motion.section>
  );
};

export default SectionTwo;
