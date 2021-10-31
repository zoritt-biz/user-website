import {gql} from '@apollo/client';

export const GET_POP_UP = gql`
query($category: String){
  popUpOne(filter: {
    category: $category
  }){
    _id
    image
    category
  }
}
`;
