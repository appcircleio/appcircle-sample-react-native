import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  Pressable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const appcircleLogo = require('../../images/app_circle_icon.png');

function Home({navigation}): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Image style={styles.tinyLogo} source={appcircleLogo} />
      <Text
        style={[
          styles.title,
          {color: isDarkMode ? Colors.lighter : Colors.darker},
        ]}
      >
        Appcircle.io
      </Text>
      <Pressable onPress={() => navigation.navigate('productList')}>
        <Text style={{paddingTop: 48}}>Go to product list</Text>
      </Pressable>
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

export default Home;
