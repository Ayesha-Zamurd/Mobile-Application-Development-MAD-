// frontend/screens/CartScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import { GlobalStyles } from '../styles/GlobalStyles';

const CartScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Cart" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: '#666' }}>Your cart is empty</Text>
      </View>
    </View>
  );
};

export default CartScreen;