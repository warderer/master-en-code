// ESTE ES UN COMPONENT TEST
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; //simula el rendereado de React
import Home from './Home';
import Search from './Search';

describe('Test de componente Home',()=>{
    it('Primer test del home', () => {
        render(<Home />);
        //screen.debug();
    });

    // Buscar un elemento dentro del DOM
    it('Primer test del home', () => {
        render(<Home />);
        const label = screen.getByText('Search:') //Buscamos Search
        expect(label).toBeInTheDocument(); //Existe en el HTML?
    });

    it('Test para escribir en un input', () => {
        render(<Home />);
        const input = screen.getByTestId('search');
        // change ==> en donde va a escribir, lo que va a escribir
        //No escribe, modifica DIRECTAMENTE el objeto INPUT
        fireEvent.change(input, {
            target: {
                value: 'una busqueda más'
            }
        })
    });

    // Detectar que se detone correctamente el onChage
    it('Detectar que se detone correctamente el onChange en el componente Search', () => {
        //Esto es un mock de una función
        // jest.fn(); es una función vacia, pero puede contarse cuantas veces se ejecuto con .toHaveBeenCalledTimes()
        const functionOnChangeFake = jest.fn();

        render(<Search
            value=""
            onChange={functionOnChangeFake}
            titulo= "Este es un titulo" />
        );
        const input = screen.getByTestId('search')
        fireEvent.change(input, { //Aqui se ejecuta una vez el evento
            target: {
                value: 'una busqueda más'
            }
        })
        //¿Se ejecuto mi función al menos una vez?
        expect(functionOnChangeFake).toHaveBeenCalledTimes(1);

    });
});
