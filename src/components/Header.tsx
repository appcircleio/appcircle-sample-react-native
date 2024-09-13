import * as React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import styles from './styles';
const appcircleLogo = require('../../images/app_circle_icon.png');

export default function HomeScreen({}) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#FF8E34"
      />
      <Image style={styles.tinyLogo} source={appcircleLogo} />
      <Text style={styles.title}>Appcircle.io</Text>
    </View>
  );
}
