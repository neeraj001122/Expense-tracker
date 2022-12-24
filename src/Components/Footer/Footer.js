import { useHistory } from "react-router-dom";
import classes from './Footer.module.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "../../Store/AuthReducers";

const Footer = () =>  {
  const theme = useSelector(state => state.data.theme)
  const dispatch = useDispatch()
  const history = useHistory()
  const logoutHandler = () => {
     dispatch(auth.logout())
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('tokenn')
    localStorage.removeItem('premium')
    history.replace('/')
  }
  return <div className={theme ? classes.div3 : classes.box}>
    <button className={classes.button} onClick={logoutHandler}>Logout</button>
  </div>
};

export default Footer