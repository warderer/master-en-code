// Describe recibe 2 parametros:
// 1) Como se llama el Test
// 2) Un CallBack

describe('Mi Primer Test', ()=>{
    //Aquí van las cosas a testear

    //it es para declarar una prueba
    it('Que exista un texto', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#un-p').contains('Aqui esta un parrafo para que pruebes')
        cy.get('.App-link').contains('Learn React')
    })

    it('Que exista un formulario en la página principal', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('#user').type('usuario')
        cy.get('#password').type('123')
        cy.get('#onLogin').click()
    });

    it('No se escribe el password', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('#user').type('usuario')
        cy.get('#onLogin').click()
    });

});