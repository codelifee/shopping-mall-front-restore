import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
import './SellerProduct.css'

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
        </tr>
            
        </>
    )
}

export default SellerProduct