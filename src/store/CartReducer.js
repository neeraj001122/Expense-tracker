import { createSlice } from "@reduxjs/toolkit";

const initialValue = { cartShow: false, quantity: 0, items: [] };

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialValue,
  reducers: {
    cartHandle(state) {
      state.cartShow = !state.cartShow;
    },
    quantityAdder(state) {
      state.quantity++;
    },
    quantityLessar(state) {
      state.quantity--;
      console.log(state.quantity);
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
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
