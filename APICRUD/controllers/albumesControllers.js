const Albumes = require("../models/albumesModel");

// CREATE - READ - UPDATE - DELETE

// read - get
const traerAlbumes = async (req, res) => {
    try {
        const albumes = await Albumes.findAll();
        res.json(albumes);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// read - get
const traerUnAlbum = async (req, res) => {
    try {
        const album = await Albumes.findByPk(req.params.id);
        res.json(album);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// create - post
const crearAlbum = async (req, res) => {
    try {
        await Albumes.create(req.body);
        res.json({ "message": "Registro creado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// update - put
const actualizarAlbum = async (req, res) => {
    try {
        await Albumes.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro actualizado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

const borrarAlbum = async (req, res) => {
    try {
        await Albumes.destroy({
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro borrado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = { traerAlbumes, traerUnAlbum, crearAlbum, actualizarAlbum, borrarAlbum };
