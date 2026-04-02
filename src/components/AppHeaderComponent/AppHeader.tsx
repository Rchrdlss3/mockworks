import { useContext } from "react";
import NavigationComponent from "../NavigationComponent";
import { ThemeContext } from "../../App";

export default function AppHeader() {

  const theme = useContext(ThemeContext);

  return (
    <header style = {{backgroundColor: theme?.theme.colors.surface, padding: 0, margin: 0, position: 'sticky', top: 0, overflow: 'hidden', zIndex: 1, transition: '2s'}}>
      <NavigationComponent />
    </header>
  );
}

