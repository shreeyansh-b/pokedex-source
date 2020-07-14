import React, {useEffect, useState} from 'react';
import FastAverageColor from 'fast-average-color';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PokeDetailed from './PokeDetailed';
import Color from 'color';
import PokeStats from './PokeStats';
import PokeEvolution from './PokeEvolution';
import PokeEvolutionExceptionType1 from './PokeEvolutionExceptionType1';
import PokeEvolutionExceptionType2 from './PokeEvolutionExceptionType2';
import PokeEvolutionExceptionType3 from './PokeEvolutionExceptionType3';
import PokeEvolutionExceptionType4 from './PokeEvolutionExceptionType4';
import PokeEvolutionExceptionType5 from './PokeEvolutionExceptionType5';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators';
import Navbar from '../Navbar/Navbar';
import * as actionTypes from '../../store/actions/actionTypes';
import loading from '../../assests/images/loading.gif';


const useStyles = makeStyles((theme, props) => ({
    parentContainer:{
        minHeight: '100vh',
        paddingTop: '9rem'
    },
    pokemon:{
        alignSelf: 'center',
        '@media  (min-width: 2500px)': {
            maxWidth: '1300px'
          },
    },
    pokeStats:{
        alignSelf: 'center',
        '@media  (min-width: 2500px)': {
            maxWidth: '1100px'
        },
    },
    mainDiv:{
        zIndex: '10000',
        background: 'rgb(151, 183, 255)', 
        margin: '0 auto',
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        position: 'fixed',
        top: 0,
        overflow: 'auto'
    },
    img:{
          marginTop: '10vh',
          height: 'auto',
          [theme.breakpoints.down('md')]: {
              marginTop: '5vh',
          },
          [theme.breakpoints.down('sm')]: {
              marginTop: '30vh',
              height: '300px'
          },
          [theme.breakpoints.down('xs')]: {
              marginTop: '25vh',
              height: '200px'
          },
    },
}));


