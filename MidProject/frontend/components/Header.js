// frontend/components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const Header = ({ navigation, title }) => {
  return (
    <View style={GlobalStyles.header}>
      <TouchableOpacity 
        style={GlobalStyles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <View style={GlobalStyles.menuLines} />
        <View style={GlobalStyles.menuLines} />
        <View style={GlobalStyles.menuLines} />
      </TouchableOpacity>
      
      <Text style={GlobalStyles.appTitle}>{title}</Text>
      
      <View style={GlobalStyles.headerRight} />
    </View>
  );
};

export default Header;