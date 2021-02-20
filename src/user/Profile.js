import React, {useState, useEffect} from 'react'
import './Profile.css'
import axios from '../axios/axios'
import { Link, useParams } from 'react-router-dom';

function Profile() {

    const [customer, setCustomer] = useState([]);
    const {user_sequence_id} = useParams();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`users/${user_sequence_id}`)
            .then(response => 
                setCustomer(response.data)
            )
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])
    console.log(user_sequence_id)
    console.log(customer)

    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__container__head">
                    <h1>{customer.user_name}'s Profile</h1>
                </div>
                <div className="profile__search"> 
                    <div className="profile__id">
                        <label htmlfor="">Id</label>
                        <p>{customer.user_id}</p>
                    </div>
                    <div className="profile__name">
                        <label htmlfor="">Name</label>
                        <p>{customer.user_name}</p>
                    </div>
                    <div className="profile__phone">
                        <label htmlfor="">Phone</label>
                        <p>{customer.user_phone}</p>
                    </div>
                    <div className="profile__address">
                        <label htmlfor="">Address</label>
                        <p>{customer.user_address}</p>
                    </div>
                    <Link to={`/user/updateprofile/${user_sequence_id}`}>
                        <button className="update">
                            Go to update
                        </button>
                    </Link>
                </div>    
            </div>
        </div>
    )
}

export default Profile
