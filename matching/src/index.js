import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './shared/nav/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

const axios = require('axios');

let isLoggedIn = false;
let userId;
let appUserName;

function displayLoginOrLogout() {
  return isLoggedIn;
}

// update isLoggedIn and userId
const login = (userName, password) => {
  // replace line below with
  // axios.get('/memorymatch/users/' + userName)
  axios.get('/memorymatch/users/1')
  .then((res) => {
    console.log(res);
    if(res.data.password == password) {
      userId = res.data.id;
      appUserName = res.data.name;
      isLoggedIn = true;
      alert('Log in successful');
    }
    else {
      alert('Incorrect Username or Password');
    }
  })
  .catch((err) => console.log(err));
}

function getUser() {
  return {
    id: userId,
    name: appUserName
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar displayHandler={displayLoginOrLogout} />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<App getUser={getUser}/>} />
        <Route path='/leader' element={<LeaderBoard />} />
        <Route path='/login' element={<Login login={login} />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
