const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const Comentarios = db.define("comentarios", {
  contenido: { type: DataTypes.TEXT, allowNull: false },
  id_cancion: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: true, // createdAt y updatedAt
});

module.exports = Comentarios;
