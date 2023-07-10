import {
  Card,
  CardContent,
  Box,
  Grid,
  Tooltip,
  Typography,
  Rating,
} from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import GitHubIcon from "@mui/icons-material/GitHub"
import { RepoModel } from "../models/RepoModel"
import { cardStyle, descriptionStyle, iconStyle } from "./styles"

interface RepoCardProps {
  repo: RepoModel
  isRepoFavorite: boolean
  onClick: () => void
  onRatingChange?: (event: React.SyntheticEvent, value: number | null) => void
  showRating?: boolean
}

export const RepoCard = (props: RepoCardProps) => {
  const {
    repo,
    isRepoFavorite,
    onClick,
    onRatingChange,
    showRating = false,
  } = props

  const RepoTooltip = () => (
    <Tooltip
      title={isRepoFavorite ? "Remove from favorites" : "Add to favorites"}>
      {isRepoFavorite ? (
        <FavoriteIcon sx={iconStyle} onClick={onClick} />
      ) : (
        <FavoriteBorderIcon sx={iconStyle} onClick={onClick} />
      )}
    </Tooltip>
  )

  return (
    <Grid item xs={1} sm={4} md={4} key={repo.id}>
      <Card variant="outlined" sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="div">
            {repo?.name}
          </Typography>
          <Typography sx={descriptionStyle} color="text.secondary">
            {repo?.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
            {showRating && (
              <Rating
                name="rating"
                value={repo.rating}
                onChange={onRatingChange}
              />
            )}
            <RepoTooltip />
            <Tooltip title="Open in GitHub">
              <GitHubIcon
                sx={{ cursor: "pointer" }}
                onClick={() => window.open(repo.url, "_blank")}
              />
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
