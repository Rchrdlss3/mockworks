import { Dispatch, SetStateAction, useContext, useState } from "react";
import { InfoNavigation } from "../UserInfoComponent"
import { ThemeContext } from "../../../App";

interface UserInfoNavigationProps {
    navigation: typeof InfoNavigation;
    currentNavigation: string;
    setCurrentNavigation: Dispatch<SetStateAction<string>>;
}

export default function UserInfoNavigationComponent ({navigation,currentNavigation,setCurrentNavigation}:UserInfoNavigationProps) {

    const [hover,setHover] = useState(false);
    const theme = useContext(ThemeContext);

    return (
        <div style = {{ width: '25%', height: '100%', borderRight: `2px solid ${theme?.theme.colors.border}`}}>
            <ul style = {{listStyle: 'none', margin: 0, paddingTop: 30}}>
                {Object.keys(navigation).map((key) => {
                    const currentNav = Object(navigation)[key] === currentNavigation 
                    return <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    {currentNav && (<div style = {{ width: '3px', height: '20px', backgroundColor: theme?.theme.colors.primary}}></div>)}
                    <li 
                    style = {{
                        margin: 5, 
                        fontWeight: currentNav ? 800 : 400, 
                        color: currentNav ? theme?.theme.colors.primary : theme?.theme.colors.text.main,
                        cursor: hover ? 'pointer' : undefined,
                        }}
                    onMouseEnter = {() => {setHover(true)}}
                    onMouseLeave = {() => setHover(false)}
                    onClick = {() => {setCurrentNavigation(Object(navigation)[key])}}
                    >{Object(navigation)[key]}</li>   
                    </div>
                    })}
            </ul>
        </div>
    )
}