import {useState, useEffect} from 'react';
import axios from '../axios/axios';
import { useParams } from 'react-router-dom';

const ReturnData = () => {

    const {user_sequence_id} = useParams();

    const[user,setUser] = useState({
        user_name:'',
        user_phone:'',
        user_address:''
    })
    const [form,setForm]=useState({
        order_id:0,
        order_return:''
    })
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`users/${user_sequence_id}`)
            .then(response => setUser(response.data))
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(`orders/userid/${user_sequence_id}`)
    //         .then(response => setForm(response.data))
    //         .catch(error => console.log(error))
           
    //         return request;
    //     }
    //     fetchData();
    // }, [])
    
    // const putForm = () => {
    //     setForm({
    //         ...form,
    //         order_return:'exchange'});  
    //     let id = form.order_id;
    //     axios.patch(`orders/${id}`, {order_return:form.order_return})
    //     .then(alert("완료되었습니다."))
    //     .catch(err => console.log(err))
    // }
   
    // return {putForm,user }
}

export default ReturnData;