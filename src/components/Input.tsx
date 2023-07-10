import { TextField, TextFieldProps } from "@mui/material"

export const Input = (props: TextFieldProps) => {
  return (
    <TextField
      sx={{
        marginBottom: "16px",
        width: "100%",
        maxWidth: "381px",
      }}
      {...props}
    />
  )
}
