import * as React from 'react';
import {View, Text, Button, StatusBar, Image} from 'react-native';
import styles from './styles';
const appcircleLogo = require('../images/app_circle_icon.png');

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#FF8E34"
      />
      <Image style={styles.tinyLogo} source={appcircleLogo} />
      <Text style={styles.title}>Appcircle.io</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Next Page"
        color="#FF8E34"
      />
    </View>
  );
}
