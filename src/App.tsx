// @ts-nocheck
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import Hero from './components/blocks/Hero';
import SectionTwo from './components/blocks/SectionTwo';
import SectionThree from './components/blocks/SectionThree';
import SectionTwoMobile from './components/blocks/SectionTwoMobile';
import SectionFour from './components/blocks/SectionFour';
import SmoothScrolling from './js/smooth-scrolling';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Make all <p> tags fade in on mobile & tablet
    if (window.innerWidth <= 1025) {
      gsap.utils.toArray('p').forEach((p) => {
        gsap.fromTo(
          p,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: p,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
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
