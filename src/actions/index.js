export const fetchFeatured = () => async dispatch => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(response => response.json())

    dispatch({type: 'FETCH_FEATURED', payload: response})


  
}

