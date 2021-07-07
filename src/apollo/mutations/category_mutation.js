import {gql} from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
query{
  categoryMany{
    _id
    name
    parent
    autocompleteTerm
  }
}
`;
