import { createSlice } from "@reduxjs/toolkit";


const initialStateExpense = {expenses:[], theme:false , premiume: false}
const expenseSlice =  createSlice({
    name:'dataHandler',
    initialState:initialStateExpense,
    reducers:{
       getData(state,action) {
          state.expenses = action.payload
       },
       themeChange(state){
          state.theme = !state.theme
       },
       Premiume(state){
         state.premiume=true;
       }
    }
})






export default expenseSlice;
export const ExpensesAction = expenseSlice.actions;
