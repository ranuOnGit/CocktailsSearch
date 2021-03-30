import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-div'>
        <h1>the bartender</h1>
        <Link to='/' className='nav-link'>home</Link>
      </div>
    </nav>
  );
}

export default Navbar
