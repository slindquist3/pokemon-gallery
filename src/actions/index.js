export const addFavorite = favorite => {
    return {
        type: 'ADD_FAVORITE',
        payload: favorite
    }
}