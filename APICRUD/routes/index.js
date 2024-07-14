/* const express = require("express");
const router = express.Router();

const albumesController = require("../controllers/albumesControllers");
const cancionesController = require("../controllers/cancionesControllers");
const artistasController = require("../controllers/artistasControllers");
const comentariosController = require("../controllers/comentarioControllers");

// Usar las rutas
router.use("/canciones", cancionesRouter);
router.use("/albums", albumesRouter);
router.use("/artistas", artistasRouter);
router.use("/comentarios", comentariosRouter);

// Rutas para álbumes
router.get("/albumes", albumesController.traerAlbumes);
router.get("/albumes/:id", albumesController.traerUnAlbum);
router.post("/albumes", albumesController.crearAlbum);
router.put("/albumes/:id", albumesController.actualizarAlbum);
router.delete("/albumes/:id", albumesController.borrarAlbum);

// Rutas para canciones
router.get("/canciones", cancionesController.traerCanciones);
router.get("/canciones/:id", cancionesController.traerUnaCancion);
router.post("/canciones", cancionesController.crearCancion);
router.put("/canciones/:id", cancionesController.actualizarCancion);
router.delete("/canciones/:id", cancionesController.borrarCancion);

// Rutas para artistas
router.get("/artistas", artistasController.traerArtistas);
router.get("/artistas/:id", artistasController.traerUnArtista);
router.post("/artistas", artistasController.crearArtista);
router.put("/artistas/:id", artistasController.actualizarArtista);
router.delete("/artistas/:id", artistasController.borrarArtista);

// Rutas para comentarios
router.get("/comentarios", comentariosController.traerComentarios);
router.get("/comentarios/:id", comentariosController.traerUnComentario);
router.post("/comentarios", comentariosController.crearComentario);
router.put("/comentarios/:id", comentariosController.actualizarComentario);
router.delete("/comentarios/:id", comentariosController.borrarComentario);

module.exports = router;
 */