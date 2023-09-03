import LandingPage from './Pages/LandingPage';
import './App.css';
import {useState} from 'react';
function App() {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="App">
      <LandingPage signIn={setSignIn} signUp={setSignUp} login={signIn} account={signUp}/>
    </div>
  );
}

export default App;
