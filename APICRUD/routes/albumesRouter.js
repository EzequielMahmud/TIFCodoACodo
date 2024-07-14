const express = require("express");
const router = express.Router();
const { traerAlbumes, traerUnAlbum, crearAlbum, actualizarAlbum, borrarAlbum } = require("../controllers/albumesControllers");

router.get("/", traerAlbumes);
router.get("/:id", traerUnAlbum);
router.post("/", crearAlbum);
router.put("/:id", actualizarAlbum);
router.delete("/:id", borrarAlbum);

module.exports = router;
