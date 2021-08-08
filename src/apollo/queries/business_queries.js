import {gql} from '@apollo/client';

export const GET_BUSINESS_BY_ID = gql`
  query($id: MongoID!) {
    businessById(_id: $id) {
      businessName
      events {
        title
      }
      posts {
        description
      }
    }
  }
`;

export const GET_BUSINESS_DETAIL = gql`
query ($id: MongoID!){
  businessById(_id: $id){
    _id
    businessName
    phoneNumber
    location
    locationDescription
    lat
    lng
    emails
    website
    logoPics
    slogan
    state
    description
    specialization
    history
    establishedIn
    subscription
    updatedAt
    createdAt
    isLiked
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
      startDate
      endDate
      startTime
      endTime
      videos
      photos
      createdAt
    }
    categories {
      _id
      name
      parent
    }
  }
}
`;

// remove search array

export const GET_BUSINESS_MANY = gql`
  query($limit: Int) {
    businessMany(limit: $limit) {
      _id
      businessName
      phoneNumber
      location
      emails
      website
      logoPics
      pictures
    }
  }
`;

export const GET_SPONSORED = gql`
query ($subscriptions: EnumBusinessSubscription, $limit: Int){
  businessMany(filter: {
    subscription: $subscriptions,
    state: ACTIVE
  },
    limit: $limit
  ){
    _id
    businessName
    phoneNumber
    location
    emails
    isLiked
    state
    website
    logoPics
    pictures
    locationDescription
    lat
    lng
  }
}
`;

export const GET_SPONSORED_BUSINESSES = gql`
  query($subscriptions: EnumBusinessSubscription, $limit: Int) {
    businessMany(filter: { subscription: $subscriptions }, limit: $limit) {
      _id
      businessName
      phoneNumber
      location
      emails
      website
      logoPics
      pictures
    }
  }
`;

export const GET_BUSINESS_RELATED_MANY = gql`
query($category: [String], $limit: Int, $id: MongoID){
  businessMany(
    filter: {
    state: ACTIVE,
      _operators: {
      _id: {ne: $id},
      searchIndex: {
      in: $category
      }
    }
  }
  limit: $limit,
    sort: SUBSCRIPTION_DESC
){
    _id
    businessName
    phoneNumber
    location
    emails
    isLiked
    state
    website
    logoPics
    pictures
    locationDescription
    lat
    lng
  }
}
`;