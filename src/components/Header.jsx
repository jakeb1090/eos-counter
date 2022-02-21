import React from 'react';
import { MantineProvider } from '@mantine/core';
import './HelloWorld.css'
import styled from 'styled-components';


const Stizz = styled.div`
  font-family: 'Mr Dafoe';
  margin: 0;
  margin-top: -0.6em;
  color: blue;
  text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em white;
  transform: rotate(-7deg);
`;


function Header() {
  return (
    <div className="header">
      <Stizz>
        jenna-counts
      </Stizz>
    </div>
  );
}

export default Header;
