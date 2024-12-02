
module.exports = (mongoose) => {
    const conn = mongoose.connect("mongodb://localhost:27017/playground")
    conn.then(() => {
        console.log("db connection successful")
    }).catch(e => {
        console.log("db connection error", e.message)
    })

    const Company = mongoose.model("Companies", new mongoose.Schema({
        name: {type: String, required: true},
        industry: {type: String, required: true}
    }))

    const module = []

    module.getList = async () => {
        return await Company.find()
    }

    module.getByID = async (id) => {
        return await Company.find({_id: id})
    }

    return module
}