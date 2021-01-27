import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from '@screens/public/NotFound';
import BottomTabNavigator from '@navigation/BottomTabNavigator';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
