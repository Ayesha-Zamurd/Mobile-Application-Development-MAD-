// frontend/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard'; // ProductCard import karen
import { GlobalStyles } from '../styles/GlobalStyles';

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const categories = [
    { 
      name: 'Winter', 
      route: 'Winter',
      image: require('../../assets/images/categories/winter2.jpg')
    },
    { 
      name: 'Summer', 
      route: 'Summer',
      image: require('../../assets/images/categories/summer2.jpg')
    },
    { 
      name: 'Perfumes', 
      route: 'Perfumes',
      image: require('../../assets/images/categories/perfumes2.jpg')
    },
    { 
      name: 'Sale', 
      route: 'Sale',
      image: require('../../assets/images/categories/sale.jpg')
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Designer Dress',
      price: '2000',
      originalPrice: '2500',
      image: require('../../assets/images/subcategories/summer-dress.jpg'),
      discount: 25
    },
    {
      id: 2,
      name: 'Winter Jacket',
      price: '1800',
      originalPrice: '2400',
      image: require('../../assets/images/categories/winter2.jpg'),
      discount: 30
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product.name);
    // Yahan add to cart logic implement kar sakte hain
    alert(`${product.name} added to cart!`);
  };

  return (
    <View style={GlobalStyles.container}>
      <Header navigation={navigation} title="Trendy Twists" />
      
      <ScrollView style={GlobalStyles.homeContainer}>
        {/* Banner with Image */}
        <View style={styles.bannerContainer}>
          <Image 
            source={require('../../assets/images/subcategories/summer-dress.jpg')} 
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>Season Sale</Text>
            <Text style={styles.bannerSubText}>Up to 50% OFF</Text>
          </View>
        </View>

        {/* Categories Grid */}
        <View style={GlobalStyles.categoriesContainer}>
          <Text style={styles.sectionHeader}>Categories</Text>
          <View style={GlobalStyles.categoryGrid}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={GlobalStyles.categoryCard}
                onPress={() => navigation.navigate(category.route)}
              >
                <Image 
                  source={category.image} 
                  style={styles.categoryImage}
                  resizeMode="cover"
                />
                <Text style={GlobalStyles.categoryTitle}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Products - Ab ProductCard component use karenge */}
        <View style={GlobalStyles.categoriesContainer}>
          <Text style={styles.sectionHeader}>Featured Products</Text>
          <View style={styles.productsContainer}>
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Additional styles for HomeScreen
const styles = {
  bannerContainer: {
    height: 200,
    margin: 15,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  bannerSubText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 5,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  productsContainer: {
    flexDirection: 'column',
    gap: 12,
  },
};

export default HomeScreen;