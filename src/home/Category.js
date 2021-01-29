import React,{useState} from 'react'
import './Category.css'
import CategoryData from './CategoryData'
import {Link} from 'react-router-dom';


function Category(){
  let [category,categoryChange] = useState(CategoryData);
    return(
        <div className="home_container">
         <p className="title">카테고리</p>
         <div className="swiper_wrapper">
          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <img src={category[0].img} alt="가구"/>
              <h4>{category[0].title}</h4>
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <img src={category[1].img} alt="침구/매트리스"/>
              <h4>{category[1].title}</h4>
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <img src={category[2].img} alt="수납/정리"/>
              <h4>{category[2].title}</h4>
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <img src={category[3].img} alt="주방가구"/>
              <h4>{category[3].title}</h4>
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <img src={category[4].img} alt="홈데코"/>
              <h4>{category[4].title}</h4>
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <img src={category[5].img} alt="조명"/>
              <h4>{category[5].title}</h4>
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <a href="#">
              <img src={category[6].img} alt="러그"/>
              <h4>{category[6].title}</h4>
              </a>
            </div>
          </div>

        </div>  
       </div> 
    )
}

export default Category;