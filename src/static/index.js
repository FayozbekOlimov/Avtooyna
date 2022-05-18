import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
    toggleMode: () => { },
    mode: "light"
})

const themeObj = {
    dark: {
        typography: {
            fontSize:
        },
        background: {
            default: '#021B34',
            paper: '#02111F'
        },
        primary: {
            navBg: '#F2F9FF',
            light: '#3179C2',
            main: "#00468D",
        },
        secondary: {
            main: '#fff',
            iconBg: '#12283D',
        },
        info: {
            main: "#fff",
            light: "#fff"
        },
        // textColor: {
        //     main: "",
        // },
    },
    light: {
        background: {
            default: '#fff',
            paper: '#fff'
        },
        primary: {
            navBg: '#102538',
            light: '#3179C2',
            main: "#00468D",
        },
        secondary: {
            main: "#00468D",
            iconBg: "#ECF2F9",
        },
        info: {
            main: "#011223",
            light: "#252C34"
        },
        // textColor: {
        //     main: "",
        // },
    }
}

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(() => ({
        toggleMode: () => setMode(prevMode => prevMode === 'light' ? 'dark' : 'light'),
        mode,
    }), [mode])

    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
            ...themeObj[mode]
        }
    }), [mode])
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
