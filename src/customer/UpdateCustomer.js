import React, {useState, useEffect} from 'react'
import './UpdateCustomer.css'
import axios from '../axios/axios'
import { useParams } from 'react-router-dom';

function UpdateCustomer() {

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

    const [form, setForm] = useState({
        user_id : customer.user_id,
        user_pwd : customer.user_pwd,
        user_name : customer.user_name,
        user_phone : customer.user_phone,
        user_address: customer.user_address 
    })

    const handleChange = e => {
        e.preventDefault()
            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })
    }    
    
    console.log(form);

    const updateCheck = () => {
        if(customer.user_pwd !== form.user_pwd){
            alert("비밀번호를 다시 입력하세요.");
            return false;
        } 
        // if(!(/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(form.user_phone))){
        //     alert("전화번호를 '-' 형식으로 입력하세요.");
        //     return false;
        //     }   
    }

    const showForm = (e) => {
        e.preventDefault()

        axios.put(`users/${user_sequence_id}`, form)
        .then(alert("수정이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    return (
        <div className="updateCustomer">
            <div className="updateCustomer__container">
                <div className="updateCustomer__container__head">
                    <h1>Update Customer Information</h1>
                </div>
                <form className="updateCustomer__search" 
                onSubmit={showForm,updateCheck}
                >
                    <div className="id">
                        <label htmlfor="">Id</label>
                        <input 
                        type="text" 
                        name="user_id"
                        value={customer.user_id}
                        />
                    </div>
                    <div className="password">
                        <label htmlfor="">Password</label>
                        <input 
                        type="password" 
                        name="user_pwd"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="name">
                        <label htmlfor="">Name</label>
                        <input 
                        type="text" 
                        name="user_name"
                        value={customer.user_name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="phone">
                        <label htmlfor="">Phone</label>
                        <input 
                        type="text" 
                        name="user_phone"
                        placeholder={customer.user_phone}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="address">
                        <label htmlfor="">Address</label>
                        <input 
                        type="text" 
                        name="user_address"
                        placeholder={customer.user_address}
                        onChange={handleChange}
                        />
                    </div>
                    <button 
                    type="submit"
                    >Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateCustomer