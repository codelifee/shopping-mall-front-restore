import {useState, useEffect} from 'react';
import axios from '../axios/axios';
import { useParams } from 'react-router-dom';

const UpdateProfileData = (callback,Validate) => {

    const {user_sequence_id} = useParams();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
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
        axios.get(`users/${user_sequence_id}`)
        .then(res => setForm(res.data))
        .catch(err => console.log(err))
    }

    const patchForm = () => {        
        axios.patch(`users/${user_sequence_id}`, form)
        .then(alert("수정이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    return {handleChange, form, handleSubmit, errors};
}

export default UpdateProfileData;