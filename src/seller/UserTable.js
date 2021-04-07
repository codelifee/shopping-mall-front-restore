import React from "react";
import "./User.css";
function UserTable({ id, name, phone, address }) {
  return (
    <>
      <tr>
        <td className="user__table_td1">{id}</td>
        <td className="user__table_td2">{name}</td>
        <td className="user__table_td3">{phone}</td>
        <td className="user__table_td4">{address}</td>
      </tr>
    </>
  );
}

export default UserTable;
