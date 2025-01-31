import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import Hero from './components/blocks/Hero';
import SectionTwo from './components/blocks/SectionTwo';
import SectionThree from './components/blocks/SectionThree';
import SmoothScrolling from './js/smooth-scrolling';

const App = () => {
  return (
    <div>
      <main>
        <Header />
        <article>
          <SmoothScrolling>
            <Hero />
            <SectionTwo />
            <SectionThree />
          </SmoothScrolling>
        </article>
        <Footer />
      </main>
    </div>
  );
};

export default App;
