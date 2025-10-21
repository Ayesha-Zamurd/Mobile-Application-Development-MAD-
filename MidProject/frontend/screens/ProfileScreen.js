// frontend/screens/ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import { GlobalStyles } from '../styles/GlobalStyles';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Profile" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: '#666' }}>User Profile</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;