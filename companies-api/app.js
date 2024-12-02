const express = require("express")
const helmet = require("helmet")
const app = express()

//db connection
//require("./api/db/mongodb")

//middlewares
app.use(express.json())
app.use(helmet())

//routes
require("./api/routes/routeCompanies")(app)

//define
app.set("port", process.env.PORT || 3000)

//listen
app.listen(app.get("port"), () => {
    console.log(`listening on port ${app.get("port")}`)
})