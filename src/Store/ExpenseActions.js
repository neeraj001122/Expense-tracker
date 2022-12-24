import axios from "axios";
import { ExpensesAction } from "./ExpenseReducer";

 const email = localStorage.getItem('email')




 export const dataFromBeck = () => {
     return async(dispatch) => {
     const response = await axios.get(`https://expense-tracker-3ed60-default-rtdb.firebaseio.com/expenses${email}.json`)
     console.log(response)   
     if(response.data === null)
     {
         return
     }           
     const key = Object.keys(response.data)
     const newArray = [];
    for(let n of key)
    {
       const expense = response.data[n]
       newArray.push({expense, n})   
    }
     dispatch(ExpensesAction.getData(newArray))
     }
 };
 
 export const addItem = (expense) => {
     return async(dispatch) => {
     await axios.post(`https://expense-tracker-3ed60-default-rtdb.firebaseio.com/expenses${email}.json`,{
         expense
     })
     dispatch(dataFromBeck());   
 }
 };
 
 export const deleteExpense = (id) => {
     return async(dispatch) => {
     await axios.delete(`https://expense-tracker-3ed60-default-rtdb.firebaseio.com/expenses${email}/${id}.json`)
     dispatch(dataFromBeck());   
     }
 }