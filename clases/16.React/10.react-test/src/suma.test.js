import suma from './suma';

// ESTE ES UN UNIT TEST
describe('Probando la funcion suma', () =>{
    it('Resultado 10', () => {
        // EJECUTAR Mi FUNCION SUMA
        const resultado = suma(5,5);
        expect(resultado).toBe(10);
        //expect(suma(5,5).toBe(10))  <-- En 1 linea
    })

    it('La suma de 3+8 = 11', () => {
        const resultado = suma(3,8);
        expect(resultado).toBe(11);
    })

    it('La suma de "3"+"8" = 11', () => {
        const resultado = suma("3","8");
        expect(resultado).toBe(undefined);
    })

    it('La suma de [3] + "8" = 11', () => {
        const resultado = suma([3], "8");
        expect(resultado).toBe(undefined);
    })

});