import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
const {width} = Dimensions.get('window');
import {Colors, SHADOWS} from './src/constants/styles';
import ShopScreen from './src/screens/ShopScreen';
import Context from './src/API/Context';

const App = () => {
  const [viewMode, setViewMode] = useState('Home');
  const Footer = () => {
    return (
      <View style={[styles.footer, SHADOWS.dark]}>
        <TouchableOpacity onPress={() => setViewMode('Home')}>
          <Image
            source={{
              uri: 'https://static.thenounproject.com/png/423483-200.png',
            }}
            style={{
              width: 35,
              height: 35,
              paddingBottom: 2,
              tintColor: viewMode === 'Home' ? Colors.black : Colors.dark,
              borderBottomColor: viewMode === 'Home' ? Colors.yellow : '',
              borderBottomWidth: viewMode === 'Home' ? 4 : 0,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setViewMode('Details')}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/126/126142.png',
            }}
            style={{
              width: 30,
              height: 30,
              paddingBottom: 2,
              borderBottomColor: viewMode === 'Details' ? Colors.yellow : '',
              tintColor: viewMode === 'Details' ? Colors.black : Colors.dark,
              borderBottomWidth: viewMode === 'Details' ? 4 : 0,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setViewMode('User')}>
          <Image
            source={{
              uri: 'https://static.thenounproject.com/png/3134331-200.png',
            }}
            style={{
              width: 36,
              height: 36,
              paddingBottom: 2,
              borderBottomColor: viewMode === 'User' ? Colors.yellow : '',
              tintColor: viewMode === 'User' ? Colors.black : Colors.dark,
              borderBottomWidth: viewMode === 'User' ? 4 : 0,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {viewMode === 'Home' && <ShopScreen />}
      {viewMode === 'Details' && <DetailsScreen />}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 70,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-around',
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
