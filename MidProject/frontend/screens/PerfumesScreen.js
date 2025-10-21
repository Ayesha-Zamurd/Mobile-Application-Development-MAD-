import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard'; // ✅ Import ProductCard
import { GlobalStyles } from '../styles/GlobalStyles';

const WinterScreen = ({ navigation }) => {
  const subcategories = [
    { 
      name: 'Men Perfumes', 
      route: 'MalePerfumes',
      image: require('../../assets/images/subcategories/perfumes-men.jpg')
    },
    { 
      name: 'Women Perfumes', 
      route: 'FemalePerfumes',
      image: require('../../assets/images/subcategories/perfumes-women.jpg')
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Elegant Bossy Cologne',
      price: 2000,
      image: require('../../assets/images/subcategories/supports-cologen-MP.jpeg')
    },
    {
      id: 2,
      name: 'Elegant Feminine Scent',
      price: 1700,
      image: require('../../assets/images/subcategories/perfume9.jpg')},
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Add to cart action (you can connect it with your cart logic later)
  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart!`);
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Perfumes" />
      
      <ScrollView style={GlobalStyles.productContainer}>
        {/* Header Row with Back Text and Centered Title */}
        <View style={styles.headerRow}>
          <TouchableOpacity 
            onPress={handleBackPress}
            activeOpacity={0.7}
          >
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          
          <Text style={styles.screenTitle}>Fragrance Collection</Text>
          <View style={styles.placeholder} />
        </View>
        
        {/* Subcategories */}
        <View style={GlobalStyles.subcategoryGrid}>
          {subcategories.map((subcategory, index) => (
            <TouchableOpacity
              key={index}
              style={GlobalStyles.subcategoryCard}
              onPress={() => navigation.navigate(subcategory.route)}
            >
              <Image 
                source={subcategory.image} 
                style={styles.subcategoryImage}
                resizeMode="cover"
              />
              <Text style={GlobalStyles.subcategoryTitle}>{subcategory.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured Winter Products */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#2c3e50' }}>
            Featured Summer Items
          </Text>

          <View style={GlobalStyles.productList}>
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => handleAddToCart(product)} // ✅ using ProductCard
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Additional styles
const styles = {
  subcategoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
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
    width: 60,
  }
};

export default WinterScreen;




