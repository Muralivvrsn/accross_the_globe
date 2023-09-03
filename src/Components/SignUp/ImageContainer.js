import React from 'react'
import signUp from '../../assests/signup.svg'
const ImageContainer = () => {
  return (
    <div className='image'>
      <img src={signUp} alt="" />
      <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
    </div>
  )
}

export default ImageContainer
