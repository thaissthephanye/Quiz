import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8a2be2",
      light: "#b388ff",
      dark: "#5c0099",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b388ff",
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      background: "linear-gradient(45deg, #8a2be2, #b388ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "1rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#b388ff",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "12px 24px",
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "1rem",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 20px rgba(138, 43, 226, 0.3)",
          "&:hover": {
            boxShadow: "0 6px 25px rgba(138, 43, 226, 0.5)",
            transform: "translateY(-2px)",
          },
        },
        contained: {
          padding: "12px 28px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: "all 0.3s ease",
          background: "linear-gradient(145deg, #1e1e1e, #232323)",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 30px rgba(138, 43, 226, 0.4)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.2)",
          },
        },
      },
    },
  },
});

export default theme;
