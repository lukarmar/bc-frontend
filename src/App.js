import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

import 'toasted-notes/src/styles.css';

import history from './services/history';

function App() {
  return (
    <>
      <GlobalStyles>
        <Router history={history}>
          <Routes />
        </Router>
      </GlobalStyles>
    </>
  );
}

export default App;
