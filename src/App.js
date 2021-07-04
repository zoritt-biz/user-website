import React from 'react';
import './assets/css/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import CategoriesPage from './pages/categoriespage/Categoriespage';
import PostPage from './pages/postPage/PostPage';
import EventsPage from './pages/events_page/events_page';
import SearchPage from './pages/searchpage/SearchPage';
import FavouritesPage from './pages/favouritespage/FavouritesPage';
import DetailPage from './pages/detailpage/DetailPage';
import SigninPage from './pages/authPage/SigninPage';
import SignupPage from './pages/authPage/SignupPage';
import SponsoredPage from './pages/sponsoredPage/SponsoredPage';
import AddCategory from './pages/admin/add_category';
import Event from './components/all_events/Event';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/posts" component={PostPage} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/event/:id" component={Event} />
        <Route exact path="/sponsored" component={SponsoredPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/favourites" component={FavouritesPage} />
        <Route exact path="/detail/:id" component={DetailPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/search/:name" component={SearchPage} />
        <Route exact path="/admin/add_category" component={AddCategory} />
      </Switch>
    </Router>
  );
};

export default App;
