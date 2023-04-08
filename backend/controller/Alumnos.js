 const AlumnosModel = require('../models/collection')


 const getAlumnos = async() =>{

    return AlumnosModel.find({})
 }

 const getByID = async(_id) =>  {
    return AlumnosModel.findOne({_id})
 }

const createAlumno = async(body) =>{
    const newAlumno = new AlumnosModel(body)
    await newAlumno.save()
    return newAlumno
}

const updateAlumno = async(_id, updateObject) =>{
    return AlumnosModel.findOneAndUpdate({_id}, updateObject,{
        upsert: false, 
        new: true
    })
}

const removeAlumno = async(_id) =>{
    return AlumnosModel.findByIdAndDelete({_id})
}

module.exports = {
    getAlumnos,
    getByID,
    createAlumno,
    updateAlumno,
    removeAlumno

}