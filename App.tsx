import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <StatusBar />
          <Navigation />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
