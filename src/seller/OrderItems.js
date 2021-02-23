import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'

function OrderItems({id, name, date, address, status}) {

    const [status, setStatus] = useState({
        status: "배송준비중",
    })

    const handleStatus = e => {
        e.preventDefault();

        console.log(e.target.id)
        let id = e.target.id;

        console.log(e.target.value)
        setStatus({
            status: e.target.value
        })

        axios.patch(`/orders/${id}`, status)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{address}</td>
                <td>{date}</td>
                <td>
                    <select id={id} onChange={handleStatus}>
                        <option value="배송완료">배송완료</option>
                        <option value="배송중">배송중</option>
                        <option value="배송시작">배송시작</option>
                        <option value="배송준비중">배송준비중</option>
                    </select>
                </td>
            </tr>
        </>
    )

}

export default OrderItems
