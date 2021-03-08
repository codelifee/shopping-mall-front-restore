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
        user_address:''
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
        axios.patch(`users/${user_sequence_id}`, form)
        .then(alert("수정이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    const checkPhone2 = () => {
        let error = {};
        for(let i=0;i<check.length;i++){
            if(form.user_phone != check[i].user_phone){
                error.user_phone = "사용가능한 전화번호입니다.";
            }else{
                error.user_phone = "사용불가능한 전화번호입니다.";
                break;
            }
        }
        setErrors(error);
    }

    return {handleChange, form, handleSubmit, errors, checkPhone2};
}

export default UpdateProfileData;