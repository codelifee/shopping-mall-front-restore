import React, {useState, useEffect} from 'react'
import './UpdateProduct.css'
import axios from '../axios/axios'
import { fromNumber } from 'long'
import { useParams } from 'react-router-dom'

function UpdateProduct() {

    const {id} = useParams();

    const [form, setForm] = useState({
        category_id: 1,
        product_name: '',
        product_description: '',
        product_price: 1000,
        product_picture: '',
    })

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetchProduct();
    }, [])

    const handleChange = e => {
        e.preventDefault()

        if (e.target.name == "category_id" || 
        e.target.name == "product_price") {
            setForm({
                ...form,
                [e.target.name]: parseInt(e.target.value) 
            })
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })
        }

    }    
    
    const fetchProduct = () => {

        axios.get(`products/${id}`, form)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }

    const updateProduct = (e) => {
        e.preventDefault()
        
        axios.put('products', form)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="UpdateProduct">
            <div className="UpdateProduct__container">
                <div className="UpdateProduct__container__head">
                    <h1>Update a Product</h1>
                    <p>Please choose the right category for your product</p>
                </div>
                <form className="UpdateProduct__search" 
                onSubmit={updateProduct}>
                    <div className="UpdateProduct__searchbar">
                        <p>Product Name</p>
                        <input 
                        type="text" 
                        name="product_name"
                        value={product.product_name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="UpdateProduct__category">
                        <p>Category</p>
                        <select
                        name="category_id" 
                        onChange={handleChange}>
                            <option 
                            value="1" 
                            name="category_id"
                            >Chair</option>
                            <option 
                            value="2" 
                            name="category_id"
                            >Table</option>
                        </select>
                    </div>
                    <div className="product-description">
                        <label htmlfor="">Product Description</label>
                        <input 
                        type="text" 
                        name="product_description"
                        value={product.product_description}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="price">
                        <label htmlfor="">Price</label>
                        <input 
                        type="text" 
                        name="product_price"
                        value={product.product_price}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="stock">
                        <label htmlfor="">Picture</label>
                        <input 
                        type="text" 
                        name="product_picture"
                        onChange={handleChange}
                        />
                    </div>
                    <button 
                    type="submit"
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct