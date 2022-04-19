
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Artist = new Schema( {
    name: { type: String, required: true },
    genre:{type: String, required: true},
    years_active:{type:String, required: true},
    members:{type:String, required: true},
    labels:{type:String, required: true},
    bio:{type:String, required: false},
},

{timestamps: true},
)

 module.exports = mongoose.model('Artists', Artist)
