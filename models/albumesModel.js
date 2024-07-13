const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const Albumes = db.define("albumes", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  artista: { type: DataTypes.STRING, allowNull: false },
  anio_lanzamiento: { type: DataTypes.INTEGER },
}, {
  timestamps: true, // createdAt y updatedAt
});

module.exports = Albumes;