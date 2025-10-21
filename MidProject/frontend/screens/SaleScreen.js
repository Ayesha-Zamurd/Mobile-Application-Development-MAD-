// frontend/screens/SaleScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../styles/GlobalStyles';

const SaleScreen = ({ navigation }) => {
  const saleProducts = [
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
      name: 'Winter Coat', 
      price: 199, 
      originalPrice: 249, 
      discount: 20,
      image: require('../../assets/images/subcategories/Lady-woolen-jacket-WP.jpeg')},
    { id: 4, 
      name: 'Men Jacket', 
      price: 149, 
      originalPrice: 179, 
      discount: 17,
      image: require('../../assets/images/subcategories/Men-jacket-WP.jpeg')},
    { id: 5, 
      name: 'Women Perfume Set', 
      price: 9900, 
      originalPrice: 12857, 
      discount: 23, 
      image: require('../../assets/images/subcategories/Perfume-set-FP.jpeg')},
    { id: 6, 
      name: 'Cologne Set', 
      price: 16000, 
      originalPrice:21052, 
      discount: 24,
      image: require('../../assets/images/subcategories/men-perfume4.jpg')},
  ];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product.name);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Sale" />
      <ScrollView style={GlobalStyles.productContainer}>

        {/* Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={handleBackPress} activeOpacity={0.7}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>🔥 Hot</Text>
            <Text style={styles.titleText}>Deals 🔥</Text>
          </View>

          {/* Placeholder to balance layout */}
          <View style={styles.placeholder} />
        </View>

        {/* Subtitle */}
        <Text style={{ textAlign: 'center', fontSize: 16, color: '#666', marginBottom: 20 }}>
          Limited Time Offers - Up to 50% OFF
        </Text>

        {/* Product List */}
        <View style={GlobalStyles.productList}>
          {saleProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

// Local styles
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
    width: 60, // Keeps header visually balanced
  },
};

export default SaleScreen;
