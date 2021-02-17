const ModelHome = require('../models/Home');

const createHome = (req, res) => {
    //Aqui es donde debo crear mi HOME
    //Validar que todo este bien y ejecutar mi create del Modelo.
    ModelHome.create(req.body)
    .then((row) => {
        res.status(201).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};

const findAllHomes = (req, res) => {
    ModelHome.findAll()
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};

const findOneHome = (req, res) => {
    ModelHome.findOne(req.params.idHome)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};


module.exports = {
    createHome,
    findAllHomes,
    findOneHome
}