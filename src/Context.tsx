import { ReactElement, useContext, createContext, Children } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext('light' as Theme);

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
