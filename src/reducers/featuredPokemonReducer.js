export default (state, action) => {
    switch (action.type) {
        case 'FETCH_FEATURED':
         return action.payload;
        default: return null;
    }
}