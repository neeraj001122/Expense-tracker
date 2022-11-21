import axios from "axios";
import React, { useState } from "react"

const AuthContext =  React.createContext({
       items:() => {},
       addItem: () => {},
       getItem: () => {}
})

export const AuthContextProvider = (props) => {
   const [item, setItem] = useState([])
 
   const addItemHandler =  async(expense) => {
     await axios.post('https://expense-tracker-3ed60-default-rtdb.firebaseio.com/expenses.json',{
        expense
    })
    getItemHandler();
};

const getItemHandler = async() => {
    const response = await axios.get('https://expense-tracker-3ed60-default-rtdb.firebaseio.com/expenses.json')
    console.log(response)
    const key = Object.keys(response.data)
    const newArray = [];
   for(let n of key)
   {
      newArray.push(response.data[n])
   }
   setItem(newArray)
};

   const AutchCtx = {
        items:item,
        addItem:addItemHandler,
        getItem:getItemHandler
    }

    return <AuthContext.Provider value={AutchCtx}>{props.children}</AuthContext.Provider>
};

export default AuthContext;