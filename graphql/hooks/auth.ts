import { useMutation } from "@apollo/client";
import { REGISTER, SIGN_IN } from "@gql/requests/Mutations";
import { MutationRegisterArgs, ObtainJsonWebToken, MutationTokenAuthArgs, Register } from "@gql/types/graphql";

export const useRegister = (userData: MutationRegisterArgs)=>{
  return useMutation<
    { register: Register },
    MutationRegisterArgs>(REGISTER, {
      variables: {
        username: userData.username,
        email: userData.email,
        password1: userData.password1,
        password2: userData.password2}
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
