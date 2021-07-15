import {gql} from '@apollo/client';

export const GET_CATEGORIES = gql`
  query {
    categoryMany {
      _id
      name
      parent
    }
  }
`;

export const GET_CATEGORY = gql`
  query {
    categoryOne {
      _id
      name
      parent
    }
  }
`;

export const GET_CATEGORY_BY_ID = gql`
  query getCategoryById($_id: MongoID!) {
    categoryById(_id: $_id) {
      _id
      name
      parent
    }
  }
`;

export const GET_CATEGORY_BY_IDS = gql`
  query getCategoryByIds($_ids: [MongoID!]) {
    categoryByIds(_ids: $_ids) {
      name
      parent
    }
  }
`;

export const GET_CATEGORY_CONNECTION = gql`
  query {
    categoryConnection {
      count
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          name
          parent
        }
        cursor
      }
    }
  }
`;