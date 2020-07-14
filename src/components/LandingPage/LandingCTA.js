import React, {useState} from 'react';
import { Grid, Typography } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops'


import landing from '../../assests/images/landing.gif';
import landing2 from '../../assests/images/landing2.gif';
import landing3 from '../../assests/images/landing3.gif';
import landing4 from '../../assests/images/landing4.gif';
import landing5 from '../../assests/images/landing5.gif';
import landing6 from '../../assests/images/landing6.gif';
import landing7 from '../../assests/images/landing7.gif';

const landings = [landing, landing2, landing3, landing4, landing5, landing6, landing7];

const randomLanding = () => {
    return(Math.floor(Math.random() * (7 - 0)) + 0);
}

const randomNumber = randomLanding();   //else there will be a random number everytime the search state changes and component gets rerendered

const useStyles = makeStyles((theme) => ({
    pokeImg:{
        height: '250px',
        marginBottom: '2rem'
    },
    mainHeading:{
        color: '#1b65c1',
    },
    subHeading:{
        color: '#ff346c',
        marginBottom: '2rem'
    },
    search:{
        borderRadius: theme.shape.borderRadius,
        paddingLeft: '1rem',
        paddingTop: '0.3rem',
        marginBottom: '2rem',
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.25),
        },
    }
}));





const LandingCTA = (props) => {
    const classes = useStyles();
    const [search, searchHandler] = useState('');
    const pokeSearchHandler = (search) => {
        if(search){
            props.history.push({pathname: '/pokemon/' + search.toLowerCase()});
        }
    }  
    const enterKeyHandler = (e) => {
        if(e.key === 'Enter'){
            pokeSearchHandler(search);
        }
    }
    const allPokemonHandler = () => {
        props.history.push({pathname: '/allPokemons/1'});
    }

    return(
        <Grid container item xs={12} style={{overflow: 'hidden'}}>
            <Grid container item xs={12} justify="center" style={{textAlign: 'center'}}>
                <Spring from={{ opacity: 0, transform: 'translate3d(0, -25%, 0)'} } to={{opacity: 1, transform: 'translate3d(0, 0, 0)'}} config={{duration: 300}}>
                    {({opacity, transform}) => 
                <Typography display="block" style={{opacity, transform}} variant="h1" className={classes.mainHeading} >
                    Welcome To PokeDex 
                </Typography> }
                </Spring>
            </Grid>
            <Grid container item xs={12} justify="center" style={{textAlign: 'center'}}>
                <Spring from={{ opacity: 0, transform: 'translate3d(0, 25%, 0)'} } to={{opacity: 1, transform: 'translate3d(0, 0, 0)'}} config={{duration: 300, delay: 100}}>
                    {({opacity, transform}) => 
                    <Typography display="block" style={{opacity, transform}} variant="h3" className={classes.subHeading}>
                        Find Your Favourite Pokemon
                    </Typography>
                    }
                </Spring>
            </Grid>
            <Grid container item xs={12} justify="center">
                <img src={landings[randomNumber]} className={classes.pokeImg}></img>
            </Grid>
            <Grid container item xs={12} justify="center">
                <div className={classes.search}>
                <InputBase
                    placeholder="Search Pokemon"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => searchHandler(e.target.value)}
                    onKeyPress={enterKeyHandler}
                />
                    <IconButton onClick={() => pokeSearchHandler(search)} >
                    <SearchIcon />
                    </IconButton>
                </div>
            </Grid>
            <Grid container item xs={12} justify="center" >
                <Button variant="contained" color="primary" onClick={allPokemonHandler}>
                    See All Pokemons
                </Button>
            </Grid>
        </Grid>
    );
}

export default LandingCTA;