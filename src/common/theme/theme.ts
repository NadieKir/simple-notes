import { createTheme } from "@mui/material/styles";
import palette from "style/_colors.module.scss";
import typography from "style/_typography.module.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
      contrastText: palette.white,
    },
  },
  typography: {
    fontFamily: typography.primaryFont,
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.darkGray,
        },
      },
    },
  },
});