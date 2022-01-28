const express = require('express');
const router  = express.Router();
const estudianteControlador = require('../controlador/controlador');

router.get('/',(req,res)=>{
    res.send("hola desde router!")
});


router.get('/estudiantes', estudianteControlador.getEstudiantes);
router.get('/nuevoestudiante', estudianteControlador.postNuevoEstudiante);
router.post('/nuevoestudiante', estudianteControlador.postNuevoEstudiante);
router.post('/detalle',estudianteControlador.getDetalleEstudiante);

module.exports = router;