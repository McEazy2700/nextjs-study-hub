import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register(
    $username: String!
    $email: String!
    $password1: String!
    $password2: String!
  ) {
    register(
      username: $username
      email: $email
      password1: $password1
      password2: $password2
    ) {
      success
      errors
      token
      refreshToken
    }
  }
`

export const SIGN_IN = gql`
  mutation Login($email: String!, $password: String!) {
    signin: tokenAuth(email: $email, password: $password) {
      token
      refreshToken
      success
      errors
      user {
        pk
        username
        email
        profile {
          id
          imageUrl
        }
      }
    }
  }
`

export const REFRESH_TOKEN = gql`
  mutation RefreshToken ($refreshToken: String!) {
    refreshToken (refreshToken: $refreshToken) {
      token
      payload
      success
      errors
      refreshToken
    }
  }
`

export const CREATE_UPDATE_COURSE = gql`
  mutation CreateUpdateCourse(
    $name: String
    $description: String
    $sectionId: ID
    $startDate: Date
    $endDate: Date
    $courseId: ID
  ) {
    course: createUpdateCourse(
      name: $name
      description: $description
      sectionId: $sectionId
      startDate: $startDate
      endDate: $endDate
      courseId: $courseId
    ) {
      course {
        name
        description
        startDate
        endDate
        progress
        id
        section {
          id
        }
      }
      success
      errors
    }
  }
`

export const CREATE_UPDATE_SECTION = gql`
  mutation CreateUpdateSection(
    $name: String
    $description: String
    $sectionId: ID
    $startDate: Date
    $endDate: Date
  ) {
    section: createUpdateSection(
      name: $name
      description: $description
      sectionId: $sectionId
      startDate: $startDate
      endDate: $endDate
    ) {
      section {
        id
        name
        description
        startDate
        endDate
      }
      success
      errors
    }
  }
`

export const CREATE_RESOURCE = gql`
  mutation CreateResource(
    $audio: Upload
    $video: Upload
    $document: Upload
    $image: Upload
    $description: String
    $courseId: ID!
    $resourceId: ID
    $link: String
    $public: Boolean
  ) {
    resource: createUpdateResource(
      audio: $audio
      courseId: $courseId
      description: $description
      image: $image
      link: $link
      document: $document
      public: $public
      resourceId: $resourceId
      video: $video
    ) {
      resource {
        id
        creator {
          id
        }
        course {
          id
        }
        description
        link
        document
        audio
        image
        video
      }
      success
      errors
    }
  }
`

export const DELETE_COURSE = gql`
  mutation DeleteCourse ($courseId: ID!){
    delete: deleteCourse (courseId: $courseId) {
      success
      errors
    }
  }
`
