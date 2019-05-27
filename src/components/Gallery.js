import React from 'react';

const Gallery = (props) => {


    return (
        <div>
            <h1>{props.pokemon.name}</h1>
            <img src={props.pokemon}/>
        </div>
    )

}

export default Gallery;