export interface ThemeColors {
    primary: string;    // Justworks Navy
    action: string;     // Brand Blue for links/buttons
    success: string;    // Approved green
    danger: string;     // Termination/Warning red
    background: string; // Page background
    surface: string;    // Card/Section background
    border: string;     
    shadow: string;// Dividers and outlines
    text: {
      main: string;
      muted: string;
      inverse: string;
    };
  }
  
  export interface MockworksTheme {
    id: 'light' | 'dark';
    colors: ThemeColors;
    spacing: (unit: number) => string;
    borderRadius: string;
  }

  const commonSpacing = (unit: number) => `${unit * 4}px`;
  const commonRadius = '4px';

export const lightTheme: MockworksTheme = {
  id: 'light',
  colors: {
    primary: '#004876',
    action: '#00A2DF',
    success: '#35A754',
    danger: '#D93025',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E2E8F0',
    shadow: '#000000',
    text: {
      main: '#2D3748',
      muted: '#718096',
      inverse: '#FFFFFF',
    },
  },
  spacing: commonSpacing,
  borderRadius: commonRadius,
};

export const darkTheme: MockworksTheme = {
  id: 'dark',
  colors: {
    primary: '#63B3ED',
    action: '#4FD1C5',
    success: '#68D391',
    danger: '#FC8181',
    background: '#1A202C',
    surface: '#2D3748',
    border: '#4A5568',
    shadow: '#000000',
    text: {
      main: '#F7FAFC',
      muted: '#A0AEC0',
      inverse: '#1A202C',
    },
  },
  spacing: commonSpacing,
  borderRadius: commonRadius,
};