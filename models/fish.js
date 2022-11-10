const mongoose = require("mongoose") 
const fishSchema = mongoose.Schema({ 
 fish_name: String, 
 fish_type: String, 
 fish_size: Number
}) 
 
module.exports = mongoose.model("fish", 
fishSchema) 