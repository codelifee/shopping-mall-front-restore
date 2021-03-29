import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
import './SellerProduct.css'
import {Link} from 'react-router-dom'

function SellerProduct({name, price, id, handleDelete, stock}) {

    

    return (
        <>
        <tr>
            <td className="seller_product_td">{name}</td>
            <td className="seller_product_td"> ₩{new Intl.NumberFormat().format(price)}</td>
            <td className="seller_product_td">{stock}</td>
            <td className="seller_product_td1"
            onClick={() => handleDelete(id)}
            >삭제
            </td>
            <td className="seller_product_td1">
                <Link to={`/seller/updateProduct/${id}`}>
                수정
                </Link>
            </td>
        </tr>
            
        </>
    )
}

export default SellerProduct