import React from 'react';
import { Grid, Typography, Chip, Divider, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Arrow from '@material-ui/icons/ArrowRightAlt';


const useStyles = makeStyles((theme) => ({
  card:{
    textAlign: 'center',
    margin: '1rem'
  },
  text:{
    textTransform: 'capitalize'
  },
  pokemonImg:{
    objectFit: 'contain'
  },
  pokemonButton:{
    padding: '2rem'
  },
  pokemonEvoGrid:{
    alignItems: 'center',
    '@media  (min-width: 2500px)': {
      maxWidth: '1400px'
  },
  '@media  (max-width: 750px)': {
    flexDirection: 'column'
  },
  },
  pokeGrid:{
    [theme.breakpoints.down('sm')]: {
      flexBasis: '19.666667%',
      maxWidth: '19.666667%'
  },
  '@media  (max-width: 750px)': {
    flexBasis: '27%',
    maxWidth: '45%'
  },
  '@media  (max-width: 600px)': {
    flexBasis: '27%',
    maxWidth: '50%'
  },
  '@media  (max-width: 400px)': {
    flexBasis: '27%',
    maxWidth: '65%'
  },
  },
  arrow:{
    '@media  (max-width: 750px)': {
      transform: 'rotateZ(90deg)'
    },
  }
}));


// evolutionChainExceptions_112 = [
//   'oddish',
//   'poliwag',
//   'ralts',
//   'cosmog'];
// evolutionChainExceptions_12 = [
//   'slowpoke',
//   'nincada',
//   'snorunt',
//   'clamperl',
//   'burmy'];
// evolutionChainExceptions_122 = [
//   'wurmple',
// ];
// evolutionChainExceptions_13 = [
//   'tyrogue'
// ];
// evolutionChainExceptions_18 = [
//   'eevee'];




const PokeEvolution = (props) => {
  const classes = useStyles();

  const pokeSelectorHandler = (search) => {
    props.history.push({pathname: '/pokemon/' + search});
  }  

  const pokeEvolutionChain = [...props.pokeEvolutionChain]; //cause initially props.pokeEvolutionChain is undefined and map wont work therefore assigning an array so for initial state array is empty and map works
  const evolutionsNumber = pokeEvolutionChain.length;
  return(
    <Grid container item xs={12} lg={9} justify="center"  className={classes.pokemonEvoGrid}>
      {
        pokeEvolutionChain.map((evolution, index) => {
          return(
              <React.Fragment>
              <Grid container item xs={2} justify="center" className={classes.pokeGrid} key={evolution.id} onClick={() => pokeSelectorHandler(evolution.species_name)}>
                <Card className={classes.card}>
                  <CardActionArea className={classes.pokemonButton}>
                    <CardMedia
                      component="img"
                      alt={evolution.species_name}
                      height="140"
                      image={`https://pokeres.bastionbot.org/images/pokemon/${evolution.id}.png`}
                      title={evolution.species_name}
                      className={classes.pokemonImg}
                    />
                    <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                      <Typography  variant="h5" component="h2" className={classes.text}>
                        {evolution.species_name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              {
                (evolutionsNumber - 1 ) ? (index < evolutionsNumber - 1) ? 
                (<div style={{ textAlign: 'center'}}><Arrow className={classes.arrow} /> <Typography>{pokeEvolutionChain[index + 1].evolution_details.trigger.name} 
                {pokeEvolutionChain[index + 1].evolution_details.item ? `  ${pokeEvolutionChain[index + 1].evolution_details.item.name}` : null}
                {pokeEvolutionChain[index + 1].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[index + 1].evolution_details.held_item.name}` : null}
                {(pokeEvolutionChain[index + 1].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[index + 1].evolution_details.known_move.name}` : null}
                {(pokeEvolutionChain[index + 1].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[index + 1].evolution_details.known_move_type.name} type move` : null}
                {pokeEvolutionChain[index + 1].evolution_details.location ? ` at ${pokeEvolutionChain[index + 1].evolution_details.location.name}` : null}
                {pokeEvolutionChain[index + 1].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[index + 1].evolution_details.min_affection}` : null}
                {pokeEvolutionChain[index + 1].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[index + 1].evolution_details.min_beauty}` : null}
                {pokeEvolutionChain[index + 1].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[index + 1].evolution_details.min_happiness}` : null}
                {pokeEvolutionChain[index + 1].evolution_details.min_level ? ` at level ${pokeEvolutionChain[index + 1].evolution_details.min_level}` : null}
                {pokeEvolutionChain[index + 1].evolution_details.needs_overworld_rain ? ` when raining` : null}
                {pokeEvolutionChain[index + 1].evolution_details.party_species ? ` with ${pokeEvolutionChain[index + 1].evolution_details.party_species.name} in party` : null}
                {pokeEvolutionChain[index + 1].evolution_details.party_type ? ` with ${pokeEvolutionChain[index + 1].evolution_details.party_type.name} type pokemon in party` : null}
                {pokeEvolutionChain[index + 1].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[index + 1].evolution_details.time_of_day} ` : null}
                {pokeEvolutionChain[index + 1].evolution_details.trade_species ? ` with ${pokeEvolutionChain[index + 1].evolution_details.trade_species.name} ` : null}
                {(pokeEvolutionChain[1].evolution_details.gender === 1) ? ` if female` : (pokeEvolutionChain[1].evolution_details.gender === 1) ? ` if male` : null}
                </Typography></div>)
                : null : null 
              }
              </React.Fragment>
          );
        })
      }
    </Grid>
  );
}

export default PokeEvolution;
