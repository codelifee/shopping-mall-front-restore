import {useState, useEffect} from 'react';
import axios from '../axios/axios';

const SocialSignUpData = (callback,Validate) => {

    const [customer, setCustomer] = useState([]);
    const phoneNadrress = customer.map((val)=>{return {user_phone: val.user_phone,
        user_address: val.user_address
    }});

     console.log(phoneNadrress)

    useEffect(() => {
        getAll();
    }, [])

    const[values, setValues] = useState({
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

        setErrors(Validate(values,phoneNadrress));
        setIsSubmitting(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
            return values;
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

export default SocialSignUpData;