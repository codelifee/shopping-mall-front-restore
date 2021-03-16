import PropTypes from 'prop-types';

import KakaoLogin from 'react-kakao-login';
import { snsPayloadParser } from './Common';

const Kakao = (props) => {
  const token = "d29462695c7d01d40d371be7929fc1b8" || '';

  const success = (payload) => {
    props.success(snsPayloadParser.KAKAO(payload));
    
  };

  const fail = (payload) => {
    props.fail(payload);
  };

  if (!token) return <>액세스 키를 확인해주세요.</>

  return (
    // <></>
    <KakaoLogin
      token={token}
      onSuccess={success}
      onFailure={fail}
      getProfile={true}
      render={renderProps => (
          //props로 전달된 위의 값들을 onClick으로 실행
        <button onClick={renderProps.onClick} >Kakao Login</button>
      )}
    />
  );
};

Kakao.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Kakao;