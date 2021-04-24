import React from 'react';

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';

import {
  VideoCallOutlined,
  LocalDiningOutlined,
  HotelOutlined,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
  FlightOutlined,
  LocalHospitalOutlined,
  SportsSoccerOutlined,
  SpaOutlined,
  EventNoteOutlined,
  LocalGasStationOutlined,
  LocalBarOutlined,
  ImportExportOutlined,
  GavelOutlined,
  LocalLaundryServiceOutlined,
  HomeWorkOutlined,
} from '@material-ui/icons';

const CategoryName = {
  ARTS: 'Arts, Media & Entertainment ',
  FOOD: 'Food & Catering',
  HOTEL: 'Hotel & Hospitality',
  SHOPPING: 'Shopping',
  FINANCIAL: 'Financial Services',
  TOUR: 'Tour, Travle and Transport',
  HEALTH: 'Health',
  SPORTS: 'Sports & Leisure',
  BEAUTY: 'Beauty & Spa',
  EVENT: 'Event Organizers',
  EDUCATION: 'Education & Training',
  AUTOMOTIVE: 'Automotive & Gas stations',
  NIGHT: 'Night Life',
  IMPORT: 'Import/Export',
  CONSTRUCTION: 'Construction & Engineering',
  LOCALSERVICE: 'Local Services',
  RELIGIOUS: 'Religious Organizations',
  GOVERNMENT: 'Governmental Institutions',
  NGO: 'NGOs & Humanitarian',
};

const categoryController = category => {
  return category.parent === CategoryName.ARTS ? (
    <VideoCallOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.FOOD ? (
    <LocalDiningOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.HOTEL ? (
    <HotelOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.SHOPPING ? (
    <ShoppingCartOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.FINANCIAL ? (
    <MonetizationOnOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.TOUR ? (
    <FlightOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.HEALTH ? (
    <LocalHospitalOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.SPORTS ? (
    <SportsSoccerOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.BEAUTY ? (
    <SpaOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.EVENT ? (
    <EventNoteOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.EDUCATION ? (
    <i className="fas fa-user-graduate fa-4x d-flex justify-content-center mb-2"></i>
  ) : category.parent === CategoryName.AUTOMOTIVE ? (
    <LocalGasStationOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.NIGHT ? (
    <LocalBarOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.IMPORT ? (
    <ImportExportOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.CONSTRUCTION ? (
    <GavelOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.LOCALSERVICE ? (
    <LocalLaundryServiceOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : category.parent === CategoryName.RELIGIOUS ? (
    <i className="fas fa-cross fa-4x d-flex justify-content-center mb-2"></i>
  ) : category.parent === CategoryName.GOVERNMENT ? (
    <HomeWorkOutlined className="d-block mx-auto categories-card-icon mb-2" />
  ) : (
    category.parent === CategoryName.NGO && (
      <i className="fas fa-hands-helping fa-4x d-flex justify-content-center mb-2"></i>
    )
  );
};

const Cards = ({ category }) => {
  return (
    <Grid item spacing={3}>
      <Card className="categories-card" variant="outlined" raised={true}>
        <CardActionArea className="categories-card-area">
          <CardContent>
            {categoryController(category)}
            <Typography
              gutterBottom
              className="d-flex justify-content-center"
              variant="subtitle2"
            >
              {category.parent}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Cards;
