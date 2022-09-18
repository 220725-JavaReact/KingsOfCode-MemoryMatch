import './Login.css';
import { useState } from 'react';

const Login = (props) => {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  function updateUser(e) {
    setUserId(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log('User: ' + userId + '\nPass: ' + password);
  }

  return (
    <>
    <h1>Login</h1>
    <div className="formContainer">
    <form>
      <label>Username:</label>
      <input type="text" placeholder='Username' onChange={updateUser} />
      <label>Password:</label>
      <input type='password' placeholder='Password' onChange={updatePassword} />
      {/* <input type='submit' className='button' value='Login' onSubmit={onSubmit} /> */}
      <button value='Login' className='button' onClick={onSubmit}>Login</button>
    </form>
    </div>
    </>
  )
}

export default Login