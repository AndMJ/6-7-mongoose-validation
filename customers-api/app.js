const express = require("express")
const helmet = require("helmet")
const app = express()

app.use(express.json())
app.use(helmet())

//routes
require("./api/routes/routeCustomers")(app)

app.set("port", process.env.PORT)

app.listen(app.get("port"), () => {
    console.log(`Listening to port ${app.get("port")}`)
})