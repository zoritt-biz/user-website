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
  query($id: MongoID!) {
    businessById(_id: $id) {
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
      searchIndex
      history
      establishedIn
      subscription
      updatedAt
      createdAt
      pictures
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
        owner {
          businessName
          location
          logoPics
        }
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
        owner {
          businessName
          location
          logoPics
        }
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

export const GET_BUSINESS_LIST_MANY = gql`
  query {
    businessListMany {
      _id
      autocompleteTerm
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