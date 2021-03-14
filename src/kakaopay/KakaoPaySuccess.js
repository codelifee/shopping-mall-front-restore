import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from '../axios/axios';

function KakaoPaySuccess() {

    const pg_token = useParams();

    const [success, setSuccess] = useState({
        approved_at:'',
        partner_order_id:'',
        item_name:'',
        quantity:'',
        total:''
    })
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/kakaoPaySuccess`,pg_token)
            .then(response => 
                setUser(response.data)
            )
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1> 카카오페이 결제가 정상적으로 완료되었습니다. </h1>
            <h3>
                결제일시 :	{success.approved_at}<br/>
                주문번호 :	{success.partner_order_id}<br/>
                상품명 :	{success.item_name}<br/>
                상품수량 :	{success.quantity}<br/>
                결제금액 :	{success.total}<br/>
            </h3>
        </div>
    )
}

export default KakaoPaySuccess;
