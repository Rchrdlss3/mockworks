import React from "react";
import { MockworksTheme } from "../types/styles";

export const PageStyle = (theme: MockworksTheme):React.CSSProperties => {
    return {
        backgroundColor: theme.colors.background,
        color: theme.colors.text.main,
        minHeight: '100vh',
        minWidth: '100vw',
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%',
        transition: '2s'
    }
}