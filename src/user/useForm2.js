import {useState, useEffect} from 'react';
import axios from '../axios/axios';
import { useParams } from 'react-router-dom';

const useForm = (callback,validate2) => {

    const {user_sequence_id} = useParams();

    const [users, setUsers] = useState({
        user_sequence_id:'',
        user_id:'',
        user_pwd:'',
        //user_pwd2:'',
        user_name:'',
        user_phone:'',
        user_address:''
    }); 

    useEffect(() => {
        getAll();
        mapUsers();
    }, [])
    console.log(users);

    const [user,setUser] = useState({
        user_sequence_id:'',
        user_id:'',
        user_pwd:'',
        //user_pwd2:'',
        user_name:'',
        user_phone:'',
        user_address:''
    }); 
    
    const[form, setForm] = useState({
        user_id:'',
        user_pwd:'',
        user_name:'',
        user_phone:'',
        user_address:''
    });
    console.log(form);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange2 = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate2(form));
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

    const getAll = () => {
        
        axios.get(`http://localhost:5000/users/all`, users)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }

    const putForm = () => {        
        axios.put(`http://localhost:5000/${user_sequence_id}`, form)
        .then(alert("가입이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    const checkPhone2 = () => {
        let status = true;
        users.map((data,i)=>{
            if(form.user_phone === data[i].user_phone){
                status = false;
            }
        })
        if(!status){
            return errors.user_phone = "사용가능한 전화번호입니다.";
        }
    }

    return {handleChange2, user, handleSubmit, errors, checkPhone2};
}

export default useForm;