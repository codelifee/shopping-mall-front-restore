import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'

function Returnitem({id, name, date, address, return2}) {

    const [newReturn, setReturn] =  useState({
        order_return: "준비중",
    })

    const handleReturn = e => {
        e.preventDefault();
            let id = e.target.id;

            setReturn({
                order_return: e.target.value
            })

            

    }

    const patchOrderReturn = (e) => {
            let id = e.target.id;

            console.log(id)
            
            axios.patch(`/orders/${id}`,newReturn)
            .then(res => alert("변경이 완료 되었습니다"))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setReturn({
            order_return: return2
        })        
    }, newReturn)

    

    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{address}</td>
                <td>{date}</td>
                <td>
                    <select value={newReturn.order_return} id={id} onChange={handleReturn}>
                        <option value="return2">반품</option>
                        <option value="exchange">교환</option>
                        
                    </select>
                </td>
                <td>
                    <button id={id} onClick={patchOrderReturn}>신청하기</button>
                </td>
            </tr>
        </>
    )
}

export default Returnitem
