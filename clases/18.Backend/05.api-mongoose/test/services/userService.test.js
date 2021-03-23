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

    });
})