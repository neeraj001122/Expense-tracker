import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartReducer";
const store = configureStore({reducer:cartSlice.reducer})

export default store;