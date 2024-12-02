const mongoose = require("mongoose")

// connection
const connection = mongoose.connect("mongodb://localhost:27017/playground")
connection.then(result => {
    console.log(`connected... `)
}).catch(e => {
    console.log("connection error...", e)
})

//Class schema definition
const coursesSchema = new mongoose.Schema({
    name: { type: String, required: true},
    author: String,
    price: {type: Number, default: 10},
    tags: [String],
    dateCreated: {type: Date, default: Date.now()},
    isPublished: Boolean
})

//mapping schema to db model
const Courses = mongoose.model("Courses", coursesSchema)

const createCourse = async (course) => {
    /*const newCourse = new Courses({
        //name: "mongoose course",
        author: "joaquim",
        price: 13,
        tags: ["mongodb", "mongoose"],
        isPublished: false
    })*/

    const newCourse = new Courses(course)
    return await newCourse.save()
}

const course = {
    //name: "mongoose course",
    author: "joaquim",
    price: 13,
    tags: ["mongodb", "mongoose"],
    isPublished: false
}
createCourse(course).then(result => {
    console.log("saved", result)
}).catch(e => {
    console.log(e.message)
})
