import { useMutation, useQuery } from "@apollo/client"
import {
  RATE_FAVORITE_REPO,
  REMOVE_REPO_FROM_FAVORITES,
} from "../graphql/mutation"
import { GET_FAVORITE_REPOS_LIST } from "../graphql/query"
import { RepoCard, RepoList } from "../components"
import { RepoModel } from "../models/RepoModel"

export const FavoriteListPage = () => {
  const { data } = useQuery(GET_FAVORITE_REPOS_LIST)
  const { favoriteRepos } = data

  const [removeRepoFromFavorites] = useMutation(REMOVE_REPO_FROM_FAVORITES)
  const [rateFavoriteRepo] = useMutation(RATE_FAVORITE_REPO)

  return (
    <div className="container">
      {favoriteRepos.length === 0 ? (
        <h2>You don`t have any favorite repositories yet</h2>
      ) : (
        <RepoList>
          {favoriteRepos.map((repo: RepoModel) => (
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
        </RepoList>
      )}
    </div>
  )
}
