import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getPokemon = (search) => {
    return (dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then((res) => {
                dispatch({
                    type: actionTypes.LOADPOKEMON,
                    search: search,
                    loaded: true,
                    currentPokemon: {
                        id: res.data.id,
                        name: res.data.name,
                        height: res.data.height,
                        weight: res.data.weight,
                        species: res.data.species,
                        stats: res.data.stats,
                        types: res.data.types
                    },
                    error: false
                });
                dispatch(getSpecies(res.data.species.url));
            })
            .catch((err) => {
                    dispatch({
                        type: actionTypes.ERROR,
                        error: true
                    })
            })
    }
}

export const getSpecies = (speciesURL) => {
    return((dispatch) => {
        axios.get(speciesURL)
            .then((res) => {
                dispatch({
                    type: actionTypes.LOADJPNAMEANDTEXT,
                    currentPokemon:{
                        jpName: jpNameHandler(res.data.names),
                        flavourText: flavourTextHandler(res.data.flavor_text_entries)
                    }
                });
                dispatch(getEvolutionChain(res.data.evolution_chain.url));
            })
    });
}

export const getEvolutionChain = (evoURL) => {
    return((dispatch) => {
        axios.get(evoURL)
            .then((res) => {
                dispatch({
                    type: actionTypes.LOADEVOLUTIONCHAIN,
                    evolutionChain: pokeEvolHandler(res.data)
                })
            })
    })
}


const pokeEvolHandler = (jsondata) => {
    let evoChain = [];
    let evoData = jsondata.chain;
    do {
      let numberOfEvolutions = evoData['evolves_to'].length;  
      evoChain.push({
        "species_name": evoData.species.name,
        "id": evoData.species.url.split('/')[6],
        "evolution_details": (evoData.evolution_details.length === 0) ? 1 : evoData.evolution_details[0],
      });
    
      if(numberOfEvolutions > 1) {
        for (let i = 1;i < numberOfEvolutions; i++) { 
          evoChain.push({
            "species_name": evoData.evolves_to[i].species.name,
            "id": evoData.evolves_to[i].species.url.split('/')[6],
            "evolution_details": (evoData.evolves_to[i].length === 0)? 1 : evoData.evolves_to[i].evolution_details[0],
         });
        }
      }        
    
      evoData = evoData['evolves_to'][0];
    
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
    
    return evoChain;
}

const flavourTextHandler = (jsondata) => {
    const flavourText = jsondata.filter((flavourtext) => {
        if(flavourtext.language.name === "en"){
            return(flavourtext);
        }
    });
    return flavourText;
}

const jpNameHandler = (jsondata) => {
    const jpName = jsondata.filter((name) => {
        if(name.language.name === 'ja'){
            return(name);
        }
    })
    return jpName;
}


export const getAllPokemon = (pageno) => {
    if(pageno >= 1 && pageno <= 23){
        return((dispatch) => {
            const offset = (pageno - 1) * 35;
            axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=35`)
                .then((res) => {
                    console.log(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=35`);
                    dispatch({
                        type: actionTypes.VIEWALLPOKEMONS,
                        allPokemons: res.data.results,
                        offset: offset,
                        error: false
                    })
                })
        })
    }else{
        return (dispatch) => {
            dispatch({
                type: actionTypes.ERROR,
                error: true
            })
        }
    }
}


export const getLandingPokemon = (search) => {
    return((dispatch) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((res) => {
            dispatch({
                type: actionTypes.LANDINGPOKEMON,
                landingPokemon: {
                    id: res.data.id,
                    name: res.data.name,
                    height: res.data.height,
                    weight: res.data.weight,
                    species: res.data.species,
                    stats: res.data.stats,
                    types: res.data.types
                }
            });
            dispatch(getSpeciesLanding(res.data.species.url));
        })
    })
}

const getSpeciesLanding = (speciesURL) => {
    return((dispatch) => {
        axios.get(speciesURL)
            .then((res) => {
                dispatch({
                    type: actionTypes.LOADJPNAMEANDTEXTLANDINGPOKEMON,
                    landingPokemon:{
                        jpName: jpNameHandler(res.data.names),
                        flavourText: flavourTextHandler(res.data.flavor_text_entries)
                    }
                });
            })
    });
}