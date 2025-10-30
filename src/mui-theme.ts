import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      dark: "hsl(201, 81%, 23%)",
      main: "hsl(201, 81%, 33%)",
      light: "hsl(201, 81%, 43%)",
      contrastText: "hsl(0, 0%, 100%)",
    },
    secondary: {
      dark: "hsl(32, 94%, 39%)",
      main: "hsl(32, 94%, 49%)",
      light: "hsl(32, 94%, 59%)",
      contrastText: "hsl(0, 0%, 100%)",
    },
    background: {
      default: "hsl(218, 17%, 9%)",
      paper: "hsl(218, 17%, 12%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsla(0, 0%, 100%, 0.7)",
    },
  },
});
