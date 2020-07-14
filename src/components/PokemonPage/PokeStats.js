import React from 'react';
import { Grid, Typography, Chip, Divider, Avatar, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import hp from '../../assests/svgs/hp.svg';
import attack from '../../assests/svgs/attack.svg';
import specialAttack from '../../assests/svgs/special-attack.svg';
import defense from '../../assests/svgs/defense.svg';
import specialDefense from '../../assests/svgs/special-defense.svg';
import speed from '../../assests/svgs/speed.svg';

import normal from '../../assests/svgs/normal.svg';
import fire from '../../assests/svgs/fire.svg';
import water from '../../assests/svgs/water.svg';
import electric from '../../assests/svgs/electric.svg';
import grass from '../../assests/svgs/grass.svg';
import ice from '../../assests/svgs/ice.svg';
import fighting from '../../assests/svgs/fighting.svg';
import poison from '../../assests/svgs/poison.svg';
import ground from '../../assests/svgs/ground.svg';
import flying from '../../assests/svgs/flying.svg';
import psychic from '../../assests/svgs/psychic.svg';
import bug from '../../assests/svgs/bug.svg';
import rock from '../../assests/svgs/rock.svg';
import ghost from '../../assests/svgs/ghost.svg';
import dragon from '../../assests/svgs/dragon.svg';
import dark from '../../assests/svgs/dark.svg';
import steel from '../../assests/svgs/steel.svg';
import fairy from '../../assests/svgs/fairy.svg';



const svgs = [  //should've used an object but for this trivial case used an array
    hp,
    attack,
    specialAttack,
    defense,
    specialDefense,
    speed
];

const typesSVG = {
    normal,
    fire,
    water,
    electric,
    grass,
    ice,
    fighting,
    poison,
    ground,
    flying,
    psychic,
    bug,
    rock,
    ghost,
    dragon,
    dark,
    steel,
    fairy
}


const useStyles = makeStyles((theme) => ({
    chip:{
        marginRight: '2rem',
        marginBottom: '.8rem',
        padding: '1rem',
        fontSize: '2rem',
        height: '4rem',
        textTransform: 'uppercase',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0',
          },
    },
    rows:{
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center'
        },
    },
    mainGrid:{
        [theme.breakpoints.down('sm')]: {
            marginTop: '5rem'
        },
    }
}));


const PokeStats = (props) => {
    const classes = useStyles();
    const newStats = [...props.pokeStats];  //cause initially props.pokeStats is undefined and map wont work therefore, assigning an array so for initial state and that array is empty and map works
    const newTypes = [...props.pokeTypes];
    return(
        <Grid container item xs={12} className={classes.mainGrid}>
            <Hidden smDown>
            <Grid container item xs={1}>
                <Divider orientation='vertical' />
            </Grid>
            </Hidden>
            <Grid container item xs={12} md={11} direction="column" className={classes.rows} alignItems='baseline'>
                <Typography variant="h3">Stats</Typography>
                {
                    newStats.map((stat) => {
                        const label = stat.stat.name + ':' + stat.base_stat;
                        return(<Chip label={label} avatar={<Avatar src={svgs[parseInt(stat.stat.url[31]) - 1]} ></Avatar>} className={classes.chip} key={parseInt(stat.stat.url[31]) - 1} size='small'></Chip>)
                    })
                }
            </Grid>
            <Hidden smDown>
            <Grid container item xs={1}>
                <Divider orientation='vertical' />
            </Grid>
            </Hidden>
            <Grid container item xs={12} md={11} direction="column" className={classes.rows} alignItems='baseline'>
                <Typography variant="h3">Type</Typography>
                {
                    newTypes.map((type) => {
                        const typeName = type.type.name
                        return(<Chip label={typeName} avatar={<Avatar src={typesSVG[typeName]} ></Avatar>} className={classes.chip} key={type.slot}></Chip>)
                    })
                }
            </Grid>
        </Grid>
    );
}
export default PokeStats;