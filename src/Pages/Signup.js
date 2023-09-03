import React from "react";
import "./Pages.css";
import ImageContainer from "../Components/SignUp/ImageContainer";
import FormContainer from "../Components/SignUp/FormContainer";
import cancle from '../assests/cancle.svg';
const Signup = ({signUp, signIn}) => {
  return (
    <div className="signUp">
      <div className="cross" onClick={()=>signUp(false)}><img src={cancle} alt="" /></div>
      <div className="card">
        <div className="header">
          <div className="top">
            <p>
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </p>
          </div>
          <div className="mid"></div>
        </div>
        <div className="switch">
          <p>Create Account</p>
          <p><span>Already have an account?</span><span className="link" onClick={()=>{signUp(false);signIn(true)}}>Sign In</span> </p>
        </div>
        <FormContainer signUp={Signup} signIn={signIn}/>
        <ImageContainer />
      </div>
    </div>
  );
};

export default Signup;
