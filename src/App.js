import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './Components/AuthenticationPage/SignUpPage';
import LoginSucces from './Components/Pages/LoginSucces';
import React from 'react';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/welcome'>
        <LoginSucces />
      </Route>
      <Route path = '/' exact>
      <SignUpPage /> 
      </Route>
      </Switch> 
    </div>
  );
}

export default App;
