import {gql} from '@apollo/client';

export const GET_USER = gql`
query{
  user{
    _id
    firstName
    middleName
    lastName
    email
    phoneNumber
    image
    firebaseId
    roles
    account{
      verification{
        verified
      }
    }
    status
  }
}
`;

export const GET_FAVORITES_LIST_MANY = gql`
query{
  user{
    favorites{
      _id
      businessName
      distance
      branches{
        _id
      }
      phoneNumbers
      emails
      website
      logoPics
      location
      locationDescription
      lngLat{
        coordinates
      }
      description
      pictures
      isLiked
      favoriteList
      categories{
        name
        parent
        autocompleteTerm
      }
      createdAt
      updatedAt
    }
  }
}
`;

export const GET_USER_EVENTS = gql`
query{
  user{
    interestedInEvents{
      _id
      title
      description
      location
      link
      startDate
      endDate
      startTime
      endTime
      videos
      photos
      isInterested
      interestedUsers
      likeCount
      owner{
        _id
        businessName
        location
        logoPics
      }
    }
  }
}
`;

export const GET_USER_POSTS = gql`
query{
  user{
    likedPosts{
      _id
      description
      descriptionList{
        field
        value
      }
      photos
      videos
      isLiked
      createdAt
      likeCount
      likeList
      owner {
        _id
        businessName
        location
        logoPics
      }
    }
  }
}
`;

