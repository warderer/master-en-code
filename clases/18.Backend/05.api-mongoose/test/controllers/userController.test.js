// SUPERTEST es una libreria similar a AXIOS pero enfocada para hacer test
const request = require('supertest');
const app = require('../../server');
const userServices = require('../../services/UserServices');
const dbHandler = require('../db-handler');

const agent = request.agent(app); //aqui simulo mi servidor

//antes de los test ejecuta esto
beforeAll(async () => await dbHandler.connect());

//después de cada test, ejecuta esto
afterEach(async () => await dbHandler.clearDatabase());

//después de ejecutar todos los test, ejecuta esto
afterAll(async () => await dbHandler.closeDatabase());

describe('UserController',() => {

    it('Esto deve devolver usuarios', async() => {
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

        await userServices.createUser(mockUser1);
        await userServices.createUser(mockUser2);

        const response = await agent.get('/users').expect(200)
        expect(response.body).toHaveLength(2);
        expect(response.body[0]._id).toBeTruthy();
    });

    it('Esto debe crear un usuario', async() => {
        const response = await agent.post('/users')
            .field('email','testuser@gmail.com')
            .field('name', 'test user')
            .field('password', 'testpassword')
            .expect(201)
        expect(response.body.email).toBe('testuser@gmail.com');
        expect(response.body._id).toBeTruthy;
    });

    it('Esto no debería crear un usuario', async() => {
        const response = await agent.post('/users')
            //.field('email','testusergmail.com')
            .field('name', 'test user')
            .field('password', 'testpassword')
            .expect(400)
        //expect(response.body.email).toBe('testuser@gmail.com');
        expect(response.body.errors).toBeTruthy;
        expect(response.body.errors).toHaveProperty('email');
    });
});