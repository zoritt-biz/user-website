import React, { useEffect, useRef, useState } from 'react';
import { Autocomplete, Paper, Alert, Box } from '@mui/material';
import { useLocation } from 'react-router';
import TextField from '@mui/material/TextField';
import { useLazyQuery } from '@apollo/client';
import { GET_BUSINESS_LIST_MANY } from '../../../apollo/queries/business-queries';
import searchBarStyles from './search-bar-styles';

const SearchPaper = ({ name }) => {
  const classes = searchBarStyles();
  const location = useLocation();
  const focus = useRef(null);
  const [query, setQuery] = useState('');

  const [loadSuggestion, { data, error }] = useLazyQuery(
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
    <Box className={classes.searchWrapper}>
      <Paper className="mx-2" elevation={0}>
        {data && (
          <form
            onSubmit={e => {
              e.preventDefault();
              window.location.href = `/search/query/${query}`;
            }}
          >
            <div className="d-flex border-0 rounded bg-white p-1">
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
            </div>
          </form>
        )}
        {error && (
          <Alert severity="error" variant="filled">
            {error.message}
          </Alert>
        )}
      </Paper>
    </Box>
  );
};

export default SearchPaper;
