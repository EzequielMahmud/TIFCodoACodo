const Artistas = require("../models/artistasModel");

// read - get
const traerArtistas = async (req, res) => {
    try {
        const artistas = await Artistas.findAll();
        res.json(artistas);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// read - get
const traerUnArtista = async (req, res) => {
    try {
        const artista = await Artistas.findByPk(req.params.id);
        res.json(artista);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// create - post
const crearArtista = async (req, res) => {
    try {
        await Artistas.create(req.body);
        res.json({ "message": "Registro creado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// update - put
const actualizarArtista = async (req, res) => {
    try {
        await Artistas.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro actualizado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

const borrarArtista = async (req, res) => {
    try {
        await Artistas.destroy({
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro borrado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = { traerArtistas, traerUnArtista, crearArtista, actualizarArtista, borrarArtista };
