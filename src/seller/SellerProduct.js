import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'

function SellerProduct({name, price, key, id, handleDelete }) {

    

    return (
        <>
        <tr>
            
            <td>{name}</td>
            <td>{price}</td>
            <td>40</td>
            <button
            onClick={handleDelete(id)}
            >
            DELETE
            </button>
        </tr>
        </>
    )
}

export default SellerProduct