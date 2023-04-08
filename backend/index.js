const express = require("express");
const app = express();
const cors = require('cors');
const RouterAlumno = require('./api')
require('dotenv').config()
require('./database/mongodb')  
 

app.use(cors())

app.use(express.json())

app.use(RouterAlumno)

app.get('/', (req, res) => {
  res.send({
    message: 'hola mundo'
  })
})
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`puerto ${PORT}`);
});
