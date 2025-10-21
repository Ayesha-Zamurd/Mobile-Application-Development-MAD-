// frontend/components/ProductCard.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const ProductCard = ({ product, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
    // Yahan favorite add/remove ka logic add kar sakte hain
  };

  return (
    <View style={GlobalStyles.productCard}>
      {/* Product Image Section with Heart Icon */}
      <View style={GlobalStyles.productImage}>
        {product.image ? (
          <Image 
            source={product.image} 
            style={localStyles.productImage}
            resizeMode="cover"
          />
        ) : (
          <View style={localStyles.placeholderImage}>
            <Text style={{color: '#999'}}>No Image</Text>
          </View>
        )}
        
        {/* Discount Badge */}
        {product.discount && (
          <View style={GlobalStyles.discountBadge}>
            <Text style={GlobalStyles.discountText}>{product.discount}% OFF</Text>
          </View>
        )}
        
        {/* Heart Icon - Right Side pe move kiya for better visibility */}
        <TouchableOpacity 
          style={[
            localStyles.heartButton,
            isFavorite ? localStyles.heartButtonActive : localStyles.heartButtonInactive
          ]}
          onPress={handleFavoritePress}
        >
          <Text style={[
            localStyles.heartIcon,
            isFavorite && localStyles.heartIconActive
          ]}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Product Info - Right Side pe */}
      <View style={localStyles.productInfoRight}>
        <Text style={GlobalStyles.productName}>{product.name}</Text>
        
        {/* Price Section - Left Side pe */}
        <View style={localStyles.priceSection}>
          {product.originalPrice && (
            <Text style={GlobalStyles.originalPrice}>Pkr {product.originalPrice}</Text>
          )}
          <Text style={GlobalStyles.productPrice}>Pkr {product.price}</Text>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity 
          style={GlobalStyles.addToCartButton}
          onPress={onAddToCart}
        >
          <Text style={GlobalStyles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  // Heart Icon ko better styling di
  heartButton: {
    position: 'absolute',
    top: 10,
    left: 10, // Left se Right pe move kiya
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartButtonInactive: {
    backgroundColor: 'rgba(88, 74, 74, 0.9)',
  },
  heartButtonActive: {
    backgroundColor: 'rgba(237, 211, 211, 0.9)',
  },
  heartIcon: {
    fontSize: 18,
  },
  heartIconActive: {
    fontSize: 18,
  },
  // Product info ko right side pe move kiya
  productInfoRight: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  }
});

export default ProductCard;