import { gql } from "@apollo/client";


export const GET_AUTH_USER = gql`
  query User {
    user: me {
      pk
      username
      email
      profile {
        id
        imageUrl
      }
    }
  }
`

export const USER_COURSES = gql`
  query UserCourses {
    courses: userCourses {
      id
      name
      startDate
      endDate
      description
      section {
        id
        startDate
      }
      progress
    }
  }
`

export const USER_SECTIONS = gql`
  query UserSections {
    sections: userSections {
      id
      startDate
      endDate
      dateAdded
      name
      description
    }
  }
`
