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
let appUserName;

function logOut() {
  isLoggedIn = false;
}

function displayLoginOrLogout() {
  return isLoggedIn;
}

const login = (userName, password) => {
  axios.post('/memorymatch/login', {
    login: userName,
    password: password
  })
  .then(() => {
    appUserName = userName;
    isLoggedIn = true;
    alert('Login Successful');
  })
  .catch((err) => {
    console.log(err);
    alert('Login Failed');
  });
}

function getUser() {
  // id should not be hardcoded
  // backend response from login() should
  // return the id and name
  return {
    id: 1,
    name: appUserName
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar displayHandler={displayLoginOrLogout} logout={logOut} />
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
