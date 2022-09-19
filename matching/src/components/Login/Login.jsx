import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    props.login(userId, password);

    setUserId('');
    setPassword('');
  }

  return (
    <>
    <h1>Login</h1>
    <div className="formContainer">
    <form>
      <label>Username</label>
      <input type="text" value={userId} placeholder='Username' onChange={updateUser} />
      <label>Password</label>
      <input type='password' value={password} placeholder='Password' onChange={updatePassword} />
      <button onClick={onSubmit}>Login</button>
    </form>
    <Link to='/registration'>Sign Up</Link>
    </div>
    </>
  )
}

export default Login