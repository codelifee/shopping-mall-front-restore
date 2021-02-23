import React, {useState, useEffect} from 'react'
import './SellerProducts.css'
import SellerProduct from "./SellerProduct"
import axios from '../axios/axios'
import {Link} from 'react-router-dom'

function SellerProducts() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get('products/all')
            .then(response => 
                setProducts(response.data)
            )
            .catch(error => console.log(error))
                       
            return request;
        }


        fetchDate();
    }, [])

    const handleDelete = (id) => {

        axios.delete("products/" + id)
        .then(res => {console.log(res)
            window.location.reload(false)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="sellerProduct">
            <div className="sellerProduct__container">
                <div className="sellerProduct__search">
                    <form className="sellerProduct__form">
                        <div className="sellerProduct__searchbar">
                            <select>
                                <option value="Product Name">Product Name</option>
                            </select>
                            <input 
                            type="text"
                            onChange={e => {setSearchTerm(e.target.value)}}
                            />
                            <label>Category</label>
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
                    <Link to="/seller/addProduct">
                    <button>+ Add a New Product</button>
                    </Link>
                    
                </div>
                <div className="sellerProduct__table">
                    <table>
                            <thead>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>DELETE</th>
                                <th>Update</th>
                            </thead>
                            <tbody>
                            {products.filter(val => {
                                if (searchTerm == "") {
                                    return val
                                } 
                                else if (val.product_name.toLowerCase().includes(searchTerm.toLowerCase())) 
                                {
                                    return val
                                }
                            }
                            ).map(product => (
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
    )
}

export default SellerProducts