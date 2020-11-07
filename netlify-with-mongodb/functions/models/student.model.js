const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    Name:String,
    Age: Number,
    Class: String,
});

const studentmodel = mongoose.model('students', StudentSchema);
module.exports = studentmodel;
