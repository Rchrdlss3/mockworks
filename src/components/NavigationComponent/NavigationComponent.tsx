import { NavLink } from "react-router-dom";
import { APP_NAME, navigationLinks } from "../../utils";
import ThemeSwitchComponent from "../ThemeSwitchComponent/ThemeSwitchComponent";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function NavigationComponent() {

  const theme = useContext(ThemeContext);

  return (
    <div style = {{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: 10, 
      backgroundColor: theme?.theme.colors.surface, 
      color: theme?.theme.colors.text.main,
      height: '50px',
      borderBottom: `1px solid ${theme?.theme.colors.border}`,
      }}>
    <h1 style = {{margin: 0, textDecoration: 'underline', textDecorationColor: theme?.theme.colors.primary, textDecorationThickness: '7px', fontWeight: 800}}>{APP_NAME}</h1>
      <nav>
          {navigationLinks.map((link) => (
            <NavLink 
            key={link.name} 
            to={link.path}
            style={({isActive}) => ({
              margin: 5, 
              textDecoration: 'none', 
              color: isActive ? theme?.theme.colors.primary : theme?.theme.colors.text.muted, 
              fontWeight: 800, 
              fontSize: '1.1em',
              })}>
              {link.name}
            </NavLink>
          ))}
      </nav>
      <ThemeSwitchComponent />
    </div>
  );
}