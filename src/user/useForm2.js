import {useState, useEffect} from 'react';
import axios from '../axios/axios';
import { useParams } from 'react-router-dom';

const useForm = (callback,validate2) => {

    const {user_sequence_id} = useParams();
    
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
    }, [])
    console.log(form);

    const [errors2, setErrors2] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange2 = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit2 = e =>{
        e.preventDefault();

        setErrors2(validate2(form));
        setIsSubmitting(true);
    };

    useEffect(() =>{
        if(Object.keys(errors2).length === 0 && isSubmitting){
            callback();
            putForm();
        }
      },
      [errors2]
    );

    const getForm = () => {
        
        axios.get(`http://localhost:5000/users/${user_sequence_id}`, form)
        .then(res => setForm(res.data))
        .catch(err => console.log(err))
    }

    const putForm = () => {        
        axios.put(`http://localhost:5000/users/${user_sequence_id}`, form)
        .then(alert("수정이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    //전화번호 중복검사 하기
    // const checkPhone2 = () => {
    //     let status = true;
    //     users.map((data,i)=>{
    //         if(form.user_phone === users[i].user_phone){
    //             status = false;
    //         }
    //     })
    //     if(status===false){
    //         return errors.user_phone = "사용불가능한 전화번호입니다.";
    //     }
    // }

    return {handleChange2, form, handleSubmit2, errors2};
}

export default useForm;