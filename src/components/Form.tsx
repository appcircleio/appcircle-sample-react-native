import * as React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default function DetailsScreen() {
  const [email, onChangeEmail] = React.useState('');
  return (
    <View style={styles.container}>
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

      <Text>
        {email.length > 0 && !re.test(email) ? 'E-mail is not valid' : null}
      </Text>
    </View>
  );
}
