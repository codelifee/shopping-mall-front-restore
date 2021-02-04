import React, {useState} from 'react'
import './Order.css'
import {FaSearch} from 'react-icons/fa';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Order() {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="order">
            <div className="order__container">
                <div className="order__search">
                    <form className="order__searchbar">
                        <input type="text"  />
                        <FaSearch className="search-icon"/>
                    </form>
                    <div className="order__category">
                        <p>Order Creation Date</p>
                        <DatePicker
                        className="date"
                        selected={startDate} 
                        onChange={date => setStartDate(date)} />
                    </div>
                </div>
                <div className="order__button">
                    <button className="search-button">Search</button>
                    <button className="reset-button">Reset</button>
                </div>
                <div className="order__info">
                    <h2>0 Orders</h2>
                    
                </div>
                <div className="order__table">
                    <table>
                        <thead>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>양파즙</td>
                                <td>3000</td>
                                <td>40
                        </td>

                            </tr>
                            <tr>
                                <td>양파즙</td>
                                <td>3000</td>
                                <td>40</td>

                            </tr>
                            <tr>
                                <td>양파즙</td>
                                <td>3000</td>
                                <td>40</td>
                            </tr>
                            <tr>
                                <td>양파즙</td>
                                <td>3000</td>
                                <td>40</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Order
