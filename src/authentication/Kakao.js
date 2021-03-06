import PropTypes from "prop-types";
import "./Kakao.css";
import KakaoLogin from "react-kakao-login";
import { snsPayloadParser } from "./Common";
import React, { useState, useEffect } from "react";
import axios from "../axios/axios";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const crypt = require("bcryptjs");

//컴포넌트 시작
const Kakao = (props) => {

  const history = useHistory();

  let password = null; //암호화 된 password 저장

  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    axios
      .get(`getUsers`)
      .then((res) => setCustomer(res.data))
      .catch((err) => console.log(err));
  };

  //kakao 서버에서 받아온 계정 정보 
  const [values, setValues] = useState({
    user_id: "",
    user_pwd: 12345678,
    user_pwd2: 12345678,
    user_name: "",
    user_phone: "",
    user_address: "회원정보에서 수정",
  });

  console.log(values);

  //전체 가입자 중 소셜계정 가입 회원의 암호화 된 암호 가져옴
  const crypted_pass = customer
    .filter((val) => {
      return val.user_id === values.user_id;
    })
    .map((val) => {
      return val.user_pwd;
    });

  const token2 = Cookies.get("jwt");
  var decoded = jwt_decode(token2);

  //비밀번호 DB에 저장시 암호화
  const bcrypt = () => {
    return crypt.hash(process.env.REACT_APP_PASSWORD, 10).then((encrypted) => {
      password = encrypted;

      return Promise.resolve(encrypted).then(
        axios
          .post(`joinUser`, {
            user_id: values.user_id,
            user_pwd: password,
            user_pwd2: password,
            user_name: values.user_name,
            user_phone: "",
            user_address: "회원정보에서 수정",
          })
          .then(alert("가입이 완료되었습니다. 다시 로그인 하세요."))
          .then(window.location.reload())
          .catch((err) => console.log(err))
      );
    });
  };

  const postForm = async () => {
    await bcrypt();
  };

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

  const event = () => {
    postForm();
  };
  const cancel = () => alert("가입이 취소 되었습니다");
  const confirmAction = useConfirm(
    "해당 계정 정보가 없습니다. 해당 계정으로 가입하시겠습니까?",
    event,
    cancel
  );

  const token = "d29462695c7d01d40d371be7929fc1b8" || "";

  const success = (payload) => {
    props.success(snsPayloadParser.KAKAO(payload));

    setValues({
      ...values,
      user_id: snsPayloadParser.KAKAO(payload).email,
      user_name: snsPayloadParser.KAKAO(payload).name,
    });

    console.log(payload);
  };

  useEffect(() => {
    if (values.user_id == "") {
      //로그인 전에는 작동 안하게 하는 조건.
      return;
    } else {
      axios
        .post(
          "/authenticate",
          {
            "username": values.user_id,
            "password": crypted_pass[0],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          Cookies.set("jwt", res.data.jwt, { expires: 2 });

          axios
            .post(
              `/users/getUserNumber?user_id=${values.user_id}`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token2}`,
                },
              }
            )
            .then((res) => {
              console.log(res);

              Cookies.set("user", res.data, { expires: 2 });

              history.push("/home");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
          confirmAction();
        });
    }
  }, [success]);

  const fail = (payload) => {
    props.fail(payload);
  };

  if (!token) return <>액세스 키를 확인해주세요.</>;

  return (
    <KakaoLogin
      token={token}
      onSuccess={success}
      onFailure={fail}
      getProfile={true}
      render={(renderProps) => (
        //props로 전달된 위의 값들을 onClick으로 render
        <button onClick={renderProps.onClick} className="kakaoLoginButton">
          Kakao Login
        </button>
      )}
    />
  );
};

Kakao.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Kakao;
