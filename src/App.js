import React from 'react';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Poland from './pages/Poland'
import GreatBritain from './pages/GreatBritain';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Poland} />
        <Route path="/uk" component={GreatBritain} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
