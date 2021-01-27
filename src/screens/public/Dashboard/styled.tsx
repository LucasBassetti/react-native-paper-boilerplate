import styled from 'styled-components';
import { View } from 'react-native';

export const StyledView = styled(View)`
  padding: ${({ theme }) => `${theme.spacing(2)}px`};
`;
