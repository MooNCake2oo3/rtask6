// Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to my portfolio!</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Home;

