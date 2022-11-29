const {Router} = require('express');//Router me permite llamar la funcion.
const {
    usuariosGet, 
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete 
} = require('../controllers/usuarios')

const router = Router();

//Mando la referencia de la funcion usuariosGet, NO la estoy llamando.
router.get('/', usuariosGet); 
router.put('/:id', usuariosPut);
router.post('/', usuariosPost);
router.patch('/', usuariosDelete)
router.delete('/', usuariosPatch);


module.exports = router;