import React, {useState, useEffect} from 'react'
import './Return.css'
import axios from '../axios/axios'
import { useParams } from 'react-router-dom';
import CurrencyFormat from "react-currency-format";
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider/StateProvider';
import ReturnData from './ReturnData';
import Returnitem from './Returnitem';


function Return() {
    const {order_id} = useParams();
    const {putForm,user} = ReturnData();
  
    const history = useHistory();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get(`orders/${order_id}`)
            .then(response => 
                setOrders(response.data)
            )
            .catch(error => console.log(error))
            
            return request;
        }

        console.log(orders)

        fetchDate();
    }, [])
    return (
        <div className="return">
            <div className="return__container">
            <form className="return__search" noValidate>
                <div className="return_table">
                
                <p className="return_title">반품 사유 선택</p>
                
                <table className="return__info" style={{borderTop:'5px solid #e6b797',borderBottom:'1px solid #eee',textAlign:'center',width:'100%'}}>
                <tr> 
                
                    
                    <td className="return_name" style={{textAlign:'center',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc',background:'#eee'}}>
                       반품배송비를 구매자가 부담
                        
                    </td>
                    
                    <td style={{textAlign:'center',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc',background:'#eee'}}>
                        반품배송비를 판매자가 부담
                    </td>
                </tr>
                <tr>
                
                    <td className="return_address" style={{textAlign:'center',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                    <input type="radio" id="ex_rd1" name="ex_rds" className="return_radio" /> <label for="ex_rd1" >구매의사 취소(택배비 선불)</label> 
          

                    </td>
                    <td style={{textAlign:'center',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                    <input type="radio" id="ex_rd2" name="ex_rds" className="return_radio" /> <label for="ex_rd2" >상품 파손/훼손/다른 상품 잘못 배송(택배비 착불)</label> 
                    
                    </td>
                </tr>  
                </table>
                
                
                </div>
                <div className="return2_table">
                
                <p className="return_title">회수지 정보</p>
                <table className="return__add" style={{borderTop:'5px solid #e6b797',borderBottom:'1px solid #eee'}}>
                <tr> 
                
                    
                    <td className="return_name" style={{background:'#eee',width:'150px',textAlign:'left',paddingLeft:'30px',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                       받는사람
                        
                    </td>
                    
                    <td style={{textAlign:'left',paddingLeft:'30px',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                        {user.user_name}
                    </td>
                </tr>
                <tr>
                    <td className="return_phone" style={{background:'#eee',textAlign:'left',paddingLeft:'30px',border:'0px',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                        연락처
                    </td>
                    <td style={{textAlign:'left',paddingLeft:'30px',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                        {user.user_phone}
                        
                        
                    </td>
                </tr>
                <tr>
                
                    <td className="return_address" style={{background:'#eee',textAlign:'left',paddingLeft:'30px',borderLeft: '1px solid #ccc',borderLeft: '1px solid #ccc',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                       받는주소
                    </td>
                    <td style={{textAlign:'left',paddingLeft:'30px',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                        {user.user_address}
                    </td>
                </tr>  
                </table>         
               
                </div>
                </form>
                <button className="return_btn" onClick={putForm}>반품신청</button>
                
                
                                <Returnitem 
                                
                                status={orders.order_return}
                                />
                            
            </div>
        </div>
    )
}

export default Return