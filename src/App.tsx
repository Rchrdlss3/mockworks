import { HashRouter, Routes } from 'react-router-dom';
import { AppRoutes, getTheme } from './utils/constants';
import AppHeader from './components/AppHeaderComponent';
import { IconContext } from 'react-icons';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { darkTheme, lightTheme, MockworksTheme } from './types/styles';

interface ThemeContextType {
  theme: MockworksTheme;
  setTheme: Dispatch<SetStateAction<MockworksTheme>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function App() {

  const [theme,setTheme] = useState<MockworksTheme>(getTheme());
  
  return (
    <HashRouter>
      <ThemeContext.Provider value = {{theme,setTheme}}>
      <IconContext.Provider value = {{}}>
      <AppHeader /> 
      <Routes>
        {AppRoutes()}
      </Routes>
      </IconContext.Provider>
      </ThemeContext.Provider>
    </HashRouter>
  );
}
