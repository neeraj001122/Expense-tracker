import axios from "axios";
import React, { useState } from "react"

const AuthContext =  React.createContext({
       items:() => {},
       addItem: () => {},
       getItem: () => {},
       delete: () => {}
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
      const expense = response.data[n]
      newArray.push({expense, n})   
   }
   setItem(newArray)
};

const deletItemHandler = async(id) => {
  const res = await axios.delete(`https://expense-tracker-3ed60-default-rtdb.firebaseio.com/expenses/${id}.json`)
  getItemHandler();
}

const editHandler = async(id) => {
     deletItemHandler(id)
}

   const AutchCtx = {
        items:item,
        addItem:addItemHandler,
        getItem:getItemHandler,
        delete:deletItemHandler,
        edit:editHandler
    }

    return <AuthContext.Provider value={AutchCtx}>{props.children}</AuthContext.Provider>
};

export default AuthContext;