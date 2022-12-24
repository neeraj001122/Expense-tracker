import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ExpensesAction } from "../../Store/ExpenseReducer";
import classes from './Theme.module.css'
const ThemeButton = () => {
  const dispatch = useDispatch();
  const themeHandler = () => {
    dispatch(ExpensesAction.themeChange());
  };
  const theme = useSelector((state) => state.data.theme);
  return (
    <div className={classes.position}>
      {" "}
      <button className={theme ? classes.button : classes.button1} onClick={themeHandler}>Change Theme</button>
    </div>
  );
};

export default ThemeButton;
