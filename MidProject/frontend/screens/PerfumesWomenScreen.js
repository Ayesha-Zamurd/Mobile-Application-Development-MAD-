// 






// frontend/screens/PerfumesWomenScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../styles/GlobalStyles';

const PerfumesWomenScreen = ({ navigation }) => {
  const products = [
    { id: 1, 
      name: 'Women Perfume Set', 
      price: 9900, 
      originalPrice: 12857, 
      discount: 23, 
      image: require('../../assets/images/subcategories/Perfume-set-FP.jpeg')},
    { id: 2, 
      name: 'Floral Eau de Toilette', 
      price: 3500, 
      image: require('../../assets/images/subcategories/rose-FP.jpeg')},
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Women Perfumes" />
      <ScrollView style={GlobalStyles.productContainer}>
        
        {/* Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={handleBackPress} activeOpacity={0.7}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Women's</Text>
            <Text style={styles.titleText}>Fragrance Collection</Text>
          </View>

          {/* Placeholder for alignment */}
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

export default PerfumesWomenScreen;
