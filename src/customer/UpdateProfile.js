import React, {useState, useEffect} from 'react'
import './UpdateProfile.css'
import axios from '../axios/axios'
import { useParams } from 'react-router-dom';

function UpdateProfile() {

    const {user_sequence_id} = useParams();

    //const [user, setUser] = useState([]);

    const [form, setForm] = useState({
        user_id : '',
        user_pwd : '',
        user_name : '',
        user_phone : '',
        user_address: '',
    })
    console.log(form);

    useEffect(() => {
        getForm();
    }, [])
    console.log(form);

    const handleChange = e => {
        e.preventDefault()
            
        setForm({
                ...form,
                [e.target.name]: e.target.value 
            })  
    }    
    console.log(form);

    const checkPhone = () => {
        let status = true;
        if(form.user_phone === form.user_phone){
            status = false;
        }
        if(status){
            if(!(/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(form.user_phone))){
                alert("전화번호를 '-' 형식으로 입력하세요.");
                return false;
            }
            return alert('사용 가능한 전화번호입니다.');
        }else{
            return alert('사용 불가능한 전화번호입니다.');
        }
    }

    const getForm = () => {
        axios.get(`http://localhost:5000/users/${user_sequence_id}`, form)
        .then(res => setForm(res.data))
        .catch(err => console.log(err))
    }

    const updateForm = () => {
        axios.put(`http://localhost:5000/users/${user_sequence_id}`, form)
        .then(alert("수정이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    return (
        <div className="updateProfile">
            <div className="updateProfile__container">
                <div className="updateProfile__container__head">
                    <h1>Update Profile</h1>
                </div>
                <form className="updateProfile__search" onSubmit={updateForm}>
                    <div className="id">
                        <label>Id</label>
                        <input 
                        type="text" 
                        name="user_id"
                        value={form.user_id}
                        readOnly
                        />
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input 
                        type="password" 
                        name="user_pwd"
                        defaultValue={form.user_pwd}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="name">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="user_name"
                        defaultValue={form.user_name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="phone">
                        <label>Phone</label>
                        <input 
                        type="text" 
                        name="user_phone"
                        defaultValue={form.user_phone}
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
                        <label>Address</label>
                        <input 
                        type="text" 
                        name="user_address"
                        defaultValue={form.user_address}
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

export default UpdateProfile;