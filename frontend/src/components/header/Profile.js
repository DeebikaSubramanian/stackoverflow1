import React from 'react'
import {auth} from '../../firebase'
import { signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
import './profile.css'

function Profile() {

    const user = auth.currentUser;
    const navigate=useNavigate()
   
  return (
    <div className='profile'>
              <div className="profile_content">
        {/* <div className='img'>{user?.photoURL && <img src={user?.photoURL} alt="user Profile"/>}</div> */}
        <div className='userName'>{user ?user?.displayName:"No-one login into sie. pls login"}</div>
        <div className='userName'>{user && user?.email}</div>
        </div>
        {/* <div className='auth'> 
       <button className="logout" onClick={() => 
                          {
                            signOut(auth)
                            navigate('/auth')
                            }}>Logout</button> 

<button className="logout" onClick={() => 
                          {
                            signOut(auth)
                            navigate('/auth')
                            }}>Login</button> 
                            </div> */}
        </div>
       
  )
}

export default Profile