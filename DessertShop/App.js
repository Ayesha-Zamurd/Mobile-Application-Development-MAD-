import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './frontend/Navigation/AppNavigator';
import { GlobalStyles } from './frontend/Style/GlobalStyles';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SafeAreaView style={GlobalStyles.appContainer}>
      <StatusBar backgroundColor="#ffb6c1" barStyle="dark-content" />
      <AppNavigator 
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </SafeAreaView>
  );
}