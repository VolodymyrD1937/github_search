import { gql } from "@apollo/client"

export const GET_REPOS_FROM_GITHUB = gql`
  query listRepos($queryString: String!) {
    rateLimit {
      cost
      remaining
      resetAt
    }
    search(query: $queryString, type: REPOSITORY, first: 20) {
      repositoryCount
      pageInfo {
        endCursor
        startCursor
      }
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
          }
        }
      }
    }
  }
`

export const GET_FAVORITE_REPOS_LIST = gql`
  query GetFavoriteReposList {
    favoriteRepos @client {
      id
      name
      description
      rating
      url
    }
  }
`
