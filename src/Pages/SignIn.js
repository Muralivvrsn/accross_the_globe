import React from "react";
import "./Pages.css";
import ImageContainer from "../Components/Login/ImageContainer";
import FormContainer from "../Components/Login/FormContainer";
import cancle from "../assests/cancle.svg";
const SignIn = ({ signIn, signUp }) => {
  return (
    <div className="signUp">
      <div className="cross" onClick={() => signIn(false)}>
        <img src={cancle} alt="" />
      </div>
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
          <p>Sign In</p>
          <p>
            <span>Don’t have an account yet?</span>
            <span className="link"
              onClick={() => {
                signIn(false);
                signUp(true);
              }}
            >
              Create new for free!
            </span>
          </p>
        </div>
        <FormContainer signIn={signIn} signUp={signUp} />
        <ImageContainer />
      </div>
    </div>
  );
};

export default SignIn;
