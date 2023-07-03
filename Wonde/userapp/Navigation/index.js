import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Connectionlist from '../screens/Connectionlist';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Connectionlist" component={Connectionlist} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default MyStack;