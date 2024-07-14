const express = require("express");
const router = express.Router();
const {traerCanciones, traerUnaCancion, crearCancion, actualizarCancion, borrarCancion} = require("../controllers/cancionesControllers");
const cancionesModel = require("../models/cancionesModel")

router.get("/", traerCanciones);
router.get("/:id", traerUnaCancion);
router.post("/", crearCancion);
router.put("/:id", actualizarCancion);
router.delete("/:id", borrarCancion);

module.exports = router;
