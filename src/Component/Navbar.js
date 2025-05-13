import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src='pokemon.png' alt=''></img>
      <ul className="navbar-list">
        <li className="l1">
          <Link to="/">Pokedex</Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/details">CardDetails</Link>
        </li> */}
        <li className="navbar-item">
          <Link to='/addCards'>Cards</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
