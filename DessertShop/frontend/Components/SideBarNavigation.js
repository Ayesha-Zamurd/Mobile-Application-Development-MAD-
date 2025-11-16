import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { GlobalStyles } from '../Style/GlobalStyles';

const SideBarNavigation = ({ isOpen, onClose, setCurrentScreen }) => {
  const menuItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Menu', icon: '📋' },
    { name: 'Specials', icon: '⭐' },
    { name: 'Cart', icon: '🛒' },
    { name: 'Profile', icon: '👤' },
    { name: 'Settings', icon: '⚙️' },
  ];

  const handleItemClick = (screenName) => {
    setCurrentScreen(screenName);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <TouchableOpacity style={GlobalStyles.overlay} onPress={onClose} />
      <View style={GlobalStyles.sidebar}>
        <View style={GlobalStyles.sidebarHeader}>
          <Text style={GlobalStyles.sidebarTitle}>Sweet Menu</Text>
          <TouchableOpacity style={GlobalStyles.closeButton} onPress={onClose}>
            <Text style={GlobalStyles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={GlobalStyles.sidebarMenu}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={GlobalStyles.sidebarItem}
              onPress={() => handleItemClick(item.name)}
            >
              <Text>{item.icon}</Text>
              <Text style={GlobalStyles.sidebarItemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default SideBarNavigation;