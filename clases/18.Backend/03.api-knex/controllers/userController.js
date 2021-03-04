const ModelUser = require('../models/User');
const hashPassword = require('../utils/hashPassword');
const authenticate = require('../utils/authenticate');
const generateJWT = require('../utils/generateJWT');

const createUser = async (req, res) => {
    if (req.body.password){
        req.body.password = await hashPassword(req.body.password);
    }
    ModelUser.create(req.body)
    .then((row) => {
        res.status(201).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};

const login = async(req,res) => {
    try {
        //verificar el usuario, verificar el password, generar jwt
        const {user} = await authenticate(req.body);
        const token = generateJWT(user);
        return res.status(200).send({token});
    } catch(error){
        return res.status(400).send({message: error.message});
    }
}

const findAllUsers = (req, res) => {
    ModelUser.findAll()
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};

const findOneUser = (req, res) => {
    ModelUser.findOne(req.params.idUser)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
};

const updateOneUser = (req, res) => {
    ModelUser.update(req.params.idUser, req.body)
    .then((row) => {
        res.status(200).send(row);
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
}

const destroyOneUser = (req, res) => {
    ModelUser.destroy(req.params.idUser)
    .then(() => {
        res.status(204).send();
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
}

const softDeleteOneUser = (req, res) => {
    ModelUser.softDelete(req.params.idUser)
    .then(() => {
        res.status(204).send();
    })
    .catch((err)=> {
        res.status(400).send(err);
    })
}

module.exports = {
    createUser,
    login,
    findAllUsers,
    findOneUser,
    updateOneUser,
    destroyOneUser,
    softDeleteOneUser
}