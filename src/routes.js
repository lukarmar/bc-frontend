import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandinPage from './pages/LandingPage';
// import ThankyouPage from './pages/ThankyouPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandinPage} />
    </Switch>
  );
}
