const Sequelize = require('sequelize');

const db = new Sequelize("tifcodoacodo", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const Canciones = require("../models/cancionesModel");
const Albumes = require("../models/albumesModel");
const Artistas = require("../models/artistasModel");
const Comentarios = require("../models/comentariosModel");

// Relaciones
Albumes.hasMany(Canciones, { foreignKey: "id_album" });
Canciones.belongsTo(Albumes, { foreignKey: "id_album" });

Artistas.hasMany(Canciones, { foreignKey: "id_artista" });
Canciones.belongsTo(Artistas, { foreignKey: "id_artista" });

Canciones.hasMany(Comentarios, { foreignKey: "id_cancion" });
Comentarios.belongsTo(Canciones, { foreignKey: "id_cancion" });

module.exports = db;