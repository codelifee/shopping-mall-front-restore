import React, { useState, useEffect } from 'react';
import { useStateValue } from './StateProvider/StateProvider';
import SearchResultView from './SearchResultView';
import './SearchResult.css';
import axios from './axios/axios';
import {ImageData} from './axios/urlData';
//import { useParams } from 'react-router-dom';

function SearchResult() {

  const image = ImageData.image1
  const [{ keyword }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  //const {search} = useParams();
 
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getReview() {
      const request = await axios
        .get(`review/all`)
        .then((response) => setReviews(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getReview();
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const request = await axios
        .get('categories/all')
        .then((response) => setCategories(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getCategories();
  }, []);

  useEffect(() => {
    async function getSearchItem2() {
      const request = await axios
        .get(`products/search/${keyword.word}`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
      return request;
    }
    getSearchItem2();
  }, [keyword.word]);

  console.log(products);
  console.log(keyword.word);

  return (
    <div className="search_result">
      <div className="search_result_items">
        {products
          // .filter((item) => {
          //   return item.product_name.includes(`${keyword.word}`);
          // })
          .map((product, i) => {

            let reviewLength = reviews
              .filter((review) => {
                return review.product_id == product.product_id;
              })
              .map((review) => {
                return review.review_id;
              });

            return (
              <div>
                {console.log(product)}
                <br />
                {categories
                  .filter((category) => {
                    return category.category_id == product.category_id;
                  })
                  .map((category) => {
                    return (
                      <div className="search_result_category_name">
                        카테고리 {'>>'}{' '}
                        <a href={`/products/${category.category_id}`}>
                          {category.category_name}
                        </a>
                      </div>
                    );
                  })}

                <SearchResultView
                  id={product.product_id}
                  title={product.product_name}
                  status={product.status}
                  image={<img className="product2__img" src={image+product.product_id} alt="사진"/>}
                  description={product.product_description}
                  price={product.product_price}
                  comment={reviewLength.length}
                  key={i}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchResult;
