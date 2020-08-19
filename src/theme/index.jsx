import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: '0.01rem',
      color: 'rgba(0, 0, 0, 0.78)',
    },
  },
});

export default responsiveFontSizes(theme);
