import React, {useState, useEffect} from 'react'
import axios from '../axios/axios'
import OrdersDataDetails from './OrdersDataDetails'
import { useParams } from 'react-router-dom';
import "./OrderDetails.css";
function OrderDetails() {

    const [customer, setCustomer] = useState([]);
    const {user_sequence_id} = useParams();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`users/${user_sequence_id}`)
            .then(response => 
                setCustomer(response.data)
            )
            .catch(error => console.log(error))
           
            return request;
        }
        fetchData();
    }, [])
    console.log(user_sequence_id)
    console.log(customer)

    const [table, setTable] = useState({
        user_id : customer.user_id,
        user_name : customer.user_name,
        user_phone : customer.user_phone,
        user_address: customer.user_address,
        order_amount: customer.order_amount  
    })

    const [startDate, setStartDate] = useState(new Date());
    const [orders, setOrders] = useState([{}]);
  
  
  
   
    const img = `http://shoppingmall-env.eba-jac9afx7.us-east-1.elasticbeanstalk.com/products/showProductImage/`;
  
    useEffect(() => {
      async function fetchDate() {
        const request = await axios
          .get(`http://localhost:5000/orders/userid/${user_sequence_id}`)
  
          .then(response => setOrders(response.data))
          .catch(error => console.log(error));
  
        return request;
      }
  
      fetchDate();
    }, []); 


    return (
        <div className="orderDetails">




            <div className="orderDetails__container">
            <div className="orderDetails__container__head">
                    <h3>주문상세</h3>
                </div>
{orders.map(order => (
            <OrdersDataDetails
              status={order.order_status}
              key={order.order_id}
              name={order.user_id}
              product={order.product_name}
              date={order.order_date_created}
              address={order.user_address}
              picture={img + order.product_id}
              amount={order.product_price}
            />
          ))}

<div className="orderDetails_table">
                
                <p>받는사람 정보</p>
                <table className="orderDetails__info" style={{borderTop:'5px solid #777',borderBottom:'1px solid #eee'}}>
                <tr> 
                
                    
                    <td className="orderDetails_name" style={{width:'200px',textAlign:'left',paddingLeft:'50px',borderLeft: '1px solid #ffb755',borderLeft: '1px solid #ffb755',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                       받는사람
                        
                    </td>
                    
                    <td style={{textAlign:'left',paddingLeft:'50px',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                        {customer.user_name}
                    </td>
                </tr>
                <tr>
                    <td className="orderDetails_phone" style={{textAlign:'left',paddingLeft:'50px',border:'0px',borderLeft: '1px solid #ffb755',borderLeft: '1px solid #ffb755',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                        연락처
                    </td>
                    <td style={{textAlign:'left',paddingLeft:'50px',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                        {customer.user_phone}
                        
                        
                    </td>
                </tr>
                <tr>
                
                    <td className="orderDetails_address" style={{textAlign:'left',paddingLeft:'50px',borderLeft: '1px solid #ffb755',borderLeft: '1px solid #ffb755',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                       받는주소
                    </td>
                    <td style={{textAlign:'left',paddingLeft:'50px',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                        {customer.user_address}
                    </td>
                </tr>  
                </table>
               
                </div>
                <div className="orderDetails_table">
               
                <p>결제정보</p>
                
                
                
                <table className="orderDetails__price"  style={{borderTop:'5px solid #777',borderBottom:'1px solid #eee'}}>
                <tr> 
                
                    
                    <td className="orderDetails_amount"  style={{width:'200px',textAlign:'left',paddingLeft:'50px', borderLeft: '1px solid #ffb755',borderLeft: '1px solid #ffb755',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                    총 상품 가격
                        
                    </td >
                    
                    <td style={{textAlign:'left',paddingLeft:'50px',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                        {customer.order_amount}
                    </td>
                </tr>
                <tr>
                    <td className="orderDetails_amount2" style={{textAlign:'left',paddingLeft:'50px',borderLeft: '1px solid #ffb755',borderLeft: '1px solid #ffb755',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755'}}>
                    총 결제금액
                    </td>
                    <td style={{textAlign:'left',paddingLeft:'50px',borderRight:'1px solid #ffb755',borderBottom:'1px solid #ffb755' }}>
                        {customer.order_amount}
                        
                        
                    </td>
                </tr>
                
                </table>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails