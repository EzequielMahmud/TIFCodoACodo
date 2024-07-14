const Comentarios = require("../models/comentariosModel");

// read - get
const traerComentarios = async (req, res) => {
    try {
        const comentarios = await Comentarios.findAll();
        res.json(comentarios);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// read - get
const traerUnComentario = async (req, res) => {
    try {
        const comentario = await Comentarios.findByPk(req.params.id);
        res.json(comentario);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// create - post
const crearComentario = async (req, res) => {
    try {
        await Comentarios.create(req.body);
        res.json({ "message": "Registro creado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// update - put
const actualizarComentario = async (req, res) => {
    try {
        await Comentarios.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro actualizado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

const borrarComentario = async (req, res) => {
    try {
        await Comentarios.destroy({
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro borrado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = { traerComentarios, traerUnComentario, crearComentario, actualizarComentario, borrarComentario };
