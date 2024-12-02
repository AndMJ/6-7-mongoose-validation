const express = require("express")
const helmet = require("helmet")
const app = express()

//define
app.set("port", process.env.PORT)

//middlewares
app.use(express.json)
app.use(helmet)

//routes
require("./api/routes/routeCompanies")(app)

//listen
app.listen(app.get("port"), () => {
    console.log(`listening on port ${app.get("port")}`)
})