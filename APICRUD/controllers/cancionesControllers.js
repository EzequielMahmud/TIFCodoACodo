const Canciones = require("../models/cancionesModel");

// CREATE - READ - UPDATE - DELETE

// read - get
const traerCanciones = async (req, res) => {
    try {
        const canciones = await Canciones.findAll();
        res.json(canciones);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// read - get
const traerUnaCancion = async (req, res) => {
    try {
        const cancion = await Canciones.findByPk(req.params.id);
        res.json(cancion);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// create - post
const crearCancion = async (req, res) => {
    try {
        await Canciones.create(req.body);
        res.json({ "message": "Registro creado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// update - put
const actualizarCancion = async (req, res) => {
    try {
        await Canciones.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro actualizado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

const borrarCancion = async (req, res) => {
    try {
        await Canciones.destroy({
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro borrado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = {traerCanciones, traerUnaCancion, crearCancion, actualizarCancion, borrarCancion};
