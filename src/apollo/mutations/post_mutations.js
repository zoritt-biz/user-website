import {gql} from '@apollo/client';

export const CREATE_POST = gql`
  mutation (
    $description: String
    $videos: [String]
    $photos: [String]
    $owner: MongoID
  ) {
    postCreateOne(
      record: {
        description: $description
        videos: $videos
        photos: $photos
        owner: $owner
      }
    ) {
      record {
        _id
      }
    }
  }
`;

export const UPDATE_POST = gql`
  mutation ($description: String, $photos: [String], $id: MongoID!) {
    postUpdateById(
      _id: $id
      record: { description: $description, photos: $photos }
    ) {
      recordId
    }
  }
`;
