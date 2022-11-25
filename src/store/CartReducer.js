import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialValue = { cartShow: false, items: [], notify:null };

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialValue,
  reducers: {
    cartHandle(state) {
      state.cartShow = !state.cartShow;
    },
    cartReplace(state,action){
      console.log(action.payload.data.cart)
      state.items = action.payload.data.cart
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.quantity++;
      if (!existingItem) {
        state.items.push({    
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    statusHandler(state, action){
        state.notify = {
          status:action.payload.status,
          title:action.payload.title,
          message:action.payload.message
        }
    }
  },
});

export const sendDataToCart = (cart) => {
  return async(dispatch) => {
    dispatch(
      cartAction.statusHandler({
        status: "pending",
        title: "sending",
        message: "sending data to the cart",
      })
    );
    try {
      const res = await axios.put(
        "https://dummy-project-9e825-default-rtdb.firebaseio.com/cart.json",
        {
          cart,
        }
      );
      dispatch(
        cartAction.statusHandler({
          status: "success",
          title: "success",
          message: "data sent successfully to the cart",
        })  
      );
    } catch (error) {
      console.log(error);
      dispatch(
        cartAction.statusHandler({
          status: "error",
          title: "error",
          message: "an error occured while sending data to the cart",
        })
      );
    }
  };
};

export const getDataFromCart = () => {
  return async(dispatch) => {
    try{
  const res = await axios.get("https://dummy-project-9e825-default-rtdb.firebaseio.com/cart.json")
  dispatch(cartAction.cartReplace(res))
  console.log(res.data.cart)
    }
    catch(error){
      console.log(error)
      dispatch(
        cartAction.statusHandler({
          status: "error",
          title: "error",
          message: "an error occured while sending data to the cart",
        })
      );
    }
  }
}

export const cartAction = cartSlice.actions;

export default cartSlice;
