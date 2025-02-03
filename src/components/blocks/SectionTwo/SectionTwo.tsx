import { useEffect, useRef } from 'react';
import { MotionImage } from '../../miscellaneous';
import imageTwo from '/assets/images/desktop/2.jpg';
import imageThree from '/assets/images/desktop/3.jpg';
// import imageFour from '/assets/images/desktop/4.png';
import imageFive from '/assets/images/desktop/5.jpg';
// import imageSix from '/assets/images/desktop/6.png';
import imageSeven from '/assets/images/desktop/7.jpg';
import imageEight from '/assets/images/desktop/8.jpg';
import imageNine from '/assets/images/desktop/9.jpg';
// import imageTen from '/assets/images/desktop/10.png';

const SectionTwo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageInnerContainerRef = useRef<HTMLDivElement>(null);
  const imageOuterContainerRef = useRef<HTMLDivElement>(null);
  const copyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !sectionRef.current ||
        !imageOuterContainerRef.current ||
        !imageInnerContainerRef.current ||
        !copyContainerRef.current
      )
        return;

      const sectionRect = sectionRef?.current?.getBoundingClientRect();

      const normalizedScroll =
        (sectionRect.height - sectionRect.top) / sectionRect.height - 1;

      if (normalizedScroll > 1 || normalizedScroll < 0) {
        imageOuterContainerRef.current.style.position = 'absolute';
        return;
      }

      imageOuterContainerRef.current.style.position = 'fixed';

      const imageContainers = imageInnerContainerRef.current.children;

      let showingImage = -1;

      for (let i = 0; i < imageContainers.length; i++) {
        if (showingImage === -1) return;

        const image = imageContainers[i];
        image.classList.add(showingImage === i ? 'fade-in' : 'fade-out');
        image.classList.remove(showingImage === i ? 'fade-out' : 'fade-in');
      }

      if (normalizedScroll > 0.24 && normalizedScroll < 0.45) {
        const fromR = 255;
        const fromG = 180;
        const fromB = 46;

        const toR = 199;
        const toG = 229;
        const toB = 209;

        let progress = (normalizedScroll - 0.25) / 0.2;
        let eased = (1 - Math.cos(progress * Math.PI)) / 2;

        const r = Math.round(fromR + (toR - fromR) * eased);
        const g = Math.round(fromG + (toG - fromG) * eased);
        const b = Math.round(fromB + (toB - fromB) * eased);

        let translateX = 55 - 45 * eased;
        copyContainerRef.current.style.transform = `translateX(${translateX}vw)`;
        sectionRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        return;
      }

      imageOuterContainerRef.current.style.right = 'auto';
      imageOuterContainerRef.current.style.left = '10vw';

      if (normalizedScroll > 0.6 && normalizedScroll < 0.8) {
        const fromR = 199;
        const fromG = 229;
        const fromB = 209;

        const toR = 0;
        const toG = 71;
        const toB = 64;

        let progress = (normalizedScroll - 0.61) / 0.2;
        let eased = (1 - Math.cos(progress * Math.PI)) / 2;

        const r = Math.round(fromR + (toR - fromR) * eased);
        const g = Math.round(fromG + (toG - fromG) * eased);
        const b = Math.round(fromB + (toB - fromB) * eased);

        let translateX = 10 + 45 * eased;
        copyContainerRef.current.style.transform = `translateX(${translateX}vw)`;
        sectionRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        return;
      }
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
      <div
        className="absolute left-[10vw] top-[62px]"
        ref={imageOuterContainerRef}
      >
        <div
          className="relative lg:w-[36vw] 2xl:w-[762px]"
          ref={imageInnerContainerRef}
        >
          {/* <ImageWithText text="By rail" image={imageFour} noWrap={true} />
          <ImageWithText
            text="By rail"
            image={imageSix}
            noWrap={true}
            hideByDefault={true}
            animationDirection="left"
          />
          <ImageWithText
            text="From up high"
            image={imageTen}
            noWrap={false}
            hideByDefault={true}
          /> */}
        </div>
      </div>
      <div
        className="max-w-[692px] translate-x-[55vw] rounded-[30px] bg-white px-[96px] py-[104px]"
        ref={copyContainerRef}
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
        <MotionImage
          src={imageThree}
          alt="Taiwan’s well-developed rail network is a convenient and enjoyable way to travel around the island. High-speed options, the metro (MRT) and local routes offer unique glimpses into the island’s varied and stunning landscapes, big cities, and quieter rural towns."
          className="mb-[30px] w-full rounded-[20px]"
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
          className="mb-[30px] w-full rounded-[20px]"
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
      </div>
    </section>
  );
};

export default SectionTwo;
