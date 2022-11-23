import classes from './Counter.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { counterAction } from '../Store/Store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  const increment = () => {
    dispatch(counterAction.increment())
  }

  const decrement = () => {
    dispatch(counterAction.decrement())
  }

  const incrementByFive = () => {
    dispatch(counterAction.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>  
      {!show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementByFive} >Increment By Five</button>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
