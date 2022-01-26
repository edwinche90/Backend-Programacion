//const htmlGetEstudiantes = 'pego aca codigo de html en formato table';
//const estudiantes = require('../models/estudiante');
const mongoose = require('mongoose');
const Estudiante = mongoose.model('estudiante');

exports.getEstudiantes = function(req,res) {
    Estudiante.find((err,estudiantes) =>{
        if(err){
            res.send(500,err.message);
        }
        res.json(estudiantes);
    });
};

exports.getNuevoEstudiante = function(req,res){
    res.send('Error: utilizar metodo post');       //<----coloco la variable const llamada htmlGetEstudiante que continen condigo html con formato table 
}

exports.postNuevoEstudiante = function(req,res){
    let nuevoEstudiante = new Estudiante(req.body);
    nuevoEstudiante.save(function(err,estudiante){
        if(err) res.send(err);
        res.json(estudiante);
    })
    //console.log(req.body);  <--- para explicacion de creacion de datos desde posman
     //console.log(nuevoEstudiante); <--- ACA observamos como se crea el ID desde mongo DB desde posman
   
   

}