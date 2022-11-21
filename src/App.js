import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './Components/AuthenticationPage/SignUpPage';
import LoginSucces from './Components/Pages/LoginSucces';
import React from 'react';
import ForgotPassword from './Components/Pages/ForgotPassword';
import ExpenseForm from './Components/Expenses/ExpensesForm';
import ExpenseList from './Components/Expenses/ExpensesList';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/welcome' exact>
        <LoginSucces />
        <ExpenseForm />
        <ExpenseList />
      </Route>
      <Route path='/forgotpassword' exact>
      <ForgotPassword />
      </Route>
      <Route path = '/' exact>
      <SignUpPage /> 
      </Route>
      </Switch> 
    </div>
  );
}

export default App;
