import React, { useState, useEffect } from 'react';
    import Navbar from './components/Navbar';
    import Footer from './components/Footer';
    import Modal from './components/Modal';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import Home from './pages/Home';
    import About from './components/About';
    import Services from './components/Services';
    import Contact from './components/Contact';
    import { CSSTransition, TransitionGroup } from 'react-transition-group';

    function App() {
      const [showButton, setShowButton] = useState(false);
      const [showModal, setShowModal] = useState(false);
      const location = useLocation();

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

      const handleFormSubmit = () => {
        setShowModal(true);
      };

      const handleCloseModal = () => {
        setShowModal(false);
      };

      return (
        <div className="app">
          <Navbar />
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact onFormSubmit={handleFormSubmit} />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
          {showButton && (
            <button onClick={scrollToTop} className="back-to-top">
              <span>&#8593;</span> Back to top
            </button>
          )}
          {showModal && <Modal onClose={handleCloseModal} />}
        </div>
      );
    }

    export default App;
