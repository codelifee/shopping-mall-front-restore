
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
                    <li><Link to="/" className="color">상세보기</Link></li>
                   
                    
                </ul>
                <div className="details">
                    <h2>50% 세일<span className="job-title">
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
                <li><Link to="/" className="color">상세보기</Link></li>
                   
                </ul>
                <div className="details">
                    <h2>인기상품<span className="job-title">
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
                <li><Link to="/" className="color">상세보기</Link></li>
                 
                </ul>
                <div className="details">
                    <h2>추천상품<span className="job-title">
Herb refers to a plant grown in the West for use as a flavor or medicine.</span></h2>
                </div>
            </div>
        </div><div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={main_4} />
                    
                </div>
                <ul className="colors">
                <li><Link to="/" className="color">상세보기</Link></li>
                   
                </ul>
                <div className="details">
                    <h2>행사상품<span className="job-title">
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
                <li><Link to="/" className="color">상세보기</Link></li>
                   
                </ul>
                <div className="details">
                    <h2>신제품<span className="job-title">
Herb refers to a plant grown in the West for use as a flavor or medicine.</span></h2>
                </div>
            </div>
        </div>
       
        
        
      
    </Slider>
)
}
export default Slide;

