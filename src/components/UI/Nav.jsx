import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

const Nav = () => {
    return (
        <div className='navBar'>
            <div className='title'>
                <h2>Quick on the Draw!</h2>
            </div>
            <div className='links'>
                <Link to='/draw'>Draw!</Link>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
};

export default Nav;
