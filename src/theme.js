import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      // Tell Material-UI what's the font-size on the html element is.
      htmlFontSize: 10,
      '@media (min-width:2500px)': {
        htmlFontSize: 16
      },
      h1:{
          fontWeight: 400,
      },
    },
});

theme.typography.h1 = {
  fontSize: '9.6rem',
  fontWeight: 400,
  '@media (min-width: 1280px) and (max-width: 1650px)': {
    fontSize: '6.6rem',
  },
  '@media  (max-width: 1280px)': {
    fontSize: '5.6rem',
  },
  '@media  (max-width: 600px)': {
    fontSize: '4.6rem',
  },
};

theme.typography.h3 = {
  fontSize: '4.8rem',
  fontWeight: 400,
  '@media (min-width: 1280px) and (max-width: 1650px)': {
    fontSize: '3.8rem',
  },
  '@media  (max-width: 1280px)': {
    fontSize: '2.8rem',
  },
}


theme.typography.h5 = {
  fontSize: '2rem',
  fontWeight: 400,
  '@media  (max-width: 1180px)': {
    fontSize: '1.6rem',
  },
}


export default theme;
