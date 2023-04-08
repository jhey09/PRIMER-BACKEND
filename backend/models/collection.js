const mongoose = require('mongoose');
const { Schema} = mongoose;

const AlumnoSchema = new Schema({
  Name: {
    type: String,
    require: true,
  },
  lastName: String,
  age: Number,
  cedula: {
    type: String,
    require: true,
  },
  curso: {
    type: String,
    require: true,
  },
},
{versionkey: false,
timestamps: true}
);

const AlumnosModel =mongoose.model('Alumnos', AlumnoSchema)
module.exports = AlumnosModel