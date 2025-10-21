// frontend/screens/SummerPretScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../styles/GlobalStyles';

const SummerPretScreen = ({ navigation }) => {
  const products = [
    { id: 1, 
      name: 'Short Frock', 
      price: 1000, 
      originalPrice: 1333, 
      discount: 25,
      image: require('../../assets/images/subcategories/Lady-shortFrock-SP.jpeg')},
    { id: 2, 
      name: 'Shorts', 
      price: 1400, 
      originalPrice: 1795, 
      discount: 22,
      image: require('../../assets/images/subcategories/Fullgreen-men-SP.jpeg')},
    { id: 3, 
      name: 'Casual Top', 
      price: 3500, 
      // originalPrice: 45, 
      // discount: 22,
      image: require('../../assets/images/subcategories/lady-whiteshirt-SP.jpeg')},
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Summer Pret" />
      <ScrollView style={GlobalStyles.productContainer}>
        
        {/* Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={handleBackPress} activeOpacity={0.7}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Summer</Text>
            <Text style={styles.titleText}>Pret Collection</Text>
          </View>

          {/* Placeholder to balance layout */}
          <View style={styles.placeholder} />
        </View>

        {/* Product List */}
        <View style={GlobalStyles.productList}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => {}}
            />
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

// Local styles for this screen
const styles = {
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#655e5e',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  placeholder: {
    width: 60, // Same width as back text for balanced layout
  },
};

export default SummerPretScreen;
