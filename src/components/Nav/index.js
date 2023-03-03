import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../contexts/app_context'
import { logOut } from '../../utilities/user-functions'
import './index.css'

const Nav = () => {

    let { setUser } = useContext(AppContext)
    const navigate = useNavigate()
 
    const handleClick = (url) => {
        navigate(`/${url}`)
      }
    
      const handleLogOut = () => {
        logOut()
        localStorage.removeItem('token-info')
        setUser(null)
        navigate(`/`)
    }
        

    return (
    <nav className='siteNav'>
        <div className='navButton' onClick={() => handleClick('')}>Search</div>
        <div className='navButton' onClick={() => handleClick('favorites')}>Favorites</div>
        <div className='navButton' onClick={() => handleLogOut()}>Log Out</div>
    </nav>
  )
}

export default Nav