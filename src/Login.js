import React from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth, provider } from './firebase';
import bitcoin_prime_logo_white from './bitcoin_prime_logo_white.png'

function Login() {
  const history = useHistory();

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to ='/'>
        <img 
          src={bitcoin_prime_logo_white}
          alt="bitcoin amazon logo"
          className='login__logo'
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">          
          <button 
            className='login__signInButton'
            onClick={signIn}
            type='submit'
          >
            Sign In
          </button>
        </form>

        <p>By continuing, you agree to the Conditions of Use and Privacy Notice.</p>

      </div>
    </div>
  )
}

export default Login
