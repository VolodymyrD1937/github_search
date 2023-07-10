import { gql } from "@apollo/client"

export const ADD_REPO_TO_FAVORITES = gql`
  mutation AddRepoToFavorites($repo: Repo!) {
    addRepoToFavorites(repo: $repo) @client {
      id
      name
      description
      url
      rating
    }
  }
`

export const REMOVE_REPO_FROM_FAVORITES = gql`
  mutation RemoveRepoFromFavorites($id: ID!) {
    removeRepoFromFavorites(id: $id) @client
  }
`

export const RATE_FAVORITE_REPO = gql`
  mutation RateFavoriteRepo($id: ID!, $rating: Int) {
    rateFavoriteRepo(id: $id, rating: $rating) @client
  }
`
