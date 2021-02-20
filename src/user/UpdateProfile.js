import React from 'react'
import './UpdateProfile.css'
import useForm2 from './useForm2';
import validate2 from './ValidateInfo2';

function UpdateProfile({submitForm}) {

    const {handleChange2, form, handleSubmit2, errors2} = useForm2(submitForm,validate2);

    return (
        <div className="updateProfile">
            <div className="updateProfile__container">
                <div className="updateProfile__container__head">
                    <h1>Update {form.user_name}'s Profile</h1>
                </div>
                <form className="updateProfile__search" onSubmit={handleSubmit2}>
                    <div className="update__id">
                        <label>Id</label>
                        <span>{form.user_id}</span>
                    </div>
                    <div className="update__password">
                        <label>Password</label>
                        <input 
                        type="password" 
                        name="user_pwd"
                        defaultValue={form.user_pwd}
                        onChange={handleChange2}
                        />
                        {errors2.user_pwd && <p>{errors2.user_pwd}</p>}
                    </div>
                    <div className="update__password2">
                        <label htmlfor="">Confirm <br/>Password</label>
                        <input 
                            id="user_pwd2"
                            type="password" 
                            name="user_pwd2"
                            placeholder="Enter your password again"
                            defaultValue={form.user_pwd2}
                            onChange={handleChange2}
                        />
                        {errors2.user_pwd2 && <p>{errors2.user_pwd2}</p>}
                    </div>
                    <div className="update__name">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="user_name"
                        defaultValue={form.user_name}
                        onChange={handleChange2}
                        />
                        {errors2.user_name && <p>{errors2.user_name}</p>}
                    </div>
                    <div className="update__phone">
                        <label>Phone</label>
                        <input 
                        type="text" 
                        name="user_phone"
                        defaultValue={form.user_phone}
                        onChange={handleChange2}
                        />
                        {/* <button 
                        type="button"
                        onClick={checkPhone}
                        >
                            Check Phone
                        </button> */}
                        {errors2.user_phone && <p>{errors2.user_phone}</p>}
                    </div>
                    <div className="update__address">
                        <label>Address</label>
                        <input 
                        type="text" 
                        name="user_address"
                        defaultValue={form.user_address}
                        onChange={handleChange2}
                        />
                        {errors2.user_address && <p>{errors2.user_address}</p>}
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