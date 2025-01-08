import React from 'react';

    function Services() {
      const services = [
        {
          title: 'Live Music Performances',
          description: 'We provide high-energy live music for weddings, corporate events, and private parties. Our repertoire includes a wide range of genres to suit any occasion.',
          image: '/live-music.jpg',
        },
        {
          title: 'Custom Song Lists',
          description: 'We work with you to create a custom song list that reflects your personal taste and preferences. We are happy to learn new songs to make your event truly unique.',
          image: '/custom-songs.jpg',
        },
        {
          title: 'DJ Services',
          description: 'In addition to live music, we offer professional DJ services to keep the party going all night long. Our DJs are experienced in reading the crowd and playing the right music at the right time.',
          image: '/dj-services.jpg',
        },
        {
          title: 'Emcee Services',
          description: 'Our experienced emcees will keep your event running smoothly and on schedule. We will handle all announcements and introductions, so you can relax and enjoy your special day.',
          image: '/emcee-services.jpg',
        },
        {
          title: 'Cocktail Music',
          description: 'We provide elegant and sophisticated cocktail music to set the perfect ambiance for your event. Our musicians will create a relaxed and enjoyable atmosphere for your guests.',
          image: '/cocktail-music.jpg',
        },
      ];

      return (
        <section id="services" className="page">
          <div className="container">
            <h2 className="page-headline">Our Services</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-card-image" style={{ backgroundImage: `url(${service.image})` }}></div>
                  <div className="service-card-content">
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default Services;
