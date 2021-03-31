import React from 'react';
import './SignUp.css';
import SignUpData from './SocialSignUpData';
import Validate from './SocialSignUpValidate';
import Header from '../Header';
import Footer from '../footer/Footer';

function SocialSignUpModal({submitForm}) {

    const {handleChange, values, handleSubmit, errors} = SignUpData(submitForm,Validate);

    return (
        <>
        <div className="addUser">
            <div className="addUser__container">
                <div className="addUser__container__head">
                    <h1>회원가입</h1>
                </div>
                <form className="addUser__search" 
                onSubmit={handleSubmit}
                >
                    <div className="add_phone">
                        <label htmlFor="">전화번호</label>
                        <input 
                            id="user_phone"
                            type="text" 
                            name="user_phone"
                            placeholder="전화번호를 입력하세요"
                            value={values.user_phone}
                            onChange={handleChange}
                        />
                        {errors.user_phone && <p>{errors.user_phone}</p>}
                    </div>
                    <div className="add_address">
                        <label htmlFor="">주소</label>
                        <input 
                            id="user_address"
                            type="text" 
                            name="user_address"
                            placeholder="주소를 입력하세요"
                            value={values.user_address}
                            onChange={handleChange}
                        />
                        {errors.user_address && <p>{errors.user_address}</p>}
                    </div>
                    <button 
                    type="submit"
                    >가입</button>
                </form>
            </div>
        </div>
</>
    )
}

export default SocialSignUpModal;