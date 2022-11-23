import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { auth } from '../Store/Store';
const Auth = () => {
  const dispatch = useDispatch()
  const formHandler = (event) => {
    event.preventDefault();
    dispatch(auth.login())
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
