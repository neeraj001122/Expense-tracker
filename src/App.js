import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './Components/AuthenticationPage/SignUpPage';
import LoginSucces from './Components/Pages/LoginSucces';
import React from 'react';
import ForgotPassword from './Components/Pages/ForgotPassword';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/welcome' exact>
        <LoginSucces />
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
