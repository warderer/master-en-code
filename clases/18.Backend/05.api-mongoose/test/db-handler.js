const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

//Literal estamos creando un server de mongo pequeño en memoria.
const mongod = new MongoMemoryServer();

const connect = async () => {
    const uri = await mongod.getUri();
    const mongooseOptions = {
        useNewUrlParser: true,
        autoReconnect: true,
        useUnifiedTopology: true, // Soporte para multiples versiones de mongo
        useCreateIndex: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    }

    await mongoose.connect(uri,mongooseOptions);
}

const closeDatabase = async() => {
    await mongoose.connection.dropDatabase;
    await mongoose.connection.close();
    await mongod.stop();
} // Se ejecuta cuando acabe todos los test

const clearDatabase = async() => {
    const collections = mongoose.connection.collections;
    
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
} // Se ejecuta cada vez que se ejecuta un test

module.exports = {
    connect,
    closeDatabase,
    clearDatabase
}