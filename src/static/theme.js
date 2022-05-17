import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 320,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
    palette: {
        primary: {
            navBg: '#F2F9FF',
            light: '#3179C2',
            main: "#00468D",
        },
        titleColor: {
            main: "#011223",
        },
        textColor: {
            main: "#252C34",
        },
    },
});