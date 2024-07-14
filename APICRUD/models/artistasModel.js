const {Sequelize} = require("sequelize")

const db = new Sequelize("tifcodoacodo","root","",{
    host : "localhost",
    dialect : "mysql",
    port: 3306
})

const {DataTypes} = require("sequelize")

const Artistas = db.define("artistas", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  pais: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Artistas;
