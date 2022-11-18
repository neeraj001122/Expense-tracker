import classes from "./SIgnUpPage.module.css";
import { useRef, useState,  } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import ForgotPassword from "../Pages/ForgotPassword";
const SignUpPage = () => {
    const history = useHistory();
  const [login, setLogin] = useState(false);
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const enteredConfirmPassword = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!login) {
      if (
        enteredPassword.current.value !== enteredConfirmPassword.current.value
      ) {
        alert("Password does not match, please enter again");
        return;
      }
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM",
          {
            email: enteredEmail.current.value,
            password: enteredPassword.current.value,
            returnSecureToken: true,
          }
        );
        console.log(res);
        localStorage.setItem('token',res.data.idToken)
        history.replace('/welcome')
      } catch (error) {
        alert(error.response.data.error.message);
      }
    } else {
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM",
          {
            email: enteredEmail.current.value,
            password: enteredPassword.current.value,
            returnSecureToken: true,
          }
        );
        console.log(res);
        localStorage.setItem('token',res.data.idToken)
        history.replace('/welcome')
      } catch (error) {
        alert(error.response.data.error.message);
      }
    }
  };

  const setSignHandler = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <div>
      <section className={classes.container}>
        <form onSubmit={submitHandler} className={classes.box}>
          <h1>{!login ? "Sign up" : "Login"}</h1>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Email"
            ref={enteredEmail}
          ></input>
          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Password"
            ref={enteredPassword}
          ></input>
          {!login && <label>Confirm Password</label>}
          {!login && (
            <input
              type="password"
              required
              placeholder="Confirm Password"
              ref={enteredConfirmPassword}
            ></input>
          )}
          <Link to='/forgotpassword'>Forgot Password</Link>
          <div className={classes.div}>
            <button>{!login ? "Sign up" : "Login"}</button>
          </div>
        </form>
        <div className={classes.button}>
          <button onClick={setSignHandler}>
            {!login
              ? "Already a member? Login"
              : "Do not have a Acount? Sign UP"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
