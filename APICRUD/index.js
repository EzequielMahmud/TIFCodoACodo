const express = require("express");
const cors = require("cors");
const db = require("./data/db.js");
const Sequelize = require('sequelize');
// express
const app = express();
const port = 3030;

// Middleware
app.use(cors());
app.use(express.json());

// Autenticación de la base de datos por las dudas
db.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });
  
// Vamos con las rutas
const cancionesRouter = require("./routes/cancionesRouter");
const albumesRouter = require("./routes/albumesRouter");
const artistasRouter = require("./routes/artistasRouter");
const comentariosRouter = require("./routes/comentariosRouter");

// Rutas de ejemplo
app.get("/", (req, res) => {
    res.send("Estás en el home");
});

// Rutas principales
app.use("/canciones", cancionesRouter);
app.use("/albums", albumesRouter);
app.use("/artistas", artistasRouter);
app.use("/comentarios", comentariosRouter);
  

// Conexión a la base de datos
const conexiondb = async ()=>{
  try{
      await db.authenticate()
      console.log(`Conexión ok a la base de datos`)
  } catch(error){
      console.log(`el error es: ${error}`)
  }
}

// Iniciar el servidor
app.listen(port, () => {
    conexiondb();
    console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;