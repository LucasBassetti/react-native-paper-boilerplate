import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '@screens/public/Profile';

export type ProfileParamList = {
  ProfileScreen: undefined;
};

const ProfileStack = createStackNavigator<ProfileParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
