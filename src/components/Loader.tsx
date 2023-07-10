import { Box, CircularProgress } from "@mui/material"

export const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
    <CircularProgress />
  </Box>
)
