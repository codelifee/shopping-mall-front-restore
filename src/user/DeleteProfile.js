import React from 'react'
import './DeleteProfile.css'
import DeleteProfileData from './DeleteProfileData'

function DeleteProfile() {

    const {handleChange, confirmDelete, user} = DeleteProfileData();

    return (
        <div className="delete">
            <div className="delete__container">
                <div className="delete__container__head">
                    <h1>회원 탈퇴</h1>
                </div>
                <div className="delete__search"> 
                    <div className="delete__id">
                        <label htmlFor="">Id</label>
                        <p>{user.user_id}</p>
                    </div>
                    <form>
                    <div className="delete_password">
                        <label htmlFor="">Password</label>
                        <input 
                            id="user_pwd"
                            type="password" 
                            name="user_pwd"
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>
                    </form>
                    <div className="delete__name">
                        <label htmlFor="">Name</label>
                        <p>{user.user_name}</p>
                    </div>
                    <div className="delete__phone">
                        <label htmlFor="">Phone</label>
                        <p>{user.user_phone}</p>
                    </div>
                    <div className="delete__address">
                        <label htmlFor="">Address</label>
                        <p>{user.user_address}</p>
                    </div>
                        <button 
                        type='submit'
                        className="deleteBtn"
                        onClick={confirmDelete}>
                            탈퇴
                        </button>
                </div>    
            </div>
        </div>
    )
}

export default DeleteProfile;
