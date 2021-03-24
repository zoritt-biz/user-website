import React from 'react';
import './assets/css/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/example" render={() => <div>Example route</div>} />
      </Switch>
    </Router>
  );
}

export default App;
