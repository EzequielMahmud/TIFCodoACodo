
const db = require("../data/db.js");
const {DataTypes} = require("sequelize");

const Canciones = db.define("canciones", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  artista: { type: DataTypes.STRING, allowNull: false },
  duracion: { type: DataTypes.TIME },
  anio_lanzamiento: { type: DataTypes.INTEGER },
  id_album: { type: DataTypes.INTEGER, allowNull: true },
}, {
  timestamps: true, // createdAt y updatedAt
});

module.exports = Canciones;
