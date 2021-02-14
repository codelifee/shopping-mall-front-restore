import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
import './SellerProduct.css'
import {Link} from 'react-router-dom'

function SellerProduct({name, price, id, handleDelete }) {

    

    return (
        <>
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>40</td>
            <td className="sellerProduct__tableButton"
            onClick={() => handleDelete(id)}
            >
            DELETE
            </td>
            <td className="sellerProduct__tableButton">
                <Link to={`/seller/updateProduct/${id}`}>
                    Update
                </Link>
            </td>
        </tr>
            
        </>
    )
}

export default SellerProduct