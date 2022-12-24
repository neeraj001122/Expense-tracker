import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./AuthReducers";
import expenseSlice from "./ExpenseReducer";

const store = configureStore({
    reducer: {auth:AuthSlice.reducer, data:expenseSlice.reducer}
})

export default store;