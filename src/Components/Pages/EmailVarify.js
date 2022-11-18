import axios from "axios";

const EmailVarify = () => {
    const emailVarifyHandler = async() => {
      try{
      const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',{
        requestType: "VERIFY_EMAIL",
        idToken:localStorage.getItem('token')
      })
      console.log(res)
    }
    catch(error){
    alert(error.response.error.message)
    }
    };
   return <button onClick={emailVarifyHandler}>Varify Email</button>
};

export default EmailVarify;