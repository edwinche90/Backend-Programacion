const mongoose= require('mongoose');
const studenSchema= new mongoose.Schema({
    Nombre: {
        type:String,
        required:true
    },
    Edad: {
        type:Number,
        required:false
    }
  
});

module.exports = mongoose.model('estudiante', studenSchema);