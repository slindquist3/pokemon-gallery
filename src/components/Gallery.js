import React from 'react';

const Gallery = (props) => {


    return (
        <div>
            <h1>{props.pokemon.name}</h1>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} />
        </div>
    )

}

export default Gallery;
