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
        padding: '0.6rem',
    },
  },
  arrowGrid:{
    '@media  (max-width: 525px)': {
        marginTop: '5rem'
      }, 
  }
}));


// evolutionChainExceptions5 = [
//   'eevee'];




const PokeEvolutionExceptionType1 = (props) => {
  const classes = useStyles();

  const pokeSelectorHandler = (search) => {
    props.history.push({pathname: '/pokemon/' + search});
  }

  let pokeEvolutionChain = [...props.pokeEvolutionChain]; //cause initially props.pokeEvolutionChain is undefined and map wont work therefore assigning an array so for initial state array is empty and map works
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
                      index === 8 ? (
                        <React.Fragment>
                            <Grid container xs={9}> {/* Main Row */}
                                    <Grid container item xs={4} justify="center"> {/* first row element */}
                                        <Grid container item xs={8} justify="center" key={11} onClick={() => pokeSelectorHandler(pokeEvolutionChain[1].species_name)}>
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
                                    <Grid container item xs={4} justify="center"> {/* first row element */}
                                        <Grid container item xs={8} justify="center" key={12} onClick={() => pokeSelectorHandler(pokeEvolutionChain[2].species_name)}>
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
                                    <Grid container item xs={4} justify="center"> {/* first row element */}
                                        <Grid container item xs={8} justify="center" key={13} onClick={() => pokeSelectorHandler(pokeEvolutionChain[3].species_name)}>
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
                            <Grid container xs={9} style={{alignItems: 'center'}} > {/* Main 2nd Row */ }
                                    <Grid container item xs={3} justify="center"> {/* second row element */}
                                        <Grid container item xs={10} justify="center" key={21} onClick={() => pokeSelectorHandler(pokeEvolutionChain[4].species_name)}>
                                            <Card className={classes.card}>
                                                <CardActionArea className={classes.pokemonButton}>
                                                <CardMedia
                                                    component="img"
                                                    alt={pokeEvolutionChain[4].species_name}
                                                    height="140"
                                                    image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[4].id}.png`}
                                                    title={pokeEvolutionChain[4].species_name}
                                                    className={classes.pokemonImg}
                                                />
                                                <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                                    <Typography  variant="h5" component="h2" className={classes.text}>
                                                    {pokeEvolutionChain[4].species_name}
                                                    </Typography>
                                                </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={6} justify="center" style={{alignItems: 'center'}} key={22} > {/* second row element */}
                                        <Grid container item xs={4} justify="center">
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow style={{transform: 'rotateZ(-135deg)'}} /> <Typography>{pokeEvolutionChain[1].evolution_details.trigger.name} 
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
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={4} justify="center">
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow style={{transform: 'rotateZ(-90deg)'}} /> <Typography>{pokeEvolutionChain[2].evolution_details.trigger.name} 
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
                                        <Grid container item xs={4} justify="center">
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow style={{transform: 'rotateZ(-45deg)'}} /> <Typography>{pokeEvolutionChain[3].evolution_details.trigger.name} 
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
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={3} justify="center">
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow style={{transform: 'rotateZ(-180deg)'}} /> <Typography>{pokeEvolutionChain[4].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[4].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[4].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[4].evolution_details.item ? `  ${pokeEvolutionChain[4].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[4].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[4].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[4].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[4].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[4].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[4].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[4].evolution_details.location ? ` at ${pokeEvolutionChain[4].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[4].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[4].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[4].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[4].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[4].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[4].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[4].evolution_details.min_level ? ` at level ${pokeEvolutionChain[4].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[4].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[4].evolution_details.party_species ? ` with ${pokeEvolutionChain[4].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[4].evolution_details.party_type ? ` with ${pokeEvolutionChain[4].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[4].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[4].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[4].evolution_details.trade_species ? ` with ${pokeEvolutionChain[4].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={6} justify="center">
                                            <Grid container item xs={12} justify="center" key={props.key} onClick={() => pokeSelectorHandler(pokeEvolutionChain[0].species_name)}>
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
                                        <Grid container item xs={3} justify="center">
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow style={{transform: 'rotateZ(0deg)'}} /> <Typography>{pokeEvolutionChain[5].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[5].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[5].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[5].evolution_details.item ? `  ${pokeEvolutionChain[5].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[5].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[5].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[5].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[5].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[5].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[5].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[5].evolution_details.location ? ` at ${pokeEvolutionChain[5].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[5].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[5].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[5].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[5].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[5].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[5].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[5].evolution_details.min_level ? ` at level ${pokeEvolutionChain[5].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[5].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[5].evolution_details.party_species ? ` with ${pokeEvolutionChain[5].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[5].evolution_details.party_type ? ` with ${pokeEvolutionChain[5].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[5].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[5].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[5].evolution_details.trade_species ? ` with ${pokeEvolutionChain[5].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={4} justify="center">
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow style={{transform: 'rotateZ(-225deg)'}} /> <Typography>{pokeEvolutionChain[6].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[6].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[6].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[6].evolution_details.item ? `  ${pokeEvolutionChain[6].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[6].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[6].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[6].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[6].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[6].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[6].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[6].evolution_details.location ? ` at ${pokeEvolutionChain[6].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[6].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[6].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[6].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[6].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[6].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[6].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[6].evolution_details.min_level ? ` at level ${pokeEvolutionChain[6].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[6].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[6].evolution_details.party_species ? ` with ${pokeEvolutionChain[6].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[6].evolution_details.party_type ? ` with ${pokeEvolutionChain[6].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[6].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[6].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[6].evolution_details.trade_species ? ` with ${pokeEvolutionChain[6].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={4} justify="center">
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow style={{transform: 'rotateZ(-270deg)'}} /> <Typography>{pokeEvolutionChain[7].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[7].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[7].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[7].evolution_details.item ? `  ${pokeEvolutionChain[7].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[7].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[7].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[7].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[7].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[7].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[7].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[7].evolution_details.location ? ` at ${pokeEvolutionChain[7].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[7].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[7].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[7].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[7].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[7].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[7].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[7].evolution_details.min_level ? ` at level ${pokeEvolutionChain[7].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[7].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[7].evolution_details.party_species ? ` with ${pokeEvolutionChain[7].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[7].evolution_details.party_type ? ` with ${pokeEvolutionChain[7].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[7].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[7].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[7].evolution_details.trade_species ? ` with ${pokeEvolutionChain[7].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={4} justify="center">
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow style={{transform: 'rotateZ(45deg)'}} /> <Typography>{pokeEvolutionChain[8].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[8].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[8].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[8].evolution_details.item ? `  ${pokeEvolutionChain[8].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[8].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[8].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[8].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[8].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[8].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[8].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[8].evolution_details.location ? ` at ${pokeEvolutionChain[8].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[8].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[8].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[8].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[8].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[8].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[8].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[8].evolution_details.min_level ? ` at level ${pokeEvolutionChain[8].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[8].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[8].evolution_details.party_species ? ` with ${pokeEvolutionChain[8].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[8].evolution_details.party_type ? ` with ${pokeEvolutionChain[8].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[8].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[8].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[8].evolution_details.trade_species ? ` with ${pokeEvolutionChain[8].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>

                                    </Grid>
                                    <Grid container item xs={3} justify="center"> {/* second row element */}
                                        <Grid container item xs={10} justify="center" key={23} onClick={() => pokeSelectorHandler(pokeEvolutionChain[5].species_name)}>
                                            <Card className={classes.card}>
                                                <CardActionArea className={classes.pokemonButton}>
                                                <CardMedia
                                                    component="img"
                                                    alt={pokeEvolutionChain[5].species_name}
                                                    height="140"
                                                    image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[5].id}.png`}
                                                    title={pokeEvolutionChain[5].species_name}
                                                    className={classes.pokemonImg}
                                                />
                                                <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                                    <Typography  variant="h5" component="h2" className={classes.text}>
                                                    {pokeEvolutionChain[5].species_name}
                                                    </Typography>
                                                </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    </Grid>
                            </Grid>

                            <Grid container xs={9}> {/* Main 3rd Row */}
                                    <Grid container item xs={4} justify="center"> {/* third row element */}
                                        <Grid container item xs={8} justify="center" key={31} onClick={() => pokeSelectorHandler(pokeEvolutionChain[6].species_name)}>
                                            <Card className={classes.card}>
                                                <CardActionArea className={classes.pokemonButton}>
                                                <CardMedia
                                                    component="img"
                                                    alt={pokeEvolutionChain[6].species_name}
                                                    height="140"
                                                    image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[6].id}.png`}
                                                    title={pokeEvolutionChain[6].species_name}
                                                    className={classes.pokemonImg}
                                                />
                                                <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                                    <Typography  variant="h5" component="h2" className={classes.text}>
                                                    {pokeEvolutionChain[6].species_name}
                                                    </Typography>
                                                </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={4} justify="center"> {/* third row element */}
                                        <Grid container item xs={8} justify="center" key={32} onClick={() => pokeSelectorHandler(pokeEvolutionChain[7].species_name)}>
                                            <Card className={classes.card}>
                                                <CardActionArea className={classes.pokemonButton}>
                                                <CardMedia
                                                    component="img"
                                                    alt={pokeEvolutionChain[7].species_name}
                                                    height="140"
                                                    image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[7].id}.png`}
                                                    title={pokeEvolutionChain[7].species_name}
                                                    className={classes.pokemonImg}
                                                />
                                                <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                                    <Typography  variant="h5" component="h2" className={classes.text}>
                                                    {pokeEvolutionChain[7].species_name}
                                                    </Typography>
                                                </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={4} justify="center"> {/* third row element */}
                                        <Grid container item xs={8} justify="center" key={33} onClick={() => pokeSelectorHandler(pokeEvolutionChain[8].species_name)}>
                                            <Card className={classes.card}>
                                                <CardActionArea className={classes.pokemonButton}>
                                                <CardMedia
                                                    component="img"
                                                    alt={pokeEvolutionChain[8].species_name}
                                                    height="140"
                                                    image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[8].id}.png`}
                                                    title={pokeEvolutionChain[8].species_name}
                                                    className={classes.pokemonImg}
                                                />
                                                <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                                                    <Typography  variant="h5" component="h2" className={classes.text}>
                                                    {pokeEvolutionChain[8].species_name}
                                                    </Typography>
                                                </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    </Grid>
                            </Grid>
                            
                          </React.Fragment>
                      ) : null
                  }
              </React.Fragment>
          );
        })
      }
    </Grid>
    </Hidden>
    <Hidden mdUp>
        <Grid container item xs={12} sm={10} justify="center" flexDirection="column"> {/* Starting of mobile layout */}
            <Grid container item xs={4} justify="center" style={{alignItems: 'center'}}>
                {/* first column */}
                <Grid container item xs={12} justify="center" key={props.key}  onClick={() => pokeSelectorHandler(pokeEvolutionChain[0].species_name)}>
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
            <Grid container item xs={4} justify="center" style={{alignItems: 'center'}}>
                {/* second column */}
                <Grid container item xs={12} justify="center" className={classes.arrowGrid}>
                {
                    (<div style={{ textAlign: 'center'}}><Arrow  /> <Typography>{pokeEvolutionChain[1].evolution_details.trigger.name} 
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
                    </Typography></div>)
                }
                </Grid>
                <Grid container item xs={12} justify="center" className={classes.arrowGrid}>
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow  /> <Typography>{pokeEvolutionChain[2].evolution_details.trigger.name} 
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
                                        <Grid container item xs={12} justify="center" className={classes.arrowGrid}>
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow  /> <Typography>{pokeEvolutionChain[3].evolution_details.trigger.name} 
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
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={12} justify="center" className={classes.arrowGrid}>
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow  /> <Typography>{pokeEvolutionChain[4].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[4].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[4].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[4].evolution_details.item ? `  ${pokeEvolutionChain[4].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[4].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[4].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[4].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[4].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[4].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[4].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[4].evolution_details.location ? ` at ${pokeEvolutionChain[4].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[4].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[4].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[4].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[4].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[4].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[4].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[4].evolution_details.min_level ? ` at level ${pokeEvolutionChain[4].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[4].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[4].evolution_details.party_species ? ` with ${pokeEvolutionChain[4].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[4].evolution_details.party_type ? ` with ${pokeEvolutionChain[4].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[4].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[4].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[4].evolution_details.trade_species ? ` with ${pokeEvolutionChain[4].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={12} justify="center" className={classes.arrowGrid}>
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow  /> <Typography>{pokeEvolutionChain[5].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[5].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[5].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[5].evolution_details.item ? `  ${pokeEvolutionChain[5].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[5].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[5].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[5].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[5].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[5].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[5].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[5].evolution_details.location ? ` at ${pokeEvolutionChain[5].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[5].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[5].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[5].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[5].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[5].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[5].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[5].evolution_details.min_level ? ` at level ${pokeEvolutionChain[5].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[5].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[5].evolution_details.party_species ? ` with ${pokeEvolutionChain[5].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[5].evolution_details.party_type ? ` with ${pokeEvolutionChain[5].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[5].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[5].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[5].evolution_details.trade_species ? ` with ${pokeEvolutionChain[5].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={12} justify="center" className={classes.arrowGrid}>
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow /> <Typography>{pokeEvolutionChain[6].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[6].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[6].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[6].evolution_details.item ? `  ${pokeEvolutionChain[6].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[6].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[6].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[6].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[6].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[6].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[6].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[6].evolution_details.location ? ` at ${pokeEvolutionChain[6].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[6].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[6].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[6].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[6].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[6].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[6].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[6].evolution_details.min_level ? ` at level ${pokeEvolutionChain[6].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[6].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[6].evolution_details.party_species ? ` with ${pokeEvolutionChain[6].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[6].evolution_details.party_type ? ` with ${pokeEvolutionChain[6].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[6].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[6].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[6].evolution_details.trade_species ? ` with ${pokeEvolutionChain[6].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={12} justify="center" className={classes.arrowGrid}>
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow  /> <Typography>{pokeEvolutionChain[7].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[7].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[7].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[7].evolution_details.item ? `  ${pokeEvolutionChain[7].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[7].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[7].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[7].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[7].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[7].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[7].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[7].evolution_details.location ? ` at ${pokeEvolutionChain[7].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[7].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[7].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[7].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[7].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[7].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[7].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[7].evolution_details.min_level ? ` at level ${pokeEvolutionChain[7].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[7].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[7].evolution_details.party_species ? ` with ${pokeEvolutionChain[7].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[7].evolution_details.party_type ? ` with ${pokeEvolutionChain[7].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[7].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[7].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[7].evolution_details.trade_species ? ` with ${pokeEvolutionChain[7].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
                                        <Grid container item xs={12} justify="center" className={classes.arrowGrid}>
                                        {
                                            (<div style={{ textAlign: 'center'}}><Arrow  /> <Typography>{pokeEvolutionChain[8].evolution_details.trigger.name} 
                                            {(pokeEvolutionChain[8].evolution_details.gender === 1) ? ` female` : (pokeEvolutionChain[8].evolution_details.gender === 2) ? ` male` : null}
                                            {pokeEvolutionChain[8].evolution_details.item ? `  ${pokeEvolutionChain[8].evolution_details.item.name}` : null}
                                            {pokeEvolutionChain[8].evolution_details.held_item ? ` while holding ${pokeEvolutionChain[8].evolution_details.held_item.name}` : null}
                                            {(pokeEvolutionChain[8].evolution_details.known_move) ? ` while knowing ${pokeEvolutionChain[8].evolution_details.known_move.name}` : null}
                                            {(pokeEvolutionChain[8].evolution_details.known_move_type) ? ` while knowing a ${pokeEvolutionChain[8].evolution_details.known_move_type.name} type move` : null}
                                            {pokeEvolutionChain[8].evolution_details.location ? ` at ${pokeEvolutionChain[8].evolution_details.location.name}` : null}
                                            {pokeEvolutionChain[8].evolution_details.min_affection ? ` when affection is atleast ${pokeEvolutionChain[8].evolution_details.min_affection}` : null}
                                            {pokeEvolutionChain[8].evolution_details.min_beauty ? ` when beauty is atleast ${pokeEvolutionChain[8].evolution_details.min_beauty}` : null}
                                            {pokeEvolutionChain[8].evolution_details.min_happiness ? ` when happiness is atleast ${pokeEvolutionChain[8].evolution_details.min_happiness}` : null}
                                            {pokeEvolutionChain[8].evolution_details.min_level ? ` at level ${pokeEvolutionChain[8].evolution_details.min_level}` : null}
                                            {pokeEvolutionChain[8].evolution_details.needs_overworld_rain ? ` when raining` : null}
                                            {pokeEvolutionChain[8].evolution_details.party_species ? ` with ${pokeEvolutionChain[8].evolution_details.party_species.name} in party` : null}
                                            {pokeEvolutionChain[8].evolution_details.party_type ? ` with ${pokeEvolutionChain[8].evolution_details.party_type.name} type pokemon in party` : null}
                                            {pokeEvolutionChain[8].evolution_details.time_of_day ? ` at ${pokeEvolutionChain[8].evolution_details.time_of_day} ` : null}
                                            {pokeEvolutionChain[8].evolution_details.trade_species ? ` with ${pokeEvolutionChain[8].evolution_details.trade_species.name} ` : null}
                                            </Typography></div>)
                                        }
                                        </Grid>
            </Grid> {/* second column end  */}
            <Grid container item xs={4} justify="center">
                {/* third column  */}
                <Grid container item xs={12} justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[1].species_name)}>
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
                <Grid container item xs={12} justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[2].species_name)}>
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
                <Grid container item xs={12} justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[3].species_name)}>
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
                <Grid container item xs={12} justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[4].species_name)}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.pokemonButton}>
                        <CardMedia
                            component="img"
                            alt={pokeEvolutionChain[4].species_name}
                            height="140"
                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[4].id}.png`}
                            title={pokeEvolutionChain[4].species_name}
                            className={classes.pokemonImg}
                        />
                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                            <Typography  variant="h5" component="h2" className={classes.text}>
                            {pokeEvolutionChain[4].species_name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container item xs={12} justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[5].species_name)}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.pokemonButton}>
                        <CardMedia
                            component="img"
                            alt={pokeEvolutionChain[5].species_name}
                            height="140"
                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[5].id}.png`}
                            title={pokeEvolutionChain[5].species_name}
                            className={classes.pokemonImg}
                        />
                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                            <Typography  variant="h5" component="h2" className={classes.text}>
                            {pokeEvolutionChain[5].species_name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container item xs={12} justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[6].species_name)}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.pokemonButton}>
                        <CardMedia
                            component="img"
                            alt={pokeEvolutionChain[6].species_name}
                            height="140"
                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[6].id}.png`}
                            title={pokeEvolutionChain[6].species_name}
                            className={classes.pokemonImg}
                        />
                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                            <Typography  variant="h5" component="h2" className={classes.text}>
                            {pokeEvolutionChain[6].species_name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container item xs={12} justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[7].species_name)}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.pokemonButton}>
                        <CardMedia
                            component="img"
                            alt={pokeEvolutionChain[7].species_name}
                            height="140"
                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[7].id}.png`}
                            title={pokeEvolutionChain[7].species_name}
                            className={classes.pokemonImg}
                        />
                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                            <Typography  variant="h5" component="h2" className={classes.text}>
                            {pokeEvolutionChain[7].species_name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid container item xs={12} justify="center"  onClick={() => pokeSelectorHandler(pokeEvolutionChain[8].species_name)}>
                    <Card className={classes.card}>
                        <CardActionArea className={classes.pokemonButton}>
                        <CardMedia
                            component="img"
                            alt={pokeEvolutionChain[8].species_name}
                            height="140"
                            image={`https://pokeres.bastionbot.org/images/pokemon/${pokeEvolutionChain[8].id}.png`}
                            title={pokeEvolutionChain[8].species_name}
                            className={classes.pokemonImg}
                        />
                        <CardContent style={{padding: 0, marginTop: '0.5rem'}}>
                            <Typography  variant="h5" component="h2" className={classes.text}>
                            {pokeEvolutionChain[8].species_name}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>{/* third column end  */}
        </Grid>
    </Hidden>
    </React.Fragment>
  );
}

export default PokeEvolutionExceptionType1;