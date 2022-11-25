import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/CartReducer';
import { useSelector } from 'react-redux';


const CartButton = (props) => {
  const items =  useSelector(state => state.items)
  let quantity = 0;
  items.forEach((item) => {
    quantity = quantity + item.quantity
  })
  const dispatch = useDispatch()
  const cartHandler = () => {
     dispatch(cartAction.cartHandle());
  };
  return (
    <button
    onClick={cartHandler}
     className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
