import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardNavigator from '@navigation/DashboardNavigator';
import ProfileNavigator from '@navigation/ProfileNavigator';

export type BottomTabParamList = {
  Dashboard: undefined;
  Profile: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      // tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="dashboard" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// // You can explore the built-in icon families and icons on the web at:
// // https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }
