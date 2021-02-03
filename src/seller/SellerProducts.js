import React from 'react'
import './SellerProducts.css'

function SellerProducts() {
    return (
        <div className="sellerProduct">
            <div className="sellerProduct__container">
                <div className="sellerProduct__search">
                    <div className="sellerProduct__searchbar">
                        <select>
                            <option value="Product Name">Product Name</option>
                        </select>
                        <input type="text"/>
                    </div>
                    <div className="sellerProduct__category">
                        <p>Category</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="sellerProduct__button">
                    <button className="search-button">Search</button>
                    <button className="reset-button">Reset</button>
                </div>
                <div className="sellerProduct__info">
                    <h2>0 Product</h2>
                    <button>+ Add a New Product</button>
                </div>
                <div className="sellerProduct__table">
                <table>
                    <thead>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>양파즙</td>
                        <td>3000</td>
                        <td>40
                        </td>
                        
                    </tr>
                    <tr>
                        <td>양파즙</td>
                        <td>3000</td>
                        <td>40</td>
                        
                    </tr>
                    <tr>
                        <td>양파즙</td>
                        <td>3000</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>양파즙</td>
                        <td>3000</td>
                        <td>40</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default SellerProducts;
