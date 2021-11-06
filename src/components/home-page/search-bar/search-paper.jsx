import React, {useEffect, useRef, useState} from 'react';
import {Alert, Autocomplete, Box, Paper} from '@mui/material';
import {useLocation} from 'react-router';
import TextField from '@mui/material/TextField';
import {useLazyQuery} from '@apollo/client';
import {GET_BUSINESS_LIST_MANY} from '../../../apollo/queries/business-queries';
import searchBarStyles from './search-bar-styles';

const SearchPaper = ({name}) => {
  const classes = searchBarStyles();
  const location = useLocation();
  const focus = useRef(null);
  const [query, setQuery] = useState('');

  const [loadSuggestion, {data, error}] = useLazyQuery(GET_BUSINESS_LIST_MANY);

  useEffect(() => {
    (location.pathname === '/search' ||
      location.pathname === `/search/${name}`) &&
    focus.current &&
    focus.current.focus();
    loadSuggestion();
  }, []);

  return (
    <>
      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {
            }}
            severity="error"
            variant="filled"
            sx={{width: '300px', margin: 'auto'}}
          >
            {error.message}
          </Alert>
        </Box>
      )}
      <Box className={classes.searchWrapper}>
        <Paper className="mx-2" elevation={0}>
          {data && (
            <form
              onSubmit={e => {
                e.preventDefault();
                window.location.href = `/search/query/${query}`;
              }}
            >
              <Box
                display="flex"
                border="none"
                bgcolor="white"
                p={1}
                borderRadius={3}
              >
                <Autocomplete
                  id="query-autocomplete"
                  options={data.businessListMany}
                  ref={focus}
                  getOptionLabel={option => option.autocompleteTerm}
                  fullWidth
                  onSelect={e => setQuery(e.target.value)}
                  renderInput={params => (
                    <TextField
                      {...params}
                      onChange={e => setQuery(e.target.value)}
                      label="What are you looking for?"
                      variant="standard"
                      // InputProps={{ endAdornment: <Button>Send </Button> }}
                    />
                  )}
                />
                {/* <Button variant="contained">Send</Button> */}
              </Box>
            </form>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default SearchPaper;
