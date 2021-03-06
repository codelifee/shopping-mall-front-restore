import React, { useState, useEffect } from "react";
import Product from "../detail/Product";
import axios from "../axios/axios";
import "./ProductView.css";
import { useParams } from "react-router-dom";

function ProductView() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const request = await axios
        .get(`products/category/${id}`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getProduct();
  }, [id]);

  useEffect(() => {
    async function getCategory() {
      const request = await axios
        .get(`categories/${id}`)
        .then((response) => setCategories(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getCategory();
  }, []);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getReview() {
      const request = await axios
        .get(`review/allJsonData`)
        .then((response) => setReviews(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    getReview();
  }, []);

  return (
    <div className="products">
      <div className="products__category">{categories.category_name}</div>
      <div className="products__row">
        {products.map((product, i) => {
            let reviewLength = reviews
              .filter((review) => {
                return review.product_id === product.product_id;
              })
            return (
              <Product
                id={product.product_id}
                title={product.product_name}
                status={product.status}
                description={product.product_description}
                price={product.product_price}
                comment={reviewLength.length}
                key={i}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ProductView;
