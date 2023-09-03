import React from 'react'
import google from '../../assests/google.svg';
import facebook from '../../assests/facebook.svg';
import "./Login.css"
const FormContainer = ({signIn, signUp}) => {
  return (
    <div className='form'>
      <form action="">
        <div className="email">
            <input type="email" placeholder='Email' />
        </div>
        <div className="password">
            <input type="text" placeholder='Password' />
        </div>
        <div className="btn">
            <button type='submit'>Sign In</button>
            <p onClick={()=>{signIn(false);signUp(true);}}>or, Sign up </p>
        </div>
        <div className="facebook">
            <img src={facebook} alt="" />
            <p>Sign in with Facebook</p>
        </div>
        <div className="google">
            <img src={google} alt="" />
            <p>Sign in with Google</p>
        </div>
        <div className="forget">
            forget password ?
        </div>
      </form>
    </div>
  )
}

export default FormContainer
