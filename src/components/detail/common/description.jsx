import React from 'react';

import {Box, Grid, Typography} from '@mui/material';
import {CallOutlined, LanguageOutlined, LocationOnOutlined,} from '@mui/icons-material';
import appStyles from '../../../app-styles';

let now = new Date();
var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let day = days[now.getDay()];

const Description = ({business, openLocation}) => {
  const classes = appStyles();
  return (
    <>
      <Box
        bgcolor="white"
        mb={2}
        px={4}
        py={5}
        display={{xs: 'none', md: 'flex'}}
        borderBottom="1px solid"
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={3}
            className="d-flex justify-content-center description-grid-respo"
            onClick={openLocation}
          >
            <LocationOnOutlined sx={{mr: 1}}/>
            <Typography component="p" variant="h6" mb={0}>
              {' '}
              Location{' '}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* description  not mobile only*/}
      <Box p={4} mb={2} bgcolor="white" display={{xs: 'none', md: 'block'}}>
        {business.openHours.length > 0 &&
        business.openHours.map(
          open =>
            open.day === day &&
            (open.isOpen ? (
              <Box key={open.day} display="flex" mb={3}>
                <Typography
                  component="span"
                  variant="caption"
                  mr={0}
                  sx={{color: 'rgba(5, 168, 130, 1)'}}
                >
                  Open
                </Typography>
                <Typography component="span" variant="caption" mr={1}>
                  {open.opens}
                </Typography>
                <Typography component="span" variant="caption" mr={1}>
                  -{' '}
                </Typography>
                <Typography component="span" variant="caption">
                  {open.closes}
                </Typography>
              </Box>
            ) : (
              <Box key={open.day} display="flex" mb={3}>
                <Typography
                  component="span"
                  variant="caption"
                  mr={2}
                  color="red"
                >
                  Closed
                </Typography>
                <Typography component="span" variant="caption" mr={1}>
                  {open.opens}
                </Typography>
                <Typography component="span" variant="caption" mr={1}>
                  -{' '}
                </Typography>
                <Typography component="span" variant="caption">
                  {open.closes}
                </Typography>
              </Box>
            ))
        )}

        <Box className="d-flex mx-2 justify-content-between">
          {business.phoneNumbers.length > 0 && (
            <Box display="flex" flexDirection="column" alignItems="center">
              <a
                href={`tel:${business.phoneNumbers[0]}`}
                className={classes.link}
                style={{display: 'flex'}}
              >
                <CallOutlined
                  sx={{
                    mb: 1,
                    border: '1px solid #e3e3e3',
                    padding: '6px',
                    borderRadius: '16px',
                    background: '#e3e3e3',
                    cursor: 'pointer',
                  }}
                  fontSize="large"
                />
              </a>
              <Typography
                component="p"
                variant="caption"
                mb={0}
                textAlign="center"
              >
                Call
              </Typography>
            </Box>
          )}

          {business.website === '' ? null : (
            <Box display="flex" flexDirection="column" alignItems="center">
              {business.website && (
                <a
                  href={`${business.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.link}`}
                  style={{display: 'flex', justifyContent: 'space-between'}}
                >
                  <LanguageOutlined
                    sx={{
                      mb: 1,
                      border: '1px solid #e3e3e3',
                      padding: '6px',
                      borderRadius: '16px',
                      background: '#e3e3e3',
                      cursor: 'pointer',
                    }}
                    fontSize="large"
                  />
                </a>
              )}
              <Typography
                component="p"
                variant="caption"
                mb={0}
                textAlign="center"
              >
                Website
              </Typography>
            </Box>
          )}

          <Box display="flex" flexDirection="column" alignItems="center">
            <LocationOnOutlined
              sx={{
                mb: 1,
                border: '1px solid #e3e3e3',
                padding: '6px',
                borderRadius: '16px',
                background: '#e3e3e3',
                cursor: 'pointer',
              }}
              fontSize="large"
              onClick={openLocation}
            />
            <Typography
              component="p"
              variant="caption"
              mb={0}
              textAlign="center"
            >
              Location
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Description;
