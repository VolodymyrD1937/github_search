import { useCallback } from "react"
import { useLazyQuery, useMutation, useQuery } from "@apollo/client"
import _ from "lodash"
import {
  ADD_REPO_TO_FAVORITES,
  REMOVE_REPO_FROM_FAVORITES,
} from "../graphql/mutation"
import {
  GET_FAVORITE_REPOS_LIST,
  GET_REPOS_FROM_GITHUB,
} from "../graphql/query"
import { Input, RepoCard, RepoList, Loader } from "../components"
import { RepoModel } from "../models/RepoModel"
import { debounceTime } from "../constants/debounce"

export const SearchPage = () => {
  const [queryString, { loading, data }] = useLazyQuery(GET_REPOS_FROM_GITHUB)
  const { data: favReposData } = useQuery(GET_FAVORITE_REPOS_LIST)

  const [addRepoToFavorites] = useMutation(ADD_REPO_TO_FAVORITES)
  const [removeRepoFromFavorites] = useMutation(REMOVE_REPO_FROM_FAVORITES)

  const debouncer = useCallback(_.debounce(queryString, debounceTime), [])

  const searchResult = data?.search?.edges?.map(
    (repo: { node: RepoModel; __typename: string }) => repo.node,
  )

  const onRepoCardClick = (
    isFavorite: boolean,
    repo: RepoModel,
    repoId: string,
  ) => {
    if (!isFavorite) {
      addRepoToFavorites({ variables: { repo: repo } })
    } else {
      removeRepoFromFavorites({ variables: { id: repoId } })
    }
  }

  const getRepoCard = (repo: RepoModel) => {
    const repoData = {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.url
    }

    const isFavorite = favReposData.favoriteRepos?.find(
      (favRepo: RepoModel) => favRepo.id === repo.id,
    )

    return (
      <RepoCard
        repo={repo}
        key={repo.id}
        isRepoFavorite={isFavorite}
        onClick={() => onRepoCardClick(isFavorite, repoData, repo.id)}
      />
    )
  }

  const GetRepoList = () => (
    <RepoList>
      {searchResult?.map((repo: RepoModel) => getRepoCard(repo))}
    </RepoList>
  )

  return (
    <div className="container">
      <h2>Search Repositories</h2>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          debouncer({ variables: { queryString: e.target.value } })
        }}
      />
      {loading ? <Loader /> : <GetRepoList />}
    </div>
  )
}
