import React from 'react';
import classes from './ExpensesForm.module.css'
import { useState } from 'react';
import ExpenseList from './ExpensesList';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Store/ExpenseActions';
import { deleteExpense } from '../../Store/ExpenseActions';
import { useSelector } from 'react-redux';
import PremiumButton from '../Pages/PremiumButton';
const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [enteredAmount, setEnteredAmount] = useState('');
  const [entereddescription, setEnteredDescription] = useState('');
  const [enteredTime, setEnteredTime] = useState('');
  const [entereredType, setEnteredType] = useState('');
 const [showForm , setShowForm] = useState(true);
 const [showPremium , setShowPremium] = useState(false)
 const premiumCheck = useSelector(state => state.data.premiume)
 const expenses = useSelector(state => state.data.expenses)

const submitFormHandler = (event) => {
  event.preventDefault();
  const obj = {
     amount:enteredAmount,
     description:entereddescription,
     date:enteredTime,
     type:entereredType,
  }
   let expAmount = 0;
   expenses.forEach((item) => {
      expAmount = expAmount + Number(item.expense.expense.amount);
   });
   expAmount = expAmount + Number(enteredAmount);
  
   
   if(premiumCheck === false && expAmount > 10000)
   {
      setShowPremium(true)
      return 
   }
   
   dispatch(addItem(obj))
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
    dispatch(deleteExpense(exp.n));
 }

  return (<React.Fragment>
    <div className={classes.center}>
    {showPremium && <PremiumButton onclose = {setShowPremium} />}
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
          <option>Select Catogery</option>
          <option>Food</option> 
          <option>Grocery</option>
          <option>Patrol</option>
          <option>Other Expenses</option>
        </select>   
        <button className={classes.button10}>Submit</button>
      </form>
      </div>
      </div>
    </div>}
    <ExpenseList formfill = {editHandler} />
    </div>
    </React.Fragment>
  );
};

export default ExpenseForm;
