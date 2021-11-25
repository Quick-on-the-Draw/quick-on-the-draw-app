import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

const Nav = () => {
  return (
    <div className="navBar">
      <div className="title"></div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/draw">Draw!</Link>
        {/* <Link to='/gallery'>Gallery</Link> */}
      </div>
    </div>
  );
};

export default Nav;
