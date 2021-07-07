import {gql} from '@apollo/client';

// removed createdAt field and filter option

export const GET_POSTS = gql`
  query($limit: Int, $skip: Int) {
    postMany(limit: $limit, skip: $skip) {
      _id
      description
      photos
      owner {
        businessName
        location
        logoPics
      }
      isLiked
    }
  }
`;