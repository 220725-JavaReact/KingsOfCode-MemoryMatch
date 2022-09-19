import React, { useState } from 'react'

const Registration = (props) => {

  const[realName, setRealName] = useState('');
  const[email, setEmail] = useState('');
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[passwordConfirmation, setPasswordConfirmation] = useState('');

  function updateRealName(e) {
    setRealName(e.target.value);
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function updateUserName(e) {
    setUsername(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function updatePasswordConfirmation(e) {
    setPasswordConfirmation(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (password === passwordConfirmation) {
      
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Basic UDIwMDA5NjE0Mjk6bnNjYzEzMDA=");
      
      var raw = JSON.stringify({
        "name": realName,
        "email": email,
        "login": username,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      console.log(raw);
      fetch("/memorymatch/users")
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error: ' + error));

      clearForm();
    } else {
      alert('Passords do not match.');
      setPassword('');
      setPasswordConfirmation('');
    }
  }

  function clearForm() {
    setRealName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setPasswordConfirmation('');
  }

  return (
    <>
    <h1>Registration</h1>
    <div className="formContainer">
    <form>
      <label>Name</label>
      <input type="text" value={realName} onChange={updateRealName} placeholder='Your real name' />
      <label>Email</label>
      <input type='email' value={email} onChange={updateEmail} placeholder='you@email.com' />
      <label>Username</label>
      <input type='text' value={username} onChange={updateUserName} placeholder='What you will use to log in' />
      <label>Password</label>
      <input type='password' value={password} onChange={updatePassword} />
      <label>Confirm Password</label>
      <input type='password' value={passwordConfirmation} onChange={updatePasswordConfirmation} />
      <button onClick={onSubmit}>Sign Up</button>
      <button onClick={clearForm}>Clear</button>
    </form>
    </div>
    </>
  )
}

export default Registration