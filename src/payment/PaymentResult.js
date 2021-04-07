import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import axios from '../axios/axios';
import Cookies from 'js-cookie';

function PaymentResult({ history }) {
  const { location } = history;
  const { search } = location;
  const query = queryString.parse(search);
  const cookie = Cookies.get('user');
  
  const { merchant_uid, error_msg, imp_uid, paid_amount, name, buyer_name, buyer_email } = query;
  const isSuccessed = getIsSuccessed();
  function getIsSuccessed() {
    const { success, imp_success } = query;
    if (typeof imp_success === 'string') return imp_success === 'true';
    if (typeof imp_success === 'boolean') return imp_success === true;
    if (typeof success === 'string') return success === 'true';
    if (typeof success === 'boolean') return success === true;
  }
  const body ={
    merchant_uid:merchant_uid,
    product_name:name,
    amount:paid_amount,
    user_name:buyer_name,
    cookie
  };

  const resultType = isSuccessed ? '성공' : '실패';
  const colorType = isSuccessed ? '#52c41a' : '#f5222d';

  useEffect(() => {
    async function postPayment() {
      const request = await axios
        .post(`payment/`,body)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
      return request;
    }
    if(resultType == '성공'){
      postPayment();
    }
  }, []);

  return (
    <Wrapper>
      <Container colorType={colorType}>
        <p>{`결제에 ${resultType}하였습니다`}</p>
        <ul>
          <li>
            <span>주문번호</span>
            <span>{merchant_uid}</span>
          </li>
          {isSuccessed  ? (
            <li>
              <span>아임포트 번호</span>
              <span>{imp_uid}</span>
            </li>
          ) : (
            <li>
              <span>에러 메시지</span>
              <span>{error_msg}</span>
            </li>
          )}
        </ul>
        <Button size="large" onClick={() => history.push('/home')}>
          돌아가기
        </Button>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  padding: 2rem;


  p {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 3rem;

    li {
      display: flex;
      line-height: 2;
      span:first-child {
        width: 8rem;
        color: #888;
      }
      span:last-child {
        width: calc(100% - 8rem);
        color: #333;
      }
    }
  }

  button, button:hover {
    border-color: ${props => props.colorType};
    color: ${props => props.colorType};
  }
  button:hover {
    opacity: 0.7;
  }
`;

export default withRouter(PaymentResult);