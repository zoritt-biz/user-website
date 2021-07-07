export const GET_USER = `
query($firebaseId: String){
  userOne(filter: {firebaseId: $firebaseId}){
    _id
    firstName
    middleName
    lastName
    email
    phoneNumber
    firebaseId
    userType
  }
}
`;
