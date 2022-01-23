import React from 'react'
import ReactDOM from 'react-dom'
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

ReactDOM.render(
  <AppContainer>
      <MantineProvider
        theme={{
          colorScheme: 'dark',
          breakpoints: {
              xs: 500,
              sm: 800,
              md: 1000,
              lg: 1200,
              xl: 1400,
            },
          }} withGlobalStyles>
        <App />
      </MantineProvider>
  </AppContainer>
  , document.querySelector('#app'));
