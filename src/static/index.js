import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
    toggleMode: () => { },
    mode: "light"
})

const themeObj = {
    light: {
        background: {
            default: '#fff',
            paper: '#fff',
            footerBg1: '#f1f2f8',
            footerBg2: '#3179C2',
            navBg: '#F2F9FF',
            iconBg: '#ECF2F9',
        },
        primary: {
            light: '#3179C2',
            main: '#00468D',
        },
        secondary: {
            light: '#6E7E8B',
            main: '#00468D',
            dark: '#052D56',
        },
        info: {
            main: '#011223',
            light: '#252C34',
        },
        border: {
            main: "#00468D",
        }
    },
    dark: {
        background: {
            default: '#021B34',
            paper: '#02111F',
            footerBg1: '#0B1D2E',
            footerBg2: '#02111F',
            navBg: '#102538',
            iconBg: '#12283D',
        },
        primary: {
            light: '#3179C2',
            main: '#00468D',
        },
        secondary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff',
        },
        info: {
            main: '#fff',
            light: '#fff',
        },
        border: {
            main: '#fff',
        }
    }
}

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    localStorage.setItem('mode', mode);

    const colorMode = useMemo(() => ({
        toggleMode: () => setMode(prevMode => prevMode === 'light' ? 'dark' : 'light'),
        mode,
    }), [mode])

    const theme = useMemo(() => createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200,
            },
        },
        palette: {
            mode: mode,
            ...themeObj[mode],
        },
    }), [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
