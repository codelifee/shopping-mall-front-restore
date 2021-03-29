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

        setErrors(Validate(values));
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
        axios.get(`users/all`, customer)
        .then(res => setCustomer(res.data))
        .catch(err => console.log(err))
    }

    const postForm = () => {        
        axios.post(`users`, values)
        .then(alert("가입이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    const checkId = () => {  
        let error = {};       
        for(let i=0;i<customer.length;i++){
            if(values.user_id != customer[i].user_id){
                error.user_id = '';
            }else{
                error.user_id = "사용불가능한 아이디입니다.";
                break;
            }
            }
        setErrors(error);
        console.log(error);
    }
    
    const checkPhone = () => {
        let error = {
            user_id:'',
            user_phone:''
        };
        for(let i=0;i<customer.length;i++){
            if(values.user_phone != customer[i].user_phone){
                error.user_phone = '';
            }else{
                error.user_phone = "사용불가능한 전화번호입니다.";
                break;
            }
        }
        setErrors(error);
    }

    return {handleChange, values, handleSubmit, errors, checkId, checkPhone};
}

export default SignUpData;