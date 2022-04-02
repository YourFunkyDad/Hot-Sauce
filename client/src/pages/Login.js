import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await Login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='container'>
      <Link to='/signup'>Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            placeholder='youremail@test.com'
            name='email'
            type='email'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='pwd'>Password:</label>
          <input
            placeholder='******'
            name='password'
            type='password'
            id='pwd'
            onChange={handleChange}
          />
        </div>
        <div>
          <p className='error-text'>The provided credentials are incorrect</p>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
