import * as actionTypes from '../actions/actionTypes';
const initialState = {
    loaded: false,
    landingPokemon: null,
    search: null,
    allPokemons: [],
    currentPokemon: null,
    evolutionChain: null,
    isDark: false,
    error: false
}
const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.LOADPOKEMON){
        return{
            ...state,
            search: action.search,
            loaded: false,
            currentPokemon: action.currentPokemon,
            error: action.error
        }
    }
    if(action.type === actionTypes.LOADEVOLUTIONCHAIN){
        return{
            ...state,
            evolutionChain: action.evolutionChain
        }
    }
    if(action.type === actionTypes.LOADJPNAMEANDTEXT){
        return{
            ...state,
            currentPokemon: {               //https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
                ...state.currentPokemon,    
                jpName: action.currentPokemon.jpName,
                flavourText: action.currentPokemon.flavourText
            }
        }
    }
    if(action.type === actionTypes.VIEWALLPOKEMONS){
        return{
            ...state,
            allPokemons: [...state.allPokemons, ...action.allPokemons],  //@ https://stackoverflow.com/questions/41209675/how-to-concat-arrays-immutable-way-js
            loaded: false,
            error: action.error
        }
    }
    if(action.type === actionTypes.CLEANALLPOKEMONS){
        return{
            ...state,
            allPokemons: [],
            loaded: false
        }
    }
    if(action.type === actionTypes.CLEANCURRENTPOKEMON){
        return{
            ...state,
            currentPokemon: null,
            evolutionChain: null,
            loaded: false
        }
    }
    if(action.type === actionTypes.LANDINGPOKEMON){
        return{
            ...state,
            landingPokemon: action.landingPokemon,
            loaded: false,
        }
    }
    if(action.type === actionTypes.LOADJPNAMEANDTEXTLANDINGPOKEMON){
        return{
            ...state,
            landingPokemon: {
                ...state.landingPokemon,
                jpName: action.landingPokemon.jpName,
                flavourText: action.landingPokemon.flavourText
            }
        }
    }
    if(action.type === actionTypes.CLEANLANDINGPOKEMON){
        return{
            ...state,
            landingPokemon: null,
            loaded: false,
        }
    }
    if(action.type === actionTypes.BGISDARK){
        return{
            ...state,
            isDark: action.isDark
        }
    }
    if(action.type === actionTypes.DATALOADED){
        return{
            ...state,
            loaded: true
        }
    }
    if(action.type === actionTypes.ERROR){
        return{
            ...state,
            error: action.error
        }
    }
    return state;   //very important

}





export default reducer;