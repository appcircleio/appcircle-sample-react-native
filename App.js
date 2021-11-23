// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/homescreen';
import DetailsScreen from './components/detailsscreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerbarOptions}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={headerbarOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerbarOptions = {
  title: 'React Native Sample',
  headerStyle: {
    backgroundColor: '#FF8E34',
  },
  headerTintColor: '#fff',
};

export default App;
