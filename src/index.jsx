import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { MantineProvider } from '@mantine/core';
import styled from 'styled-components';

import App from './App'

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  min-width: 60%;
  padding: 1em;
`;

const theme = {
  colorScheme: 'dark',
  breakpoints: {
      xs: 500,
      sm: 800,
      md: 1000,
      lg: 1200,
      xl: 1400,
    }
}

ReactDOM.render(
  <AppContainer>
    <Router>
      <MantineProvider
        theme={theme} withGlobalStyles>
        <App />
      </MantineProvider>
    </Router>
  </AppContainer>
  , document.querySelector('#app'));
