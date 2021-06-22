import React from 'react';
import PlayList from './app/screens/PlayList';
import Player from './app/screens/Player';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options = {{
          headerShown:false
        }}
        name="PlayList" component={PlayList} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
