import { red } from "@mui/material/colors"

export const cardStyle = {
  "borderRadius": "16px",
  "boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  "border": "none",

  "&&& .MuiCard-root": {
    paddingBottom: "16px",
  },
}

export const descriptionStyle = {
  mb: 1.5,
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  height: "48px",
  overflow: "hidden",
  wordBreak: "break-word",
}

export const iconStyle = {
  color: red[500],
  cursor: "pointer",
  margin: " 0 16px 0 auto",
}
