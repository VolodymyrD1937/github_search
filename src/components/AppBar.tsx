import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { AppBarButton } from "./AppBarButton"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import FavoriteIcon from "@mui/icons-material/Favorite"

export const TopAppBar = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            gap: "16px",
          }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GitHub Search
          </Typography>
          <AppBarButton
            disabled={location.pathname === "/"}
            onClick={() => {
              navigate("/")
            }}>
            <SearchRoundedIcon />
            Search
          </AppBarButton>
          <AppBarButton
            disabled={location.pathname === "/favorites"}
            onClick={() => {
              navigate("/favorites")
            }}>
            <FavoriteIcon />
            Favorites
          </AppBarButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
