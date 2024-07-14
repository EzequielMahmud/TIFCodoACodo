const {Sequelize} = require("sequelize")

const db = new Sequelize("tifcodoacodo","root","",{
    host : "localhost",
    dialect : "mysql",
    port: 3306
})

const {DataTypes} = require("sequelize")

const cancionesModel = db.define("canciones", {
  titulo: { type: DataTypes.STRING},
  artista: { type: DataTypes.STRING},
  duracion: { type: DataTypes.TIME },
  anio_lanzamiento: { type: DataTypes.INTEGER },
});

module.exports = cancionesModel;