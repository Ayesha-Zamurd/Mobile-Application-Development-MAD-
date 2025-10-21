// frontend/components/BottomNav.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const BottomNav = ({ navigation, currentRoute }) => {
  const navItems = [
    { name: 'Home', icon: '🏠', route: 'Home' },
    { name: 'Favorites', icon: '❤️', route: 'Favorites' },
    { name: 'Cart', icon: '🛒', route: 'Cart' },
    { name: 'Profile', icon: '👤', route: 'Profile' },
  ];

  const handleNavigation = (route) => {
    // Direct navigation to the tab
    navigation.navigate(route);
  };

  return (
    <View style={GlobalStyles.bottomNav}>
      {navItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={GlobalStyles.navIcon}
          onPress={() => handleNavigation(item.route)}
        >
          <Text style={[
            GlobalStyles.navIconText,
            currentRoute === item.route && GlobalStyles.navIconActive
          ]}>
            {item.icon}
          </Text>
          <Text style={[
            GlobalStyles.navIconText,
            currentRoute === item.route && GlobalStyles.navIconActive
          ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;







