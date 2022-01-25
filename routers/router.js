const express = require('express');
const router  = express.Router();
const estudianteController = require('../controllers/controller');

router.get('/',(req,res)=>{
    res.send("hola desde router!")
});


router.get('/estudiantes', estudianteController.getEstudiantes);

module.exports = router;