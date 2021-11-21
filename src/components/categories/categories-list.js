import {
  EventNoteOutlined,
  FlightOutlined,
  GavelOutlined,
  HotelOutlined,
  ImportExportOutlined,
  LocalBarOutlined,
  LocalDiningOutlined,
  LocalGasStationOutlined,
  LocalHospitalOutlined,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
  SpaOutlined,
  SportsSoccerOutlined,
  VideoCallOutlined,
} from '@mui/icons-material';

export const categoriesList = [
  'Arts, Media & Entertainment',
  'Food & Catering',
  'Hotel , Hospitality  & Cleaning',
  'Shopping / Household & Furniture',
  'Financial service',
  'Tour , Travel & Transport',
  'Health',
  'Sport & leisure',
  'Beauty & Spa',
  'Event Organizers',
  'Education & Training',
  'Automotive & Gas Stations',
  'Night Life & liquor Store',
  'Import / Export & Manufacturing',
  'Construction',
  'Religious Organizations',
  'Farm & Agriculture',
];

const categoriesMap = {
  ARTS: 'Arts, Media & Entertainment',
  FOOD: 'Food & Catering',
  HOTEL: 'Hotel , Hospitality  & Cleaning',
  SHOPPING: 'Shopping / Household & Furniture',
  FINANCIAL: 'Financial service',
  TOUR: 'Tour , Travel & Transport',
  HEALTH: 'Health',
  SPORTS: 'Sport & leisure',
  BEAUTY: 'Beauty & Spa',
  EVENT: 'Event Organizers',
  EDUCATION: 'Education & Training',
  AUTOMOTIVE: 'Automotive & Gas Stations',
  NIGHT: 'Night Life & liquor Store',
  IMPORT: 'Import / Export & Manufacturing',
  CONSTRUCTION: 'Construction',
  RELIGIOUS: 'Religious Organizations',
  FARM: 'Farm & Agriculture',
};

const baseStyle = 'd-block mx-auto categoriesList-card-icon mb-2';

export const categoryController = parent => {
  return parent === categoriesMap.ARTS ? (
    <VideoCallOutlined className={baseStyle}/>
  ) : parent === categoriesMap.FOOD ? (
    <LocalDiningOutlined className={baseStyle}/>
  ) : parent === categoriesMap.HOTEL ? (
    <HotelOutlined className={baseStyle}/>
  ) : parent === categoriesMap.SHOPPING ? (
    <ShoppingCartOutlined className={baseStyle}/>
  ) : parent === categoriesMap.FINANCIAL ? (
    <MonetizationOnOutlined className={baseStyle}/>
  ) : parent === categoriesMap.TOUR ? (
    <FlightOutlined className={baseStyle}/>
  ) : parent === categoriesMap.HEALTH ? (
    <LocalHospitalOutlined className={baseStyle}/>
  ) : parent === categoriesMap.SPORTS ? (
    <SportsSoccerOutlined className={baseStyle}/>
  ) : parent === categoriesMap.BEAUTY ? (
    <SpaOutlined className={baseStyle}/>
  ) : parent === categoriesMap.EVENT ? (
    <EventNoteOutlined className={baseStyle}/>
  ) : parent === categoriesMap.EDUCATION ? (
    <i className="fas fa-user-graduate fa-4x d-flex justify-content-center mb-2"></i>
  ) : parent === categoriesMap.AUTOMOTIVE ? (
    <LocalGasStationOutlined className={baseStyle}/>
  ) : parent === categoriesMap.NIGHT ? (
    <LocalBarOutlined className={baseStyle}/>
  ) : parent === categoriesMap.IMPORT ? (
    <ImportExportOutlined className={baseStyle}/>
  ) : parent === categoriesMap.CONSTRUCTION ? (
    <GavelOutlined className={baseStyle}/>
  ) : parent === categoriesMap.RELIGIOUS ? (
    <i className="fas fa-cross fa-4x d-flex justify-content-center mb-2"></i>
  ) : (
    parent === categoriesMap.FARM && (
      <i className="fas fa-tractor fa-3x d-flex justify-content-center mb-2"></i>
    )
  );
};
