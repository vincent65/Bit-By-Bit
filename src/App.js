import './App.css';
import {Login} from './Login'
import {Register} from './Register'
import React, {useState} from "react";

function App() {

  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  
  const [user, setUser] = useState({email: ""});
  const [err, setError] = useState("");

  const Log = (email, pass) => {
    console.log(email)
    console.log(pass)
    if (email == adminUser.email && pass == adminUser.password){
      console.log("Logged in");
      setUser(
        {
          email: email
        }
      );
    }
    else{
      console.log("Details do not match");
      setError("Details do not match");
    }
  }
  const Logout = () => {
    console.log("Logout");
    setUser({email: ""});
  }

  return (
    <div className="App">
      
      {(user.email != "") ? (
        <div className = "welcome">
          <h2>Welcome, <span> {user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ):
        (currentForm == 'login' ? <Login Log = {Log} error = {err} onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>)
      }

    </div>
  );
}

export default App;
