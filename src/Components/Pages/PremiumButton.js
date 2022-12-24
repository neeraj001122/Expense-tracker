import Modal from '../UI/Modal'
import classes from './PremiumButton.module.css'
import { useDispatch } from 'react-redux'
import { ExpensesAction } from '../../Store/ExpenseReducer'
const PremiumButton = (props) => {
    const dispatch = useDispatch()
    const closeHnadler = () => {
        props.onclose(false)
    }

   

    const setUserToPremium = () => {
       dispatch(ExpensesAction.Premiume())
       props.onclose(false)
       localStorage.setItem('premium','turu');
    };

    return <Modal>
        <div className={classes.box}>
            <button className={classes.button1} onClick={closeHnadler}>X</button>
        <h3>Oops, looks like you Exceeded the limit 🙁. Please upgrade to premium.</h3>
    <button onClick={setUserToPremium} className={classes.button} >Upgrade to add more</button>
    </div>
    </Modal>
}

export default PremiumButton;