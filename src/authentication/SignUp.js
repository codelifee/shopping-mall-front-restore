import React from 'react';
import './SignUp.css';
import SignUpData from './SignUpData';
import Validate from './ValidateSignUpInfo';
import Header from '../Header';
import Footer from '../footer/Footer';

function SignUp({submitForm}) {

    const {handleChange, values, handleSubmit, errors, checkId, checkPhone} = SignUpData(submitForm,Validate);

    return (
        <>
                    <Header/>

        <div className="addUser">
            <div className="addUser__container">
                <div className="addUser__container__head">
                <h1 className="title">회원가입</h1>
                </div>
                <form className="addUser__search" 
                onSubmit={handleSubmit}
                >
                    <div className="add_id">
                        <label htmlFor="">아이디</label>
                        </div>
                        <div>
                        <input 
                            id="user_id"
                            type="email" 
                            name="user_id"
                            placeholder="아이디를 입력하세요"
                            value={values.user_id}
                            onChange={handleChange}
                        />
                        {errors.user_id && <p>{errors.user_id}</p>}
                    </div>
                    <div className="add_password">
                        <label htmlFor="">비밀번호</label>
                    </div>
                    <div>
                        <input 
                            id="user_pwd"
                            type="password" 
                            name="user_pwd"
                            placeholder="비밀번호를 입력하세요"
                            value={values.user_pwd}
                            onChange={handleChange}
                        />
                        {errors.user_pwd && <p>{errors.user_pwd}</p>}
                    </div>
                    <div className="add_password2">
                        <label htmlFor="">비밀번호<br/>확인</label>
                    </div>
                    <div>    
                        <input 
                            id="user_pwd2"
                            type="password" 
                            name="user_pwd2"
                            placeholder="비밀번호 확인을 입력하세요"
                            value={values.user_pwd2}
                            onChange={handleChange}
                        />
                        {errors.user_pwd2 && <p>{errors.user_pwd2}</p>}
                    </div>
                    <div className="add_name">
                        <label htmlFor="">이름</label>
                    </div>
                    <div>
                        <input 
                            id="user_name"
                            type="text" 
                            name="user_name"
                            placeholder="이름을 입력하세요"
                            value={values.user_name}
                            onChange={handleChange}
                        />
                        {errors.user_name && <p>{errors.user_name}</p>}
                    </div>
                    <div className="add_phone">
                        <label htmlFor="">전화번호</label>
                    </div>
                    <div>
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
                    </div>
                    <div>        
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
                    <Footer/>
</>
    )
}

export default SignUp