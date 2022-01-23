import React from 'react';
import { MantineProvider } from '@mantine/core';
import './HelloWorld.css'
import Counter from './Counter.js'

function HelloWorld() {
  return (
    <div className="NumberInputHandlers">
        <Counter />
    </div>
  );
}

export default HelloWorld;
