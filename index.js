 const express = require("express");
 const mongoose = require("mongoose");
 const cors = require("cors");
 const bodyparser =require("body-parser");
 require ('dotenv/config');
 const servidor = express();
 const PORT = process.env.PORT|| 3000;
 const estudiante = require('./models/estudiante');
 const Router = require('./routers/router');


servidor.use(cors());
servidor.use(bodyparser.urlencoded({extended:true}));
servidor.use(bodyparser.json());

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
 console.log("conectado a la base de datos");
});

/*servidor.get('/', function(req, res){
    res.send("hola mundo ");
})*/

servidor.use(Router);

servidor.listen(PORT, function(){
    console.log(`servidor activo ${PORT}`);
});