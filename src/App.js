import React from 'react';
import './assets/css/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import CategoriesPage from './pages/categoriespage/Categoriespage';
import EventPage from './pages/eventPage/EventPage';
import EventsPage from './pages/eventspage/EventsPage';
import SearchPage from './pages/searchpage/SearchPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
