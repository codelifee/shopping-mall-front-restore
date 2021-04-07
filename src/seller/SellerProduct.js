import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
import './SellerProduct.css'
import {Link} from 'react-router-dom'

function SellerProduct({name, price, id, handleDelete }) {

    

    return (
        <>
        <tr>
            <td className="seller_product_td">{name}</td>
            <td className="seller_product_td">{price}</td>
            <td className="seller_product_td">40</td>
            <td className="seller_product_td1"
            onClick={() => handleDelete(id)}
            ><b>Delete</b>
            </td>
            <td className="seller_product_td1">
                <Link to={`/seller/updateProduct/${id}`}>
                    Update
                </Link>
            </td>
        </tr>
            
        </>
    )
}

export default SellerProduct