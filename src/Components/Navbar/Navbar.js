import React from 'react';
import logo from '../../assests/logo.svg';
import arrow from '../../assests/arrow.svg';
import search from '../../assests/search.svg'
import back from '../../assests/back.svg'
import "./Navbar.css";
const Navbar = ({login, signUp}) => {
  return (
    <nav id='navbar'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='search-box'>
        <img src={search} alt="" />
        <input type="search" className='input' placeholder='Search for your favorite groups in ATG'/>
      </div>
      <div className="createAccount">
        <p >Create account.</p> <p onClick={()=>signUp(true)}>It's free!</p> <img src={arrow} alt="" />
      </div>
      <div className='back'>
        <img src={back} alt="" />
      </div>
      <div className='group1' onClick={()=>signUp(true)}>
        Join Group
      </div>
    </nav>
  )
}

export default Navbar
