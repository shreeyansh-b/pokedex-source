import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
    pokeImg:{
        height: '400px',
        width: '400px',
        marginBottom: '1rem',
        marginTop: '-5rem',
        [theme.breakpoints.down('md')]: {
            height: '300px',
            width: '300px',
            marginTop: '0',
        },
        [theme.breakpoints.down('xs')]: {
            height: '250px',
            width: '250px',
            marginTop: '0',
        },
    },
    desc:{
        width: '45%',
        [theme.breakpoints.down('sm')]: {
            width: '85%',
        },
    },
    enName:{
        marginLeft: '10rem',
        textTransform: 'capitalize'
    },
    jpName:{
        marginRight: '10rem',
        [theme.breakpoints.down('xs')]: {
            marginRight: '2rem',
        },
    },
    pokeWeightHeight:{
        marginLeft: '15rem',
        marginBottom: '1rem',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '2rem',
        },
    }
}));


const PokeDetailed = (props) => {
    const classes = useStyles();
    let pokejpName = [];
    if(props.pokejpName){
        pokejpName = props.pokejpName;
    }
    
    return(
        <Grid container item xs={12}>
            <Grid container item xs={12} justify="flex-start" className={classes.enName}>
                <Typography variant="h1">
                    {props.pokeName}
                </Typography>
            </Grid>
            <Grid container item xs={12} justify="flex-end" className={classes.jpName}>
                <Typography variant="h1">
                    {pokejpName[0] ? pokejpName[0].name : ''}
                </Typography>
            </Grid>
            <Grid container item xs={12} justify="flex-start" className={classes.pokeWeightHeight}>
                <Typography >
                    Height: {props.pokeHeight / 10} meters
                </Typography>
            </Grid>
            <Grid container item xs={12} justify="flex-start" className={classes.pokeWeightHeight}>
                <Typography >
                    Weight: {props.pokeWeight / 10} Kilograms
                </Typography>
            </Grid>
            <Grid container item xs={12} justify="center">
                <img src={props.pokeImg} className={classes.pokeImg}></img>
            </Grid>
            <Grid container item xs={12} justify="center">
                <Typography align="center" className={classes.desc}>
                    {props.pokeDesc}
                </Typography>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => {
    return(null);
}


export default connect(mapStateToProps)(PokeDetailed);