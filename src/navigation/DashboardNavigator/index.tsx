import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '@screens/public/Dashboard';

export type DashboardParamList = {
  DashboardScreen: undefined;
};

const DashboardStack = createStackNavigator<DashboardParamList>();

const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ headerTitle: 'Dashboard' }}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardNavigator;
