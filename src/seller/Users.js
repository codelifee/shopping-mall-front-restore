import React, {useStatem, useEffect, useState} from 'react'
import UserInfo from './UserInfo'
import axios from '../axios/axios'


function Users({}) {

  

    const [startDate, setStartDate] = useState(new Date());

    const [user, setUser] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get('users/all')
            				
            
            
            .then(response => 
                setUser(response.data)
            )
            .catch(error => console.log(error))
            
            return request;
        }
        fetchDate();
    }, [])

    return (
        
            
                <div className="user">
                
                            {user.map(user => (
                                <div>
                                <UserInfo 
                                user_id={user.user_id}
                               name ={user.user_name}
                                email={user.user_email}
                               address={user.user_address}
                                phone={user.user_phone}
                                 
                                     
                                />
                                  </div>
                            ))}
                   </div> 
            
    );
}

export default Users;
