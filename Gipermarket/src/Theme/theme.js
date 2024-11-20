import { createTheme } from "@mui/material";
import { Colors } from "./colors";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 900,
      lg: 1386,
      xl: 1648,
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "122%",
    },
    h2: {
      fontWeight: 500,
      fontSize: "21px",
    },
    h3: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "156%",
    },
    h4: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "150%",
    },
    h5: {
      fontWeight: 600,
      fontSize: "18px",
    },
    h6: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "150%",
      letterSpacing: "0.01em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "160%",
    },
    body2: {
      fontWeight: 400,
      fontSize: "18px",
    },
    body3: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "150%",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1360px !important",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
          textDecoration: "none",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            fontWeight: 400,
            fontSize: "20px",
            color: `${Colors.m3SysDightOnTertiaryContainer}`,
            backgroundColor: `${Colors.gipermart}`,
            width: "158px",
            height: "48px",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            fontWeight: 700,
            fontSize: "20px",
            color: `${Colors.primary}`,
            padding: "28px 39px 28px 39px",
            backgroundColor: `${Colors.white}`,
            borderRadius: "16px",
            border: `1px solid ${Colors.primary}`,
            height: "80px",
          },
        },
        {
          props: { variant: "text" },
          style: {
            fontWeight: 700,
            fontSize: "20px",
            color: `${Colors.primary}`,
            backgroundColor: `${Colors.white}`,
            borderRadius: "16px",
          },
        },
      ],
    },
  },
});
