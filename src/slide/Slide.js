
import Slider from 'react-slick';// slider library
import 'slick-carousel/slick/slick.css'// slider library
import 'slick-carousel/slick/slick-theme.css'// slider library
import React from 'react';
import {Link} from 'react-router-dom';
import main_1 from '../img/onion.jpg'
import main_2 from '../img/apple.jpg'
import main_3 from '../img/pumpkin.jpg'
import main_4 from '../img/pomegranate.jpg'
import main_5 from '../img/cabbage.jpg'
function Slide() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
}
return (
    <Slider {...settings}>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_1} />
                    
                </div>
                <ul className="colors">
                    <li><Link to="/" className="color color1">A</Link></li>
                    <li><Link to="/" className="color color2">B</Link></li>
                    <li><Link to="/" className="color color3">C</Link></li>
                    <li><Link to="/" className="color color4">D</Link></li>
                </ul>
                <div className="details">
                    <h2>Herb<span className="job-title">
Herb refers to a plant grown in the West for use as a flavor or medicine.</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_2} />
                </div>
                <ul className="colors">
                    <li><Link to="/" className="color color5">A</Link></li>
                    <li><Link to="/" className="color color6">B</Link></li>
                    <li><Link to="/" className="color color7">C</Link></li>
                    <li><Link to="/" className="color color8">D</Link></li>
                </ul>
                <div className="details">
                    <h2>Herb<span className="job-title">
Herb refers to a plant grown in the West for use as a flavor or medicine.</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_3} />
                </div>
                <ul className="colors">
                    <li><Link to="/" className="color color9">A</Link></li>
                    <li><Link to="/" className="color color10">B</Link></li>
                    <li><Link to="/" className="color color11">C</Link></li>
                    <li><Link to="/" className="color color12">D</Link></li>
                </ul>
                <div className="details">
                    <h2>Herb<span className="job-title">
Herb refers to a plant grown in the West for use as a flavor or medicine.</span></h2>
                </div>
            </div>
        </div><div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_4} />
                    
                </div>
                <ul className="colors">
                    <li><Link to="/" className="color color1">A</Link></li>
                    <li><Link to="/" className="color color2">B</Link></li>
                    <li><Link to="/" className="color color3">C</Link></li>
                    <li><Link to="/" className="color color4">D</Link></li>
                </ul>
                <div className="details">
                    <h2>Herb<span className="job-title">
Herb refers to a plant grown in the West for use as a flavor or medicine.</span></h2>
                </div>
            </div>
        </div>
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_5} />
                </div>
                <ul className="colors">
                    <li><Link to="/" className="color color5">A</Link></li>
                    <li><Link to="/" className="color color6">B</Link></li>
                    <li><Link to="/" className="color color7">C</Link></li>
                    <li><Link to="/" className="color color8">D</Link></li>
                </ul>
                <div className="details">
                    <h2>Herb<span className="job-title">
Herb refers to a plant grown in the West for use as a flavor or medicine.</span></h2>
                </div>
            </div>
        </div>
       
        
        
      
    </Slider>
)
}
export default Slide;

