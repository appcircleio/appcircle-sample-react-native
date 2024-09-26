import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  Pressable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ProductList from './src/components/DemoProductList';

const appcircleLogo = require('./images/app_circle_icon.png');

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [isShowProducts, setisShowProducts] = useState(false);

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
        testID="containerScroll"
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.container}
      >
        <View style={{alignItems: 'center'}}>
          <Image style={styles.tinyLogo} source={appcircleLogo} />
          <Text
            style={[
              styles.title,
              {color: isDarkMode ? Colors.lighter : Colors.darker},
            ]}
          >
            Appcircle.io
          </Text>
        </View>
        <Pressable onPress={() => setisShowProducts(!isShowProducts)}>
          <Text>Show Products</Text>
        </Pressable>
        {isShowProducts ? <ProductList productLength={20} /> : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flex: 1,
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
