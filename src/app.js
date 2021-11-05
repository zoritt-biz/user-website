import React from 'react';
import './assets/css/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page';
import CategoriesPage from './pages/categories-page/categories-page';
import PostPage from './pages/post-page/post-page';
import EventsPage from './pages/events-page/events-page';
import SearchPage from './pages/search-page/search-page';
import FavouritesPage from './pages/favourites-page/favourites-page';
import DetailPage from './pages/detail-page/detail-page';
import SignInPage from './pages/auth/sign-in-page';
import SignUpPage from './pages/auth/sign-up-page';
import SponsoredPage from './pages/sponsored-page/sponsored-page';
import AboutUs from './pages/privacy-policy/about-us';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy';
import TermsOfService from './pages/privacy-policy/terms-of-service';
import PostsScroll from './pages/posts-scroll/posts-scroll';
import EventDetail from './pages/event-detail/event-detail';
import ErrorPage from './pages/404-error/404-error';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/posts" component={PostPage} />
        <Route exact path="/posts-scroll" component={PostsScroll} />
        <Route exact path="/events" component={EventsPage} />
        <Route exact path="/event/:id" component={EventDetail} />
        <Route exact path="/sponsored" component={SponsoredPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/favourites" component={FavouritesPage} />
        <Route exact path="/detail/:id" component={DetailPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/search/:key/:name" component={SearchPage} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/terms-of-service" component={TermsOfService} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
