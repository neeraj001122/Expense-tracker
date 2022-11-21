import { useContext, useEffect} from "react";
import AuthContext from "../../Store/AuthContext";
import classes from './ExpenseList.module.css'

const ExpenseList = () => {
  const autctx = useContext(AuthContext);
  const effectFun = async() => {
     autctx.getItem();
  };
  
  useEffect(() => {
    effectFun();
  }, [])
  console.log(autctx.items);
  const list = autctx.items.map((item) => {
    return (
      <ul key={item.description}>
         <li>
        <span className={classes.span1}>{item.expense.type}</span>
        <span className={classes.span3}>{item.expense.description}</span>
        <span className={classes.span4}>{item.expense.date}</span>
        <span className={classes.span2}>{item.expense.amount}</span>
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
