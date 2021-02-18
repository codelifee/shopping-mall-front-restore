import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
//import './OrdersData.css'
import {useParams} from "react-router-dom";

function OrdersData({ name, date, address,status,product,amount}) {
  const [visible, setVisible] = useState(true);
  const {id} = useParams();
  const info_img = `products/showInfoImage/${id}`;
  const [orders, setorders] = useState([]);

   useEffect(()=>{
        async function fetchDate() {
          const request = await axios.get(`orders/${id}`)
          .then(response =>
                setorders(response.data)
                )
                .catch(error => console.log(error))
                
                return request;
              }
              
              fetchDate();
            }, [])
    return(

        <div className="ordersData" style={{ display: visible ? 'block' : 'none' }}>
          <div className="title">  <span className="orderTitle1"><h3>{date} &gt;&gt;</h3></span>
            <span className="orderTitle2"><h4>결제완료( {status} )</h4></span>
            <span>
              <button  className="delete" onClick={() => setVisible(false)}><span></span> <span></span><span></span></button>         
            </span>
          </div>   

          <div className="orders">
            <div className="Name">{name} </div>
              <img src={info_img} className="orderImg" />
            <div className="orderWrp">
              <div className="orderProduct">{product}</div>
              <div className="orderPrice">{amount}원</div> 
           </div>    
           <div className="button">  
              <button className="btn">반품신청</button><button className="btn">교환신청</button></div>              
           </div>           
           <div className="orderAddress">{address}</div>     
     </div>        
    )
}

export default OrdersData;