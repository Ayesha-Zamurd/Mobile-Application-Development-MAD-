// frontend/screens/WinterUnstitchedScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { GlobalStyles } from '../styles/GlobalStyles';

const WinterUnstitchedScreen = ({ navigation }) => {
  const products = [
    { id: 1, 
      name: 'Winter Fabric ', 
      price: 3000, 
      image: require('../../assets/images/subcategories/Bi-cloths-WU.jpeg')},
    { id: 2, 
      name: 'Embroidered 3 piece', 
      price: 3200, originalPrice: 4000, 
      discount: 20, 
      image: require('../../assets/images/subcategories/winter-unstitched.jpg')},
    { id: 3, 
      name: 'Simple 3 piece', 
      price: 2125, 
      originalPrice: 2500, 
      discount: 15 ,
      image: require('../../assets/images/subcategories/Plady-dress-WU.jpg')},
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Winter Unstitched" />
      
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
            <Text style={styles.screenTitle}>Winter</Text>
            <Text style={styles.screenTitle}>Unstitched Collection</Text>
          </View>
          
          {/* Empty View to balance the layout */}
          <View style={styles.placeholder} />
        </View>
        
        <View style={GlobalStyles.productList}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={() => {}} />
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
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 20, // Slightly smaller to fit two lines
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    lineHeight: 24,
  },
  placeholder: {
    width: 60,
  }
};

export default WinterUnstitchedScreen;