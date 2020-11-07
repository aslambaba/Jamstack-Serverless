let mongoose = require('mongoose');

let studentSchema = require('../models/student.model');

mongoose.connect('mongodb://localhost:27017/NetlifyData', { useNewUrlParser: true, useUnifiedTopology: true });
var con = mongoose.connection;
con.on("Connected", () => {
  console.log("Database Connected")
})

const handler = async (event) => {

  const data = JSON.parse(event.body);
  console.log(data);

  const student = studentSchema({
    Name: data.name,
    Age:  data.age,
    Class: data.class,
  });

  student.save().then(console.log('Saved !!'));

  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: data }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
