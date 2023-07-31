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
    h3: {
      fontSize: 20,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.darkGray,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h3',
          subtitle2: 'p',
          body1: 'span',
          body2: 'p',
        },
      },
    },
  },
});