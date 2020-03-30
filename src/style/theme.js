import { createMuiTheme, rgbToHex } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";

export default createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(68, 114, 196)',
      contrastText:'#fff'
    },
    secondary: {
      main: 'rgb(20,52,68)'
    },
  },
});
