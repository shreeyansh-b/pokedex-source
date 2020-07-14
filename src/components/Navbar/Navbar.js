import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import logo from '../../assests/images/logo.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const useStyles = makeStyles((theme,props) => ({
  menuButton:{
    width: '17rem',
    borderRadius: 0
  },
}));

const Navbar =  (props) => {
  const homeBtnHandler = () => {
    props.history.push({pathname: '/'});
  }
  
    const classes = useStyles(props);
    return(
      <HideOnScroll {...props}>
        <AppBar elevation={props.elevation ? props.elevation : 0} color={props.color ? props.color : "transparent"}  className={classes.navBar}>
          <Toolbar >
            {props.hasBack ? 
            <IconButton style={{marginRight: '2rem'}} onClick={props.history.goBack}>
            <ArrowBackIcon /> 
            </IconButton>
            : null}
            {props.noLogo ? null :
                        <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="home button"
                        onClick={() => props.history.push({pathname: '/'})}
                      >
                        <img src={logo} style={{width: '100%'}}></img>
                      </IconButton>}
            {props.homeBtn ? 
            <IconButton style={{marginRight: '2rem'}} onClick={homeBtnHandler}>
            <HomeOutlinedIcon  /> 
            </IconButton>
            : null
          }
          </Toolbar>
        </AppBar>
        </HideOnScroll>
    );
}

export default Navbar;