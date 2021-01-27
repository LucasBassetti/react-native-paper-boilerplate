import * as React from 'react';
import { Text } from 'react-native-paper';
import { useAuth } from '@hooks/useAuth';
import * as S from './styled';

const DashboardScreen = () => {
  const { user } = useAuth();
  const { firstName } = user;

  return (
    <S.StyledView>
      <Text>Hello {firstName}!</Text>
    </S.StyledView>
  );
};

export default DashboardScreen;
