import React, {useState, useEffect} from 'react'
import './UpdateProduct.css'
import axios from '../axios/axios'
import { fromNumber } from 'long'
import Dropzone from './Dropzone'
import {useHistory, useParams} from 'react-router-dom'

function UpdateProduct() {

    const [form, setForm] = useState({
        category_id: 1,
        product_name: '',
        product_description: '',
        product_price: 1000,
        stock: 100,
    })

    const [image, setImage] = useState({
        product_picture: null,
        info_img:null,
        quality_img: null,
    })

    const handleForm = e => {
        e.preventDefault()

            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })
    }    

    const handleImage = e => {
        e.preventDefault();

        let file = e.target.files[0];

        setImage({
            ...image,
            [e.target.name]:file
        })
    }


    const productId = useParams().id;

    const postForm = (e) => {
        e.preventDefault()

        // let data = new FormData();

        // for (const [key, value] of Object.entries(form)) {

        //     if(key != "product_picture" &&
        //         key != "quality_img" &&
        //         key != "info_img")
        //     data.append(key, value)
        // }

        // for (let pair of data.entries()) {
        //     console.log(pair[0] + ', ' + pair[1])
        // }
        
        axios.put(`products/${productId}`, form)
        .then(res => {
            alert("변경되었습니다")
            })
        .catch(err => console.log(err))
    }

    // 이미지는 backend에서 patch로 따로 넣어줌
    const patchImage = (e) => {
        e.preventDefault();

        let product_picture = new FormData();
        let info_img = new FormData();
        let quality_img = new FormData();

        if(image.product_picture != null && 
            image.product_picture != undefined
            ) {
                product_picture.append('product_picture', image.product_picture)

                axios.patch(`products/productPicture/${productId}`, product_picture)
                .then(res => 
                    {
                    alert("변경되었습니다")
                    })
                .catch(err => { 
                    console.log(err)
                    alert("데이터를 넣어주세요")
                })
            }

        if(image.info_img != null && 
            image.info_img != undefined
            ) {
                info_img.append('info_img', image.info_img)
                axios.patch(`products/infoImg/${productId}`, info_img)
                .then(res => {
                    alert("변경되었습니다") 
                })
                .catch(err => { 
                    console.log(err)
                    alert("사진을 넣어주세요")
                })
            }

        if(image.quality_img != null && 
            image.quality_img != undefined
            ) {
                quality_img.append('quality_img', image.quality_img)
                axios.patch(`products/qualityImg/${productId}`, quality_img)
                .then(res => {
                    alert("변경되었습니다")  
                })
                .catch(err => { 
                    console.log(err)
                    alert("사진을 넣어주세요")
                })
            }
    

        
    }

    const getProduct = () => {
        axios.get(`products/JsonData/${productId}`)
        .then(res => {
            setForm(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProduct();
    },[])


    return (
        <div className="addProduct">
            <div className="addProduct__container">
                <div className="addProduct__container__head">
                    <h1>Update a Product</h1>
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
                        onChange={handleForm}
                        />
                    </div>
                    <div className="addProduct__category">
                        <p>Category</p>
                        <select
                        name="category_id" 
                        onChange={handleForm}>
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
                        </select>
                    </div>
                    <div className="product-description">
                        <label>Product Description</label>
                        <input 
                        type="text" 
                        name="product_description"
                        value={form.product_description}
                        onChange={handleForm}
                        />
                    </div>
                    <div className="price">
                        <label>Price</label>
                        <input 
                        type="text" 
                        name="product_price"
                        value={form.product_price}
                        onChange={handleForm}
                        />
                    </div>
                    <div className="updateProduct__image">
                        <label>메인 이미지1</label>
                        <input type="file" name="product_picture" onChange={handleImage} />
                        <button onClick={patchImage}>upload image</button>
                    </div>
                    <div className="updateProduct__image">
                        <label>상세 이미지1</label>
                        <input type="file" name="info_img" onChange={handleImage} />
                        <button onClick={patchImage}>upload image</button>
                    </div>
                    <div className="updateProduct__image">
                        <label>상세 이미지2</label>
                        <input type="file" name="quality_img" onChange={handleImage} />
                        <button onClick={patchImage}>upload image</button>
                    </div>
                    <button 
                    type="submit"
                    >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;