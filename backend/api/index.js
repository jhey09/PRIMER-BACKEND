const express = require('express')
const router = express.Router()

const RouterAlumno =  require('./RouterColletion')
 
router.use('/Alumno', RouterAlumno)

module.exports = router