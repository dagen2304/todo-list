const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('Todos' , todoSchema)
