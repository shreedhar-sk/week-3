const mongoose = require("mongoose");

let courseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true
    },
    Author: {
        type:String,
        required: true,
    },
    SUbject_code:{
        type:String,
        required: true,
        unique:true,
    },
    subject_name:{
        type:String,
        required:true,
        unique:true,
    
    },
    Duration_in_month:{
        type: Number,
        required:true,
    },
   
},{timestamps:true});
module.exports = new mongoose.model("course",courseSchema);