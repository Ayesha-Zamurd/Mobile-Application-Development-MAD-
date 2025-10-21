// frontend/screens/PerfumesMenScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../styles/GlobalStyles';

const PerfumesMenScreen = ({ navigation }) => {
  const products = [
    { id: 1, 
      name: 'Men Eau de Parfum', 
      price: 4000, 
      image: require('../../assets/images/subcategories/bossy-MP.jpeg')},
    { id: 2, 
      name: 'Cologne Set', 
      price: 16000, 
      originalPrice:21052, 
      discount: 24,
      image: require('../../assets/images/subcategories/men-perfume4.jpg')},
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Men Perfumes" />
      <ScrollView style={GlobalStyles.productContainer}>
        {/* Header Row with Back Text and Centered Title */}
        <View style={styles.headerRow}>
          <TouchableOpacity 
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          
          <View style={styles.titleContainer}>
          <Text style={styles.screenTitle}>Men's Fragrance</Text>
          </View>

          <View style={styles.placeholder} />
        </View>
        
        <View style={GlobalStyles.productList}>
          {products.map(product => (
            <ProductCard key={product.id}
             product={product}
            onAddToCart={() => {}} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

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
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 60,
  }
};

export default PerfumesMenScreen;