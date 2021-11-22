import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={navBar}>
      <div className={title}>
        <h2>Quick on the Draw!</h2>
      </div>
      <div className={links}>
        <Link to="/draw">Draw!</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

const navBar = `
flex
justify-between 
items-center 
h-24
bg-white 
text-black 
relative 
shadow-sm
bg-green-200
`;

const title = `
flex
justify-center items-center
`;

const links = `
flex
justify-end
space-x-5
px-2
`;

export default Nav;
