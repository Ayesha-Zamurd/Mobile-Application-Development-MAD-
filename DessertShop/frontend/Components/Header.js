import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../Style/GlobalStyles';

const Header = ({ onMenuClick }) => {
  return (
    <View style={GlobalStyles.header}>
      <View style={GlobalStyles.headerContent}>
        <Text style={GlobalStyles.logo}>🍰 Sweet Delights</Text>
        <TouchableOpacity 
          style={GlobalStyles.menuButton}
          onPress={onMenuClick}
        >
          <Text style={GlobalStyles.menuButtonText}>☰</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;