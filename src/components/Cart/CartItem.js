import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/CartReducer';


const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, total, price, quantity,id } = props.item;
  const xio = total*quantity

  const cartAdd = () => {
      dispatch(cartAction.addItem({
        id,
        title,
        price,
      }))
  };


  const cartMinus = () => {
    dispatch(cartAction.removeItem(id))
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${xio.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartMinus}>-</button>
          <button onClick={cartAdd} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
