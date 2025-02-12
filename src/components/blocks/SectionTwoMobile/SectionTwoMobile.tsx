import { CopyContainer, MotionImage } from '../../miscellaneous';
import imageTwo from '/assets/images/desktop/2.jpg';
import imageThree from '/assets/images/desktop/3.jpg';
import imageFour from '/assets/images/desktop/4.png';
import imageFive from '/assets/images/desktop/5.jpg';
import imageSix from '/assets/images/mobile/6.jpg';
import imageSeven from '/assets/images/desktop/7.jpg';
import imageEight from '/assets/images/desktop/8.jpg';
import imageNine from '/assets/images/desktop/9.jpg';
import imageTen from '/assets/images/desktop/10.png';
import imageEleven from '/assets/images/mobile/11.jpg';
import imageTwelve from '/assets/images/desktop/12.png';
import imageThirteen from '/assets/images/mobile/13.jpg';
import bearOne from '/assets/images/desktop/bear-1.svg';
import bearTwo from '/assets/images/desktop/bear-2.svg';
import bearThree from '/assets/images/desktop/bear-3.svg';

const SectionTwoMobile = () => {
  return (
    <section className="section-two bg-white lg:hidden">
      <div className="relative bg-yellow px-[15px] pb-[52px] pt-[33px]">
        <MotionImage
          src={imageFour}
          alt="By rail"
          className="mx-auto md:max-w-[700px]"
        />
        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          By rail
        </h3>
        <MotionImage
          src={bearOne}
          alt="Bear cartoon"
          className="absolute bottom-0 left-[calc(50%-12vw)] w-[35vw] -translate-y-[8vw] md:left-[calc(50%-8vw)] md:w-[23vw] md:-translate-y-[4vw]"
        />
      </div>
      <MotionImage
        src={imageSix}
        alt="Taiwan’s well-developed rail network is a convenient and enjoyable way to travel around the island. High-speed options, the metro (MRT) and local routes offer unique glimpses into the island’s varied and stunning landscapes, big cities, and quieter rural towns. "
        className="w-full"
      />
      <div className="my-[54px]">
        <CopyContainer>
          <p>
            Taiwan’s well-developed rail network is a convenient and enjoyable
            way to travel around the island. High-speed options, the metro (MRT)
            and local routes offer unique glimpses into the island’s varied and
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
            scenic trains, like the Alishan Forest Railway, which is an
            attraction in its own right.
          </p>
          <MotionImage
            src={imageTwo}
            alt="Taiwan’s well-developed rail network is a convenient and enjoyable way to travel around the island. High-speed options, the metro (MRT) and local routes offer unique glimpses into the island’s varied and stunning landscapes, big cities, and quieter rural towns."
            className="mb-[44px] w-full rounded-[20px]"
          />
          <p>
            The narrow-gauge vintage train was originally built by the Japanese
            to transport timber and travels through 50 tunnels and across 77
            bridges to Alishan, Taiwan’s top mountain destination. Winding its
            way up to ancient trees past tea plantations and through mountains
            cloaked in ethereal mist, expect views of 2,000-year-old cypress
            trees, cherry blossoms, views of Yushan (or Jade Mountain, Northeast
            Asia’s tallest) and if you’re up early enough, a magnificent sunrise
            above the clouds.
          </p>
          <p>
            Another narrow-gauge ride can be found on the Pingxi Line, winding
            through rural villages and past waterfalls as it connects Taipei
            with the highly scenic Keelung River Valley. And to experience the
            famous mass sky lantern releases during Lunar New Year, this is the
            line you need.
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
            className="w-full rounded-[20px]"
          />
        </CopyContainer>
      </div>
      <div className="bg-blue relative px-[15px] pb-[52px] pt-[33px]">
        <MotionImage
          src={imageTen}
          alt="On two wheels"
          className="mx-auto md:max-w-[700px]"
        />
        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          On two wheels
        </h3>
        <MotionImage
          src={bearTwo}
          alt="Bear cartoon"
          className="absolute bottom-0 left-[calc(50%-12vw)] w-[23vw] -translate-y-[8vw] md:left-[calc(50%-8vw)] md:w-[15vw] md:-translate-y-[4vw]"
        />
      </div>
      <MotionImage
        src={imageEleven}
        alt="With gorgeous mountainous terrain – more than 260 peaks form the spine of the island – it’s no surprise that two of the world’s most well-known bike companies, Giant and Merida, began in Taiwan in 1972. In fact, Taiwanese people are passionate cyclists, and Taiwan is one of the only places in the world with bike lanes that extend throughout the country. "
        className="w-full"
      />
      <div className="my-[54px]">
        <CopyContainer>
          <p>
            With gorgeous mountainous terrain – more than 260 peaks form the
            spine of the island – it’s no surprise that two of the world’s most
            well-known bike companies, Giant and Merida, began in Taiwan in
            1972. In fact, Taiwanese people are passionate cyclists, and Taiwan
            is one of the only places in the world with bike lanes that extend
            throughout the country.
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
            alt="For a shorter scenic ride, Sun Moon Lake in central Taiwan is regarded as one of the most picturesque spots on the island and was the 2024 location for L’Etape by Tour de France."
            className="mb-[44px] w-full rounded-[10px]"
          />
          <p>
            For a shorter scenic ride, Sun Moon Lake in central Taiwan is
            regarded as one of the most picturesque spots on the island and was
            the 2024 location for L’Etape by Tour de France.
          </p>
          <p>
            On the lesser-explored east coast, the beautiful 300-kilometre East
            Coast Route connects Hualien in the north to Taitung in the south
            with breathtaking views of the Pacific Ocean.
          </p>
          <p>
            For seasoned cyclists, the iconic Central Cross-Island Highway
            travels from west to east coast via the Central Mountain Range. The
            challenging yet rewarding ride provides steep climbs, winding roads
            and glorious views of verdant forests, high-altitude peaks, and deep
            valleys.
          </p>
          <MotionImage
            src={imageSeven}
            alt="On the lesser-explored east coast, the beautiful 300-kilometre East Coast Route connects Hualien in the north to Taitung in the south with breathtaking views of the Pacific Ocean."
            className="w-full rounded-[10px]"
          />
        </CopyContainer>
      </div>
      <div className="bg-dark-green relative px-[15px] pb-[52px] pt-[33px]">
        <MotionImage
          src={imageTwelve}
          alt="From up high"
          className="mx-auto md:max-w-[700px]"
        />
        <h3 className="absolute left-1/2 top-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 text-center md:w-[300px]">
          From up high
        </h3>
        <MotionImage
          src={bearThree}
          alt="Bear cartoon"
          className="absolute bottom-0 left-[calc(50vw-21%)] w-[35vw] -translate-y-[8vw] md:left-[calc(50vw-13%)] md:w-[23vw] md:-translate-y-[4vw]"
        />
      </div>
      <MotionImage
        src={imageThirteen}
        alt="Taiwan is a hiker’s paradise, with an extensive network of hiking routes enticing every type of adventurer. Whether you’re after a multi-day trek or a simple day hike, well-marked and accessible trails make it a cinch to find yourself immersed in spectacular natural surroundings."
        className="w-full"
      />
      <div className="my-[54px]">
        <CopyContainer>
          <p>
            Taiwan is a hiker’s paradise, with an extensive network of hiking
            routes enticing every type of adventurer. Whether you’re after a
            multi-day trek or a simple day hike, well-marked and accessible
            trails make it a cinch to find yourself immersed in spectacular
            natural surroundings.
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
            on the Caoling Historic Trail. This route, often overlooked,
            commences from Yuanwangken, sweeps across Andiajiao, passes through
            Fulung, and finally reaches the jaw-dropping coastal reserve of
            Dali.
          </p>
          <MotionImage
            src={imageEight}
            alt="Or, immerse yourself in the history of the Qing Dynasty by embarking on the Caoling Historic Trail. This route, often overlooked, commences from Yuanwangken, sweeps across Andiajiao, passes through Fulung, and finally reaches the jaw-dropping coastal reserve of Dali."
            className="mb-[44px] w-full rounded-[10px]"
          />
          <p>
            While the small-gauge train is famed in the Alishan National Scenic
            Area, it’s also a top hiking destination. There’s a network of
            trails through towering forests and to beautiful viewpoints, like
            the Giant Tree Trail and Alishan Sunrise Trail.
          </p>
          <p>
            For serious hikers, Yushan, Taiwan’s highest peak, offers a
            challenging multi-day trek through diverse ecosystems like tropical
            forests and alpine meadows, rewarding you with stunning views from
            the summit.
          </p>
          <p>
            Taiwan is packed full of wonder and contrasts. Combining rail, trail
            and bike travel, this hiker’s paradise plugs you straight into the
            heart of its captivating natural beauty, cultural heritage, and
            buzzy modern cities.
          </p>
          <MotionImage
            src={imageNine}
            alt="Taiwan is packed full of wonder and contrasts. Combining rail, trail and bike travel, this hiker’s paradise plugs you straight into the heart of its captivating natural beauty, cultural heritage, and buzzy modern cities. "
            className="w-full rounded-[10px]"
          />
        </CopyContainer>
      </div>
    </section>
  );
};

export default SectionTwoMobile;
