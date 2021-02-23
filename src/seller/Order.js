import React, {useStatem, useEffect, useState} from 'react'
import './Order.css'
import {FaSearch} from 'react-icons/fa';
import DatePicker from "react-datepicker";
import OrderItems from './OrderItems'
import axios from '../axios/axios'
import "react-datepicker/dist/react-datepicker.css";

function Order() {

    const [startDate, setStartDate] = useState(new Date());

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get('orders/all')
            .then(response => 
                setOrders(response.data)
            )
            .catch(error => console.log(error))
            
            return request;
        }

        console.log(orders)

        fetchDate();
    }, [])

    return (
        <div className="order">
            <div className="order__container">
                <div className="order__search">
                 <div className="order__button">
                    <button className="order__search-button">Search</button>
                    <button className="order__reset-button">Reset</button>
                </div>
                    <form className="order__searchbar">
                        <input type="text" className="order__input" />
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
               
                <div className="order__info">
                    <h2>0 Orders</h2>
                    
                </div>
                <div className="order__table_bg">
                    <table className="order__table">
                        <thead>
                            <th>Name</th>
                            <th>Ordered_Date</th>
                            <th>Address</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <OrderItems 
                                key={order.order_id}
                                id={order.order_id}
                                name={order.user_id}
                                date={order.order_date_created}
                                address={order.user_address}
                                status={order.order_status}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Order
