import {useState, useEffect} from 'react';
import axios from '../axios/axios';

const SignUpData = (callback,Validate) => {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        getAll();
    }, [])
    console.log(customer);

    const[values, setValues] = useState({
        user_id:'',
        user_pwd:'',
        user_pwd2:'',
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
        customer.map((data,i)=>{
            if(values.user_id != customer[i].user_id){
                errors.user_id = "사용가능한 아이디입니다.";
                return false;
            }else{
                errors.user_id = "사용불가능한 아이디입니다.";
            }
        })
        // let re = -1;
        // axios({
        //     url: `/users/checkId`,
        //     method: 'post',
        //     data:{
        //         user_id : values.user_id
        //     }
        // })
        // .then(res => re = res.data)
        // .catch(err => console.log(err))  
        // (re==1? errors.user_id = "사용가능한 아이디입니다." : errors.user_id = "사용불가능한 아이디입니다.")
    }
    
    const checkPhone = () => {
        customer.map((data,i)=>{
            if(values.user_phone != customer[i].user_phone){
                errors.user_phone = "사용가능한 전화번호입니다.";
                return false;
            }else{
                errors.user_phone = "사용불가능한 전화번호입니다.";
            }
        })
        // let re = -1; 
        // axios({
        //     url: `/users/checkPhone`,
        //     method: 'post',
        //     data:{
        //         user_phone : values.user_phone,
        //         user_id : values.user_id
        //     }
        // })
        // .then(res => re = res.data)
        // .catch(err => console.log(err))  
        // (re==1? errors.user_id = "사용가능한 전화번호입니다." : errors.user_id = "사용불가능한 전화번호입니다.")
    }

    return {handleChange, values, handleSubmit, errors, checkId, checkPhone};
}

export default SignUpData;