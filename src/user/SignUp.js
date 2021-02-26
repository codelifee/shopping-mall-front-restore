import React from 'react';
import './SignUp.css';
import SignUpData from './SignUpData';
import Validate from './ValidateInfo';

function SignUp({submitForm}) {

    const {handleChange, values, handleSubmit, errors, checkId, checkPhone} = SignUpData(submitForm,Validate);

    return (
        <div className="addUser">
            <div className="addUser__container">
                <div className="addUser__container__head">
                    <h1>Sign up</h1>
                </div>
                <form className="addUser__search" 
                onSubmit={handleSubmit}
                >
                    <div className="add_id">
                        <label htmlFor="">Id</label>
                        <input 
                            id="user_id"
                            type="email" 
                            name="user_id"
                            placeholder="Enter your id"
                            value={values.user_id}
                            onChange={handleChange}
                        />
                        <button 
                        type="button"
                        onClick={checkId}
                        >
                            Check Id
                        </button>
                        {errors.user_id && <p>{errors.user_id}</p>}
                    </div>
                    <div className="add_password">
                        <label htmlFor="">Password</label>
                        <input 
                            id="user_pwd"
                            type="password" 
                            name="user_pwd"
                            placeholder="Enter your password"
                            value={values.user_pwd}
                            onChange={handleChange}
                        />
                        {errors.user_pwd && <p>{errors.user_pwd}</p>}
                    </div>
                    <div className="add_password2">
                        <label htmlFor="">Confirm <br/>Password</label>
                        <input 
                            id="user_pwd2"
                            type="password" 
                            name="user_pwd2"
                            placeholder="Enter your password again"
                            value={values.user_pwd2}
                            onChange={handleChange}
                        />
                        {errors.user_pwd2 && <p>{errors.user_pwd2}</p>}
                    </div>
                    <div className="add_name">
                        <label htmlFor="">Name</label>
                        <input 
                            id="user_name"
                            type="text" 
                            name="user_name"
                            placeholder="Enter your name"
                            value={values.user_name}
                            onChange={handleChange}
                        />
                        {errors.user_name && <p>{errors.user_name}</p>}
                    </div>
                    <div className="add_phone">
                        <label htmlFor="">Phone</label>
                        <input 
                            id="user_phone"
                            type="text" 
                            name="user_phone"
                            placeholder="Enter your phone number"
                            value={values.user_phone}
                            onChange={handleChange}
                        />
                        <button 
                        type="button"
                        onClick={checkPhone}
                        >
                            Check Phone
                        </button>
                        {errors.user_phone && <p>{errors.user_phone}</p>}
                    </div>
                    <div className="add_address">
                        <label htmlFor="">Address</label>
                        <input 
                            id="user_address"
                            type="text" 
                            name="user_address"
                            placeholder="Enter your address"
                            value={values.user_address}
                            onChange={handleChange}
                        />
                        {errors.user_address && <p>{errors.user_address}</p>}
                    </div>
                    <button 
                    type="submit"
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp