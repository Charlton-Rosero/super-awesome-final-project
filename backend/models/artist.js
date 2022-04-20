
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artist = new Schema( {
    name: { type: String, required: true },
    genre:{type: String, required: true},
    years_active:{type:String, required: true},
    members:{type:String, required: false},
    labels:{type:String, required: false},
    bio:{type:String, required: false},
},

{timestamps: true},
)

 module.exports = mongoose.model('Artists', Artist)
