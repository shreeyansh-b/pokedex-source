import React, {useEffect} from 'react';
import FastAverageColor from 'fast-average-color';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LandingPoke from './LandingPoke';
import LandingCTA from './LandingCTA';
import {connect} from 'react-redux';
import Color from 'color';
import * as actionCreators from '../../store/actions/actionCreators';
import * as actionTypes from '../../store/actions/actionTypes';
import loading3 from '../../assests/images/loading3.gif';
import useWindowDimensions from '../hooks/useWindowDimensions';


const randomPokemon = () => {
    const pokeNames = ['bulbasaur', 'charmander', 'togepi', 'eevee', 'pikachu', 'squirtle', 'onix', 'jigglypuff', 'snorlax' , 'chikorita', 'totodile', 'piplup'];
    const randomNumber = Math.floor(Math.random() * (12 - 0)) + 0;
    return pokeNames[randomNumber];
}

const getRandomPokeDesc = (flavourText) => {
    if(flavourText){    //else wont work for first case when it's undefined
        const size = flavourText.length;
        const randomNumber = Math.floor(Math.random() * (size - 0)) + 0;
        return flavourText[randomNumber].flavor_text;
    }
}

const useStyles = makeStyles((theme) => ({
    parentContainer:{
        minHeight: '100vh',
        paddingTop: '5rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            minHeight: 'auto',
            paddingTop: '15rem'
        }
    },
    landingPoke:{
        alignSelf: 'center',
    },
    landingCTA:{
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '8rem'
        }
    },
    mainDiv:{
    zIndex: '10000',
    background: '#eafee9', 
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


const LandingPage = (props) => {
    const { height, width } = useWindowDimensions();
    const GetColor = () => {
        if(props.id !== null ){
            let imageURL = `https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`;
            console.log(imageURL,'imgurl');
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
                    if(width > 960){
                        document.querySelector('#container').style.background = `linear-gradient(100deg, ${colorprop} 39.92%, #ffffff 39.99%)`;
                    }else if( width < 960 && width > 460){
                        document.querySelector('#container').style.background = `linear-gradient(0deg, ${colorprop} 43.92%, #ffffff 43.99%)`;
                    }
                    else if( width <= 460){
                        document.querySelector('#container').style.background = `linear-gradient(0deg, ${colorprop} 42.92%, #ffffff 42.99%)`;
                    }
                    props.onBGLoaded();
                    console.log(width, height);
                });
        }
    }
    useEffect(() => {
        props.onDataLoad(randomPokemon());
    },[])
    useEffect(() =>{
        GetColor();
    },[props.id, width]);
    const classes = useStyles();
    return(
        <Grid container className={classes.parentContainer} id="container">
            {props.loaded  ?
            <React.Fragment>
            <Grid container item xs={10} sm={5}  className={classes.landingPoke}>
                <LandingPoke img={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
                pokeName={props.pokeName}
                pokejpName={props.pokejpName} 
                pokeDesc={getRandomPokeDesc(props.pokeDesc)}
                history={props.history}
                    />
            </Grid>
            <Grid container item xs={12} md={7} className={classes.landingCTA}>
                <LandingCTA history={props.history}/>
            </Grid>
            </React.Fragment>
            : <div className={classes.mainDiv}><img src={loading3} className={classes.img}></img></div>
            }
        </Grid>
    );
}

const mapStateToProps = (state) => { 
    return({
        id: state.landingPokemon? state.landingPokemon.id: null,
        pokeName: state.landingPokemon? state.landingPokemon.name : '',
        pokejpName: state.landingPokemon? state.landingPokemon.jpName : '',
        pokeDesc: state.landingPokemon? state.landingPokemon.flavourText: '',
        loaded: state.loaded
    });
}
const mapDispatchToProps = (dispatch) => {  
    return{
        onDataLoad: (search) => dispatch(actionCreators.getLandingPokemon(search)),
        onDataUnload: () => dispatch({type: actionTypes.CLEANLANDINGPOKEMON}),
        onBGLoaded: () => dispatch({type: actionTypes.DATALOADED})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);