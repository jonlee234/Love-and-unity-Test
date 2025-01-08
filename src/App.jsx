import React, { useState, useEffect } from 'react';
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Footer from './components/Footer';
    import About from './components/About';
    import Services from './components/Services';
    import Contact from './components/Contact';

    function App() {
      const [showButton, setShowButton] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      return (
        <div className="app">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
          {showButton && (
            <button onClick={scrollToTop} className="back-to-top">
              <span>&#8593;</span> Back to top
            </button>
          )}
        </div>
      );
    }

    export default App;
