const express = require('express')
const router = express.Router()
const  { AlumnoController } = require('../controller')
const {
    getAlumnos,
    getByID,
    createAlumno,
    updateAlumno,
    removeAlumno
} = AlumnoController

router.get('/', async(req,res)=>{
    const Alumno = await getAlumnos()
    res.send(Alumno)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const Alumno = await getByID(id)
  
    if (!Alumno) {
      res.status(404)
      return res.send({
        message: `Alumno: ${id} no encontrado`
      })
    }
  
    return res.send(Alumno)
  })
  
router.post('/', async(req,res)=>{
    const body = req.body
   try{
    const newAlumno = await createAlumno(body)
    res.send(newAlumno)
   } catch(err){
    console.error(err)
   }
})

router.put('/:id', async(req,res)=>{
    const {id} = req.params
    const body = req.body
    const Alumno = await updateAlumno(id ,body)
    if(!Alumno){
        return res.send({
            message: `Alumno con ${id} no encontrado `
        })
    }
    res.send(Alumno)
})

router.delete('/:id', async(req,res)=>{
const {id} = req.params
const result = await removeAlumno(id)

res.send(result)
})

module.exports = router