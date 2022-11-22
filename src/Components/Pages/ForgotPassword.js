import axios from 'axios';
import classes from './ForgotPassword.module.css'
import { useRef } from 'react';
const ForgotPassword = () => {
    const enteredEmail = useRef();
    const forgotPasswordHandler = async(event) => {
        event.preventDefault();
        let email = enteredEmail.current.value
       try{
       const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',{
        requestType: "PASSWORD_RESET",
        email: email
       })
       console.log(res)
       enteredEmail.current.value = '';
    }
    catch(error)
    {
        alert(error.response.data.error.errors[0].message)
    }
    };

    return (
        <div className={classes.box}>
            <div className={classes.modal}>
                <div className={classes.wrapper}>
                <h3 className={classes.h1}>Enter email with you have registered.</h3>
               <form onSubmit={forgotPasswordHandler} className={classes.form}>
                <label className={classes.input}>Email</label>
                <input  className={classes.input2} ref={enteredEmail}  />
                <button className={classes.button}>Submit</button>
               </form>
               </div>
            </div>
        </div>
    )
};

export default ForgotPassword;