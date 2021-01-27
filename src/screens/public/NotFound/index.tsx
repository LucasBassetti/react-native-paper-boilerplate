import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Text, View } from 'react-native';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View>
      <Text>This screen doesn't exist.</Text>
    </View>
  );
}
