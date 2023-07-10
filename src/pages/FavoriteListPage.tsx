import { Grid } from "@mui/material"
import { RepoCard } from "../components"
import { useMutation, useQuery } from "@apollo/client"
import { GET_FAVORITE_REPOS_LIST } from "../graphql/query"
import {
  RATE_FAVORITE_REPO,
  REMOVE_REPO_FROM_FAVORITES,
} from "../graphql/mutation"

export const FavoriteListPage = () => {
  const { data, error, loading } = useQuery(GET_FAVORITE_REPOS_LIST)

  const [removeRepoFromFavorites] = useMutation(REMOVE_REPO_FROM_FAVORITES)
  const [rateFavoriteRepo] = useMutation(RATE_FAVORITE_REPO)

  return (
    <div className="container">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}>
        {data?.favoriteRepos.map(repo => (
          <RepoCard
            repo={repo}
            key={repo.id}
            showRating
            onClick={() =>
              removeRepoFromFavorites({ variables: { id: repo.id } })
            }
            isRepoFavorite
            onRatingChange={(_, value) =>
              rateFavoriteRepo({ variables: { id: repo.id, rating: value } })
            }
          />
        ))}
      </Grid>
    </div>
  )
}
