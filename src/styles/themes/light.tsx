import { configureFonts, DefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import fontConfig from '../fonts';

const DEFAULT_SPACING = 8;

const lightTheme = {
  ...DefaultTheme,
  ...NavigationDefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 7,
  spacing: (spacing: number) => spacing * DEFAULT_SPACING,
  colors: {
    ...DefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#619D00',
    accent: '#F0B900',
  },
};

export default lightTheme;
