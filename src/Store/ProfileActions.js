import axios from "axios";

export const postDataProfile = (obj,setProfileCompleted) => {
  return async() => {
    try{
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',
          obj
        )
        localStorage.setItem('tokenn',res.data.kind)
        setProfileCompleted(true);
    }
    catch(error){
       alert(error.response.data.error.message)
    }
  };
};


export const getDataProfile = (setURLValue,setNameValue,setProfileCompleted) => {
 return async () => {
        if(localStorage.getItem('tokenn') !== null)
        {
            setProfileCompleted(true)
                const rss = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB0rMolOd8wAWaFhPKzeVwKt8CTdmtWjcM',{
                idToken:localStorage.getItem('token')
            })
            setURLValue(rss.data.users[0].photoUrl)
            setNameValue(rss.data.users[0].displayName)
        }
 }
};