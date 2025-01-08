import React from 'react';
    import { useNavigate } from 'react-router-dom';

    function Hero() {
      const navigate = useNavigate();

      const handleBookNowClick = () => {
        navigate('/contact');
      };

      return (
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-headline">Love and Unity Entertainment</h1>
            <p className="hero-subheadline">Your premier wedding band for unforgettable moments.</p>
            <button className="hero-button" onClick={handleBookNowClick}>Book Now</button>
          </div>
        </section>
      );
    }

    export default Hero;
