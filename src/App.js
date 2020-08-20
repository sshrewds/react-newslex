import React from 'react';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Poland from './pages/Poland'
import GreatBritain from './pages/GreatBritain';
import UnitedStates from './pages/UnitedStates';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Poland} />
        <Route path="/uk" component={GreatBritain} />
        <Route path="/us" component={UnitedStates} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
