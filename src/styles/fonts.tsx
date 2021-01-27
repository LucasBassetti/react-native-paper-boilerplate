const defaultFontConfig = {
  regular: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400' as '400',
  },
  medium: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600' as '600',
  },
  light: {
    fontFamily: 'Inter-Light',
    fontWeight: '300' as '300',
  },
  thin: {
    fontFamily: 'Inter-Light',
    fontWeight: '300' as '300',
  },
};

const fontConfig = {
  web: defaultFontConfig,
  ios: defaultFontConfig,
  android: defaultFontConfig,
  default: defaultFontConfig,
};

export default fontConfig;
