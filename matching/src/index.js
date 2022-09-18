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
import Logout from './components/Logout/Logout'

const axios = require('axios');

let isLoggedIn = false;
let userId;

function displayLoginOrLogout() {
  return isLoggedIn;
}

// update isLoggedIn and userId
const login = (userId, password) => {
  axios.get('url')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar displayHandler={displayLoginOrLogout} />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<App userId={userId}/>} />
        <Route path='/leader' element={<LeaderBoard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
