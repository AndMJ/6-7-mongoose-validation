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
    name: { type: String, required: true, minLength: 5, maxLength: 72},
    author: String,
    price: {
        type: Number,
        default: 10,
        required:
        //we can set the price to be required if the course is published
            function () {
                /*we can do this. because the schema is a class*/
                return this.isPublished //so this returns the current isPublished bool value
            }
    },
    category: {
        type: String,
        enum: ["category1","category2","category3"]
    },
    tags: {
        /*custom validation*/
        type: Array,
        validate: {
            validator: function (value) {
                return (value !== null && value.length > 0)
            },
            message: "A course should have at least 1 tag!"

        }
    },
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
    name: "mongoose course",
    author: "joaquim",
    price: 13,
    tags: null,//["mongodb", "mongoose"]
    category: "category1",
    isPublished: false
}
createCourse(course).then(result => {
    console.log("saved", result)
}).catch(e => {
    //iterate over the .errors and display the message from each error
    for (let error in e.errors) {
        console.log(e.errors[error].message)
    }

})
