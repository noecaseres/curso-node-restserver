const {response, request} = require('express'); //Para que lea el predictivo 

const usuariosGet = (req = request, res = response) => {

    //Para desestructurar los params (http://localhost:8080/api/usuarios?q=hola&limit=4)
    const {q, nombre ='No name', apiKey, page = 1, limit } = req.query
    
    res.json({
        msg: 'get API - controlador',
        q, 
        nombre,
        apiKey,
        page, 
        limit 
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id

    res.json({
        msg: 'put API - controlador',
        id
    })
}

const usuariosPost = (req, res = response) => {

    // const body = req.body;
    const {nombre, edad} = req.body; //De esta forma desdestructuro y determino que info puede enviar el user, si mando otra info, no se graba.

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}