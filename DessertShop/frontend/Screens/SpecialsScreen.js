import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const SpecialsScreen = () => {
  const localStyles = {
    container: {
      flex: 1,
    },
    scrollContent: {
      padding: 10,
    },
    specialBanner: {
      backgroundColor: '#71e5c6ff',
      borderRadius: 25,
      padding: 25,
      marginBottom: 25,
      alignItems: 'center',
      shadowColor: '#3be7e1ff',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.4,
      shadowRadius: 15,
      elevation: 5,
    },
    bannerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 5,
    },
    bannerSubtitle: {
      fontSize: 16,
      color: 'white',
      marginBottom: 15,
      textAlign: 'center',
      opacity: 0.9,
    },
    timer: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 15,
    },
    timerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    dealCard: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 3,
      borderColor: '#0db4a6ff',
    },
    ribbon: {
      position: 'absolute',
      top: 15,
      right: -25,
      backgroundColor: '#54e4abff',
      paddingVertical: 5,
      paddingHorizontal: 40,
      transform: [{ rotate: '45deg' }],
    },
    ribbonText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    dealHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    dealEmoji: {
      fontSize: 40,
      marginRight: 15,
    },
    dealInfo: {
      flex: 1,
    },
    dealName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#34bac6ff',
      marginBottom: 5,
    },
    dealDescription: {
      color: '#666',
      fontSize: 14,
    },
    priceSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      gap: 10,
    },
    oldPrice: {
      textDecorationLine: 'line-through',
      color: '#999',
      fontSize: 16,
    },
    newPrice: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#04f4b4ff',
    },
    discount: {
      backgroundColor: '#70dbc9ff',
      color: 'white',
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 10,
      fontSize: 12,
      fontWeight: 'bold',
      overflow: 'hidden',
    },
    grabButton: {
      backgroundColor: '#ff6b9d',
      paddingVertical: 15,
      borderRadius: 15,
      marginTop: 15,
      shadowColor: '#ff6b9d',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 3,
    },
    grabButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
    },
  };

  const specialDeals = [
    {
      id: '1',
      name: 'Birthday Bundle',
      description: 'Custom cake + 12 cupcakes + cookies',
      oldPrice: '$89.99',
      newPrice: '$64.99',
      discount: '28% OFF',
      emoji: '🎂',
    },
    {
      id: '2',
      name: 'Sweet Lovers Combo',
      description: '2 cake slices + 2 drinks of choice',
      oldPrice: '$24.99',
      newPrice: '$18.99',
      discount: '24% OFF',
      emoji: '💖',
    },
    {
      id: '3',
      name: 'Family Pack',
      description: 'Whole cake + ice cream + brownies',
      oldPrice: '$49.99',
      newPrice: '$34.99',
      discount: '30% OFF',
      emoji: '👨‍👩‍👧‍👦',
    },
  ];

  return (
    <View style={localStyles.container}>
      <ScrollView contentContainerStyle={localStyles.scrollContent}>
        <View style={localStyles.specialBanner}>
          <Text style={localStyles.bannerTitle}>Weekly Specials! 🌟</Text>
          <Text style={localStyles.bannerSubtitle}>Limited time offers that will melt your heart 💝</Text>
          <View style={localStyles.timer}>
            <Text style={localStyles.timerText}>⏰ Offer ends in 2 days!</Text>
          </View>
        </View>

        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#d63384', textAlign: 'center', marginBottom: 20 }}>
          Hot Deals 🔥
        </Text>

        {specialDeals.map((deal) => (
          <View key={deal.id} style={localStyles.dealCard}>
            <View style={localStyles.ribbon}>
              <Text style={localStyles.ribbonText}>SPECIAL</Text>
            </View>
            <View style={localStyles.dealHeader}>
              <Text style={localStyles.dealEmoji}>{deal.emoji}</Text>
              <View style={localStyles.dealInfo}>
                <Text style={localStyles.dealName}>{deal.name}</Text>
                <Text style={localStyles.dealDescription}>{deal.description}</Text>
              </View>
            </View>
            <View style={localStyles.priceSection}>
              <Text style={localStyles.oldPrice}>{deal.oldPrice}</Text>
              <Text style={localStyles.newPrice}>{deal.newPrice}</Text>
              <Text style={localStyles.discount}>{deal.discount}</Text>
            </View>
            <TouchableOpacity style={localStyles.grabButton}>
              <Text style={localStyles.grabButtonText}>Grab This Deal! 🚀</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SpecialsScreen;