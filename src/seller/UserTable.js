import React from 'react'

function UserTable({id, name, phone, address}) {
    return (
        <>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{address}</td>
        </tr>
        </>
    )
}

export default UserTable
