// frontend/screens/SummerUnstitchedScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../styles/GlobalStyles';

const SummerUnstitchedScreen = ({ navigation }) => {
  const products = [
    { id: 1, 
      name: 'Cotton Fabric', 
      price: 2000, 
      originalPrice: 2666, 
      discount: 25,
      image: require('../../assets/images/subcategories/Ladies-SU-2.jpeg')},
    { id: 2, 
      name: 'Printed Cotton Fabric', 
      price: 3500, 
      originalPrice: 4430, 
      discount: 21, 
      image: require('../../assets/images/subcategories/Lady-purple-SU.jpg')},
    { id: 3, 
      name: 'Linen Material', 
      price: 2800, 
      image: require('../../assets/images/subcategories/Lady-cottonshirt-SP.jpeg')},
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Summer Unstitched" />
      <ScrollView style={GlobalStyles.productContainer}>

        {/* Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={handleBackPress} activeOpacity={0.7}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Summer</Text>
            <Text style={styles.titleText}>Unstitched Collection</Text>
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
    width: 60, // Keeps header balanced visually
  },
};

export default SummerUnstitchedScreen;
