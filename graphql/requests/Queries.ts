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
