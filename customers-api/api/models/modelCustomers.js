const mongoose = require("mongoose")
module.exports = () => {
    //connection
    const conn = mongoose.connect("mongodb://localhost:27017/playground")
    conn.then(() => {
        console.log("db connection successful")
    }).catch(e => {
        console.log("db connection error", e.message)
    })

    //schema and model mapping
    const Customer = mongoose.model("Customers", new mongoose.Schema({
        name: String,
        phone: String,
        isPrime: Boolean
    }))

    const model = {}
    model.getList = async () => {
        try {
            return await Customer.find()
        } catch (e) {
            return e
        }
    }

    return model
}