import React from 'react';
import './assets/css/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';
import CategoriesPage from './pages/categoriespage/Categoriespage';
import EventPage from './pages/eventPage/EventPage';
import EventsPage from './pages/eventspage/EventsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/events" component={EventsPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
