import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector(state => state.items)
  console.log(cartItems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
            <CartItem
            key = {Math.random()}
            console = {console.log(item)}
            item={
              { title: item.name, total: item.totalPrice, price: item.price, quantity: item.quantity, id:item.id }
            }
          />
          
        ))}
        
      </ul>
    </Card>
  );
};

export default Cart;
