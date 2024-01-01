// AppNavigator.js
// "use clin"

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignIn from './SignIn'; // Your Sign-In page component
// import SignUp from './SignUp'; // Your Sign-Up page component
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn}
            options={{
              headerShown:false
            }} />
            <Stack.Screen name="SignUp" component={SignUp}
                options={{
                  headerShown:false
              }} />
            <Stack.Screen name="Home" component={Home}
                options={{
                  headerShown:false
              }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
