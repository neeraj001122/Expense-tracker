import axios from "axios";
import classes from './EmailVarify.module.css'

const EmailVarify = () => {
    const emailVarifyHandler = async() => {
      try{
      await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',{
        requestType: "VERIFY_EMAIL",
        idToken:localStorage.getItem('token')
      })
      alert('Check you email, message sent succesfully')
    }
    catch(error){
    alert(error.response.error.message)
    }
    };
   return <button className={classes.email} onClick={emailVarifyHandler}>Varify Email</button>
};

export default EmailVarify;