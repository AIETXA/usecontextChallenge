import { useTheme } from "../themes/ThemeContext"

function Button() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>{theme === 'light' ? 'dark' : 'light'}</button>
    );
}

export default Button