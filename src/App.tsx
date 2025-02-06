// @ts-nocheck
import { useEffect } from 'react';
import luge from '@waaark/luge';
import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import Hero from './components/blocks/Hero';
import SectionTwo from './components/blocks/SectionTwo';
import SectionThree from './components/blocks/SectionThree';
import SectionTwoMobile from './components/blocks/SectionTwoMobile';
import SectionFour from './components/blocks/SectionFour';
import SmoothScrolling from './js/smooth-scrolling';

const App = () => {
  useEffect(() => {
    luge.lifecycle.refresh();
  }, []);

  return (
    <div>
      <main>
        <Header />
        <article>
          <SmoothScrolling>
            <Hero />
            <SectionTwo />
            <SectionTwoMobile />
            <SectionThree />
            <SectionFour />
          </SmoothScrolling>
        </article>
        <Footer />
      </main>
    </div>
  );
};

export default App;
