import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as MUIThemeProvider } from 'styled-components';
import linkingConfiguration from '@constants/linking_configuration';
import lightTheme from '@styles/themes/light';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <PaperProvider theme={lightTheme}>
      <MUIThemeProvider theme={lightTheme}>
        <NavigationContainer theme={lightTheme} linking={linkingConfiguration}>
          {children}
        </NavigationContainer>
      </MUIThemeProvider>
    </PaperProvider>
  );
};

export default ThemeProvider;
