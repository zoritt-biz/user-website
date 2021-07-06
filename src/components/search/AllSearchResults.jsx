import React from 'react';
import SearchResult from './SearchResult';

const AllSearchResults = () => {
  return (
    <div className="d-block container-md search-all-result pb-5">
      <SearchResult
        image="../images/wow.jpg"
        title="Wow Burger"
        place="Arat kilo, Addis Ababa"
        phoneNumber="+251 91 163 4938"
        menu="$$ Burger, Shawarma"
      />
      <SearchResult
        image="../images/angla1.jpg"
        title="Angla Burger"
        place="Zimbabwe St, Addis Ababa"
        phoneNumber="+251 91 206 0505"
        menu="$$$$ Burger, Shawarma, Salad, Appetizers"
      />

      <SearchResult
        image="../images/angla2.jpg"
        title="In-Joy Burger"
        place="Ednamall, Bole, Addis Ababa"
        phoneNumber="+251 93 987 8787"
        menu="$$$ Burger, Shawarma, Salad, Appetizers"
      />
    </div>
  );
};

export default AllSearchResults;
