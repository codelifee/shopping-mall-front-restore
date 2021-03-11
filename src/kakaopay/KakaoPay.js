import React, {useEffect}from 'react';
import axios from '../axios/axios';
import icon from '../img/payment_icon_yellow_small.png';
import './KakaoPay.css';

function KakaoPay() {
    let url = '';
    useEffect(() => {
        async function fetchData() {
            const request = await axios.post(`/pay/kakaoPay`)
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
