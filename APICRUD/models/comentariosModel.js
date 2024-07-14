const {Sequelize} = require("sequelize")

const db = new Sequelize("tifcodoacodo","root","",{
    host : "localhost",
    dialect : "mysql",
    port: 3306
})

const {DataTypes} = require("sequelize")

const Comentarios = db.define("comentarios", {
  contenido: { type: DataTypes.TEXT, allowNull: false },
  id_cancion: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Comentarios;
