import React from "react"
import { createRoot } from "react-dom/client"
import { ApolloProvider } from "@apollo/client"
import { client } from "./apollo/config.js"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
