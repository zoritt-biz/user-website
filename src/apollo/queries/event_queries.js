import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query {
    eventMany{
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
