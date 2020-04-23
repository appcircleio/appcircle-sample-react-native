// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StatusBar, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeviceInfo from 'react-native-device-info';

const appcircleLogo = require('./images/app_circle_icon.png');
const Stack = createStackNavigator();
const appVersion = DeviceInfo.getVersion();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#FF8E34" />
      <Image style={styles.tinyLogo} source={appcircleLogo} />
      <Text style={{ fontWeight: 'bold', fontSize: 24, paddingBottom: 20 }}> Appcircle.io</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Next Page"
        color="#FF8E34"
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={appcircleLogo} />
      <Text style={{ fontWeight: 'bold', fontSize: 26 }}> Appcircle.io</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}> v{appVersion}</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={headerbarOptions} />
        <Stack.Screen name="Details" component={DetailsScreen} options={headerbarOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});

const headerbarOptions = {
  title: 'React Native Sample',
  headerStyle: {
    backgroundColor: '#FF8E34',
  },
  headerTintColor: '#fff'
}

export default App;