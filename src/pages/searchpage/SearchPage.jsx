import React, {useEffect, useState} from 'react';
import Navbar from '../../components/navbar/navbar';
import SearchPaper from '../../components/homepage/Search';
import {useLazyQuery} from "@apollo/client";
import {BUSINESS_BY_SUB_CAT, GET_BUSINESS_MANY} from "../../apollo/queries/search_queries";
import Filter from "../../components/search/Filter";
import SideFilter from "../../components/search/SideFilter";
import SearchResult from "../../components/search/SearchResult";

const SearchPage = props => {
  const [key, setKey] = useState("subcat")

  const [searchByCat, {loading: searchLoading, data: searchData, error: searchError}] = useLazyQuery(
    key === "subcat" ? BUSINESS_BY_SUB_CAT : GET_BUSINESS_MANY, {
      fetchPolicy: "network-only"
    });

  useEffect(() => {
    if (props.match.params.key === "subcat") {
      setKey("subcat")
      searchByCat({
        variables: {
          categoryIndex: [props.match.params.name],
          limit: 50
        }
      })
    } else if (props.match.params.key === "query") {
      setKey("query")
      let businessName = [
        ...props.match.params.name
          .replace(/[^a-zA-Z ]/g, "")
          .replaceAll('&', ' ')
          .replaceAll('.', ' ')
          .split(" ")
          .map((e) => e.toLowerCase())
      ]
      businessName.filter((element) => element === "")
      searchByCat({
        variables: {
          searchArray: businessName,
          limit: 50
        }
      })
    }
  }, []);

  return (
    <div className="search">
      <Navbar/>
      <div className="container-md">
        <SearchPaper name={props.match.params.name}/>
      </div>

      {/*<Filter/>*/}
      <div className="container-md ">
        <p className="fs-3 fw-bold my-5 search-all-result">All Results</p>
      </div>
      {searchLoading && (
        <div>
          loading...
        </div>
      )}
      <div className="container-md">
        {/*<SideFilter/>*/}
        <div className="row search-all-result pb-5">
          {searchData && searchData.businessMany.map(res => (
            <SearchResult
              key={res._id}
              id={res._id}
              image={res.pictures[0]}
              title={res.businessName}
              place={res.location}
              phoneNumber={res.phoneNumber[0]}
              menu={res.description && res.description}
            />
          ))}
        </div>
      </div>
      {searchError && (
        <div className="container-md">
          {searchError.message}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
