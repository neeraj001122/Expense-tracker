import { useContext, useEffect} from "react";
import AuthContext from "../../Store/AuthContext";
import classes from './ExpenseList.module.css'

const ExpenseList = (props) => {
  const autctx = useContext(AuthContext);
  const effectFun = async() => {
     autctx.getItem();
  };
  
  useEffect(() => {
    effectFun();
  }, [])
  const deletExpenseHandler = (exp) => { 
    autctx.delete(exp.n)
    console.log(exp)
  }
 
  const editHandler = (exp) => {
    props.formfill(exp)
  }

  console.log(autctx.items);
  const list = autctx.items.map((item) => {
    return (
      <ul key={item.description}>
         <li>
        <span className={classes.span1}>{item.expense.expense.type}</span>
        <span className={classes.span3}>{item.expense.expense.description}</span>
        <span className={classes.span4}>{item.expense.expense.date}</span>
        <span className={classes.span2}>{item.expense.expense.amount}</span>
        <button className={classes.button1} onClick={editHandler.bind(this, item)}>Edit</button>
        <button className={classes.button2} onClick={deletExpenseHandler.bind(this, item)}>Delete</button>
        </li>
      </ul>
    );
  });
  return <div className={classes.box}>
   <h1>All Expenses</h1>
   <hr />
   {list}
   </div>;
};

export default ExpenseList;
