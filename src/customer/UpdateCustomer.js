import React, {useState, useEffect} from 'react'
import './UpdateCustomer.css'
import axios from '../axios/axios'
import { useParams } from 'react-router-dom';

function UpdateCustomer() {

    const [customer, setCustomer] = useState([]);
    const {user_sequence_id} = useParams();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/users/${user_sequence_id}`)
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
        user_id : '',
        user_pwd : '',
        user_name : '',
        user_phone : '',
        user_address: ''
    })

    const handleChange = e => {
        e.preventDefault()
            setForm({
                ...form,
                [e.target.name]: e.target.value 
            })
    }    
    
    console.log(form);

    const showForm = (e) => {
        e.preventDefault()

        axios.put(`/users/${user_sequence_id}`, form)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const updateCheck = () => {
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.user_id))){
            alert('아이디를 이메일 형식으로 입력하세요.');
            return false;
            }
        if(!(/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(form.user_phone))){
            alert("전화번호를 '-' 형식으로 입력하세요.");
            return false;
            }
        }
        alert('회원가입이 완료되었습니다.');
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
                        placeholder={customer.user_id}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="password">
                        <label htmlfor="">Password</label>
                        <input 
                        type="text" 
                        name="user_pwd"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="name">
                        <label htmlfor="">Name</label>
                        <input 
                        type="text" 
                        name="user_name"
                        placeholder={customer.user_name}
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