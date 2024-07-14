const express = require("express");
const router = express.Router();
const { traerArtistas, traerUnArtista, crearArtista, actualizarArtista, borrarArtista } = require("../controllers/artistasControllers");

router.get("/", traerArtistas);
router.get("/:id", traerUnArtista);
router.post("/", crearArtista);
router.put("/:id", actualizarArtista);
router.delete("/:id", borrarArtista);

module.exports = router;
