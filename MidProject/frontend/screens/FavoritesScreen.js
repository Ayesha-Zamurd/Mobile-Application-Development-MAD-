// frontend/screens/FavoritesScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import { GlobalStyles } from '../styles/GlobalStyles';

const FavoritesScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Favorites" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: '#666' }}>Your favorite items will appear here</Text>
      </View>
    </View>
  );
};

export default FavoritesScreen;