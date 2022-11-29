const express = require('express');
const cors = require('cors')

class Server {

    //Defino las propiedades dentro del constructor:
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }


    //Metodos:
    middlewares() {

        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body que viene del PUT o POST, hace que esa info se serialice en formato json.
        this.app.use(express.json());

        //Directorio publico. Busca el index.html
        this.app.use(express.static('public'));
        //El use es la parabra clave para decir que es un middleware

    }


    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto 8080', this.port )
        })
    }

}

module.exports = Server;