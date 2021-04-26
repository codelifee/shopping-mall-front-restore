import {useState, useEffect} from 'react';
import axios from '../axios/axios';
import Cookies from "js-cookie";

const UpdateProfileData = (callback,Validate) => {

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const cookie = Cookies.get('user');
    const token = Cookies.get('jwt');
    
    const[form, setForm] = useState({
        user_pwd:'',
        user_name:'',
        user_phone:'',
        user_address:''
    });

    useEffect(() => {
        getForm();
    }, [])

    const handleChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();
        
        setErrors(Validate(form));
        setIsSubmitting(true);
    };
    

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
            patchForm();
        }
      },
      [errors]
    );
    console.log(errors);
    const getForm = () => {
        axios.get(`users/${cookie}`,
            {
                headers: {
                "Authorization" : `Bearer ${token}`
                }
            })
        .then(res => setForm(res.data))
        .catch(err => console.log(err))
    }

    const patchForm = () => {        
        axios.patch(`users/${cookie}`, 
            {
                "user_pwd":form.user_pwd,
                "user_name":form.user_name,
               "user_phone":form.user_phone,
               "user_address":form.user_address
            },
            {
                headers: {
                "Authorization" : `Bearer ${token}`,
                }
            })
        .then(alert("수정이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    return {handleChange, form, handleSubmit, errors};
}

export default UpdateProfileData;