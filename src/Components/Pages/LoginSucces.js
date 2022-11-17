import React from "react";
import classes from "./LoginSucces.module.css";
import { useState, useRef } from "react";
import axios from "axios";

const LoginSucces = () => {
  const [completeProfile, SetCompleteProfile] = useState(false);
  const enteredName = useRef();
  const enteredProfileUrl=useRef();
  const profileFormHandler = () => {
    SetCompleteProfile(true);
  };
  const cutFormHandler = (event) => {
    event.preventDefault();
    SetCompleteProfile(false);
  };

  const submitHandler = async(event) => {
    event.preventDefault();
    try{
    const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',{
     idToken:localStorage.getItem('token'),
     displayName:enteredName.current.value,
     photoUrl:enteredProfileUrl.current.value,
     returnSecureToken:true	
    })
    console.log(res)
}
catch(error){
   alert(error.response.data.error.message)
}
  };

  return (
    <div>
      <button onClick={profileFormHandler} className={classes.login}>
        Your profile incomplete. Complete now
      </button>
      <h1>Welcome to expense Tracker</h1>
      <div className={classes.div}>
      {completeProfile && (
        <form onSubmit={submitHandler} className={classes.form}>
          <button className={classes.button}  onClick={cutFormHandler}>X</button>
          <h2>Contact Details</h2>
          <label>Full Name :-</label>
          <input ref={enteredName}/>
          <label>Profile Photo URL :-</label>
          <input ref={enteredProfileUrl} />
          <button className={classes.button1}>Update</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default LoginSucces;
