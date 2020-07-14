import React, {useEffect, useState} from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as actionCreators from '../../store/actions/actionCreators';
import * as actionTypes from '../../store/actions/actionTypes';
import Pagination from '@material-ui/lab/Pagination';
import Navbar from '../Navbar/Navbar';
import loading4 from '../../assests/images/loading4.gif';



const useStyles = makeStyles((theme) => ({
  allPokemonGrid:{
    margin: '8rem auto',
    textAlign: 'center',
  },
  pokemonCard:{
    margin: '1rem',
    [theme.breakpoints.up('md')]: {
      flexBasis: '16.666667%',
      maxWidth: '16.666667%'
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '14.666667%',
      maxWidth: '14.666667%'
    },
    '@media  (max-width: 750px)': {
      flexBasis: '20.666667%',
      maxWidth: '20.666667%'
    },
    '@media  (max-width: 600px)': {
      flexBasis: '27.666667%',
      maxWidth: '27.666667%'
    },
    '@media  (max-width: 400px)': {
      flexBasis: '50.666667%',
      maxWidth: '50.666667%'
    },
  },
  pokemonImg:{
    objectFit: 'contain'
  },
  pokemonText: {
    textTransform: 'capitalize'
  },
  pokemonButton:{
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      padding: '1.2rem',
    },
  },
  paginationBtn:{
    '@media  (max-width: 400px)': {
      minWidth: '24px',
      height: '24px'
    },
  },
  mainDiv:{
    zIndex: '10000',
    background: 'rgb(104, 34, 202)', 
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


const AllPokemons = (props) => {
    const classes = useStyles();
    const [minTime, setMinTime] = useState(false);
    useEffect(() => {
        setMinTime(false);
        props.onDataLoad(props.match.params.pageno);
        setTimeout(() => {
          setMinTime(true);
        },1000)
        return props.onDataUnload;  //so that it wont get repopulated with same pokemons when back is pressed //cleanup
    },[props.match.params.pageno]); //when page number changes => component did update
    useEffect(() => {
      if(props.error){
          props.history.push({pathname: '/404/'});
      }
    },[props.error])
    const pokeSelectorHandler = (search) => {
        props.history.push({pathname: '/pokemon/' + search});
    }
    const pageSelectorHandler = (pageno) => {
        props.history.push({pathname: '/allPokemons/' + pageno});
    }  
    return(
        <React.Fragment>
           {props.allPokemon.length && minTime ? 
          <React.Fragment>
          <Navbar elevation={1} color={'primary'} history={props.history} padding={false}/>
          <Grid container xs={12} md={10} lg={8} justify="center" className={classes.allPokemonGrid}>
                {props.allPokemon.map((pokemon) => {
                    const id = pokemon.url.split('/')[6];
                    return(
                        <Grid container item xs={12} className={classes.pokemonCard} key={id} onClick={() => pokeSelectorHandler(pokemon.name)}>
                        <Card >
                          <CardActionArea className={classes.pokemonButton}>
                            <CardMedia
                              component="img"
                              alt={pokemon.name}
                              height="140"
                              image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                              title={pokemon.name}
                              className={classes.pokemonImg}
                            />
                            <CardContent style={{padding: 0, paddingTop: '10px'}}>
                              <Typography  variant="h5" component="h2" className={classes.pokemonText}>
                                {pokemon.name}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    )
                })}
          <Pagination count={23} color="primary" page={+props.match.params.pageno} onChange={(_, page) => pageSelectorHandler(page)  } siblingCount={0} /> {/*adding '+' in page to convert string to number*/}
          </Grid>
          </React.Fragment>
          : <div className={classes.mainDiv}><img src={loading4} className={classes.img}></img></div>
          }
        </React.Fragment>
    );
}

const mapStateToProps = (state) => { //when mapstatetoprops change it causes rerender
    return({
        allPokemon: state.allPokemons? state.allPokemons: [],
        error: state.error
    });
}
const mapDispatchToProps = (dispatch) => {  
    return{
        onDataLoad: (pageno) => dispatch(actionCreators.getAllPokemon(pageno)),
        onDataUnload: () => dispatch({type: actionTypes.CLEANALLPOKEMONS})
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AllPokemons);