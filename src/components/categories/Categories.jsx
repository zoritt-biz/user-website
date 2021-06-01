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

import Cards from './Cards';

const Categories = () => {
  return (
    <div className="container-md mt-5">
      <h3 className="mb-3">Categories</h3>

      <div className="row">
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Art, media & Entertainment"
            cardIcon={
              <VideoCallOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>

        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Food and Category"
            cardIcon={
              <LocalDiningOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>

        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Hotel & Hospitality"
            cardIcon={
              <HotelOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Shopping"
            cardIcon={
              <ShoppingCartOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Financial Services"
            cardIcon={
              <MonetizationOnOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Tour, Travle and Transport"
            cardIcon={
              <FlightOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Health"
            cardIcon={
              <LocalHospitalOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Sports & Leisure"
            cardIcon={
              <SportsSoccerOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Beauty & Spa"
            cardIcon={
              <SpaOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Event Organizers"
            cardIcon={
              <EventNoteOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Education & Training"
            icon={
              <i className="fas fa-user-graduate fa-4x d-flex justify-content-center mb-2"></i>
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Automotive & Gas stations"
            cardIcon={
              <LocalGasStationOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Night Life"
            cardIcon={
              <LocalBarOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Import/Export"
            cardIcon={
              <ImportExportOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Construction & Engineering"
            cardIcon={
              <GavelOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Local Services"
            cardIcon={
              <LocalLaundryServiceOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Religious Organizations"
            icon={
              <i className="fas fa-cross fa-4x d-flex justify-content-center mb-2"></i>
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="Governmental Institutions"
            cardIcon={
              <HomeWorkOutlined className="d-block mx-auto categories-card-icon mb-2" />
            }
          />
        </div>
        <div className="col-6 col-md-4 col-xl-3 mb-3">
          <Cards
            typography="NGOs & Humanitarian"
            icon={
              <i className="fas fa-hands-helping fa-4x d-flex justify-content-center mb-2"></i>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
