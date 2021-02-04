const Pet = require('../models/Pets');

const createPetController = (req,res) => {
    console.log(req.body);
    //En el controlador podemos colocar validaciones
    if (!req.body.name || !req.body.age) {
        res.status(400).send({ message: 'Datos incorrectos'} )
    } else {
        const newPet = new Pet(req.body.name, req.body.age);
        res.status(201).send(newPet.getPet());
    }
};

module.exports = createPetController;