import React from "react";
import classes from "./LoginSucces.module.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import EmailVarify from "./EmailVarify";

const LoginSucces = () => {
  const [completeProfile, SetCompleteProfile] = useState(false);
  const [propfileCompleted, setProfileCompleted] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [URLValue, setURLValue] = useState('')
  let data = null;
  const enteredName = useRef();
  const enteredProfileUrl=useRef();
  const profileFormHandler = () => {
    SetCompleteProfile(true);
  };
  const cutFormHandler = (event) => {
    event.preventDefault();
    SetCompleteProfile(false);
  };

  const effectfunction = async() => {
    if(localStorage.getItem('tokenn') !== null)
    {
        setProfileCompleted(true)
            const rss = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',{
            idToken:localStorage.getItem('token')
        })
        setURLValue(rss.data.users[0].photoUrl)
        setNameValue(rss.data.users[0].displayName)
    }
  };

  useEffect(() => {
    effectfunction();
  }, [])


  const submitHandler = async(event) => {
    event.preventDefault();
    try{
    const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',{
     idToken:localStorage.getItem('token'),
     displayName:enteredName.current.value,
     photoUrl:enteredProfileUrl.current.value,
     returnSecureToken:true	
    })
    localStorage.setItem('tokenn',res.data.kind)
    setProfileCompleted(true);
}
catch(error){
   alert(error.response.data.error.message)
}
  };

  return (
    <div>
      <button onClick={profileFormHandler} className={classes.login}>
        {!propfileCompleted ? 'Your profile incomplete. Complete now' : 'Your Profile is completed, enjoy new features'}
      </button>
      <h1>Welcome to expense Tracker</h1>
      <div className={classes.div}>
      {completeProfile && (
        <form onSubmit={submitHandler} className={classes.form}>
          <button className={classes.button}  onClick={cutFormHandler}>X</button>
          <h2>Contact Details</h2>
          <label>Full Name :-</label>
          <input ref={enteredName} defaultValue={nameValue}/>
          <label>Profile Photo URL :-</label>
          <input ref={enteredProfileUrl} defaultValue={URLValue} />
          <button className={classes.button1}>Update</button>
        </form>
      )}
      </div>
      <div>
        <EmailVarify />
      </div>
    </div>
  );
};

export default LoginSucces;
