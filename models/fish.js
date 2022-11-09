const mongoose = require("mongoose") 
const fishSchema = mongoose.Schema({ 
 fish_type: String, 
 size: String, 
 cost: Number
}) 
 
module.exports = mongoose.model("fish", 
fishSchema) 