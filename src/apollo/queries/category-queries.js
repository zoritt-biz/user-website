import {gql} from '@apollo/client';

export const GET_ALL_CATEGORIES = gql`
query{
  mainCategoryListMany(sort: NAME_ASC){
    name
    image
    sub_categories
  }
}
`;

