//Aquí estará nuestro contexto y donde haremos los cambios de estado. 
// Debemos comenzar con un estado de `light` que al pulsar cambiará a `dark`. 
// Al hacerlo hay unas clases creadas en `index.css` donde puedes ver lo que hace.

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => {
        setTheme(prev =>( prev === 'light' ? 'dark' : 'light'))
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)