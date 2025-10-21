// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './frontend/navigation/AppNavigator';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

const App = () => {
  const [fontsLoaded] = useFonts({
    'MyCustomFont': require('./assets/fonts/Pacifico-Regular.ttf'),
  });

  if (!fontsLoaded) {
    // Optional: show a small loading spinner while fonts load
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
