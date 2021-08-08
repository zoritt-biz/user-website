import {gql} from '@apollo/client';

export const GET_ALL_EVENTS = gql`
query(
  $limit: Int,
  $filterDate: Date,
  $now: Date
){
  eventMany(limit: $limit, sort: STARTDATE_DESC,
  filter: {
      _operators: {
        createdAt: { gte: $filterDate },
        endDate: { gte: $now }
      }
  },
  ){
    _id
    title
    description
    location
    link
    photos
    isInterested
    startDate
    endDate
    startTime
    endTime
    videos
    owner {
        _id
        businessName
        location
        logoPics
     }
  }
}
`;

export const GET_EVENT_BY_ID = gql`
  query getEventById($_id: MongoID!) {
    eventById(_id: $_id) {
      _id
      title
      description
      location
      link
      videos
      photos
    }
  }
`;

export const GET_EVENT_BY_IDS = gql`
  query getEventByIds(
    $_ids: [MongoID!]
    $limit: Int
    $sort: SortFindByIdsEventInput
  ) {
    eventById(_id: $_id, limit: $limit, sort: $sort) {
      _id
      _typename
      updatedAt
      createdAt
      title
      description
      location
      link
      videos
      photos
      owner {
        _id
      }
    }
  }
`;

export const GET_EVENT_CONNECTION = gql`
  query {
    eventConnection {
      count
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          location
          description
        }
        cursor
      }
    }
  }
`;

export const GET_EVENT_COUNT = gql`
  query {
    eventCount
  }
`;