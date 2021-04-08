// eslint-disable-next-line
import React from 'react';
import './EmptyCheckout.css'
import {  useHistory } from "react-router-dom";

function EmptyCheckout() {
  
    const history = useHistory();
  return ( 

 
    <div className = "emptycheckout" >
    <div className = "emptycheckout__left" >
               < h2 className = "emptycheckout__title" >
                 <span style = { { color: 'grey' }} >
                 < i class = "fas fa-shopping-cart"/>
                 </span> &nbsp; 장바구니 </h2 > < hr />
 
  </div>
          <div div className = "emptycheckout__second" >

      <div className = "emptycheckout__description" >
     <h2>장바구니에 담긴 물품이 없습니다.<br/><br/>
         * 회원만 장바구니 담기 기능을 이용할 수 있습니다. <br/>&nbsp;&nbsp;회원가입 또는 로그인을 해주시기 바랍니다. </h2>
          </div> 
          </div>.
         
          <div div className = "emptycheckout__divbutton" >
          <button className = "emptycheckout__button" style={{width: "200px", height:"50px"}} onClick={()=>history.push('/home')}>홈화면으로 가기 </button> 
          </div>
          
           
          </div>            
  
  
     );
  }
  export default EmptyCheckout;