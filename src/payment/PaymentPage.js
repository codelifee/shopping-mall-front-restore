import React, { useState } from 'react';
import styled from 'styled-components';
//import { Switch } from '@ant-design/icons';
import {Button, Form, Icon, Input, Select} from 'antd';
import { withRouter } from 'react-router-dom';
import { withUserAgent } from 'react-useragent';
import queryString from 'query-string';

import {
  PGS,
  METHODS_FOR_INICIS,
  QUOTAS_FOR_INICIS_AND_KCP,
} from './Constants';
import { getMethods, getQuotas } from './Utils';

const { Item } = Form;
const { Option } = Select;

function Payment({ history, form, ua }) {
  const [methods, setMethods] = useState(METHODS_FOR_INICIS);
  const [quotas, setQuotas] = useState(QUOTAS_FOR_INICIS_AND_KCP);
  const [isQuotaRequired, setIsQuotaRequired] = useState(true);
  const { getFieldDecorator, validateFieldsAndScroll, setFieldsValue, getFieldsValue } = form;

  function handleSubmit(e) {
    e.preventDefault();
    
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        /* 가맹점 식별코드 */
        const userCode = 'imp19424728';
        /* 결제 데이터 */
        const {
          pg,
          pay_method,
          merchant_uid,
          name,
          amount,
          buyer_name,
          buyer_tel,
          buyer_email,
          escrow,
          card_quota,
          biz_num,
          vbank_due,
          digital,
        } = values;

        const data = {
          pg,
          pay_method,
          merchant_uid,
          name,
          amount,
          buyer_name,
          buyer_tel,
          buyer_email,
          escrow,
        };

        if (pay_method === 'vbank') {
          data.vbank_due = vbank_due;
          if (pg === 'danal_tpay') {
            data.biz_num = biz_num;
          }
        }
        if (pay_method === 'card') {
          if (card_quota !== 0) {
            data.digital = { card_quota: card_quota === 1 ? [] : card_quota };
          }
        }
        if (pay_method === 'phone') {
          data.digital = digital;
        }

        if (isReactNative()) {
          const params = {
            userCode,
            data,
            type: 'payment', // 결제와 본인인증을 구분하기 위한 필드
          };
          const paramsToString = JSON.stringify(params);
          window.ReactNativeWebView.postMessage(paramsToString);
        } else {
          /* 웹 환경일때 */
          const { IMP } = window;
          IMP.init(userCode);
          IMP.request_pay(data, callback);
        }
      }
    });
  }

  function callback(response) {
    const query = queryString.stringify(response);
    history.push(`/paymentresult?${query}`);
  }

  function onChangePg(value) {
    /* 결제수단 */
    const methods = getMethods(value);
    setMethods(methods);
    setFieldsValue({ pay_method: methods[0].value })

    /* 할부개월수 설정 */
    const { pay_method } = getFieldsValue();
    handleQuotas(value, pay_method);
  }

  function onChangePayMethod(value) {
    const { pg } = getFieldsValue();
    let isQuotaRequired = false;

    if (value == 'card') {
        isQuotaRequired = true;
      }
    setIsQuotaRequired(isQuotaRequired);

    /* 할부개월수 설정 */
    handleQuotas(pg, value);
  }

  function handleQuotas(pg, pay_method) {
    const { isQuotaRequired, quotas } = getQuotas(pg, pay_method);
    setIsQuotaRequired(isQuotaRequired);
    setQuotas(quotas);
    setFieldsValue({ card_quota: quotas[0].value })
  }

  function isReactNative() {
    if (ua.mobile) return true;
    return false;
  }

  return (
    <Wrapper>
      <FormContainer onSubmit={handleSubmit}>
        <Item label="PG사">
          {getFieldDecorator('pg', {
            initialValue: '선택하세요',
          })(
            <Select
              size="large"
              onChange={onChangePg}
              suffixIcon={<Icon type="caret-down" />}
            >
              {PGS.map(pg => {
                const { value, label } = pg;
                return <Option value={value} key={value}>{label}</Option>;
              })}
            </Select>
          )}
        </Item>
        <Item label="결제수단">
          {getFieldDecorator('pay_method', {
            initialValue: 'card',
          })(
            <Select
              size="large"
              onChange={onChangePayMethod}
              suffixIcon={<Icon type="caret-down" />}
            >
              {methods.map(method => {
                const { value, label } = method;
                return <Option value={value} key={value}>{label}</Option>;
              })}
            </Select>
          )}
        </Item>
        {isQuotaRequired && (
          <Item label="할부">
            {getFieldDecorator('card_quota', {
              initialValue: 0,
            })(
              <Select size="large" suffixIcon={<Icon type="caret-down" />}>
                {quotas.map(quota => {
                  const { value, label } = quota;
                  return <Option value={value} key={value}>{label}</Option>;
                })}
              </Select>
            )}
          </Item>
        )}
        <Item>
          {getFieldDecorator('name', {
            initialValue: '아임포트 결제 데이터 분석',
            rules: [{ required: true, message: '주문명은 필수입력입니다' }],
          })(
            <Input size="large" addonBefore="주문명" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('amount', {
            initialValue: '100',
            rules: [{ required: true, message: '결제금액은 필수입력입니다' }],
          })(
            <Input size="large" type="number" addonBefore="결제금액" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('merchant_uid', {
            initialValue: `min_${new Date().getTime()}`,
            rules: [{ required: true, message: '주문번호는 필수입력입니다' }],
          })(
            <Input size="large" addonBefore="주문번호" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('buyer_name', {
            initialValue: '홍길동',
            rules: [{ required: true, message: '구매자 이름은 필수입력입니다' }],
          })(
            <Input size="large" addonBefore="이름" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('buyer_tel', {
            initialValue: '01012341234',
            rules: [{ required: true, message: '구매자 전화번호는 필수입력입니다' }],
          })(
            <Input size="large" type="number" addonBefore="전화번호" />,
          )}
        </Item>
        <Item>
          {getFieldDecorator('buyer_email', {
            initialValue: 'example@example.com',
            rules: [{ required: true, message: '구매자 이메일은 필수입력입니다' }],
          })(
            <Input size="large" addonBefore="이메일" />,
          )}
        </Item>
        <Button type="primary" htmlType="submit" size="large">
          결제하기
        </Button>
      </FormContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormContainer = styled(Form)`
  width: 350px;
  border-radius: 3px;

  .ant-row {
    margin-bottom: 1rem;
  }
  .ant-form-item {
    display: flex;
    align-items: center;
  }
  .ant-col.ant-form-item-label {
    padding: 0 11px;
    width: 9rem;
    text-align: left;
    label {
      color: #888;
      font-size: 1.2rem;
    }
    & + .ant-col.ant-form-item-control-wrapper {
      width: 26rem;
      .ant-form-item-control {
        line-height: inherit;
      }
    }
  }
  .ant-col.ant-form-item-label > label::after {
    display: none;
  }
  .ant-row.ant-form-item.toggle-container .ant-form-item-control {
    padding: 0 11px;
    height: 4rem;
    display: flex;
    align-items: center;
    .ant-switch {
      margin: 0;
    }
  }

  .ant-form-explain {
    margin-top: 0.5rem;
    margin-left: 9rem;
  }

  .ant-input-group-addon:first-child {
    width: 9rem;
    text-align: left;
    color: #888;
    font-size: 1.2rem;
    border: none;
    background-color: inherit;
  }
  .ant-input-group > .ant-input:last-child {
    border-radius: 4px;
  }

  .ant-col {
    width: 100%;
  }

  button[type='submit'] {
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
`;

const PaymentForm = Form.create({ name: 'payment' })(Payment);

export default withUserAgent(withRouter(PaymentForm));
