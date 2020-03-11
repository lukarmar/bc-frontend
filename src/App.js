import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

import 'toasted-notes/src/styles.css';

import history from './services/history';

function App() {
  return (
    <>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
      </Router>
    </>
  );
}

export default App;
