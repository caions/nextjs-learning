import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00CA72',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    info: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    principal: {
      "color": "#faed"
    }
  },
  enggaji:{
    cor1: {
      "color": "#00ca72"
    },
    cor2:{
      "color": "#01ed"
    },
    alinhar:{
      "textAlign":"center"
    }
  },
});

export default theme;