import React, {useEffect, useRef} from 'react';
import {Search} from '@material-ui/icons';
import {Paper} from '@material-ui/core';
import {useLocation} from 'react-router';

const SearchPaper = ({name}) => {
  const location = useLocation();
  const focus = useRef(null);

  useEffect(() => {
    (location.pathname === '/search' ||
      location.pathname === `/search/${name}`) &&
    focus.current.focus();
  });

  return (
    <Paper className="w-100 text-field-paper" elevation={0}>
      <div className="input-group rounded bg-white">
        <Search className="my-auto search-icon"/>
        <input
          ref={focus}
          type="text"
          aria-label="form search"
          className="form-control form-search"
          placeholder="What are you looking for?"
        />
        <span className="input-group-text ">Near</span>
        <input
          type="text"
          aria-label="form location"
          className="form-control form-location"
          placeholder="Addis Ababa, Ethiopia"
        />
      </div>
    </Paper>
  );
};

export default SearchPaper;
