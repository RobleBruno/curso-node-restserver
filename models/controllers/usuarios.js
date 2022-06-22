const {response} = require ('express')

const usuariosGet = (req, res = response) => {

   
    res.json({
        msg: 'get API - controlador',
        
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;


    res.json({
    msg: 'put API - controlador',
    id
    });
}

const usuariosPost = (req, res) => {

    const body = req.body 

    res.json({
    msg: 'post API - controlador',
    body
    });
}

const usuariosDelete =(req, res) => {
    res.json({
    msg: 'delete API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}