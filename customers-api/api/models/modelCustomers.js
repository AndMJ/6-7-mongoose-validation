const mongoose = require("mongoose")

//connection
/*const conn = mongoose.connect("mongodb://localhost:27017/playground")
conn.then().catch(e => {
    console.log("DB connection error", e)
})*/

//schema and model mapping


module.exports = () => {
    const module = []
    module.getList = async () => {
        return {name: "jorge", age: 12}
    }

    return module
}