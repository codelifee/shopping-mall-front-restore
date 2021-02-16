import React, {useState, useEffect} from 'react'
import './AddPhoto.css'
import axios from '../axios/axios'
import { fromNumber } from 'long'
import Dropzone from './Dropzone'
import {useHistory} from 'react-router-dom'

function AddPhoto() {

    const [photo, setPhoto] = useState({
        category_id: 1,
        product_name: '',
        product_description: '',
        product_price: 1000,
    })


    const handleChange = e => {
        e.preventDefault()

        if (e.target.name == "category_id" || 
        e.target.name == "product_price") {
            setPhoto({
            })
        } 

    }    
    

    // const showForm = (e) => {
    //     e.preventDefault()
        
    //     axios.post('products', form)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    return (
        <div className="addPhoto">
            <div className="addPhoto__container">
                <div className="addPhoto__container__head">
                    <h1>Add a New Photo</h1>
                    <p>Please choose the right category for your product</p>
                </div>
                <form className="addPhoto__search" 
                >
                    <div className="picture">
                        <label>Picture</label>
                        <Dropzone />
                    </div>
                    <div className="image">
                        <img alt="image"/>
                    </div>
                    <button 
                    type="submit"
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddPhoto