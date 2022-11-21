import React, { useContext } from 'react';
import classes from './ExpensesForm.module.css'
import { useState, useRef } from 'react';
import AuthContext from '../../Store/AuthContext';
const ExpenseForm = () => {
  const AutchCtx = useContext(AuthContext)
  const enteredAmount = useRef();
  const entereddescription = useRef();
  const enteredTime = useRef();
  const entereredType = useRef();
 const [showForm , setShowForm] = useState(false);
const submitFormHandler = (event) => {
  event.preventDefault();
  const obj = {
     amount:enteredAmount.current.value,
     description:entereddescription.current.value,
     date:enteredTime.current.value,
     type:entereredType.current.value,
  }
  AutchCtx.addItem(obj)
};
 const showFormHandler = () => {
  setShowForm(true)
 };  
 const hideCartHandler = () => {
  setShowForm(false)
 };

  return (<React.Fragment>
   {!showForm ? <button className={classes.button} onClick={showFormHandler}>Add Expenses</button> :
    <div className={classes.main}>
      <div className={classes.div}>
      <div className={classes.wrapper}>
        <button onClick={hideCartHandler} className={classes.button2}>X</button>
      <form onSubmit={submitFormHandler}>
        <h2>Add Your Daily Expenses.</h2>
        <label>Amount</label>
        <input required type="number" ref={enteredAmount} />
        <label>description</label>  
        <input type="text" ref={entereddescription}/>
        <label>Time</label>  
        <input type="date" ref={enteredTime}/>
        <label >Choose type</label>
        <select required ref={entereredType}>
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
    </React.Fragment>
  );
};

export default ExpenseForm;
