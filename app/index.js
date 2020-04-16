import React from 'react';
import {View, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import {RootNavigator} from './routes';

const App = () => {
  const Nav = RootNavigator();
  return (
    <View style={styles.container}>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
