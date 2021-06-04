import React from 'react';
import Navbar from '../../components/navbar/navbar';
// import Home from '../../components/homepage/Home';
import Search from '../../components/search/Search';
import SearchPaper from '../../components/homepage/Search';

const SearchPage = props => {
  return (
    <div className="search">
      <Navbar />
      <div className="container-md">
        <SearchPaper name={props.match.params.name} />
      </div>
      {/* <Home /> */}
      <Search />
      {/* <Footer /> */}
    </div>
  );
};

export default SearchPage;
