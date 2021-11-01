import React, {useEffect, useRef, useState} from 'react';
import {Search} from '@mui/icons-material';
import {Autocomplete, Button, Paper} from '@mui/material';
import {useLocation} from 'react-router';
import TextField from '@mui/material/TextField';
import {useLazyQuery} from '@apollo/client';
import {GET_BUSINESS_LIST_MANY} from '../../apollo/queries/business-queries';

const SearchPaper = ({name}) => {
  const location = useLocation();
  const focus = useRef(null);
  const [query, setQuery] = useState('');

  const [loadSuggestion, {data, error}] = useLazyQuery(
    GET_BUSINESS_LIST_MANY,
    {
      fetchPolicy: 'cache-first',
    }
  );

  useEffect(() => {
    (location.pathname === '/search' ||
      location.pathname === `/search/${name}`) &&
    focus.current &&
    focus.current.focus();
    loadSuggestion();
  }, []);

  return (
    <Paper className="w-100 text-field-paper pl-2" elevation={0}>
      {data && (
        <form
          onSubmit={e => {
            e.preventDefault();
            window.location.href = `/search/query/${query}`;
          }}
        >
          <div className="d-flex border-0 rounded bg-white">
            <Autocomplete
              id="query-autocomplete"
              options={data.businessListMany}
              ref={focus}
              getOptionLabel={option => option.autocompleteTerm}
              fullWidth
              onSelect={e => setQuery(e.target.value)}
              className="flex-fill"
              renderInput={params => (
                <TextField
                  {...params}
                  onChange={e => setQuery(e.target.value)}
                  label="What are you looking for?"
                  variant="standard"
                />
              )}
            />
            {/*<Autocomplete*/}
            {/*  id="place-autocomplete"*/}
            {/*  options={data.businessListMany}*/}
            {/*  ref={focus}*/}
            {/*  getOptionLabel={(option) => option.autocompleteTerm}*/}
            {/*  fullWidth*/}
            {/*  className="d-none d-md-block flex-fill"*/}
            {/*  renderInput={(params) => <TextField {...params} label="Near" variant="standard" />}*/}
            {/*/>*/}
            <Button type="submit">
              <Search className="my-auto search-icon mt-2 mr-2"/>
            </Button>
          </div>
        </form>
      )}
    </Paper>
  );
};

export default SearchPaper;
