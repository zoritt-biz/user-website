import React from 'react';
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

import { Grid } from '@material-ui/core';
import Cards from './Cards';

const Categories = () => {
  return (
    <div className="container-md mt-5">
      <h3 className="mb-3">Categories</h3>
      <Grid container spacing={3} className="mt-2">
        <Cards
          typography="Art, media & Entertainment"
          cardIcon={
            <VideoCallOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Food and Category"
          cardIcon={
            <LocalDiningOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Hotel & Hospitality"
          cardIcon={
            <HotelOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Shopping"
          cardIcon={
            <ShoppingCartOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Financial Services"
          cardIcon={
            <MonetizationOnOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Tour, Travle and Transport"
          cardIcon={
            <FlightOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Health"
          cardIcon={
            <LocalHospitalOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Sports & Leisure"
          cardIcon={
            <SportsSoccerOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Beauty & Spa"
          cardIcon={
            <SpaOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />
        <Cards
          typography="Event Organizers"
          cardIcon={
            <EventNoteOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Edication & Training"
          icon={
            <i className="fas fa-user-graduate fa-4x d-flex justify-content-center mb-2"></i>
          }
        />

        <Cards
          typography="Automotive & Gas stations"
          cardIcon={
            <LocalGasStationOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Night Life"
          cardIcon={
            <LocalBarOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Import/Export"
          cardIcon={
            <ImportExportOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Construction & Engineering"
          cardIcon={
            <GavelOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Local Services"
          cardIcon={
            <LocalLaundryServiceOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="Religious Organizations"
          icon={
            <i className="fas fa-cross fa-4x d-flex justify-content-center mb-2"></i>
          }
        />

        <Cards
          typography="Governmental Institutions"
          cardIcon={
            <HomeWorkOutlined className="d-block mx-auto categories-card-icon mb-2" />
          }
        />

        <Cards
          typography="NGOs & Humanitarian"
          icon={
            <i className="fas fa-hands-helping fa-4x d-flex justify-content-center mb-2"></i>
          }
        />
      </Grid>
    </div>
  );
};

export default Categories;
