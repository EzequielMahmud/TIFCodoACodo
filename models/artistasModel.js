const db = require("../data/db.js");
const { DataTypes } = require("sequelize");

const Artistas = db.define("artistas", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  pais: { type: DataTypes.STRING, allowNull: true },
  estilo: { type: DataTypes.STRING, allowNull: true },
}, {
  timestamps: true, // createdAt y updatedAt
});

module.exports = Artistas;
