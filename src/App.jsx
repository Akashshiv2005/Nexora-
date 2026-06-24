import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Statistics from './components/Statistics';
import Industries from './components/Industries';
import Process from './components/Process';
import FeaturedProjects from './components/FeaturedProjects';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[var(--color-background-mid)] text-[var(--color-text-main)] min-h-screen font-sans selection:bg-[var(--color-primary)] selection:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-8 py-24 space-y-8">
        <div className="bento-card mb-8">
          <Hero />
        </div>
        <div className="bento-card">
          <About />
        </div>
        <div className="bento-card">
          <Services />
        </div>
        <div className="bento-card">
          <WhyChooseUs />
        </div>
        <div className="bento-card">
          <Statistics />
        </div>
        <div className="bento-card">
          <Industries />
        </div>
        <div className="bento-card">
          <Process />
        </div>
        <div className="bento-card">
          <FeaturedProjects />
        </div>
        <div className="bento-card">
          <Team />
        </div>
        <div className="bento-card">
          <FAQ />
        </div>
        <div className="bento-card">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
