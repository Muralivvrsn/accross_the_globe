import React from "react";
import Post from "../Components/Posts/Post";
import Navbar from "../Components/Navbar/Navbar";
import GroupTitle from "../Components/GroupTitle";
import SignUp from "../Pages/Signup";
import SignIn from "./SignIn";
const LandingPage = ({signIn, signUp, login, account}) => {
  return (
    <>
      <Navbar login={signIn} signUp={signUp} />
      <GroupTitle />
      <Post/>
      {account && <SignUp signUp={signUp} signIn={signIn}/>}
      {login && <SignIn signUp={signUp} signIn={signIn}/>}
    </>
  );
};

export default LandingPage;
