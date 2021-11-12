import React, { useEffect, useRef, useState } from 'react';
import { Alert, Autocomplete, Box, Paper } from '@mui/material';
import {useHistory, useLocation} from 'react-router';
import TextField from '@mui/material/TextField';
import { useLazyQuery } from '@apollo/client';
import { GET_BUSINESS_LIST_MANY } from '../../../apollo/queries/business-queries';
import searchBarStyles from './search-bar-styles';
import SearchIcon from '@mui/icons-material/Search';

const SearchPaper = ({ name }) => {
  const classes = searchBarStyles();
  const location = useLocation();
  const history = useHistory();
  const focus = useRef(null);
  const [query, setQuery] = useState(name !== undefined && name !== null ? name : "");

  const [loadSuggestion, { data, error }] = useLazyQuery(
    GET_BUSINESS_LIST_MANY
  );

  useEffect(() => {
    (location.pathname === '/search' ||
      location.pathname === `/search/${name}`) &&
      focus.current &&
      focus.current.focus();
    loadSuggestion();
  }, []);

  return (
    <>
      <Box className={classes.searchWrapper}>
        <Paper className="mx-2" elevation={0}>
          {data && (
            <form
              onSubmit={e => {
                e.preventDefault();
                history.push(`/search/query/${query}`);
              }}
            >
              <Box
                display="flex"
                border="none"
                bgcolor="white"
                alignItems="flex-end"
                p={1}
                borderRadius={3}
              >
                <Autocomplete
                  id="query-autocomplete"
                  sx={{ display: 'flex' }}
                  options={data.businessListMany}
                  ref={focus}
                  getOptionLabel={option => option.autocompleteTerm}
                  fullWidth
                  autoFocus={true}
                  onSelect={e => setQuery(e.target.value)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      onChange={e => setQuery(e.target.value)}
                      label="What are you looking for?"
                      variant="standard"
                      autoFocus={true}
                    />
                  )}
                />
                <SearchIcon
                  onClick={() => {
                    history.push(`/search/query/${query}`)
                  }}
                  sx={{ fontSize: '35px', opacity: '0.7', cursor: 'pointer' }}
                />
              </Box>
            </form>
          )}
        </Paper>
      </Box>
      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {}}
            severity="error"
            variant="filled"
            sx={{ width: '300px', margin: 'auto' }}
          >
            {error.message}
          </Alert>
        </Box>
      )}
    </>
  );
};

export default SearchPaper;
