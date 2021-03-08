import React from 'react';
import axios from '../axios/axios';

function KakaoPay() {
    const KakaoPayClick=()=>{
        window.open("","popup_window","width=500, height=700");
    }
    return (
        <div>
            <form method="post" action="kakaoPay" target="popup_window">
                <button onClick={KakaoPayClick}>카카오페이</button>
            </form>
        </div>
    )
}

export default KakaoPay;
;