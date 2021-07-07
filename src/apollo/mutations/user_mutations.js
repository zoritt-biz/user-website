import {gql} from "@apollo/client";

export const CREATE_USER = `
  mutation(
    $firstName: String,
    $middleName: String,
    $lastName: String,
    $userType: EnumUserUserType,
    $email: String,
    $phoneNumber: String,
    $firebaseId: String,
  ){
    userCreateOne(
      record: {
        firstName: $firstName,
        middleName: $middleName,
        lastName: $lastName,
        userType: $userType,
        email: $email,
        phoneNumber: $phoneNumber,
        firebaseId: $firebaseId,
      }
    ){
      record {
        _id
        firstName
        middleName
        lastName
        email
        phoneNumber
        firebaseId
        password
        userType
        businesses {
          _id
        }
      }
    }
  }
`;

export const UPDATE_USER_BUSINESSES = gql`
  mutation(
    $firebaseId: String
    $businesses: [MongoID]
  ){
    userUpdateOne(
      filter: {
        firebaseId : $firebaseId
      },
      record: {
        businesses: $businesses
      }){
      record{
        _id
        firstName
        middleName
        lastName
        email
        phoneNumber
        firebaseId
        password
        userType
        businesses {
          _id
        }
      }
    }
  }
`;
