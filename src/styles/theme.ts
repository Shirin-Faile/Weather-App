import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            light: '#63a4ff',
            dark: '#004ba0',
            contrastText: '#fff',
        },
        secondary: {
            main: '#dc004e',
            light: '#ff6f60',
            dark: '#9a0036',
            contrastText: '#fff',
        },
        background: {
            default: '#f4f6f8',
            paper: '#fff',
        },
        text: {
            primary: '#333',
            secondary: '#555',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    padding: '8px 16px',
                    textTransform: 'none',
                },
                containedPrimary: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '16px',
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
