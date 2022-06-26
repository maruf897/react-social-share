import express from "express"
import cors from "cors"
import React from "react"
import { renderToString, renderToNodeStream, renderToStaticNodeStream, renderToReadableStream, renderToStaticMarkup } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import App from './src/App.js'
import About from "./src/app/about/about.jsx"
import Test from "./src/app/about/test.js"


const app = express()

app.use(cors())
app.use(express.static("dist"))

app.get("*", (req, res, next) => {


  const markup = renderToStaticNodeStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )

  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>SSR App: ${req.url}</title>
    </head>
  
    <body>
      <div id="root">${markup}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
    `)

})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/