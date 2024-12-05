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
        name: {type: String, required: true},
        phone: {
            type: String,
            /*validate: { //use Joi for validation so it isnt redundant
                validator: /^(\+?351)?9\d\d{7}$/ //PT phone number
            },*/
            required: true
        },
        isPrime: {type: Boolean, required: true}
    }))

    const model = {}
    model.getList = async () => {
        try {
            return await Customer.find()
        } catch (e) {
            return e
        }
    }

    model.getByID = async (id) => {
        try {
            return await Customer.find({_id: id})
        } catch (e) {
            return e
        }
    }

    model.create = async (data) => {
        try {
            const newCustomer = new Customer({
                name: data.name,
                phone: data.phone,
                isPrime: data.isPrime
            })
            return await newCustomer.save()
        } catch (e) {
            return e
        }
    }

    model.editByID = async (id, data) => {
        try {
            const result = await Customer.findById(id)
            result.name = data.name
            result.phone = data.phone
            result.isPrime = data.isPrime

            return result.save()
        } catch (e) {
            return e
        }
    }

    model.deleteByID = async (id) => {
        try {
            return await Customer.findByIdAndDelete(id)
        } catch (e) {
            return e
        }
    }

    return model
}