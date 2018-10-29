import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { red, teal } from '@material-ui/core/colors/';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: red.A400,
    },
    secondary: {
      main: teal.A400,
    },
  },
});
