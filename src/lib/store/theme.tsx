import React, { createContext, useContext } from 'react';
import { defaultTheme } from '../../theme/customTheme';
import { ThemeType } from '../../theme/types';

export const ThemeContext = createContext(defaultTheme);

export const ThemeProvider: React.FC<
    React.PropsWithChildren<{ theme?: ThemeType }>
> = ({ children, theme = defaultTheme }) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
};
