import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Spring } from 'react-spring/renderprops'


const useStyles = makeStyles((theme) => ({
    pokeImg:{
        height: '400px',
        width: '400px',
        marginBottom: '1rem',
        [theme.breakpoints.down('md')]: {
            height: '300px',
            width: '300px',
        },
    },
    desc:{
        width: '45%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    }
}));



const LandingPoke = (props) => {
    const classes = useStyles();
    let pokejpName = [];
    if(props.pokejpName){
        pokejpName = props.pokejpName;
    }
    const pokeSelectorHandler = (search) => {
        props.history.push({pathname: '/pokemon/' + search});
    }  
    

    return(
        <Spring from={ {opacity: 0, transform: 'translate3d(-1%, -1%, 0)'} } to={{opacity: 1, transform: 'translate3d(0, 0, 0)'}} config={{duration: 400, delay: 100}}>
            {({opacity, transform}) => 
            <Grid container item xs={12} style={{opacity, transform, cursor: 'pointer'}} onClick={() => pokeSelectorHandler(props.pokeName)} >
                <Grid container item xs={12} justify="center">
                    <Typography variant="h1" style={{textTransform: 'capitalize'}}>
                        {props.pokeName}
                    </Typography>
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Typography variant="h1">
                        {pokejpName[0] ? pokejpName[0].name : ''}
                    </Typography>
                </Grid>
                <Grid container item xs={12} justify="center">
                    <img src={props.img} className={classes.pokeImg}></img>
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Typography align="center" className={classes.desc}>
                        {props.pokeDesc}
                    </Typography>
                </Grid>
            </Grid>
            }
        </Spring>
    );
}
export default LandingPoke;