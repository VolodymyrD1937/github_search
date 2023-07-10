import { Button, ButtonProps } from "@mui/material"

export const AppBarButton = (props: ButtonProps) => {
  return (
    <Button
      color="inherit"
      sx={{
        "gap": "8px",

        "&.Mui-disabled": {
          color: "rgba(255, 255, 255, 0.5)",
        },
      }}
      {...props}
    />
  )
}
