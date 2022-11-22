import React, { useContext } from 'react';
import classes from './ExpensesForm.module.css'
import { useState, useRef } from 'react';
import AuthContext from '../../Store/AuthContext';
import ExpenseList from './ExpensesList';
const ExpenseForm = () => {
  const AutchCtx = useContext(AuthContext)
  const [enteredAmount, setEnteredAmount] = useState(null);
  const [entereddescription, setEnteredDescription] = useState(null);
  const [enteredTime, setEnteredTime] = useState(null);
  const [entereredType, setEnteredType] = useState(null);
 const [showForm , setShowForm] = useState(false);
const submitFormHandler = (event) => {
  event.preventDefault();
  const obj = {
     amount:enteredAmount,
     description:entereddescription,
     date:enteredTime,
     type:entereredType,
  }
  console.log(enteredAmount)
  AutchCtx.addItem(obj)
};
 const showFormHandler = () => {
  setShowForm(true)
 };  
 const hideCartHandler = () => {
  setShowForm(false)
 };

 const editHandler = (exp) => {
    setEnteredAmount(exp.expense.expense.amount)
    setEnteredDescription(exp.expense.expense.description)
    setEnteredTime(exp.expense.expense.time)
    setEnteredType(exp.expense.expense.type)
    AutchCtx.edit(exp.n)
 }

  return (<React.Fragment>
   {!showForm ? <button className={classes.button} onClick={showFormHandler}>Add Expenses</button> :
    <div className={classes.main}>
      <div className={classes.div}>
      <div className={classes.wrapper}>
        <button onClick={hideCartHandler} className={classes.button2}>X</button>
      <form onSubmit={submitFormHandler}>
        <h2>Add Your Daily Expenses.</h2>
        <label>Amount</label>
        <input  required type="number" value={enteredAmount} onChange={(e) => setEnteredAmount(e.target.value)} />
        <label>description</label>  
        <input id='description' type="text" value={entereddescription} onChange={(e) => setEnteredDescription(e.target.value)}/>
        <label>Time</label>  
        <input type="date" value={enteredTime} onChange={(e) => setEnteredTime(e.target.value)}/>
        <label id='time' >Choose type</label>
        <select id='type' value={entereredType} required onChange={(e) => setEnteredType(e.target.value)}>
          <option>Food</option> 
          <option>Grocery</option>
          <option>Patrol</option>
          <option>Other Expenses</option>
        </select>   
        <button className={classes.button}>Submit</button>
      </form>
      </div>
      </div>
    </div>}
    <ExpenseList formfill = {editHandler} />
    </React.Fragment>
  );
};

export default ExpenseForm;
