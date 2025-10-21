import React from 'react';
import { View } from 'react-native';
import Header from '../Components/Header';
import SideBarNavigation from '../Components/SideBarNavigation';
import BottomNavigation from '../Components/BottomNavigation';
import HomeScreen from '../Screens/HomeScreen';
import MenuScreen from '../Screens/MenuScreen';
import SpecialsScreen from '../Screens/SpecialsScreen';
import CartScreen from '../Screens/CartScreen';
import { GlobalStyles } from '../Style/GlobalStyles';

const AppNavigator = ({ currentScreen, setCurrentScreen, isSidebarOpen, setIsSidebarOpen }) => {
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Menu':
        return <MenuScreen />;
      case 'Specials':
        return <SpecialsScreen />;
      case 'Cart':
        return <CartScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      
      <SideBarNavigation 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        setCurrentScreen={setCurrentScreen}
      />
      
      <View style={GlobalStyles.screenContainer}>
        {renderScreen()}
      </View>
      
      <BottomNavigation 
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    </View>
  );
};

export default AppNavigator;