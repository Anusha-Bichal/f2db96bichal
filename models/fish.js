const mongoose = require("mongoose") 
const fishSchema = mongoose.Schema({ 
    fish_name: {
        type:String,
        required:true
    }, 
    fish_type: {
        type:String,
        required:true
    },
    fish_size: {
        type:Number,
        min:5,
        max:500
    }
}) 
 
module.exports = mongoose.model("fish", fishSchema)