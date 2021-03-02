import React from 'react';
import './Return.css'
function Return() {

    
    return (
        <div className="return">
            <div className="return__container">
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
                    <input type="radio" id="ex_rd1" name="ex_rds" className="return_radio"/> <label for="ex_rd1">구매의사 취소</label> 
          

                    </td>
                    <td style={{textAlign:'center',borderRight:'1px solid #ccc',borderBottom:'1px solid #ccc'}}>
                    <input type="radio" id="ex_rd2" name="ex_rds" className="return_radio"/> <label for="ex_rd2">상품 파손/훼손</label> 
                    <input type="radio" id="ex_rd3" name="ex_rds" className="return_radio"/> <label for="ex_rd3">다른 상품 잘못 배송</label>
                    </td>
                </tr>  
                </table>
                
                <input 
                        className="return_input"
                        type="text"
                        placeholder="반품과 관련하여 판매자에게 남기고 싶은 말이 있을 경우 기재해주세요. 100글자까지 입력 가능 합니다."
                        />
                </div>
            </div>
        </div>
    )
}

export default Return