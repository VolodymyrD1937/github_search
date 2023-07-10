import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client"
import { client } from "./apollo/config.js"
import "./index.css"
import { App } from "./App.tsx"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
