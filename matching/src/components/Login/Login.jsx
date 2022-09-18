import './Login.css';

const Login = (props) => {

  return (
    <>
    <h1>Login</h1>
    <div className="formContainer">
    <form>
      <label>Username:</label>
      <input type="text" placeholder='Username' />
      <label>Password:</label>
      <input type='password' placeholder='Password' />
      <input type='submit' className='button' value='Login' />
    </form>
    </div>
    </>
  )
}

export default Login