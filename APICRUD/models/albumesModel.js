const {Sequelize} = require("sequelize")

const db = new Sequelize("tifcodoacodo","root","",{
    host : "localhost",
    dialect : "mysql",
    port: 3306
})

const {DataTypes} = require("sequelize")

const Albumes = db.define("albumes", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  artista: { type: DataTypes.STRING, allowNull: false },
  anio_lanzamiento: { type: DataTypes.INTEGER },
});

module.exports = Albumes;