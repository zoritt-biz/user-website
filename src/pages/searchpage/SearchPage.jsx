import React from 'react';
import Navbar from '../../components/navbar/navbar';
// import Home from '../../components/homepage/Home';
import Footer from '../../components/footer/Footer';
import Search from '../../components/search/Search';
import SearchPaper from '../../components/homepage/Search';

const SearchPage = () => {
  return (
    <div className="search">
      <Navbar />
      <div className="container-md">
        <SearchPaper />
      </div>
      {/* <Home /> */}
      <Search />
      {/* <Footer /> */}
    </div>
  );
};

export default SearchPage;
