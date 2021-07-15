import {gql} from '@apollo/client';

const record = `
    _id
    businessName
    phoneNumber
    location
    emails
    website
    logoPics
    slogan
    description
    specialization
    history
    establishedIn
    subscription
    updatedAt
    createdAt
    pictures
    owner {
      fullName
      email
      phoneNumber
      firebaseId
      businesses {
        _id
        businessName
      }
    }
    openHours {
      day
      opens
      closes
      isOpen
    }
    posts {
      _id
      description
      videos
      photos
      createdAt
    }
    events {
      _id
      title
      description
      location
      link
      videos
      photos
      createdAt
    }
    categories {
      _id
      name
      parent
    }
`;

export const CREATE_BUSINESS = gql`
mutation(
  $user_id: String
  $phoneNumber: String
  $location: String
  $locationDescription: String
  $pictures: [String]
  $categories: [String]
  $searchIndex: [String]
  $lng: Float
  $lat: Float
){
  businessCreateOneCustom(
    user_id: $user_id
    businessName: $businessName
    phoneNumber: $phoneNumber
    location: $location
    locationDescription: $locationDescription
    pictures: $pictures
    categories: $categories
    searchIndex: $searchIndex
    lng: $lng
    lat: $lat
  ){
    _id
  }
}
`;

export const ADD_TO_BUSINESS_LIST = gql`
  mutation ($autocompleteTerm: String) {
    businessListCreateOne(record: { autocompleteTerm: $autocompleteTerm }) {
      recordId
    }
  }
`;

export const ADD_POST = gql`
mutation ($businessId: MongoID!, $posts: [MongoID]){
  businessUpdateById(record: {
    posts: $posts,
  },
    _id: $businessId
  ) {
    record{
    ${record}
    }
  }
}
`;

export const ADD_EVENT = gql`
mutation ($businessId: MongoID!, $events: [MongoID]){
  businessUpdateById(record: {
    events: $events,
  },
    _id: $businessId
  ) {
    record{
      ${record}
    }
  }
}
`;

export const UPDATE_DESCRIPTION = gql`
mutation ($businessId: MongoID!, $description: String){
  businessUpdateById(record: {
    description: $description,
  },
    _id: $businessId
  ) {
    record{
      ${record}
    }
  }
}
`;

export const UPDATE_SPECIALIZATION = gql`
mutation ($businessId: MongoID!, $specialization: String){
  businessUpdateById(record: {
    specialization: $specialization,
  },
    _id: $businessId
  ) {
    record{
      ${record}
    }
  }
}
`;

export const UPDATE_HISTORY = gql`
mutation ($businessId: MongoID!, $history: String, $establishedIn: String){
  businessUpdateById(record: {
    history: $history,
    establishedIn: $establishedIn
  },
    _id: $businessId
  ) {
    record{
     ${record}
    }
  }
}
`;

export const UPDATE_ADDRESS_INFO = gql`
mutation ($businessId: MongoID!, $emails: [String], $phoneNumbers: [String], $website: String){
  businessUpdateById(record: {
    emails: $emails,
    phoneNumber: $phoneNumbers,
    website: $website,
  },
    _id: $businessId
  ) {
    record{
      ${record}
    }
  }
}
`;

export const UPDATE_SLOGAN = gql`
mutation ($businessId: MongoID!, $slogan: String){
  businessUpdateById(record: {
    slogan: $slogan
  },
    _id: $businessId
  ) {
    record{
      ${record}
    }
  }
}
`;

export const UPDATE_OPEN_HOURS = gql`
mutation (
  $businessId: MongoID!, 
  $openHours: [UpdateByIdBusinessOpenHoursInput]
){
  businessUpdateById(record: {
    openHours: $openHours
  },
    _id: $businessId
  ) {
    record{
      ${record}
    }
  }
}
`;

export const ADD_LOGO = gql`
mutation ($businessId: MongoID!, $logo: String){
  businessUpdateById(record: {
    logoPics: $logo
  },
    _id: $businessId
  ) {
    record{
      ${record}
    }
  }
}
`;

export const ADD_PHOTO = gql`
mutation ($businessId: MongoID!, $pictures: [String]){
  businessUpdateById(record: {
    pictures: $pictures
  },
    _id: $businessId
  ) {
    record{
      ${record}
    }
  }
}
`;

export const SEND_REQUEST = gql`
  mutation (
    $reference: String
    $amount: Float
    $date: Date
    $bankName: String
    $business: MongoID
  ) {
    requestCreateOne(
      record: {
        reference: $reference
        bankName: $bankName
        amount: $amount
        dateDeposited: $date
        status: PENDING
        business: $business
      }
    ) {
      recordId
    }
  }
`;

export const BUY_COUPON = gql`
  mutation ($id: MongoID!, $businessId: MongoID) {
    couponUpdateById(_id: $id, record: { sold: true, business: $businessId }) {
      record {
        subscription
      }
    }
  }
`;

export const UPDATE_SUBSCRIPTION = gql`
  mutation ($businessId: MongoID!, $subscription: EnumBusinessSubscription) {
    businessUpdateById(
      record: { subscription: $subscription }
      _id: $businessId
    ) {
      record {
        _id
      }
    }
  }
`;
