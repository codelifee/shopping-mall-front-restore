import React, { useState, useEffect } from "react";
import "./SellerProducts.css";
import SellerProduct from "./SellerProduct";
import axios from "../axios/axios";
import { Link } from "react-router-dom";

function SellerProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get("products/allJsonData")
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    fetchDate();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("products/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="sellerProduct1">
      <div className="sellerProduct__container1">
        <div className="sellerProduct__search1">
          <form className="sellerProduct__form1">
            <div className="sellerProduct__searchbar1">
              <div className="sellerProduct__button-input1">
                <div className="sellerProduct__button1">
                  <button className="sellerProduct__search-button1">
                    Search
                  </button>
                  <button className="sellerProduct__reset-button1">
                    Reset
                  </button>
                </div>
                <input
                  type="text"
                  className="sellerProduct__input1"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              </div>
              <label className="sellerProduct__label1">Category</label>

              <select className="sellerProduct__select1">
                <option value="Product Name">Product Name</option>
              </select>

              <select
                name="categories"
                id="categories"
                className="sellerProduct__select1"
              >
                <option value="1">과일</option>
                <option value="2">야채</option>
                <option value="3">동물류</option>
                <option value="4">어패류</option>
                <option value="5">약재</option>
              </select>
            </div>
          </form>
        </div>
        <div className="sellerProduct__info1">
          <h2> {products.length} Product</h2>
          <Link to="/seller/addProduct">
            <button className="Button1">+ Add a New Product</button>
          </Link>
        </div>
        <div className="sellerProduct__table_bg1">
          <table className="sellerProduct__table1">
            <thead>
              <th className="sellerProduct__th11">Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>DELETE</th>
              <th>Update</th>
            </thead>
            <tbody>
              {products
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.product_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((product) => (
                  <SellerProduct
                    key={product.product_id}
                    id={product.product_id}
                    name={product.product_name}
                    price={product.product_price}
                    handleDelete={handleDelete}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SellerProducts;
