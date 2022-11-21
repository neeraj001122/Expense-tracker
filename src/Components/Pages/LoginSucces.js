import React from "react";
import classes from "./LoginSucces.module.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import EmailVarify from "./EmailVarify";
import { useHistory } from "react-router-dom";
import Modal from "../UI/Modal";
const LoginSucces = () => {
  const history = useHistory()
  const [completeProfile, SetCompleteProfile] = useState(false);
  const [propfileCompleted, setProfileCompleted] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [URLValue, setURLValue] = useState('')
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

  const logoutHandler = () => {
    history.replace('/')
    localStorage.removeItem('token')
    localStorage.removeItem('tokenn')
  }

  return (
    <div>
      <div className={classes.div2}>
      <button onClick={profileFormHandler} className={classes.login}>
        {!propfileCompleted ? 'Your profile is incomplete. Complete now' : 'Your Profile is completed, enjoy new features'}
      </button>
       <h1>Welcome to expense Tracker</h1>
       </div>
      <div className={classes.div}>
      {completeProfile && (
        <Modal>
        <form onSubmit={submitHandler} className={classes.form}>
          <button className={classes.button}  onClick={cutFormHandler}>X</button>
          <h2>Contact Details</h2>
          <label>Full Name :-</label>
          <input ref={enteredName} defaultValue={nameValue}/>
          <label>Profile Photo URL :-</label>
          <input ref={enteredProfileUrl} defaultValue={URLValue} /> 
          <button className={classes.button1}>Update</button>
          <br />
          <h3>Please varify Email for full access</h3>
          <div>
        <EmailVarify />
      </div>
        </form>
        </Modal>
      )}
      </div>
      <div className={classes.buttondiv}>
      <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default LoginSucces;
