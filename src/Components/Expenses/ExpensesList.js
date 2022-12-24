import classes from './ExpenseList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../../Store/ExpenseActions";
import { CSVLink } from 'react-csv';
import Footer from '../Footer/Footer';

const ExpenseList = (props) => {
  
  const exp = useSelector((state) => state.data.expenses)   

  const dispatch = useDispatch();
  let arr = [];
  exp.forEach(element => {
    arr.push(element.expense)
  });

  
  const Headers = [
    {lable:'Amount', key:'expense.amount'},
    {lable:'Date', key:'expense.date'},
    {lable:'Description', key:'expense.description'},
    {lable:'Type', key:'expense.type'},
  ];                

  const deletExpenseHandler = (exp) => { 
      dispatch(deleteExpense(exp.n))
  }
 
  const editHandler = (exp) => {
    props.formfill(exp)
  }

 const premiume = localStorage.getItem('premium')

  const list = exp.map((item) => {
    return (
      <div key={Math.random()} className={classes.modal}>
      <ul>
         <li className={classes.font}>
        <span className={classes.span1}>{item.expense.expense.type}</span>
        <span className={classes.span3}>{item.expense.expense.description}</span>
        <span className={classes.span4}>{item.expense.expense.date}</span>
        <span className={classes.span2}>{item.expense.expense.amount}</span>
        <button className={classes.button1} onClick={editHandler.bind(this, item)}>Edit</button>
        <button className={classes.button2} onClick={deletExpenseHandler.bind(this, item)}>Delete</button>
        </li>
      </ul>
      </div>
    );
  });
  return <div className={classes.box}>
   <h1>All Expenses</h1>
   <hr />
   {list}
   {premiume && <CSVLink headers={Headers}  filename='Expenses.csv' data={arr}>Download your expenses</CSVLink>}
   <Footer />
   </div>;
};

export default ExpenseList;
