import React from 'react';
import './assets/css/main.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
import AboutUs from "./pages/privacy-policy/about-us";
import PrivacyPolicy from "./pages/privacy-policy/privacy_policy";
import TermsOfService from "./pages/privacy-policy/terms_of_service";
import PostsScroll from "./pages/posts-scroll/posts-scroll";
import EventDetail from "./pages/event-detail/event-detail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={CategoriesPage}/>
        <Route exact path="/posts" component={PostPage}/>
        <Route exact path="/posts-scroll" component={PostsScroll}/>
        <Route exact path="/events" component={EventsPage}/>
        <Route exact path="/event/:id" component={EventDetail}/>
        <Route exact path="/sponsored" component={SponsoredPage}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/favourites" component={FavouritesPage}/>
        <Route exact path="/detail/:id" component={DetailPage}/>
        <Route exact path="/signup" component={SignupPage}/>
        <Route exact path="/signin" component={SigninPage}/>
        <Route exact path="/search/:key/:name" component={SearchPage}/>
        <Route exact path="/admin/add_category" component={AddCategory}/>
        <Route exact path="/about-us" component={AboutUs}/>
        <Route exact path="/terms-of-service" component={TermsOfService}/>
        <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
      </Switch>
    </Router>
  );
};

export default App;
