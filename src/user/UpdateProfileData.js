import {useState, useEffect} from 'react';
import axios from '../axios/axios';
import { useParams } from 'react-router-dom';

const UpdateProfileData = (callback,Validate) => {

    const {user_sequence_id} = useParams();
    const [check, setCheck] = useState({
        user_phone:''
    });
    
    const[form, setForm] = useState({
        user_id:'',
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

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`users/all`)
            .then(response => 
                setCheck(response.data)
            )
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])
    console.log(check);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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
            putForm();
        }
      },
      [errors]
    );

    const getForm = () => {
        
        axios.get(`users/${user_sequence_id}`, form)
        .then(res => setForm(res.data))
        .catch(err => console.log(err))
    }

    const getAll = () => {
        
        axios.get(`users/all`, form)
        .then(res => setCheck(res.data))
        .catch(err => console.log(err))
    }

    const putForm = () => {        
        axios.put(`http://localhost:5000/users/${user_sequence_id}`)
        .then(alert("수정이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    const checkPhone2 = () => {
        check.map((data,i)=>{
            if(form.user_phone === check[i].user_phone){
                errors.user_phone = "사용불가능한 전화번호입니다.";
            }else{
                errors.user_phone = "사용가능한 전화번호입니다.";
            }
            return errors;
        })
    }

    return {handleChange, form, handleSubmit, errors, checkPhone2};
}

export default UpdateProfileData;