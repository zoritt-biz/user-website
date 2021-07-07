import {gql} from "@apollo/client";

export const CREATE_EVENT = gql`
mutation (
  $title: String
  $description: String
  $location: String
  $link: String
  $startDate: Date
  $endDate: Date
  $startTime: String
  $endTime: String
  $photos: [String]
  $videos: [String]
  $owner: MongoID
){
  eventCreateOne(record:{
    title: $title
    description: $description
    location: $location
    link: $link
    startDate: $startDate
    endDate: $endDate
    startTime: $startTime
    endTime: $endTime
    photos: $photos
    videos: $videos
    owner: $owner
  }){
    recordId
  }
}
`;


export const UPDATE_EVENT = gql`
mutation(
  $title: String
  $description: String
  $location: String
  $link: String
  $startDate: Date
  $endDate: Date
  $startTime: String
  $endTime: String
  $id: MongoID!
){
  eventUpdateById(_id: $id, record: {
    title: $title
    description: $description
    location: $location
    link: $link
    startDate: $startDate
    endDate: $endDate
    startTime: $startTime
    endTime: $endTime
  }){
    recordId
  }
}
`;
