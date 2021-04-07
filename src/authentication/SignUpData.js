import {useState, useEffect} from 'react';
import axios from '../axios/axios';

const SignUpData = (callback,Validate) => {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        getAll();
    }, [])

    const[values, setValues] = useState({
        user_id:'',
        user_pwd:'',
        user_pwd2:'',
        user_name:'',
        user_phone:'',
        user_address:''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(Validate(values,customer));
        setIsSubmitting(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
            postForm();
        }
      },
      [errors]
    );

    const getAll = () => {
        axios.get(`users/all`)
        .then(res => setCustomer(res.data))
        .catch(err => console.log(err))
    }

    const postForm = () => {        
        axios.post(`users`, [values.user_id, values.user_pwd, values.user_name, values.user_phone, values.user_address])
        .then(alert("가입이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    return {handleChange, values, handleSubmit, errors};
}

export default SignUpData;