import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  Linking,
  Alert,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DeviceInfo from 'react-native-device-info';

import {checkForUpdate} from './src/utils';
import Environment from './src/Environment';

const appcircleLogo = require('./images/app_circle_icon.png');
function App(): React.JSX.Element {
  const [version, setversion] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const updateControl = async (currentVersion: string) => {
      const updateInfo = await checkForUpdate({
        iOSProfileId: Environment.IOS_PROFILE_ID,
        androidProfileId: Environment.ANDROID_PROFILE_ID,
        currentVersion,
        userEmail: 'USER_EMAIL',
      });
      if (updateInfo && updateInfo.updateURL && updateInfo.version) {
        Alert.alert(
          'Update Available',
          `${updateInfo.version} version is available.`,
          [
            {
              text: 'Update',
              onPress: () => {
                console.log('updateInfo.updateURL', updateInfo.updateURL);
                Linking.openURL(updateInfo.updateURL);
              },
            },
            {
              text: 'Cancel',
            },
          ],
        );
      }
    };

    const getCurrentAppVersion = async () => {
      try {
        const currentVersion = await DeviceInfo.getVersion();
        const buildNumber = await DeviceInfo.getBuildNumber();
        setversion(currentVersion + ' (' + buildNumber + ')');
        updateControl(currentVersion);
      } catch (error) {
        console.error('Failed to get app version:', error);
      }
    };

    getCurrentAppVersion();
  }, []);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
        contentContainerStyle={styles.container}
      >
        <View style={styles.logoWrapper}>
          <Image style={styles.tinyLogo} source={appcircleLogo} />
          <Text
            style={[
              styles.title,
              {
                color: isDarkMode ? Colors.lighter : Colors.darker,
              },
            ]}
          >
            Appcircle.io
          </Text>
        </View>
        <View style={styles.version}>
          <Text
            style={[
              styles.title,
              {
                color: isDarkMode ? Colors.lighter : Colors.darker,
              },
            ]}
          >
            v{version}
          </Text>
        </View>
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
  },
  logoWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 90,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  version: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 90,
  },
});

export default App;
