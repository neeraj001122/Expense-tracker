import classes from './SIgnUpPage.module.css'
import {  useRef } from 'react';
import axios from 'axios';
const SignUpPage = () => {
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const enteredConfirmPassword = useRef();
   

    const submitHandler = async(event) => {
    event.preventDefault();
    if(enteredPassword.current.value !== enteredConfirmPassword.current.value)
    {
        alert('Password does not match, please enter again')
        return
    }AZ
    try{
    const res = await  axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',{
        email:enteredEmail.current.value,
        password:enteredPassword.current.value,
        returnSecureToken:true
    })
    console.log(res)
}
catch(error)
{
    alert(error)    
}
}
  
    return (
        <section className={classes.container}>
        <form onSubmit={submitHandler} className={classes.box}>
            <h1>Sign Up</h1>
            <label>Email</label>
            <input type='email' required placeholder='Email' ref={enteredEmail}></input>
            <label>Password</label>
            <input type='password' required placeholder='Password' ref={enteredPassword}></input>
            <label>Confirm Password</label>
            <input type='password' required placeholder='Confirm Password' ref={enteredConfirmPassword}></input>
            <div className={classes.div}>
            <button>Sign Up</button>
            </div>
        </form>
        </section>
    )
}

export default SignUpPage;