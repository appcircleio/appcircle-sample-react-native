import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
} from 'react-native';

const appcircleLogo = require('./images/app_circle_icon.png');

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.container}>
        <Image style={styles.tinyLogo} source={appcircleLogo} />
        <Text
          style={[
            styles.title,
            {color: isDarkMode ? '#f5f5f5' : '#1a1a1a'},
          ]}>
          Appcircle.io
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;
