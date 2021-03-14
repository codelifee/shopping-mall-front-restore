import React, {useEffect,useState}from 'react';
import { useParams } from 'react-router';
import axios from '../axios/axios';
import icon from '../img/payment_icon_yellow_small.png';
import './KakaoPay.css';

function KakaoPay() {
    const [form,setForm] = useState({
        partner_order_id:'0001',
        partner_user_id:'sujin',
        item_name:'grape',
        quantity:1,
        total:30000
    })

    useEffect(() => {
        async function fetchData() {
            const request = await axios.post(`/pay/kakaoPay`,form)
            .then(res => console.log(res))
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])

    let url = '';
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/pay/kakaoPay/6`)
            .then(res => url = res.data)
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])

    const postPay = () =>{
        window.open(url);
    }

    return (
        <div>
            <form>
                <button className="kakaoBtn" onClick={postPay}><img src={icon} alt="카카오페이"/></button>
            </form>
        </div>
    )
}

export default KakaoPay;