const PokemonPage = (props) => {
    const [bgColorLoaded, bgColorHandler] = useState(false);
    const GetColor = () => {
        if(props.id !== null){
            let imageURL = `https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`;
            const downloadedImg = new Image;
            downloadedImg.crossOrigin = "Anonymous";
            downloadedImg.src = imageURL;
            const fac = new FastAverageColor();
            fac.getColorAsync(downloadedImg)
                .then((color) => {
                    color = color;
                    const rgb = color.rgb;
                    const colorrgb = Color(rgb);
                    let colorprop = colorrgb.saturate(1.5);
                    props.bgIsDark(colorprop.isDark());
                    if(colorprop.isDark()){
                        colorprop = colorprop.lighten(0.3);
                    }
                    document.querySelector('#container').style.background = colorprop;
                    setTimeout(() => {
                        bgColorHandler(true);
                    }, 1200);
                    
                });
        }
    }
    
    const classes = useStyles(props);
    useEffect(() =>{
        props.onDataLoad(props.match.params.search);        //it works when directly visiting this link because the app.js is loaded first then routed here and then props.match is accessible
        return props.onDataUnload;
    },[props.match.params.search]);
    useEffect(() => {
        bgColorHandler(false);
        GetColor();
    },[props.loaded, props.pokeEvolutionChain, props.match.params.search]) //added pokeEvolutionChain else causes a bug idk why
    useEffect(() => {
        if(props.error){
            props.history.push({pathname: '/404/'});
        }
    },[props.error])

    const getRandomPokeDesc = (flavourText) => {
        if(flavourText){    //else wont work for first case when it's undefined
            const size = flavourText.length;
            const randomNumber = Math.floor(Math.random() * (size - 0)) + 0;
            return flavourText[randomNumber].flavor_text;
        }
    }
    return(
        <Grid container className={classes.parentContainer} id="container" justify="center">
        {bgColorLoaded && props.id ?
        <React.Fragment>
          <Navbar  history={props.history} hasBack={true} noLogo={true} homeBtn={true}/>
            <Grid container item xs={12} md={7}  className={classes.pokemon} >
                <PokeDetailed pokeImg={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}  
                pokeName={props.pokeName}
                pokejpName={props.pokejpName}
                pokeHeight={props.pokeHeight}
                pokeWeight={props.pokeWeight}
                pokeDesc={getRandomPokeDesc(props.pokeDesc)}
                />
            </Grid>
            <Grid container item xs={12} md={5} className={classes.pokeStats} >
                <PokeStats pokeStats={props.pokeStats}  pokeTypes={props.pokeTypes}/>
            </Grid>
            <Grid container item xs={12} justify="center" style={{ marginTop: '8rem'}}>
                <Grid container item xs={12} justify="center">
                <Typography className={classes.textColor} variant="h3">Evolution</Typography>
                </Grid>
                {
                    ( props.pokeEvolutionChain[0] ? 
                    props.pokeEvolutionChain[0].species_name === 'oddish' 
                    || props.pokeEvolutionChain[0].species_name === 'poliwag'
                    || props.pokeEvolutionChain[0].species_name === 'ralts'
                    || props.pokeEvolutionChain[0].species_name === 'cosmog'
                    ? 
                    <PokeEvolutionExceptionType1 pokeEvolutionChain={props.pokeEvolutionChain} history={props.history} /> :
                    props.pokeEvolutionChain[0] ? 
                    props.pokeEvolutionChain[0].species_name === 'slowpoke' 
                    || props.pokeEvolutionChain[0].species_name === 'nincada'
                    || props.pokeEvolutionChain[0].species_name === 'snorunt'
                    || props.pokeEvolutionChain[0].species_name === 'clamperl'
                    || props.pokeEvolutionChain[0].species_name === 'burmy'
                    ? 
                    <PokeEvolutionExceptionType2 pokeEvolutionChain={props.pokeEvolutionChain} history={props.history} /> :
                    props.pokeEvolutionChain[0] ? 
                    props.pokeEvolutionChain[0].species_name === 'wurmple'
                    ? 
                    <PokeEvolutionExceptionType3 pokeEvolutionChain={props.pokeEvolutionChain} history={props.history} /> :
                    props.pokeEvolutionChain[0] ? 
                    props.pokeEvolutionChain[0].species_name === 'tyrogue'
                    ? 
                    <PokeEvolutionExceptionType4 pokeEvolutionChain={props.pokeEvolutionChain} history={props.history} /> :
                    props.pokeEvolutionChain[0] ? 
                    props.pokeEvolutionChain[0].species_name === 'eevee'
                    ? 
                    <PokeEvolutionExceptionType5 pokeEvolutionChain={props.pokeEvolutionChain} history={props.history} /> :
                    <PokeEvolution pokeEvolutionChain={props.pokeEvolutionChain} history={props.history} /> :
                    null : null : null : null : null
                    )
                }
            </Grid>
            </React.Fragment>
            : <div className={classes.mainDiv}><img src={loading} className={classes.img}></img></div>
            }
        </Grid>
    );
}


const mapStateToProps = (state) => { //when mapstatetoprops change it causes rerender
    return({
        id: state.currentPokemon? state.currentPokemon.id : null,   //cause for initial state there's no key value pairs in object
        pokeName: state.currentPokemon? state.currentPokemon.name : '',
        pokejpName: state.currentPokemon? state.currentPokemon.jpName : '',
        pokeHeight: state.currentPokemon? state.currentPokemon.height: '',
        pokeWeight: state.currentPokemon? state.currentPokemon.weight: '',
        pokeStats: state.currentPokemon? state.currentPokemon.stats: '',
        pokeDesc: state.currentPokemon? state.currentPokemon.flavourText: '',
        pokeEvolutionChain: state.evolutionChain? state.evolutionChain : '',
        pokeTypes: state.currentPokemon? state.currentPokemon.types : '',
        loaded: state.loaded,
        isDark: state.isDark,
        error: state.error
    });
}
const mapDispatchToProps = (dispatch) => {  
    return{
        onDataLoad: (search) => dispatch(actionCreators.getPokemon(search)),
        onDataUnload: () => dispatch({type: actionTypes.CLEANCURRENTPOKEMON}),
        bgIsDark: (isDark) => dispatch({type: actionTypes.BGISDARK, isDark: isDark})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);