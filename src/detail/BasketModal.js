import React from 'react';
import {useHistory} from 'react-router-dom';
import './BasketModal.css';

function BasketModal(props) {
    const history = useHistory();
    return (
      <div id="myModal" className="modal">
        <span className="close_modal" onClick={()=>{
          return props.close();
        }}>X</span>
        <div className="modal_content">
          <h4>
            장바구니에 상품이 <br /> 담겼습니다.
          </h4>
          <button
            className="modalButton"
            onClick={() => {
              history.push('/checkout');
            }}
          >
            장바구니로 이동
          </button>
        </div>
      </div>
    );
  }

  export default BasketModal;