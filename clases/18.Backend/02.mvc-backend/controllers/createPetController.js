const createPetController = (req,res) => {
    res.status(201).send( { mensaje: 'Aquí se debe crear una PET' } );
};

module.exports = createPetController;