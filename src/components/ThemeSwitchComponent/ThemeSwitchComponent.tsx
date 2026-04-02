import { useContext, useState } from "react"
import { ThemeContext } from "../../App"
import { darkTheme, lightTheme } from "../../types/styles";
import { getTheme, switchTheme } from "../../utils/constants";

export default function ThemeSwitchComponent () {
    
    const theme = useContext(ThemeContext);
    const [isChecked,setIsChecked] = useState(theme?.theme === darkTheme);

    const buttonText = () => {
        switch(true){
            case getTheme() === darkTheme:
                return '🌙'
            case getTheme() === lightTheme:
                return '☀️'
            default:
                return 'A'
        }
    };
    
    return (
        <>
            <button style = {{
                width: '30px',
                height: '30px',
                borderRadius: '100%',
                backgroundColor: theme?.theme.colors.background,
                border: `1px solid ${theme?.theme.colors.primary}30`,
                color: 'transparent',
                textShadow: `0 0 0 ${theme?.theme.colors.primary}`
            }}
            onClick = {() => {
                setIsChecked(!isChecked)
                theme?.setTheme(switchTheme())
            }}
            >
            {buttonText()}
            </button>
        </>
    )
}