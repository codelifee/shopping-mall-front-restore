import React, {useState, useEffect} from 'react'
import './Exchange.css'
import axios from '../axios/axios'
import { useParams } from 'react-router-dom';
import CurrencyFormat from "react-currency-format";
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider/StateProvider';
import OrdersData from './OrdersData';

function Exchange() {
    
    const {patchReturnStatus,orders} = OrdersData();

    const history = useHistory();
           
    return (
        <div className="exchange">
            <div className="exchange__container">
            <form className="exchange__search" noValidate>
           <div className="exchange_table">
                
                <p className="exchange_title">교환 사유 선택</p>
                <table className="exchange__info" style={{borderTop:'5px solid #e6b797',borderBottom:'1px solid #eee',textAlign:'center',width:'100%'}}>
                <tr> 
                
                    
                    <td className="exchange_name" style={{textAlign:'center',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc',background:'#eee'}}>
                       교환배송비를 구매자가 부담
                        
                    </td>
                    
                    <td style={{textAlign:'center',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc',background:'#eee'}}>
                        교환배송비를 판매자가 부담
                    </td>
                </tr>
                <tr>
                
                    <td className="exchange_address" style={{textAlign:'center',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                    <input type="radio" id="ex_rd1" name="ex_rds" className="exchange_radio"/> <label for="ex_rd1"  >구매의사 변경(택배비 선불)</label> 
          

                    </td>
                    <td style={{textAlign:'center',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                    <input type="radio" id="ex_rd2" name="ex_rds" className="exchange_radio"/> <label for="ex_rd2" >상품 파손/훼손/다른 상품 잘못 배송(택배비 착불)</label> 
                    
                    </td>
                </tr>  
                </table>
                
               
                </div>
                <div className="exchange2_table">
                
                <p className="exchange_title">회수지 정보</p>
                <table className="exchange__add" style={{borderTop:'5px solid #e6b797',borderBottom:'1px solid #eee'}}>
                <tr> 
                
                    
                    <td className="exchange_name" style={{background:'#eee',width:'150px',textAlign:'left',paddingLeft:'30px',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                       받는사람
                        
                    </td>
                    
                    <td style={{textAlign:'left',paddingLeft:'30px',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                        {orders.user_name}
                    </td>
                </tr>
                <tr>
                    <td className="exchange_phone" style={{background:'#eee',textAlign:'left',paddingLeft:'30px',border:'0px',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                        연락처
                    </td>
                    <td style={{textAlign:'left',paddingLeft:'30px',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                        {orders.user_phone}
                        
                        
                    </td>
                </tr>
                <tr>
                
                    <td className="exchange_address" style={{background:'#eee',textAlign:'left',paddingLeft:'30px',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                       받는주소
                    </td>
                    <td style={{textAlign:'left',paddingLeft:'30px',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                        {orders.user_address}
                    </td>
                </tr>  
                </table>
                
                <button className="exchange_btn" onClick={patchReturnStatus}>교환신청</button>
   
                
           
                </div>
                </form>
            </div>
        </div>
    )
}

export default Exchange