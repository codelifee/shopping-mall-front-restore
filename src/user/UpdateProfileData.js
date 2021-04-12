import {useState, useEffect} from 'react';
import axios from '../axios/axios';
import { useParams } from 'react-router-dom';

const UpdateProfileData = (callback,Validate) => {

    const {user_sequence_id} = useParams();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [check, setCheck] = useState({
        user_id:'',
        user_pwd:'',
        user_pwd2:'',
        user_name:'',
        user_phone:'',
        user_address:''
    });
    
    const[form, setForm] = useState({
        user_pwd:'',
        user_pwd2:'',
        user_name:'',
        user_phone:'',
        user_address:'',
        user_return:'',
        user_exchange:''

    });
    console.log(form);

    useEffect(() => {
        getForm();
        getAll();
    }, [])
    console.log(form);
    

    const handleChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        });
    };
    console.log(form);
    const handleSubmit = e =>{
        e.preventDefault();
        
        setErrors(Validate(form,check));
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
        axios.get(`users/${user_sequence_id}`)
        .then(res => setForm(res.data))
        .catch(err => console.log(err))
    }

    const getAll = () => {
        axios.get(`users/all`)
        .then(res => setCheck(res.data))
        .catch(err => console.log(err))
    }

    const patchForm = () => {        
        axios.patch(`users/${user_sequence_id}`, [form.user_id, form.user_pwd, form.user_name, form.user_phone, form.user_address])
        .then(alert("수정이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    return {handleChange, form, handleSubmit, errors};
}

export default UpdateProfileData;