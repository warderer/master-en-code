const mongoose = require('mongoose');
const dbHandler = require('../db-handler');
const userService = require('../../services/UserServices');
const userModel = require('../../models/Users');

//antes de los test ejecuta esto
beforeAll(async () => await dbHandler.connect());

//después de cada test, ejecuta esto
afterEach(async () => await dbHandler.clearDatabase());

//después de ejecutar todos los test, ejecuta esto
afterAll(async () => await dbHandler.closeDatabase());

describe('User services', () =>{
    //Quiero probar todo user services

    it('Debo poder crear un usuario', async() => {
        //vamos a probar
        //expect(true).toBe(true);
        const mockUser = {
            name:"test user",
            email:"testuser@gmai.com",
            password:"test"
        }

        const userDb = await userService.createUser(mockUser);

        expect(mockUser.email).toBe(userDb.email);
        expect(userDb).toHaveProperty('_id');
    });

    it('Esto no debe generar un usuario', async() => {
        // thThrow trabaja solo con funciones sincronas, por lo que debemos esperar que se resuelva la promesa con rejects
        expect(async () => await userService.createUser()).rejects.toThrow('No hay un usuario');
    });

    it('Esto debe devolver un arreglo de usuarios', async() => {
        const mockUser1 = {
            name:"test user",
            email:"testuser1@gmail.com",
            password:"test"
        }

        const mockUser2 = {
            name:"test user 2",
            email:"testuser2@gmail.com",
            password:"test"
        }

        await userService.createUser(mockUser1);
        await userService.createUser(mockUser2);

        const users = await userService.findUsers();
        expect(users).toHaveLength(2);
        expect(users[0]).toHaveProperty('_id');
    })
})