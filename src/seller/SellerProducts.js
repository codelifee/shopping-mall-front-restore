import React, {useState, useEffect} from 'react'
import './SellerProducts.css'
import SellerProduct from "./SellerProduct"

function SellerProducts() {

    return (
        <div className="sellerProduct">
            <div className="sellerProduct__container">
                <div className="sellerProduct__search">
                    <form className="sellerProduct__form">
                        <div className="sellerProduct__searchbar">
                            <select>
                                <option value="Product Name">Product Name</option>
                            </select>
                            <input type="text"/>
                            <label for="categories">Category</label>
                            <select name="categories" id="categories">
                                <option value="1">의자</option>
                                <option value="2">서랍</option>
                                <option value="3">책상</option>
                            </select>
                        </div>
                        <div className="sellerProduct__button">
                            <button className="search-button">Search</button>
                            <button className="reset-button">Reset</button>
                        </div>
                    </form>
                </div>
                <div className="sellerProduct__info">
                    <h2>0 Product</h2>
                    <button>+ Add a New Product</button>
                </div>
                <div className="sellerProduct__table">
                <SellerProduct />
                </div>
            </div>
        </div>
    )
}

export default SellerProducts