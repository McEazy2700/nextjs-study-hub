import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { removeAuthToken } from "@features/utils/cookies";
import { REFRESH_TOKEN, REGISTER, SIGN_IN } from "@gql/requests/Mutations";
import { GET_AUTH_USER } from "@gql/requests/Queries";
import {
  MutationRegisterArgs,
  ObtainJsonWebToken,
  MutationTokenAuthArgs,
  Register,
  RefreshToken,
  MutationRefreshTokenArgs,
  UserNode
} from "@gql/types/graphql";

export const useRegister = (userData: MutationRegisterArgs) => {
  return useMutation<
    { register: Register },
    MutationRegisterArgs>(REGISTER, {
      variables: {
        username: userData.username,
        email: userData.email,
        password1: userData.password1,
        password2: userData.password2
      }
    }
    )
}

export const useSignIn = (userInput: MutationTokenAuthArgs) => {
  return useMutation<
    { signin: ObtainJsonWebToken },
    MutationTokenAuthArgs>(SIGN_IN, {
      variables: {
        email: userInput.email,
        password: userInput.password
      }
    })
}

export const useRefeshToken = (refresh: string) => {
  return useMutation<
    { refreshToken: RefreshToken },
    MutationRefreshTokenArgs>(REFRESH_TOKEN, {
      variables: {
        refreshToken: refresh
      }
    })
}

export const useAuthUser = () => {
  return useQuery <{ user: UserNode }>(GET_AUTH_USER)
}

export const useLogOut = () => {
  const client = useApolloClient()
  client.resetStore().catch(err => {
    console.log(err)
  })
  removeAuthToken()
}
