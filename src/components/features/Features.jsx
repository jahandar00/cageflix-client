import React from 'react';
import './features.scss';
import { FaGlobe, FaFilm, FaPiggyBank, FaTabletAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaFilm />,
    title: 'Hundreds of Titles',
    description:
      'Choose from a wide selection of movies, TV shows, short films and much more for every taste and mood.',
  },
  {
    icon: <FaPiggyBank />,
    title: 'Always 100% Free',
    description:
      'Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.',
  },
  {
    icon: <FaTabletAlt />,
    title: 'Responsive & Device-Friendly',
    description:
      'Enjoy a seamless streaming experience on any device — smartphone, tablet, laptop, or desktop. Our platform adapts beautifully to every screen size.',
  },
];

const Features = () => {
  return (
    <section className="features-section">
      {features.map((feature, idx) => (
        <div key={idx} className="feature">
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
