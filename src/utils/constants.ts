import React, { lazy, Suspense, ReactElement } from "react";
import { Route } from "react-router-dom";
import { darkTheme, lightTheme } from "../types/styles";
import { DollarSign, LucideProps, ArrowLeftRight, X } from "lucide-react";
export const APP_NAME = 'Mockworks';
const HomePage = lazy(() => import('../pages/HomePage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));

export const apiUrl = `https://mockworks-services.vercel.app`;

export const navigationLinks = [
  {
    name: 'Home',
    path: '/',
    display: true,
    element: React.createElement(HomePage),
  },
  {
    name: 'Search',
    path: '/search',
    display: true,
    element: React.createElement(SearchPage),
  }
];

export const PageSuspense = (component: ReactElement) =>  {
    return React.createElement(Suspense, {
        fallback: React.createElement('div', { className: 'loading' }, 'Loading...'),
        children: component,
    })
}

export const AppRoutes = () => {
    return navigationLinks.map((link) => (
        React.createElement(Route, {
            key: link.path,
            path: link.path,
            element: PageSuspense(link.element),
        })
    ))
};

enum THEME {
    dark = "DARK_THEME",
    light = "LIGHT_THEME"
};

const setTheme = (inputTheme:THEME) => {
    localStorage.setItem("THEME",inputTheme)
}

export const getTheme = () => {
        const currentTheme = localStorage.getItem("THEME")  
        switch(true) {
            case currentTheme === THEME.light:
                return lightTheme
            case currentTheme === THEME.dark:
                return darkTheme
            case (window.matchMedia('(prefers-color-scheme: dark)').matches):
            return darkTheme
            default:
                setTheme(THEME.light)
                return lightTheme
        }
};

export function switchTheme() {
    const currentTheme = localStorage.getItem("THEME")
    switch(true) {
        case currentTheme === THEME.dark:
            setTheme(THEME.light)
            return lightTheme
        case currentTheme === THEME.light:
            setTheme(THEME.dark)
            return darkTheme
        default:
                setTheme(THEME.light)
                return  lightTheme
    }
}

interface InfoHeader {
    name: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}
export const UserInfoHeaderArray:Array<InfoHeader> = [
    {name: 'Make a payment', icon: DollarSign},
    {name: 'View payments', icon: DollarSign},
    {name: 'Change compensation', icon: ArrowLeftRight},
    {name: 'Schedule termination', icon: X}
];

export const employeePronouns = ['he/him','she/her','they/them','other']