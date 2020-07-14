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
    margin: '1rem',
    
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
  pokeGrid:{
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'normal'
  },
  },
  pokeEvoCard:{
    [theme.breakpoints.down('sm')]: {
      maxWidth: '24%',
      alignSelf: 'center'
  },
  '@media  (max-width: 750px)': {
    maxWidth: '30%'
  },
  '@media  (max-width: 600px)': {
    maxWidth: '50%'
  },
  },
  arrow:{
    marginTop: '13rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5rem',
      transform: 'rotateZ(90deg)'
    },
  },
  arrowRotate:{
    [theme.breakpoints.down('sm')]: {
      transform: 'rotateZ(90deg)'
    },
  },
  pokeException:{
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      maxWidth: '50%',
      alignSelf: 'center'
  },
  '@media  (max-width: 750px)': {
    maxWidth: '73%'
  },
  '@media  (max-width: 450px)': {
    maxWidth: '75%'
  },
  },
  pokeEvoExceptionCard:{
    [theme.breakpoints.down('sm')]: {
      flexBasis: 'auto',
      marginTop: '-8rem'
  },
  },
  pokeEvoExceptionInsideCard:{
    '@media  (max-width: 450px)': {
      maxWidth: '100%'
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




const PokeEvolutionExceptionType1 = (props) => {
  const classes = useStyles();

  const pokeSelectorHandler = (search) => {
    props.history.push({pathname: '/pokemon/' + search});
  }  

  // let evos = pokeEvolHandler(json);
  // console.log(evos);
  const pokeEvolutionChain = [...props.pokeEvolutionChain]; //cause initially props.pokeEvolutionChain is undefined and map wont work therefore assigning an array so for initial state array is empty and map works
  const evolutionsNumber = pokeEvolutionChain.length;
  return(
    <Grid container item xs={12} lg={9} justify="center" className={classes.pokeGrid}>
      {
        pokeEvolutionChain.map((evolution, index) => {
          return(
              <React.Fragment>
                  {
                      index === 3 ? (
                          <Grid container xs={5} className={classes.pokeException}>
                              <Grid container item xs={5} md={3} justify="center">
                              {
                                (<div style={{ textAlign: 'center'}} key={11}><Arrow className={classes.arrow} /> <Typography>{pokeEvolutionChain[2].evolution_details.trigger.name} 
                                {(pokeEvolutionChain[2].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[2].evolution_details.gender === 2) ? ` male` : null}
                                {pokeEvolutionChain[2].evolution_details.item ? `  ${pokeEvolutionChain[2].evolution_details.item.name}` : null}
                                {pokeEvolutionChain[2].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[2].evolution_details.held_item.name}` : null}
                                {(pokeEvolutionChain[2].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[2].evolution_details.known_move.name}` : null}
                                {(pokeEvolutionChain[2].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[2].evolution_details.known_move_type.name} type move` : null}
                                {pokeEvolutionChain[2].evolution_details.location ? ` at ${pokeEvolutionChain[2].evolution_details.location.name}` : null}
                                {pokeEvolutionChain[2].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[2].evolution_details.min_affection}` : null}
                                {pokeEvolutionChain[2].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[2].evolution_details.min_beauty}` : null}
                                {pokeEvolutionChain[2].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[2].evolution_details.min_happiness}` : null}
                                {pokeEvolutionChain[2].evolution_details.min_level ? ` at level ${pokeEvolutionChain[2].evolution_details.min_level}` : null}
                                {pokeEvolutionChain[2].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                {pokeEvolutionChain[2].evolution_details.party_species ? ` with ${pokeEvolutionChain[2].evolution_details.party_species.name} in party` : null}
                                {pokeEvolutionChain[2].evolution_details.party_type ? ` with ${pokeEvolutionChain[2].evolution_details.party_type.name} type pokemon in party` : null}
                                {pokeEvolutionChain[2].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[2].evolution_details.time_of_day} ` : null}
                                {pokeEvolutionChain[2].evolution_details.trade_species ? ` with ${pokeEvolutionChain[2].evolution_details.trade_species.name} ` : null}
                                </Typography></div>)
                            }
                              </Grid>
                              <Grid container item xs={7} className={classes.pokeEvoExceptionCard}>
                                <Grid container item xs={9} justify="center" key={12} className={classes.pokeEvoExceptionInsideCard} onClick={() => pokeSelectorHandler(pokeEvolutionChain[2].species_name)}>
                                    <Card className={classes.card}>
                                        <CardActionArea className={classes.pokemonButton}>
                                        <CardMedia
                                            component="img"
                                            alt={pokeEvolutionChain[2].species_name}
                                            height="140"
                                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[2].id}.png`}
                                            title={pokeEvolutionChain[2].species_name}
                                            className={classes.pokemonImg}
                                        />
                                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                            <Typography  variant="h5" component="h2" className={classes.text}>
                                            {pokeEvolutionChain[2].species_name}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                              </Grid>
                              <Grid container item  xs={5} md={3} justify="center">
                              {
                                (<div style={{ textAlign: 'center'}} key={21}><Arrow style={{marginTop: '5rem'}} className={classes.arrowRotate} /> <Typography>{pokeEvolutionChain[3].evolution_details.trigger.name} 
                                {(pokeEvolutionChain[3].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[3].evolution_details.gender === 3) ? ` male` : null}
                                {pokeEvolutionChain[3].evolution_details.item ? ` ${pokeEvolutionChain[3].evolution_details.item.name}` : null}
                                {pokeEvolutionChain[3].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[3].evolution_details.held_item.name}` : null}
                                {(pokeEvolutionChain[3].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[3].evolution_details.known_move.name}` : null}
                                {(pokeEvolutionChain[3].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[3].evolution_details.known_move_type.name} type move` : null}
                                {pokeEvolutionChain[3].evolution_details.location ? ` at ${pokeEvolutionChain[3].evolution_details.location.name}` : null}
                                {pokeEvolutionChain[3].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[3].evolution_details.min_affection}` : null}
                                {pokeEvolutionChain[3].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[3].evolution_details.min_beauty}` : null}
                                {pokeEvolutionChain[3].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[3].evolution_details.min_happiness}` : null}
                                {pokeEvolutionChain[3].evolution_details.min_level ? ` at level ${pokeEvolutionChain[3].evolution_details.min_level}` : null}
                                {pokeEvolutionChain[3].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                {pokeEvolutionChain[3].evolution_details.party_species ? ` with ${pokeEvolutionChain[3].evolution_details.party_species.name} in party` : null}
                                {pokeEvolutionChain[3].evolution_details.party_type ? ` with ${pokeEvolutionChain[3].evolution_details.party_type.name} type pokemon in party` : null}
                                {pokeEvolutionChain[3].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[3].evolution_details.time_of_day} ` : null}
                                {pokeEvolutionChain[3].evolution_details.trade_species ? ` with ${pokeEvolutionChain[3].evolution_details.trade_species.name} ` : null}
                                </Typography></div>)
                            }
                              </Grid>
                              <Grid container item xs={7} className={classes.pokeEvoExceptionCard}>
                                <Grid container item xs={9} justify="center" key={22} className={classes.pokeEvoExceptionInsideCard} onClick={() => pokeSelectorHandler(pokeEvolutionChain[3].species_name)}>
                                    <Card className={classes.card}>
                                        <CardActionArea className={classes.pokemonButton}>
                                        <CardMedia
                                            component="img"
                                            alt={pokeEvolutionChain[3].species_name}
                                            height="140"
                                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[3].id}.png`}
                                            title={pokeEvolutionChain[3].species_name}
                                            className={classes.pokemonImg}
                                        />
                                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                            <Typography  variant="h5" component="h2" className={classes.text}>
                                            {pokeEvolutionChain[3].species_name}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                              </Grid>
                          </Grid>
                      ) :
                      (
                          index !== 2 ? (
                        <React.Fragment>
                        <Grid container item xs={2} justify="center" key={evolution.id} className={classes.pokeEvoCard} onClick={() => pokeSelectorHandler(evolution.species_name)}>
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
                          (evolutionsNumber - 1 ) ? (index < 1) ? 
                          (<div style={{ textAlign: 'center'}}><Arrow style={{marginTop: '5rem'}} className={classes.arrowRotate} /> <Typography>{pokeEvolutionChain[index + 1].evolution_details.trigger.name} 
                          {(pokeEvolutionChain[index + 1].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[index + 1].evolution_details.gender === 2) ? ` male` : null}
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
                          </Typography></div>)
                          : null : null 
                        }
                        </React.Fragment>) : null
                      )
                  }
              </React.Fragment>
          );
        })
      }
    </Grid>
  );
}

export default PokeEvolutionExceptionType1;
