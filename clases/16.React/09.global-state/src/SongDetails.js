import React from 'react';
import { useSongContext } from './SongContext';

function SongDetail(){
    // Consumo el contexto del estado global
    const context = useSongContext();
    return(
        <div>
            {
                context.selectedSong.title 
                ? <h1>{context.selectedSong.title}</h1>
                : <h1>Selecciona una canción</h1>
            }
            <h1>El detalle de la canción que seleccionaste</h1>
        </div>
    )
}

export default SongDetail;