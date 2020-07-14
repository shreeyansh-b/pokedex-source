import React from 'react';
import loading2 from '../../assests/images/loading2.gif';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles((theme) => ({
    mainDiv:{
        zIndex: '10000',
        background: 'rgb(254, 181, 174)', 
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
            marginTop: '0',
            height: '300px'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '0',
            height: '200px'
        },
    },
    text:{
        fontSize: '4rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
        },
    }
}));

const Page404 = (props) => {
    const homeBtnHandler = () => {
        props.history.push({pathname: '/'});
    }
    const classes = useStyles();
    return(
        <div className={classes.mainDiv}>
            <img src={loading2} className={classes.img}></img>
            <Typography className={classes.text}>
                Page/Pokemon not found!!
            </Typography>
            <IconButton onClick={homeBtnHandler}>
            Home<HomeOutlinedIcon  /> 
            </IconButton>
        </div>
    );
}

export default Page404;