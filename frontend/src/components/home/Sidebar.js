import React from 'react'
import {Public,Stars,Work} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import './sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_container'>
            <div className='sidebar_option_container'>
                <div className="sidebar_option">
                <Link to='/'>Home</Link>
                </div>

                <div className="sidebar_option">
                <p>PUBLIC</p>
                <div className="link">
                    <div className="link_tag">
                        <Public/>
                    <Link to='/'>Question</Link>
                    </div>
                <div className="tags">
                    <p>Tags</p>
                    <p>Users</p>
                </div>
                </div>
                </div>

                <div className='sidebar_option'>
                    <p>COLLECTIVES</p>
                    <div className="link">
                    <div className="link_tag">
                        <Stars/>
                    <Link to='/'>Explore Collectives</Link>
                                    
                </div>
                </div>
            </div>

            <div className="sidebar_option">
                <p>FIND A JOB</p>
                <div className='tags'>
                  <p> <Link to='/'>Jobs</Link> </p>
                  <p> <Link to='/'>Companies</Link>  </p>                  
                   </div>
                </div>
                <div className="sidebar_option">
                    <p>TEAMS</p>
                    <div className='link_tag'>
                        <Work/>
                        <Link to='/'> Companies</Link>
                        </div>                </div>
                </div>
        </div>
    </div>
  )
}

export default Sidebar