import {useState, useEffect} from 'react';
import axios from '../axios/axios';

const useForm = (callback,validate) => {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        getAll();
    }, [])
    console.log(customer);

    const[values, setValues] = useState({
        user_id:'',
        user_pwd:'',
        //user_pwd2:'',
        user_name:'',
        user_phone:'',
        user_address:''
    });
    console.log(values);

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

        setErrors(validate(values));
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
        
        axios.get(`http://localhost:5000/users/all`, customer)
        .then(res => setCustomer(res.data))
        .catch(err => console.log(err))
    }

    const postForm = () => {        
        axios.post(`http://localhost:5000/users`, values)
        .then(alert("가입이 완료되었습니다."))
        .catch(err => console.log(err))
    }

    const checkId = () => {
        let status = true;
        customer.map((data,i)=>{
            if(values.user_id === data[i].user_id){
                status = false;
            }
        })
        if(!status){
            return errors.user_id = "사용가능한 아이디입니다.";
        }
    }
    const checkPhone = () => {
        let status = true;
        customer.map((data,i)=>{
            if(values.user_phone === data[i].user_phone){
                status = false;
            }
        })
        if(!status){
            return errors.user_phone = "사용가능한 전화번호입니다.";
        }
    }

    return {handleChange, values, handleSubmit, errors, checkId, checkPhone};
}

export default useForm;