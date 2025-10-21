// frontend/screens/WinterPretScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../styles/GlobalStyles';

const WinterPretScreen = ({ navigation }) => {
  const products = [
    { id: 1, 
      name: 'Winter Pret Dress',
      price: 2000, 
      originalPrice: 4000, 
      discount: 20,
      image: require('../../assets/images/subcategories/Lady-brownFrock-WP.jpg')},
    { id: 2, 
      name: 'Men Jacket', 
      price: 149, 
      originalPrice: 179, 
      discount: 17,
      image: require('../../assets/images/subcategories/Men-jacket-WP.jpeg')},
    { id: 3, 
      name: 'Winter Coat', 
      price: 199, 
      originalPrice: 249, 
      discount: 20,
      image: require('../../assets/images/subcategories/Lady-woolen-jacket-WP.jpeg')},
  ];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product.name);
    // Add to cart functionality would go here
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Winter Pret" />
      
      <ScrollView style={GlobalStyles.productContainer}>
        {/* Header Row with Back Text and Centered Title */}
        <View style={styles.headerRow}>
          <TouchableOpacity 
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          
          {/* <Text style={styles.screenTitle}>Winter Pret Collection</Text> */}
          <View style={styles.screenTitle}>
                      <Text style={styles.screenTitle}>Winter</Text>
                      <Text style={styles.screenTitle}>Pret Collection</Text>
                    </View>
          
          {/* Empty View to balance the layout */}
          <View style={styles.placeholder} />
        </View>
        
        <View style={GlobalStyles.productList}>
          {products.map(product => (
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

// Styles for the back text and header layout
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
    color: '#655e5eff',
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 60, // Same width as back text for balance
  }
};

export default WinterPretScreen;