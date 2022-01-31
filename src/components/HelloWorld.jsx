import React from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import './HelloWorld.css';
import Counter from './Counter.js';
import About from './About.jsx';

const Home = (props) => {
  return (
    <>
      HOME PAGE
    </>
  )
}

function HelloWorld() {
  return (
    <>
      <header>
        <Link to='/about'> ABOUT </Link>
        <Link to='/'> HOME </Link>
      </header>
      <div className="NumberInputHandlers">
        <Counter />
      </div>
    </>

  );
}

export default HelloWorld;
