import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from './Animations';

import dallas from './images/pumpkin_main.jpg';
import austin from './images/cabbage_main.jpg';
import newyork from './images/apple_main.jpg';
import sanfrancisco from './images/pomegranate_main.jpg';
import beijing from './images/onion_main.jpg';

const cities = [
  { name: 'Qualitative', image: dallas },
  { name: 'Nature', image: austin },
  { name: 'Fresh', image: newyork },
  { name: 'High quality', image: sanfrancisco },
  { name: 'health', image: beijing },
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: 'none' } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container1">
          <div className="wrapper">
            <div className="locations">
              Good market:
              {/* Returning the list of cities */}
              {cities.map((el) => (
                <span
                  key={el.name}
                  onMouseLeave={() => handleCity(el.image, cityBackground)}
                  onMouseEnter={() => handleCity(el.image, cityBackground)}
                  onMouseOut={() => handleCityReturn(cityBackground)}
                >
                  {el.name}
                </span>
              ))}
            </div>
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      className="link1"
                    ></Link>
                  </li>
                  <li
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    ref={(el) => (line2 = el)}
                    className="link2"
                  >
                    웰빙즙에 오신걸 환영합니다
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      className="link3"
                      to="/home"
                    >
                      BUY NOW
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Story</h3>
                <p>
                  Herb refers to a plant grown in the West for use as a flavor
                  or medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
