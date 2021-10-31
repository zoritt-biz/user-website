import {gql} from "@apollo/client";

export const USER_ADD_LOGO = gql`
mutation(
  $id: MongoID!,
  $image: String
){
  userUpdateById(
    _id: $id,
    record: {
    image: $image
  }
){
    record {
      _id
      firstName
      middleName
      lastName
      email
      image
      phoneNumber
      firebaseId
    }
  }
}
`;

export const LIKE_POST = gql`
mutation($postId: String!){
  postLikeUnLike(postId: $postId){
    description
  }
}
`;

export const LIKE_EVENT = gql`
mutation($eventId: String!){
  eventLikeUnLike(eventId: $eventId){
    title
  }
}
`;

export const LIKE_BUSINESS = gql`
mutation($businessId: String!){
  businessLikeUnLike(businessId: $businessId){
    businessName
  }
}
`;
