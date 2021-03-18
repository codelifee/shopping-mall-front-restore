import React, {useState} from "react";
import axios from "../axios/axios";
import {useHistory} from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import Cookies from "js-cookie";
import NaverLogin from "./Naver";
import KakaoLogin from "./Kakao";
import { SocialKey } from "./SocialKey";

function UseConfirm () {

const history = useHistory();

const [{ auth }, dispatch] = useStateValue();

const key = SocialKey;

const postForm = () => {        
    axios.post(`users`, values)
    .then(alert("가입이 완료되었습니다."))
    .then(res => console.log(res) && setSocialUser(res))
    .catch(err => console.log(err))
}

const signIn = () => {
    axios
      .get("/users/login", {
        params: {
          user_id: values.user_id,
          user_pwd: values.user_pwd,
        },
      })
      .then((res) => setSocialUser(res))
      .catch((err) => console.log(err));
  };

  const setSocialUser = (res) => {
    if (res.data == "") {
     return confirmAction();
    } else {
      return new Promise((resolve, reject) => {
        resolve(
          dispatch({
            type: "SET_USER",
            user: res.data,
          })
        );

        console.log(res);
        Cookies.set("user", res.data.user_sequence_id);

        //history.push("/home");
      });
    }
  };

  const [values, setValues] = useState({
    user_id: "",
    user_pwd: key,
    user_pwd2: key,
    user_name: "",
    user_phone: "010-8282-2424",
    user_address: "회원정보에서 수정",
  });

  function onSuccessHandler (res) {
    console.log(res);   
    setValues({
          ...values,
          user_id: res.email,
          user_name: res.name,
        })
  
  };
  
  console.log(values);


  const useConfirm = (message = "", event, cancel) => {
    if (typeof event !== "function") {
      return;
    }

    const confirmEvent = () => {
      if (window.confirm(message)) {
        event();
      } else {
        cancel();
      }
    };
    return confirmEvent;
  };

  const event = () => postForm(); 
  const cancel = () => alert("가입이 취소 되었습니다");
  const confirmAction = useConfirm("해당 계정 정보가 없습니다. 해당 계정으로 가입하시겠습니까?", event, cancel) 
  
  return (
    <div className="confirm">
      <div className="NaverConfirm">
        <NaverLogin
          success={onSuccessHandler}
          fail={(res) => console.log(res)}
        />
      </div>

      <div className="KakaoConfirm">
        <KakaoLogin
          success={onSuccessHandler}
          fail={(res) => console.log(res)}
        />
      </div>

    </div>
  );
}

export default UseConfirm;
