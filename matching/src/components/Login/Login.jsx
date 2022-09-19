import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function updateUser(e) {
    setUserName(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.login(userName, password);
	setUserName('');
	setPassword('');
  }

  return (
    <>
    <h1>Login</h1>
    <div className="formContainer">
    <form>
      <label>Username</label>
      <input type="text" value={userName} placeholder='Username' onChange={updateUser} />
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