import React, {useState, useEffect} from 'react'
import './AddProduct.css'
import axios from '../axios/axios'
import { fromNumber } from 'long'
import Dropzone from './Dropzone'
import {useHistory} from 'react-router-dom'

function AddProduct() {


    const [form, setForm] = useState({
        category_id: 1,
        product_name: '',
        product_description: '',
        product_price: 1000,
        product_picture: null,
        info_img:null,
        quality_img: null,
        stock: 100,
    })

    const handleChange = e => {
        e.preventDefault()

        if (e.target.name === "category_id" || 
        e.target.name === "product_price") {

            setForm({
                ...form,
                [e.target.name]: parseInt(e.target.value) 
            })
        } else if (e.target.name === "product_picture" ||
        e.target.name === "info_img" ||
        e.target.name === "quality_img") {

            let file = e.target.files[0];

            setForm({
                ...form,
                [e.target.name]: file
            })

        } else {

            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })
        }

    }    

    

    const postForm = (e) => {
        e.preventDefault()

        let data = new FormData();

        for (const [key, value] of Object.entries(form)) {
            data.append(key, value)
        }

        for (let pair of data.entries()) {
            console.log(pair[0] + ', ' + pair[1])
        }
        
        axios.post('products/upload', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }

    return (
        <div className="addProduct">
            <div className="addProduct__container">
                <div className="addProduct__container__head">
                    <h1>Add a New Product</h1>
                    <p>Please choose the right category for your product</p>
                </div>
                <form className="addProduct__search" 
                onSubmit={postForm}>
                    <div className="addProduct__searchbar">
                        <p>Product Name</p>
                        <input 
                        type="text" 
                        name="product_name"
                        value={form.product_name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="addProduct__category">
                        <p>Category</p>
                        <select
                        name="category_id" 
                        onChange={handleChange}>
                            <option 
                            value="1" 
                            >과일</option>
                            <option 
                            value="2" 
                            >야채</option>
                            <option 
                            value="3" 
                            >약초/한방</option>
                            <option 
                            value="4" 
                            >동물류</option>
                            <option 
                            value="5" 
                            >어패류</option>
                            <option 
                            value="6" 
                            >약재</option>
                        </select>
                    </div>
                    <div className="product-description">
                        <label>Product Description</label>
                        <input 
                        type="text" 
                        name="product_description"
                        value={form.product_description}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="price">
                        <label>Price</label>
                        <input 
                        type="text" 
                        name="product_price"
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>메인 이미지</label>
                        <input type="file" name="product_picture" onChange={handleChange} />
                    </div>
                    <div>
                        <label>상세 이미지 1</label>
                        <input type="file" name="info_img" onChange={handleChange} />
                    </div>
                    <div>
                        <label>상세 이미지 2</label>
                        <input type="file" name="quality_img" onChange={handleChange} />
                    </div>
                    <button 
                    type="submit"
                    >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;