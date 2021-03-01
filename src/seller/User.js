import React, {useState, useEffect} from 'react'
import './User.css'
import {FaSearch} from 'react-icons/fa';
import DatePicker from "react-datepicker";
import axios from '../axios/axios'
import UserTable from './UserTable'

import "react-datepicker/dist/react-datepicker.css";
function User() {
    const [startDate, setStartDate] = useState(new Date());

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get('users/all')
            .then(response => 
                setUsers(response.data)
            )
            .catch(error => console.log(error))
            
            return request;
        }

        console.log(users);

        fetchDate();
    }, [])

    return (
        <div className="user">
            <div className="user__container">
                <div className="user__search">
                <div className="user__button">
                    <button className="user__search-button">Search</button>
                    <button className="user__reset-button">Reset</button>
                </div>
                    <form className="user__searchbar">
                        <input type="text" className="user__input" />
                        <FaSearch className="search-icon"/>
                    </form>
                    <div className="user__category">
                        <p>User Creation Date</p>
                        <DatePicker
                        className="datepicker_date"
                        selected={startDate} 
                        onChange={date => setStartDate(date)} />
                    </div>
                </div>
                
                <div className="user__info">
                    <h2>0 Users</h2>
                </div>
                <div className="user__table_bg">
                    <table className="user__table">
                        <thead>
                            <th>Customer Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <UserTable 
                                key={user.user_sequence_id}
                                id={user.user_id}
                                name={user.user_name}
                                phone={user.user_phone}
                                address={user.user_address}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User