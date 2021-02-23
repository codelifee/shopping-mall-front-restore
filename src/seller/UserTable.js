import React from 'react'

function UserTable({name, email, phone}) {
   
     
   

    return (
        <>
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
        
        </>
    )
}

export default UserTable
