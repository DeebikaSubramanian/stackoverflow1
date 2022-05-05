import React, {useState} from 'react'
import './header.css'
import {Search,Inbox} from "@material-ui/icons"
import {Avatar} from "@material-ui/core"
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/UserSlice'
import {auth} from '../../firebase'
import {useNavigate} from 'react-router-dom'
import { signOut } from 'firebase/auth';

function Header() 
{

  const user=useSelector(selectUser);
  const navigate=useNavigate();

  function AvatarClick()
  {
    navigate('/Profile')
  }


  return (
    <div>
        <header>
            <div className="container">
                <div className="header_left">
                  <Link to='/'>
<img className="logo"
src="https://wizardsourcer.com/wp-content/uploads/2019/03/Stackoverflow.png"
 alt="logo"/></Link>
 <h3>
     Products
 </h3></div>

                <div className="header_center">
                    <div className="search_container">
                        <Search/>
                        <input type="text" placeholder='Search...'/>
                    </div>
                    </div>

                    <div className="header_right">
                    <div className="right_container">
                   
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
                           <span >                 
                      
                                                    
                            <Avatar  style={{marginLeft:"10px"}} src={user?.photo} onClick={AvatarClick} />
                 
                            </span>
                       <Inbox/>
                        <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
                        
                    </div>
                    </div>
            </div>
      </header> 
      </div>
  )
}

export default Header