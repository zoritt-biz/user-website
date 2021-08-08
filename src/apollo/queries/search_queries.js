import {gql} from '@apollo/client';

export const BUSINESS_BY_SUB_CAT = gql`
query($categoryIndex: [String], $limit: Int){
  businessMany(
    filter: {
      state: ACTIVE,
      _operators: {
        searchIndex: {in: $categoryIndex}
      }
    },
    limit: $limit,
    sort: SUBSCRIPTION_DESC
  ){
    _id
    businessName
    phoneNumber
    subscription
    location
    emails
    website
    logoPics
    isLiked
    state
    pictures
    locationDescription
    lat
    lng
  }
}
`;

export const GET_BUSINESS_MANY = gql`
query($searchArray: [String], $limit: Int){
  businessMany(
    filter: {
    state: ACTIVE,
      _operators: {
      searchIndex: {in: $searchArray}
    }
  },
  limit: $limit,
    sort: SUBSCRIPTION_DESC
){
    _id
    businessName
    phoneNumber
    subscription
    location
    emails
    website
    logoPics
    isLiked
    state
    pictures
    locationDescription
    lat
    lng
  }
}
`;

export const GET_BUSINESS_LIST_MANY = gql`
query{
  businessListMany(limit: 2000, sort: AUTOCOMPLETETERM_ASC){
    _id,
      autocompleteTerm
  }
}
`;
