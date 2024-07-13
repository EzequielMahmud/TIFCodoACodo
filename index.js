const express = require("express");
const cors = require("cors");
const db = require("./data/db.js");


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // o 'postgres', 'sqlite', 'mariadb', 'mssql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });
  
  
const cancionesRouter = require("./routes/cancionesRouter");
const albumsRouter = require("./routes/albumsRouter");
const artistasRouter = require("./routes/artistasRouter");
const comentariosRouter = require("./routes/comentariosRouter");

const app = express();
const port = 3030;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de ejemplo
app.get("/", (req, res) => {
    res.send("Estás en el home");
});

// Rutas principales
app.use("/canciones", cancionesRouter);
app.use("/albums", albumsRouter);
app.use("/artistas", artistasRouter);
app.use("/comentarios", comentariosRouter);

// Conexión a la base de datos
const conectarDB = async () => {
    try {
        await db.authenticate();
        await db.sync();
        console.log("Conexión exitosa con la base de datos");
    } catch (error) {
        console.error("Error de conexión a la base de datos:", error);
    }
};

// Iniciar el servidor
app.listen(port, () => {
    conectarDB();
    console.log(`Servidor corriendo en el puerto ${port}`);
});


module.exports = sequelize;