import React from 'react';
import { Grid, Typography, Chip, Divider, Avatar, Hidden } from '@material-ui/core';
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
    [theme.breakpoints.down('sm')]: {
      margin: '0.5rem',
    },
  },
  text:{
    textTransform: 'capitalize'
  },
  pokemonImg:{
    objectFit: 'contain'
  },
  pokemonButton:{
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0.3rem',
    },
  },
  arrowRotate:{
    [theme.breakpoints.down('sm')]: {
      transform: 'rotateZ(90deg)'
    },
  },
}));


// evolutionChainExceptions4 = [
//   'tyrogue'
// ];




const PokeEvolutionExceptionType1 = (props) => {
  const classes = useStyles();

  const pokeSelectorHandler = (search) => {
    props.history.push({pathname: '/pokemon/' + search});
  }
  const dustox = {
    species_name: 'dustox',
    id: '269',
    evolution_details:
        {
          gender: null,
          held_item: null,
          item: null,
          known_move: null,
          known_move_type: null,
          location: null,
          min_affection: null,
          min_beauty: null,
          min_happiness: null,
          min_level: 10,
          needs_overworld_rain: false,
          party_species: null,
          party_type: null,
          relative_physical_stats: null,
          time_of_day: '',
          trade_species: null,
          trigger: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/evolution-trigger/1/'
          },
          turn_upside_down: false
        }
    }

  let pokeEvolutionChain = [...props.pokeEvolutionChain]; //cause initially props.pokeEvolutionChain is undefined and map wont work therefore assigning an array so for initial state array is empty and map works
  if(pokeEvolutionChain.length !== 0 ){
      pokeEvolutionChain.push(dustox);
  }
  const evolutionsNumber = pokeEvolutionChain.length;
  return(
    <React.Fragment>
      <Hidden smDown>
    <Grid container item xs={12} lg={9} justify="center" style={{alignItems: 'center'}}>
      {
        pokeEvolutionChain.map((evolution, index) => {
          return(
              <React.Fragment>
                  {
                      index === 4 ? (
                        <React.Fragment>
                          <Grid container xs={5}>
                              <Grid container item xs={3} justify="center">
                              {
                              (<div style={{ textAlign: 'center'}} key={11}><Arrow style={{marginTop: '7rem'}} /> <Typography>{pokeEvolutionChain[1].evolution_details.trigger.name} 
                              {(pokeEvolutionChain[1].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[1].evolution_details.gender === 2) ? ` male` : null}
                              {pokeEvolutionChain[1].evolution_details.item ? `  ${pokeEvolutionChain[1].evolution_details.item.name}` : null}
                              {pokeEvolutionChain[1].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[1].evolution_details.held_item.name}` : null}
                              {(pokeEvolutionChain[1].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[1].evolution_details.known_move.name}` : null}
                              {(pokeEvolutionChain[1].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[1].evolution_details.known_move_type.name} type move` : null}
                              {pokeEvolutionChain[1].evolution_details.location ? ` at ${pokeEvolutionChain[1].evolution_details.location.name}` : null}
                              {pokeEvolutionChain[1].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[1].evolution_details.min_affection}` : null}
                              {pokeEvolutionChain[1].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[1].evolution_details.min_beauty}` : null}
                              {pokeEvolutionChain[1].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[1].evolution_details.min_happiness}` : null}
                              {pokeEvolutionChain[1].evolution_details.min_level ? ` at level ${pokeEvolutionChain[1].evolution_details.min_level}` : null}
                              {pokeEvolutionChain[1].evolution_details.needs_overworld_rain ? ` when raining` : null}
                              {pokeEvolutionChain[1].evolution_details.party_species ? ` with ${pokeEvolutionChain[1].evolution_details.party_species.name} in party` : null}
                              {pokeEvolutionChain[1].evolution_details.party_type ? ` with ${pokeEvolutionChain[1].evolution_details.party_type.name} type pokemon in party` : null}
                              {pokeEvolutionChain[1].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[1].evolution_details.time_of_day} ` : null}
                              {pokeEvolutionChain[1].evolution_details.trade_species ? ` with ${pokeEvolutionChain[1].evolution_details.trade_species.name} ` : null}
                              {` when Defence is greater than Attack`}
                                </Typography></div>)
                            }
                              </Grid>
                              <Grid container item xs={7} justify="center">
                                <Grid container item xs={9} justify="center" key={12} onClick={() => pokeSelectorHandler(pokeEvolutionChain[1].species_name)}>
                                    <Card className={classes.card}>
                                        <CardActionArea className={classes.pokemonButton}>
                                        <CardMedia
                                            component="img"
                                            alt={pokeEvolutionChain[1].species_name}
                                            height="140"
                                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[1].id}.png`}
                                            title={pokeEvolutionChain[1].species_name}
                                            className={classes.pokemonImg}
                                        />
                                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                            <Typography  variant="h5" component="h2" className={classes.text}>
                                            {pokeEvolutionChain[1].species_name}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                              </Grid>
                              <Grid container item xs={3} justify="center">
                              {
                              (<div style={{ textAlign: 'center'}} key={21}><Arrow style={{marginTop: '5rem'}} /> <Typography>{pokeEvolutionChain[2].evolution_details.trigger.name} 
                              {(pokeEvolutionChain[2].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[2].evolution_details.gender === 3) ? ` male` : null}
                              {pokeEvolutionChain[2].evolution_details.item ? ` ${pokeEvolutionChain[2].evolution_details.item.name}` : null}
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
                              {` when Defence is same as Attack`}
                                </Typography></div>)
                            }
                              </Grid>
                              <Grid container item xs={7} justify="center">
                                <Grid container item xs={9} justify="center" key={22} onClick={() => pokeSelectorHandler(pokeEvolutionChain[2].species_name)}>
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
                              <Grid container item xs={3} justify="center">
                              {
                              (<div style={{ textAlign: 'center'}} key={31}><Arrow style={{marginTop: '5rem'}} /> <Typography>{pokeEvolutionChain[3].evolution_details.trigger.name} 
                              {(pokeEvolutionChain[3].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[3].evolution_details.gender === 2) ? ` male` : null}
                              {pokeEvolutionChain[3].evolution_details.item ? `  ${pokeEvolutionChain[3].evolution_details.item.name}` : null}
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
                              {` when Defence is less than Attack`}
                                </Typography></div>)
                            }
                              </Grid>
                              <Grid container item xs={7} justify="center">
                                <Grid container item xs={9} justify="center" key={32} onClick={() => pokeSelectorHandler(pokeEvolutionChain[3].species_name)}>
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
                          </React.Fragment>
                      ) :
                      (
                          index === 0  ? (
                        <React.Fragment>
                        <Grid container item xs={2} justify="center" style={{marginRight: '5rem'}} key={evolution.id} onClick={() => pokeSelectorHandler(evolution.species_name)}>
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
                        </React.Fragment>) : null
                      )
                  }
              </React.Fragment>
          );
        })
      }
    </Grid>
    </Hidden>
    <Hidden mdUp>
      <Grid container item xs={12} justify="center">
      {
        pokeEvolutionChain.map((evolution, index) => {
          return(
              <React.Fragment>
                  {
                      index === 4 ? (
                        <Grid container item xs={12} flexDirection="column"> {/* Starting of mobile layout */}
                          <Grid container item xs={12} justify="center">
                            {/* First Pokemon */}
                              <Grid container item xs={6} justify="center" key={"mb11"} onClick={() => pokeSelectorHandler(pokeEvolutionChain[0].species_name)}>
                                    <Card className={classes.card}>
                                        <CardActionArea className={classes.pokemonButton}>
                                        <CardMedia
                                            component="img"
                                            alt={pokeEvolutionChain[0].species_name}
                                            height="140"
                                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[0].id}.png`}
                                            title={pokeEvolutionChain[0].species_name}
                                            className={classes.pokemonImg}
                                        />
                                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                            <Typography  variant="h5" component="h2" className={classes.text}>
                                            {pokeEvolutionChain[0].species_name}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Card>
                              </Grid>
                          </Grid>
                          <Grid container item xs={4} justify="center">
                            {/* first arrow */}
                            {
                              (<div style={{ textAlign: 'center'}} key={11}><Arrow className={classes.arrowRotate} /> <Typography>{pokeEvolutionChain[1].evolution_details.trigger.name} 
                              {(pokeEvolutionChain[1].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[1].evolution_details.gender === 2) ? ` male` : null}
                              {pokeEvolutionChain[1].evolution_details.item ? `  ${pokeEvolutionChain[1].evolution_details.item.name}` : null}
                              {pokeEvolutionChain[1].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[1].evolution_details.held_item.name}` : null}
                              {(pokeEvolutionChain[1].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[1].evolution_details.known_move.name}` : null}
                              {(pokeEvolutionChain[1].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[1].evolution_details.known_move_type.name} type move` : null}
                              {pokeEvolutionChain[1].evolution_details.location ? ` at ${pokeEvolutionChain[1].evolution_details.location.name}` : null}
                              {pokeEvolutionChain[1].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[1].evolution_details.min_affection}` : null}
                              {pokeEvolutionChain[1].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[1].evolution_details.min_beauty}` : null}
                              {pokeEvolutionChain[1].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[1].evolution_details.min_happiness}` : null}
                              {pokeEvolutionChain[1].evolution_details.min_level ? ` at level ${pokeEvolutionChain[1].evolution_details.min_level}` : null}
                              {pokeEvolutionChain[1].evolution_details.needs_overworld_rain ? ` when raining` : null}
                              {pokeEvolutionChain[1].evolution_details.party_species ? ` with ${pokeEvolutionChain[1].evolution_details.party_species.name} in party` : null}
                              {pokeEvolutionChain[1].evolution_details.party_type ? ` with ${pokeEvolutionChain[1].evolution_details.party_type.name} type pokemon in party` : null}
                              {pokeEvolutionChain[1].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[1].evolution_details.time_of_day} ` : null}
                              {pokeEvolutionChain[1].evolution_details.trade_species ? ` with ${pokeEvolutionChain[1].evolution_details.trade_species.name} ` : null}
                              {` when Defence is greater than Attack`}
                                </Typography></div>)
                            }
                          </Grid>
                          <Grid container item xs={4} justify="center">
                            {/* second arrow */}
                            {
                              (<div style={{ textAlign: 'center'}} key={21}><Arrow className={classes.arrowRotate} /> <Typography>{pokeEvolutionChain[2].evolution_details.trigger.name} 
                              {(pokeEvolutionChain[2].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[2].evolution_details.gender === 3) ? ` male` : null}
                              {pokeEvolutionChain[2].evolution_details.item ? ` ${pokeEvolutionChain[2].evolution_details.item.name}` : null}
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
                              {` when Defence is same as Attack`}
                                </Typography></div>)
                            }
                          </Grid>
                          <Grid container item xs={4} justify="center">
                            {/* third arrow */}
                            {
                              (<div style={{ textAlign: 'center'}} key={31}><Arrow  className={classes.arrowRotate} /> <Typography>{pokeEvolutionChain[3].evolution_details.trigger.name} 
                              {(pokeEvolutionChain[3].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[3].evolution_details.gender === 2) ? ` male` : null}
                              {pokeEvolutionChain[3].evolution_details.item ? `  ${pokeEvolutionChain[3].evolution_details.item.name}` : null}
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
                              {` when Defence is less than Attack`}
                                </Typography></div>)
                            }
                          </Grid>
                          <Grid container item xs={4} justify="center">
                            {/* first pokemon */}
                              <Grid container item xs={12} sm={6}  justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[1].species_name)}>
                                    <Card className={classes.card}>
                                        <CardActionArea className={classes.pokemonButton}>
                                        <CardMedia
                                            component="img"
                                            alt={pokeEvolutionChain[1].species_name}
                                            height="140"
                                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[1].id}.png`}
                                            title={pokeEvolutionChain[1].species_name}
                                            className={classes.pokemonImg}
                                        />
                                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                            <Typography  variant="h5" component="h2" className={classes.text}>
                                            {pokeEvolutionChain[1].species_name}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Card>
                              </Grid>
                          </Grid>
                          <Grid container item xs={4} justify="center">
                            {/* second pokemon */}
                              <Grid container item xs={12} sm={6}  justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[2].species_name)}>
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
                          <Grid container item xs={4} justify="center">
                            {/* third pokemon */}
                            <Grid container item xs={12} sm={6}  justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[3].species_name)}>
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
                      ) : null
                  }
              </React.Fragment>
          );
        })
      }
      </Grid>
    </Hidden>
    </React.Fragment>
  );
}

export default PokeEvolutionExceptionType1;
