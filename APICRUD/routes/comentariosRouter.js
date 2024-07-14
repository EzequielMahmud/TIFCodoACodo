const express = require("express");
const router = express.Router();
const { traerComentarios, traerUnComentario, crearComentario, actualizarComentario, borrarComentario } = require("../controllers/comentarioControllers");

router.get("/", traerComentarios);
router.get("/:id", traerUnComentario);
router.post("/", crearComentario);
router.put("/:id", actualizarComentario);
router.delete("/:id", borrarComentario);

module.exports = router;
