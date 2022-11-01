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
