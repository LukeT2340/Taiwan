import { useRef } from 'react';
import LocomotiveParallax from './js/parallax/index.tsx';
import Header from './components/blocks/Header/Header.tsx';
import Footer from './components/blocks/Footer/Footer.tsx';
import Hero from './components/blocks/Hero';
import SectionTwo from './components/blocks/SectionTwo/index.tsx';
import SectionThree from './components/blocks/SectionThree/index.tsx';

const App = () => {
  const locoScrollRef = useRef<HTMLElement>(null);

  return (
    <div>
      <main>
        <Header />
        <article>
          <LocomotiveParallax locoScrollRef={locoScrollRef}>
            <Hero />
            <SectionTwo />
            <SectionThree />
          </LocomotiveParallax>
        </article>
        <Footer />
      </main>
    </div>
  );
};

export default App;
