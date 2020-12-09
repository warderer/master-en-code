import React from 'react';
import { useSongContext } from './SongContext';

function SongDetail(){
    // Consumo el contexto del estado global
    const context = useSongContext();

    const deleteFromList = title => {
        context.setList(context.list.filter(item => item.title !== title));
        context.setSelectedSong({});
    }

    return(
        <div>
            <h1>El detalle de la canción que seleccionaste</h1>
            {
                context.selectedSong.title
                ? <h1>{context.selectedSong.title}</h1>
                : <h1>Selecciona una canción</h1>
            }
            <button onClick={() =>deleteFromList(context.selectedSong.title)}>Delete</button>
        </div>
    )
}

export default SongDetail;