import React from "react";
import google from "../../assests/google.svg";
import facebook from "../../assests/facebook.svg";
import "./SignUp.css";
const FormContainer = ({ signUp, signIn }) => {
  return (
    <div className="form">
      <form action="">
        <div className="name">
          <div className="firstName">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="lastName">
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="email">
          <input type="email" placeholder="Email" />
        </div>
        <div className="password">
          <input type="text" placeholder="Password" />
        </div>
        <div className="cpassword">
          <input type="text" placeholder="Confirm Password" />
        </div>
        <div className="btn">
          <button type="submit">Create Account</button>
          <p
            onClick={() => {
              signUp(false);
              signIn(true);
            }}
          >
            or, Sign in
          </p>
        </div>
        <div className="facebook">
          <img src={facebook} alt="" />
          <p>Sign up with Facebook</p>
        </div>
        <div className="google">
          <img src={google} alt="" />
          <p>Sign up with Google</p>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
