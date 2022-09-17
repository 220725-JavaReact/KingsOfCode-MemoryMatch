import './Navbar.css';
import { Link, } from "react-router-dom"

const Navbar = (props) => {
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
          <Link to='/logout'>Log Out</Link>
        </li>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar