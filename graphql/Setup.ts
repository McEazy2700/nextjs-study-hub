import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'
import { getToken } from "@features/utils/cookies";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
})

const authLink = setContext((_, { headers }) => {
  const token = getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ""
    }
  }
})


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
