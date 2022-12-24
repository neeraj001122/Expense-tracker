import React from "react";
import classes from "./LoginSucces.module.css";
import { useState, useRef, useEffect } from "react";
import EmailVarify from "./EmailVarify";
import Modal from "../UI/Modal";
import ThemeButton from "./ThemeButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postDataProfile } from "../../Store/ProfileActions";
import { getDataProfile } from "../../Store/ProfileActions";
const LoginSucces = () => {
  const theme = useSelector(state => state.data.theme)
  const [completeProfile, SetCompleteProfile] = useState(false);
  const [propfileCompleted, setProfileCompleted] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [URLValue, setURLValue] = useState('')
  const enteredName = useRef();
  const enteredProfileUrl=useRef();
  const premiumSeter = useSelector(state => state.data.premiume)
  const dispatch = useDispatch()


  const profileFormHandler = () => {
    SetCompleteProfile(true);
  };
  const cutFormHandler = (event) => {
    event.preventDefault();
    SetCompleteProfile(false);
  };


  useEffect(() => {
    dispatch(getDataProfile(setURLValue, setNameValue,setNameValue))
  }, [dispatch])


  const submitHandler = (event) => {
    event.preventDefault();
     const obj = {
      idToken:localStorage.getItem('token'),
      displayName:enteredName.current.value,
      photoUrl:enteredProfileUrl.current.value,
      returnSecureToken:true	
     }
     dispatch(postDataProfile(obj,setProfileCompleted))
  };


  return (
    <div>
      <div className={theme ? classes.div3 : classes.div2}>
      <button onClick={profileFormHandler} className={classes.login}>
        {!propfileCompleted ? 'Your profile is incomplete. Complete now' : 'Your Profile is completed, enjoy new features'}
      </button>
       <h1 className={theme ? classes.h31:classes.h1}>Welcome to expense Tracker</h1>
       </div>
      <div className={classes.div}>
      {premiumSeter && <ThemeButton />}
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
   
      </div>
    </div>
  );
};

export default LoginSucces;
