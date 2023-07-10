import { useCallback } from "react"
import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import _ from "lodash"
import { Box, CircularProgress, Grid } from "@mui/material"
import {
  GET_FAVORITE_REPOS_LIST,
  GET_REPOS_FROM_GITHUB,
} from "../graphql/query"
import { Input, RepoCard } from "../components"
import {
  ADD_REPO_TO_FAVORITES,
  REMOVE_REPO_FROM_FAVORITES,
} from "../graphql/mutation"
import { debounceTime } from "../constants/debounce"
import { RepoModel } from "../models/RepoModel"

export const SearchPage = () => {
  const [queryString, { loading, data }] = useLazyQuery(GET_REPOS_FROM_GITHUB)
  const { data: favReposData } = useQuery(GET_FAVORITE_REPOS_LIST)

  const [addRepoToFavorites] = useMutation(ADD_REPO_TO_FAVORITES)
  const [removeRepoFromFavorites] = useMutation(REMOVE_REPO_FROM_FAVORITES)

  const debouncer = useCallback(_.debounce(queryString, debounceTime), [])

  const searchResult = data?.search?.edges?.map(repo => repo.node)

  const emptySearch = (!data || searchResult.length === 0) && !loading

  return (
    <div className="container">
      <Input
        id="search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          debouncer({ variables: { queryString: e.target.value } })
        }}
      />
      {emptySearch && <h2>Start your search. Just enter anything above</h2>}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}>
          {searchResult?.map(repo => {
            const repoData = {
              id: repo.id,
              name: repo.name,
              description: repo.description,
            }

            const isFavorite = favReposData.favoriteRepos?.find(
              (favRepo: RepoModel) => favRepo.id === repo.id,
            )

            return (
              <RepoCard
                repo={repo}
                key={repo.id}
                isRepoFavorite={isFavorite}
                onClick={() => {
                  if (!isFavorite) {
                    addRepoToFavorites({ variables: { repo: repoData } })
                  } else {
                    removeRepoFromFavorites({ variables: { id: repo.id } })
                  }
                }}
              />
            )
          })}
        </Grid>
      )}
    </div>
  )
}
