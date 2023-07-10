import { InputAdornment, TextField, TextFieldProps } from "@mui/material"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"

export const Input = (props: TextFieldProps) => (
  <TextField
    id="search"
    placeholder="Type..."
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchRoundedIcon />
        </InputAdornment>
      ),
      sx: {
        borderRadius: "16px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 4px",
      },
    }}
    sx={{
      marginBottom: "16px",
      width: "100%",
      maxWidth: "381px",
    }}
    {...props}
  />
)
