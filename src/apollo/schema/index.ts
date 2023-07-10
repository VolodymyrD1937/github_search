import { gql } from "@apollo/client"

const typeDefs = gql`
  type Repo {
    id: ID!
    name: String!
    description: String!
    url: String!
    rating: Int
  }
  type Mutation {
    addRepoToFavorites(repo: Repo): Repo
    removeRepoFromFavorites(id: ID!): Repo
    rateFavoriteRepo(id: ID!): Repo
  }
  type Query {
    favoriteRepos: [Repo]
  }
`

export default typeDefs
