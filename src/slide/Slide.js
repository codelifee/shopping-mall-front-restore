
import Slider from 'react-slick';// slider library
import 'slick-carousel/slick/slick.css'// slider library
import 'slick-carousel/slick/slick-theme.css'// slider library
import React from 'react';
import {Link} from 'react-router-dom';
import main_1 from '../img/herb_2_1.jpg'
import main_2 from '../img/herb_2_2.jpg'
import main_3 from '../img/herb_2_3.jpg'


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
                    <li><a href="#" className="color color1">A</a></li>
                    <li><a href="#" className="color color2">B</a></li>
                    <li><a href="#" className="color color3">C</a></li>
                    <li><a href="#" className="color color4">D</a></li>
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
                    <li><a href="#" className="color color5">A</a></li>
                    <li><a href="#" className="color color6">B</a></li>
                    <li><a href="#" className="color color7">C</a></li>
                    <li><a href="#" className="color color8">D</a></li>
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
                    <li><a href="#" className="color color9">A</a></li>
                    <li><a href="#" className="color color10">B</a></li>
                    <li><a href="#" className="color color11">C</a></li>
                    <li><a href="#" className="color color12">D</a></li>
                </ul>
                <div className="details">
                    <h2>Herb<span className="job-title">
Herb refers to a plant grown in the West for use as a flavor or medicine.</span></h2>
                </div>
            </div>
        </div><div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_1} />
                    
                </div>
                <ul className="colors">
                    <li><a href="#" className="color color1">A</a></li>
                    <li><a href="#" className="color color2">B</a></li>
                    <li><a href="#" className="color color3">C</a></li>
                    <li><a href="#" className="color color4">D</a></li>
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
                    <li><a href="#" className="color color5">A</a></li>
                    <li><a href="#" className="color color6">B</a></li>
                    <li><a href="#" className="color color7">C</a></li>
                    <li><a href="#" className="color color8">D</a></li>
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
                    <li><a href="#" className="color color9">A</a></li>
                    <li><a href="#" className="color color10">B</a></li>
                    <li><a href="#" className="color color11">C</a></li>
                    <li><a href="#" className="color color12">D</a></li>
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

