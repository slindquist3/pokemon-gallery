import { combineReducers } from 'redux';
import featuredPokemonReducer from './featuredPokemonReducer';

export default combineReducers({
    featured: featuredPokemonReducer
})