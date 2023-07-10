import { Grid, GridProps } from "@mui/material"

export const RepoList = (props: GridProps) => (
  <Grid
    container
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 1, sm: 8, md: 12 }}
    {...props}
  />
)
