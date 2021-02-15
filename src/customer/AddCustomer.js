import React, {useState, useEffect} from 'react';
import './AddCustomer.css';
import axios from '../axios/axios';

function AddCustomer() {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/users/all`)
            .then(response => 
                setCustomer(response.data)
            )
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])
    console.log(customer)

    const [form, setForm] = useState({
        user_id : '', //unique
        user_pwd : '',
        user_name : '',
        user_phone : '', //unique
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
        
        axios.post(`users`, form)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const joinCheck = () => {
        if(form.user_id === ''){
            alert('아이디를 입력하세요.');
            return false;
        }else{
            if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.user_id))){
                alert('아이디를 이메일 형식으로 입력하세요.');
                return false;
            }
        }
        if(form.user_pwd === ''){
            alert('비밀번호를 입력하세요.');
            return false;
        }
        if(form.user_name === ''){
            alert('이름을 입력하세요.');
            return false;
        }
        if(form.user_phone === ''){
            alert('전화번호를 입력하세요.');
            return false;
        }else{
            if(!(/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(form.user_phone))){
                alert("전화번호를 '-' 형식으로 입력하세요.");
                return false;
            }
        }
        if(form.user_address === ''){
            alert('주소를 입력하세요.');
            return false;
        }
        alert('회원가입이 완료되었습니다.');
    }

    const checkId = () => {
        let status = true;
        customer.map((data,i)=>{
            if(form.user_id === customer.user_id[i]){
                status = false;
            }
        })
        if(status){
            return alert('사용 가능한 아이디입니다.')
        }else{
            return alert('사용 불가능한 아이디입니다.')
        }
    }
    const checkPhone = () => {
        let status = true;
        customer.map((data,i)=>{
            if(form.user_phone === customer.user_phone[i]){
                status = false;
            }
        })
        if(status){
            return alert('사용 가능한 전화번호입니다.')
        }else{
            return alert('사용 불가능한 전화번호입니다.')
        }
    }

    return (
        <div className="addCustomer">
            <div className="addCustomer__container">
                <div className="addCustomer__container__head">
                    <h1>Add a New Customer</h1>
                </div>
                <form className="addCustomer__search" 
                onSubmit={showForm,joinCheck}>
                    <div className="id">
                        <label htmlfor="">Id</label>
                        <input 
                        type="text" 
                        name="user_id"
                        onChange={handleChange}
                        />
                        <button 
                        type="button"
                        onClick={checkId}
                        >
                            Check Id
                        </button>
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
                        onChange={handleChange}
                        />
                    </div>
                    <div className="phone">
                        <label htmlfor="">Phone</label>
                        <input 
                        type="text" 
                        name="user_phone"
                        onChange={handleChange}
                        />
                        <button 
                        type="button"
                        onClick={checkPhone}
                        >
                            Check Phone
                        </button>
                    </div>
                    <div className="address">
                        <label htmlfor="">Address</label>
                        <input 
                        type="text" 
                        name="user_address"
                        onChange={handleChange}
                        />
                    </div>
                    <button 
                    type="submit"
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddCustomer