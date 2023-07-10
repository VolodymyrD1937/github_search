import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import resolvers from "./resolvers"
import typeDefs from "./schema"
import { GET_FAVORITE_REPOS_LIST } from "../graphql/query"

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_GIT_TOKEN}`,
    },
  }
})

cache.writeQuery({
  query: GET_FAVORITE_REPOS_LIST,
  data: {
    favoriteRepos: [],
  },
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers,
  typeDefs,
})
