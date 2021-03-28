import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Home from '../../components/homepage/Home';
import Footer from '../../components/footer/Footer';
import Search from '../../components/search/Search';

const SearchPage = () => {
  return (
    <div className="search">
      <Navbar />
      <Home />
      <div>
        <Search />
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
