import * as React from 'react';
import {View, Text, Button, Image, TextInput} from 'react-native';

import styles from './styles';
const appcircleLogo = require('../images/app_circle_icon.png');
const appVersion = '1.0';

export default function DetailsScreen() {
  const [email, onChangeEmail] = React.useState(null);
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = re.test(email);
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={appcircleLogo} />
      <Text style={styles.title}> Appcircle.io</Text>
      <Text style={styles.subTitle}> v{appVersion}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID="email"
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          autoCapitalize="none"
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>
      <Button
        color="#FF8E34"
        disabled={!isValidEmail}
        title="Login"
        onPress={() => {}}
      />
    </View>
  );
}
