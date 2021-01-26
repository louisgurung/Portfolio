import { createMuiTheme, colors } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fcf2e8",
      paper: colors.common.white,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 850,
      },
    },
    primary: {
      main: "#fcf2e8",
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  }
});

export default theme;
