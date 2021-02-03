import React, {useState, useEffect} from 'react'
import './SellerProduct.css'
import SellerProducts from './SellerProducts'
import axios from '../axios/axios'

function SellerProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get('products/all')
            .then(response => 
                setProducts(response.data)
            )
            .catch(error => console.log(error))
            
            console.log(products)
            return request;
        }

        fetchDate();
    }, [])

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
                <SellerProducts />
                </div>
            </div>
        </div>
    )
}

export default SellerProduct