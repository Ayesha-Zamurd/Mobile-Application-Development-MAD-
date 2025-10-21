import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { GlobalStyles } from '../Style/GlobalStyles';

const BottomNavigation = ({ currentScreen, setCurrentScreen }) => {
  const navItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Menu', icon: '📋' },
    { name: 'Specials', icon: '⭐' },
    { name: 'Cart', icon: '🛒' },
  ];

  return (
    <View style={GlobalStyles.bottomNav}>
      <View style={GlobalStyles.bottomNavContent}>
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              GlobalStyles.navButton,
              currentScreen === item.name && GlobalStyles.navButtonActive
            ]}
            onPress={() => setCurrentScreen(item.name)}
          >
            <Text style={GlobalStyles.navIcon}>{item.icon}</Text>
            <Text style={GlobalStyles.navText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomNavigation;