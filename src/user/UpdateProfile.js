import React from 'react'
import './UpdateProfile.css'
import useForm2 from './useForm2';
import validate2 from './ValidateInfo2';

function UpdateProfile({submitForm}) {

    const {handleChange2, user, handleSubmit, errors, checkPhone} = useForm2(submitForm,validate2);

    return (
        <div className="updateProfile">
            <div className="updateProfile__container">
                <div className="updateProfile__container__head">
                    <h1>Update {user.user_name}'s Profile</h1>
                </div>
                <form className="updateProfile__search" onSubmit={handleSubmit}>
                    <div className="id">
                        <label>Id</label>
                        <p>{user.user_id}</p>
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input 
                        type="password" 
                        name="user_pwd"
                        defaultValue={user.user_pwd}
                        onChange={handleChange2}
                        />
                    </div>
                    <div className="name">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="user_name"
                        defaultValue={user.user_name}
                        onChange={handleChange2}
                        />
                    </div>
                    <div className="phone">
                        <label>Phone</label>
                        <input 
                        type="text" 
                        name="user_phone"
                        defaultValue={user.user_phone}
                        onChange={handleChange2}
                        />
                        <button 
                        type="button"
                        onClick={checkPhone}
                        >
                            Check Phone
                        </button>
                    </div>
                    <div className="address">
                        <label>Address</label>
                        <input 
                        type="text" 
                        name="user_address"
                        defaultValue={user.user_address}
                        onChange={handleChange2}
                        />
                    </div>
                    <button 
                    type="submit"
                    >Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile;