import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'

function SellerProduct({name, price, key, id }) {

    const handleDelete = () => {
        console.log(key)

        axios.delete("products/" + id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <>
        <tr>
            
            <td>{name}</td>
            <td>{price}</td>
            <td>40</td>
            <button
            onClick={handleDelete}
            >
            DELETE
            </button>
        </tr>
        </>
    )
}

export default SellerProduct