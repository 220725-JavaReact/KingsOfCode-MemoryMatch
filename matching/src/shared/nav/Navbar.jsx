import './Navbar.css';
import { Link, } from "react-router-dom"
import { useState } from 'react';

const Navbar = (props) => {

  const [displayText, setDisplayText] = useState('Login');
  const [url, setUrl] = useState('/login');

  function handleDisplay(e) {
    if (props.displayHandler()) {
      setUrl('/');
      setDisplayText('Log Out')
    } else {
      setUrl('/login');
      setDisplayText('Log In');
      props.logout();
    }
  }

  return (
    <>
    <nav className='nav'>
      <Link to='/' className='site-title'>Memory Match</Link>
      <ul>
        <li>
          <Link to='/game'>Game</Link>
        </li>
        <li>
        <Link to='/leader'>Leader Board</Link>
        </li>
        <li>
        <Link to={url} onClick={handleDisplay}>{displayText}</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar