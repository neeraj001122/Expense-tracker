import Cart from "./components/Cart/Cart";
import { Fragment, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { getDataFromCart } from "./store/CartReducer";
import Notification from "./components/UI/Notification";
import {sendDataToCart} from './store/CartReducer'

let isInitial = true

function App() {
  const show = useSelector((state) => state.cartShow);
  const cart = useSelector((state) => state.items);
  const notification = useSelector((state) => state.notify);
  const dispatch = useDispatch();

  useEffect(() => {
      if(isInitial)
      {
        isInitial=false;
        dispatch(getDataFromCart())
        return;
      }
    // const effectfun = async () => {
    //   dispatch(
    //     cartAction.statusHandler({
    //       status: "pending",
    //       title: "sending",
    //       message: "sending data to the cart",
    //     })
    //   );
    //   try {
    //     const res = await axios.put(
    //       "https://dummy-project-9e825-default-rtdb.firebaseio.com/cart.json",
    //       {
    //         cart,
    //       }
    //     );
    //     console.log(res);
    //     dispatch(
    //       cartAction.statusHandler({
    //         status: "success",
    //         title: "success",
    //         message: "data sent successfully to the cart",
    //       })
    //     );
    //   } catch (error) {
    //     console.log(error);
    //     dispatch(
    //       cartAction.statusHandler({
    //         status: "error",
    //         title: "error",
    //         message: "an error occured while sending data to the cart",
    //       })
    //     );
    //   }
    // };
    // effectfun();
    // console.log(cart)
    dispatch(sendDataToCart(cart))
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
