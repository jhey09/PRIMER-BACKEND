import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  // Estado del formulario 
  const [form , setForm] = useState({
    Name: "",
    lastName: "",
    age: "",
    cedula:"",
    curso:"",

   
  })

  // Estado de postear
  const [ post, setPost] = useState([])
  //Estado de obtención de datos 
  const [getDatos, setGetDatos] = useState([])
  const url = 'http://localhost:4000/Alumno'


  // Obtener datos 
  const getDatosAlumnos = async() =>{
    const response = await axios.get(url)
    setGetDatos(response.data)
  }

  //Publicar datos 
  const postData = async(e) => {
    e.preventDefault(); 

    const getDatosform = {
      Name: form.Name,
      lastName: form.lastName,
      age: form.age,
      cedula: form.cedula,
      curso: form.curso,
    }
    const response = await axios.post(url, getDatosform)
    setPost(response.data)
  }

  // Borrar datos 
  const deleteId = async(e) =>{
    const url = `http://localhost:4000/Alumno/${e}`
    const response = await axios.delete(url)
    console.log(response)
    getDatos()
  }
 // Editar
  const editAlumno = async(id) =>{
    const url = `http://localhost:4000/Alumno /${id}`
    const response = await axios.get(url)
    console.log(response)
    const AlumnoEdit = response.data

    // Pasar los valores originales de la colección del formulario 
    setForm({
      Name: AlumnoEdit.Name,
      lastName: AlumnoEdit.lastName,
      age: AlumnoEdit.age,
      cedula: AlumnoEdit.cedula,
      curso: AlumnoEdit.curso,
    })

    const updateAlumno = {
      Name: form.Name,
      lastName: form.lastName,
      age: form.age,
      cedula: form.cedula,
      curso: form.curso,
    }

    await axios.put(url, updateAlumno)
    getDatosAlumnos()
  } 


  useEffect(()=>{
    getDatosAlumnos(); 
  },[])

  return (
    <div>
      <form onSubmit={postData}>
        <input type="text" placeholder='Name' value={form.Name} onChange={(e)=> setForm({...form, Name: e.target.value})} />
        <input type="text" placeholder='lastName' value={form.lastName} onChange={(e)=> setForm({...form, lastName: e.target.value})} />
        <input type="Number"  placeholder='age'  value={form.age} onChange={(e)=> setForm({...form, age: e.target.value})} />
        <input type="text"  placeholder='cedula' value={form.cedula} onChange={(e)=> setForm({...form, cedula: e.target.value})} />
        <input type="text"  placeholder='curso' value={form.curso} onChange={(e)=> setForm({...form, curso: e.target.value})} />
        <button>Enviar</button>
      </form>

     {getDatos.map(elemento => 
      <div key={elemento._id}>
        <h4>{elemento.Name}</h4>
        <h4>{elemento.lastName}</h4>
        <h4>{elemento.age}</h4>
        <h4>{elemento.cedula}</h4>
        <h4>{elemento.curso}</h4>
        <button value={elemento._id} onClick={(e) => deleteId(e.target.value)} >Borrar</button>
        <button onClick={()=> editAlumno(elemento._id)}>Editar</button>
      </div>)}

    </div>
  )
}

export default App