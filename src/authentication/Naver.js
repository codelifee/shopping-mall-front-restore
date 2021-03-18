import PropTypes from 'prop-types';

import NaverLogin from 'react-naver-login';
import { snsPayloadParser } from './Common';

const Naver = (props) => {
  const clientId = "TsDiYvG41H1q_nQg0Y8r" || '';
  const success = payload => {
    props.success(snsPayloadParser.NAVER(payload));
    console.log(payload);
  };

  const fail = payload => {
    props.fail(payload);
  };

  if (!clientId) return <>Naver의 Client Id를 확인해주세요.</>

  return (
    // <></>
    <NaverLogin
      clientId={clientId}
      callbackUrl={`http://localhost:3000${window.location.pathname}`}
      onSuccess={success}
      onFailure={() => fail}
      render={renderProps => (
        <button onClick={renderProps.onClick} >Naver Login</button>
      )}
    ></NaverLogin>
  );
};

Naver.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Naver;