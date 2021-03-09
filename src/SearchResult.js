import React, {useState, useEffect} from "react";
import { useStateValue } from './StateProvider/StateProvider';
import SearchResultView from './SearchResultView';
import './SearchResult.css';
import axios from './axios/axios';
import {useHistory} from "react-router-dom";

function SearchResult(){

    const [{keyword}, dispatch] = useStateValue(); 
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const image = "https://api.xn--vx3b30no7b.com/products/showProductImage/";

    // useEffect(()=>{
    //     async function getProducts() {
    //         const request = await axios.get('products/all')
    //         .then(response => setProducts(response.data))
    //         .catch(error => console.log(error))

    //         return request;
    //     }

    //     getProducts();
    // }, [])


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      async function getReview() {
        const request = await axios
          .get(`review/all`)
          .then(response => setReviews(response.data))
          .catch(error => console.log(error));
  
        return request;
      }
  
      getReview();
    }, []);

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        async function getCategories() {
            const request = await axios.get('categories/all')
            .then((response)=>setCategories(response.data))
            .catch((error) => console.log(error))

            return request;
        }

        getCategories();
    }, [])

    console.log(products);
    console.log(keyword.word)
    return (
        <div className="search_result">
            <div className="search_result_items">
                {
                    products.filter((item)=>{
                        if(item.product_name.includes(`${keyword.word}`)){
                          return item
                        }else {
                          alert("검색하신 상품은 없는 상품입니다.")
                          history.push('/home');
                        }
                    })
                    .map((product, i) => {

                        let reviewLength = reviews.filter((review)=>{
                          return review.product_id==product.product_id;
                        }).map((review)=>{
                          return review.review_id;
                        })

                        return (
                          <div>
                            {console.log(product)}
                          <br/>
                          {categories.filter((category)=>{
                            return category.category_id==product.category_id;
                            }).map((category)=>{
                            return (<div className="search_result_category_name">카테고리 {'>>'} <a href={`/products/${category.category_id}`}>{category.category_name}</a></div>) 
                          })}
                            
                            <SearchResultView
                              id={product.product_id}
                              title={product.product_name}
                              status={product.status}
                              image={image+product.product_id}
                              description={product.product_description}
                              price={product.product_price}
                              comment={reviewLength.length}
                              key={i}
                            />
                          </div>
                        );
                      })
                }
            </div>
            
        </div>
    )
}

export default SearchResult;