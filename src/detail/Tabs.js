import React, { useEffect } from 'react';
import Data from './Detail_data';
import Info from './Product_info';
import Review from './Review';
import QnA from './QnA';
import './Tabs.css';

function Tabs(){
    
    return(
        
            <div className="tab_center">
            <input type='radio' name="tabmenu" id="tab01" defaultChecked/>
            <label htmlFor="tab01">상품상세</label>

            <input type='radio' name="tabmenu" id="tab02"/>
            <label htmlFor="tab02">상품정보</label>

            <input type='radio' name="tabmenu" id="tab03"/>
            <label htmlFor="tab03">리뷰</label>

            <input type='radio' name="tabmenu" id="tab04"/>
            <label htmlFor="tab04">Q & A</label>

           
            <div style={{width:'100%',borderTop:'2px solid rgba(230, 125, 122, 1)',
        display:'block'}}>
            </div> 
            <div className="conbox con1"><Data/></div>
            <div className="conbox con2"><Info/></div>
            <div className="conbox con3"><Review/></div> 
            <div className="conbox con4"><QnA/></div>
        </div>
        
    )
}

export default Tabs;