import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(props) {
  return (
    <div className="nav">
      <ul className="list">
        <li><Link to ='/'>Home</Link></li>
        <li><Link to='/work'>Work</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to ='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Nav;