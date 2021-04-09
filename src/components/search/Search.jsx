import React from 'react';
import AllSearchResults from './AllSearchResults';
import Filter from './Filter';
import SideFilter from './SideFilter';

const Search = () => {
  return (
    <>
      <Filter />
      <div className="container-md ">
        <p className="fs-3 fw-bold mb-5 search-all-result">All Results</p>
      </div>
      <div className="d-flex">
        <SideFilter />
        <AllSearchResults />
      </div>
    </>
  );
};

export default Search;
