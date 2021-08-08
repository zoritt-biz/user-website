import {gql} from '@apollo/client';

// removed createdAt field and filter option

export const GET_POSTS = gql`
query(
  $limit: Int,
  $sort: SortFindManyPostInput,
  $filterDate: Date,
  $skip: Int
){
  postMany(
    limit: $limit,
    skip: $skip,
    sort: $sort,
    filter: {
      _operators: {
        createdAt: { gt: $filterDate }
      }
   }
  ){
    _id
    description
    photos
    videos
    isLiked
    createdAt
    owner {
        _id
        businessName
        location
        logoPics
    }
  }
}
`;