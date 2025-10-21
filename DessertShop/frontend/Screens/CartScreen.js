import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const CartScreen = () => {
  const localStyles = {
    container: {
      flex: 1,
    },
    cartHeader: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#d63384',
      textAlign: 'center',
      marginBottom: 25,
    },
    cartItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 15,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 2,
      borderColor: '#ffebf3',
    },
    itemEmoji: {
      fontSize: 30,
      marginRight: 15,
      minWidth: 40,
      textAlign: 'center',
    },
    itemDetails: {
      flex: 1,
    },
    itemName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#d63384',
      marginBottom: 5,
    },
    itemPrice: {
      color: '#e91e63',
      fontWeight: 'bold',
      fontSize: 16,
    },
    quantityControls: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      gap: 12,
    },
    quantityButton: {
      backgroundColor: '#ffd6e7',
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityButtonText: {
      fontSize: 18,
      color: '#d63384',
      fontWeight: 'bold',
    },
    quantity: {
      fontWeight: 'bold',
      minWidth: 30,
      textAlign: 'center',
      fontSize: 16,
    },
    removeButton: {
      marginLeft: 10,
      padding: 8,
    },
    summary: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 2,
      borderColor: '#ffd6e7',
    },
    summaryTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#d63384',
      marginBottom: 15,
    },
    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    summaryText: {
      fontSize: 16,
      color: '#333',
    },
    total: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      paddingTop: 15,
      borderTopWidth: 2,
      borderTopColor: '#ffd6e7',
      borderStyle: 'dashed',
    },
    totalText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#d63384',
    },
    checkoutButton: {
      backgroundColor: '#ff6b9d',
      paddingVertical: 18,
      borderRadius: 20,
      marginTop: 20,
      shadowColor: '#ff6b9d',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 15,
      elevation: 3,
    },
    checkoutButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    emptyCart: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
    },
    emptyEmoji: {
      fontSize: 60,
      marginBottom: 20,
    },
    emptyText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#d63384',
      textAlign: 'center',
      marginBottom: 10,
    },
    emptySubtext: {
      fontSize: 16,
      color: '#e91e63',
      textAlign: 'center',
    },
  };

  const cartItems = [
    { id: '1', name: 'Red Velvet Cake', price: '$26.99', quantity: 1, emoji: '❤️' },
    { id: '2', name: 'Chocolate Cupcake', price: '$4.99', quantity: 3, emoji: '🧁' },
    { id: '3', name: 'Macarons Box', price: '$18.99', quantity: 1, emoji: '🍪' },
  ];

  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + (price * item.quantity);
  }, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <View style={localStyles.emptyCart}>
        <Text style={localStyles.emptyEmoji}>🛒</Text>
        <Text style={localStyles.emptyText}>Your cart is empty!</Text>
        <Text style={localStyles.emptySubtext}>Add some sweet treats to make your day better! 🍰</Text>
      </View>
    );
  }

  return (
    <View style={localStyles.container}>
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <Text style={localStyles.cartHeader}>Your Sweet Cart 🛒</Text>

        {cartItems.map((item) => (
          <View key={item.id} style={localStyles.cartItem}>
            <Text style={localStyles.itemEmoji}>{item.emoji}</Text>
            <View style={localStyles.itemDetails}>
              <Text style={localStyles.itemName}>{item.name}</Text>
              <Text style={localStyles.itemPrice}>{item.price}</Text>
              <View style={localStyles.quantityControls}>
                <TouchableOpacity style={localStyles.quantityButton}>
                  <Text style={localStyles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={localStyles.quantity}>{item.quantity}</Text>
                <TouchableOpacity style={localStyles.quantityButton}>
                  <Text style={localStyles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={localStyles.removeButton}>
              <Text style={{ fontSize: 20, color: '#ff6b6b' }}>🗑️</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={localStyles.summary}>
          <Text style={localStyles.summaryTitle}>Order Summary</Text>
          <View style={localStyles.summaryRow}>
            <Text style={localStyles.summaryText}>Subtotal:</Text>
            <Text style={localStyles.summaryText}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={localStyles.summaryRow}>
            <Text style={localStyles.summaryText}>Tax (8%):</Text>
            <Text style={localStyles.summaryText}>${tax.toFixed(2)}</Text>
          </View>
          <View style={localStyles.summaryRow}>
            <Text style={localStyles.summaryText}>Delivery:</Text>
            <Text style={[localStyles.summaryText, { color: '#4CAF50' }]}>FREE</Text>
          </View>
          <View style={localStyles.total}>
            <Text style={localStyles.totalText}>Total:</Text>
            <Text style={localStyles.totalText}>${total.toFixed(2)}</Text>
          </View>
          
          <TouchableOpacity style={localStyles.checkoutButton}>
            <Text style={localStyles.checkoutButtonText}>🎀 Proceed to Checkout 🎀</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;