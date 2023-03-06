import React, { useState } from 'react'
import './index.css'
import SignUpForm from '../../components/signup_form'
import Login from '../../components/login_form'
const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)

  const changeForm = () => {
  setIsSignup( isSignup ? false : true)
  }

  return (
    <div className='authPage authSpace'>
      {isSignup ?
      <SignUpForm setIsSignup={setIsSignup}/>
      :
      <Login/>
      }
      <h6 className='formChange' onClick={changeForm}>
      {isSignup ?
      'LOG IN'
      :
      'SIGN UP'
      }
      </h6>
    </div>
  )
}

export default Auth