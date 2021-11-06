import React from 'react';
import {
  EventNoteOutlined,
  FlightOutlined,
  GavelOutlined,
  HomeWorkOutlined,
  HotelOutlined,
  ImportExportOutlined,
  LocalBarOutlined,
  LocalDiningOutlined,
  LocalGasStationOutlined,
  LocalHospitalOutlined,
  LocalLaundryServiceOutlined,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
  SpaOutlined,
  SportsSoccerOutlined,
  VideoCallOutlined,
} from '@mui/icons-material';
import {Box, Container, Typography} from '@mui/material';

import Cards from './cards';
import categoriesStyle from './categories-styles';

const Categories = () => {
  const classes = categoriesStyle();
  return (
    <Container maxWidth="lg" mt={5}>
      <Typography variant="h5" mb={3}>
        Categories
      </Typography>

      <Box display="flex">
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Art, media & Entertainment"
            cardIcon={<VideoCallOutlined className={classes.cardIcon}/>}
          />
        </Box>

        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Food and Category"
            cardIcon={<LocalDiningOutlined className={classes.cardIcon}/>}
          />
        </Box>

        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Hotel & Hospitality"
            cardIcon={<HotelOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Shopping"
            cardIcon={<ShoppingCartOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Financial Services"
            cardIcon={<MonetizationOnOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Tour, Travle and Transport"
            cardIcon={<FlightOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Health"
            cardIcon={<LocalHospitalOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Sports & Leisure"
            cardIcon={<SportsSoccerOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Beauty & Spa"
            cardIcon={<SpaOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Event Organizers"
            cardIcon={<EventNoteOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Education & Training"
            icon={
              <i className={`fas fa-user-graduate fa-4x ${classes.icon}`}/>
            }
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Automotive & Gas stations"
            cardIcon={<LocalGasStationOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Night Life"
            cardIcon={<LocalBarOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Import/Export"
            cardIcon={<ImportExportOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Construction & Engineering"
            cardIcon={<GavelOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Local Services"
            cardIcon={
              <LocalLaundryServiceOutlined className={classes.cardIcon}/>
            }
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Religious Organizations"
            icon={<i className={`fas fa-cross fa-4x ${classes.icon}`}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="Governmental Institutions"
            cardIcon={<HomeWorkOutlined className={classes.cardIcon}/>}
          />
        </Box>
        <Box mb={3} className="col-6 col-md-4 col-xl-3">
          <Cards
            typography="NGOs & Humanitarian"
            icon={
              <i className={`fas fa-hands-helping fa-4x ${classes.icon}`}/>
            }
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Categories;
