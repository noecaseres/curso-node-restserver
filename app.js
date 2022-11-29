require('dotenv').config();
const Server = require('./models/server')


//llamo la clase server, instanciandola
const server = new Server();

//Lo levanto para que corra en el puerto 8080
server.listen();
