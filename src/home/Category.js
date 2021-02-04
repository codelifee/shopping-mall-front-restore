import React,{useState} from 'react'
import './Category.css'
import CategoryData from './CategoryData'
import {Link} from 'react-router-dom';
import Product from './Product';

function Category(){
  let [category,categoryChange] = useState(CategoryData);
    return(
        <div className="home_container">
         <p className="title">카테고리</p>
         <div className="swiper_wrapper">
          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <Product 
                    id={category[0].id}
                    title={category[0].title}
                    image={category[0].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/"><Product 
                    id={category[1].id}
                    title={category[1].title}
                    image={category[1].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <Product 
                    id={category[2].id}
                    title={category[2].title}
                    image={category[2].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <Product 
                    id={category[3].id}
                    title={category[3].title}
                    image={category[3].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <Product 
                    id={category[4].id}
                    title={category[4].title}
                    image={category[4].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
              <Link to="/">
              <Product 
                    id={category[5].id}
                    title={category[5].title}
                    image={category[5].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
            </div>
          </div>

          <div className="swiper_slide">
            <div className="slide_item">
            <Link to="/">
              <Product 
                    id={category[6].id}
                    title={category[6].title}
                    image={category[6].img}
                   // description="양파로 즙을 낸 것"
                   // price={6000}
                    /> 
              </Link>
            </div>
          </div>

        </div>  
       </div> 
    )
}

export default Category;