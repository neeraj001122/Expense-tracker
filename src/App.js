import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignUpPage from './Components/AuthenticationPage/SignUpLoginPage';
import LoginSucces from './Components/Pages/LoginSucces';
import React from 'react';
import ForgotPassword from './Components/Pages/ForgotPassword';
import ExpenseForm from './Components/Expenses/ExpensesForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dataFromBeck } from './Store/ExpenseActions';
import { useSelector } from 'react-redux';
import { ExpensesAction } from './Store/ExpenseReducer';
import { auth } from './Store/AuthReducers';


function App() {
  const theme = useSelector(state => state.data.theme)
  const loggedIn = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(dataFromBeck())
  },[dispatch])


  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token !== null)
    {
      dispatch(auth.login())
    }
  }, [token, dispatch])
 
  
  useEffect(() => {
    if(localStorage.getItem('premium') === 'turu')
    {
        dispatch(ExpensesAction.Premiume())
    }
  },[dispatch])
  

  
  return (
    <div className={theme ?'black':''}> 
      <Switch>
      <Route path='/welcome' exact>
        {!loggedIn && <Redirect to='' />}
        <LoginSucces  />
        <ExpenseForm  />
      </Route>
      <Route path='/forgotpassword' exact>
      <ForgotPassword />  
      </Route>
      <Route path = '/' exact>
        {loggedIn && <Redirect to='/welcome' />}
      <SignUpPage /> 
      </Route>
      </Switch> 
    </div>
  );
}

export default App;
