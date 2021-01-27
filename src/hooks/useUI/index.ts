import { Dimensions } from 'react-native';

export const useUI = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return {
    window: { width, height },
    isSmallDevice: width < 375,
  };
};
