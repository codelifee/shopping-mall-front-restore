import React, { useState, useEffect } from "react";
import axios from "../axios/axios";

function OrderItems({ name, date, address }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{address}</td>
        <td>{date}</td>
      </tr>
    </>
  );
}

export default OrderItems;
