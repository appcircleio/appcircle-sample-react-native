// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Products from './src/screens/Products';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerTitle: 'Appcircle'}}
        />
        <Stack.Screen
          name="productList"
          component={Products}
          options={{headerTitle: 'Appcircle'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   Image,
//   View,
//   Pressable,
// } from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import ProductList from './src/components/DemoProductList';

// const appcircleLogo = require('./images/app_circle_icon.png');

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const [isShowProducts, setisShowProducts] = useState(false);

//   const backgroundStyle = {
//     flex: 1,
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         testID="containerScroll"
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}
//         contentContainerStyle={styles.container}
//       >
//         <View style={{alignItems: 'center'}}>
//           <Image style={styles.tinyLogo} source={appcircleLogo} />
//           <Text
//             style={[
//               styles.title,
//               {color: isDarkMode ? Colors.lighter : Colors.darker},
//             ]}
//           >
//             Appcircle.io
//           </Text>
//         </View>
//         <Pressable onPress={() => setisShowProducts(!isShowProducts)}>
//           <Text>Show Products</Text>
//         </Pressable>
//         {isShowProducts ? <ProductList productLength={20} /> : null}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 24,
//     flex: 1,
//   },
//   title: {
//     marginTop: 8,
//     fontWeight: 'bold',
//     fontSize: 16,
//     paddingBottom: 20,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
// });

// export default App;
