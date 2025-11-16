import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const HomeScreen = () => {
  const localStyles = {
    container: {
      flex: 1,
    },
    scrollContent: {
      padding: 10,
    },
    hero: {
      backgroundColor: '#ffb6c1',
      borderRadius: 25,
      padding: 30,
      marginBottom: 30,
      alignItems: 'center',
      shadowColor: '#ff8fab',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 15,
      elevation: 5,
    },
    heroTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#d63384',
      textAlign: 'center',
      marginBottom: 10,
    },
    heroSubtitle: {
      fontSize: 18,
      color: '#e91e63',
      textAlign: 'center',
      marginBottom: 20,
    },
    ctaButton: {
      backgroundColor: '#ff6b9d',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
      shadowColor: '#ff6b9d',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 15,
      elevation: 3,
    },
    ctaButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#d63384',
      marginBottom: 20,
      textAlign: 'center',
    },
    featuredContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    cakeCard: {
      width: '48%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 15,
      marginBottom: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 2,
      borderColor: '#ffd6e7',
    },
    cakeEmoji: {
      fontSize: 40,
      marginBottom: 10,
    },
    cakeName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#d63384',
      marginBottom: 5,
      textAlign: 'center',
    },
    cakePrice: {
      fontSize: 16,
      color: '#e91e63',
      fontWeight: 'bold',
    },
  };

  const featuredCakes = [
    { name: 'Chocolate Fantasy', price: '$24.99', emoji: '🍫' },
    { name: 'Strawberry Dream', price: '$22.99', emoji: '🍓' },
    { name: 'Vanilla Cloud', price: '$19.99', emoji: '☁️' },
    { name: 'Red Velvet', price: '$26.99', emoji: '❤️' },
  ];

  return (
    <View style={localStyles.container}>
      <ScrollView contentContainerStyle={localStyles.scrollContent}>
        <View style={localStyles.hero}>
          <Text style={localStyles.heroTitle}>Welcome to Sweet Delights! 🎂</Text>
          <Text style={localStyles.heroSubtitle}>Where every bite is a piece of heaven ✨</Text>
          <TouchableOpacity style={localStyles.ctaButton}>
            <Text style={localStyles.ctaButtonText}>Order Now! 🚀</Text>
          </TouchableOpacity>
        </View>

        <Text style={localStyles.sectionTitle}>Featured Cakes 🎀</Text>
        
        <View style={localStyles.featuredContainer}>
          {featuredCakes.map((cake, index) => (
            <View key={index} style={localStyles.cakeCard}>
              <Text style={localStyles.cakeEmoji}>{cake.emoji}</Text>
              <Text style={localStyles.cakeName}>{cake.name}</Text>
              <Text style={localStyles.cakePrice}>{cake.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;