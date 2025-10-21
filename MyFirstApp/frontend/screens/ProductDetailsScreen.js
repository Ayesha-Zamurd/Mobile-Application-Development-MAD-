// frontend/screens/ProductDetailsScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  Animated,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function ProductDetailsScreen({ navigation, route }) {
  const { product } = route.params;
  const [showPopup, setShowPopup] = useState(false);
  const [popupAnimation] = useState(new Animated.Value(0));

  const handleAddToCart = () => {
    // Prepare item data for cart - CORRECT PRICE USE KAREN
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price, // Yahan product.price use karen (2000, 1500, 2500)
      img: product.img,
    };

    // Show popup
    setShowPopup(true);
    Animated.timing(popupAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Auto hide after 2 seconds
    setTimeout(() => {
      hidePopup();
    }, 2000);
  };

  const hidePopup = () => {
    Animated.timing(popupAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowPopup(false);
    });
  };

  const handlePopupPress = () => {
    hidePopup();
    // Navigate to cart with item data - CORRECT PRICE PASS KAREN
    setTimeout(() => {
      navigation.navigate("Cart", { 
        newItem: {
          id: product.id,
          name: product.name,
          price: product.price, // Yahan bhi product.price use karen
          img: product.img,
        }
      });
    }, 300);
  };

  const popupTranslateY = popupAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Background Banner - Dynamic color based on product */}
        <View
          style={{
            backgroundColor: product.backgroundColor || "#d8f1df",
            height: 320,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 50,
              left: 20,
              backgroundColor: "rgba(255,255,255,0.7)",
              borderRadius: 20,
              padding: 6,
            }}
          >
            <Feather name="arrow-left" size={20} color="#333" />
          </TouchableOpacity>

          {/* Mixta Logo */}
          <Text
            style={{
              position: "absolute",
              top: 50,
              fontSize: 22,
              fontWeight: "bold",
              color: "#5c3c1f",
            }}
          >
            Ice-Cream Shop
          </Text>

          {/* Ice Cream Image - Dynamic based on product */}
          <Image
            source={product.img}
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              resizeMode: "contain",
              marginTop: 40,
            }}
          />
        </View>

        {/* Product Info - Dynamic based on product */}
        <View style={{ paddingHorizontal: 25, marginTop: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#222",
              marginBottom: 6,
            }}
          >
            {product.name.split(" ").join("\n")}
          </Text>

          <Text
            style={{
              color: "#666",
              fontSize: 13,
              lineHeight: 18,
              marginBottom: 25,
            }}
          >
            {product.fullDescription}
          </Text>

          {/* Price */}
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#ff6699",
              marginBottom: 15,
            }}
          >
            {product.displayPrice}
          </Text>

          {/* Rating */}
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
            <Text style={{ color: "#ff6699", fontSize: 14, fontWeight: "600" }}>4.9 ⭐</Text>
            <Text style={{ color: "#666", fontSize: 12, marginLeft: 5 }}>(250 reviews)</Text>
          </View>

          {/* Add to Cart Button */}
          <TouchableOpacity
            onPress={handleAddToCart}
            style={{
              backgroundColor: "#fff",
              borderColor: "#333",
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: "flex-start",
              paddingHorizontal: 20,
              paddingVertical: 8,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 14, color: "#000" }}>
              Add to cart
            </Text>
          </TouchableOpacity>

          {/* Dots Indicator */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 30,
            }}
          >
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#ff99bb",
                borderRadius: 50,
                marginHorizontal: 4,
              }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#ccc",
                borderRadius: 50,
                marginHorizontal: 4,
              }}
            />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#ccc",
                borderRadius: 50,
                marginHorizontal: 4,
              }}
            />
          </View>

          {/* Small Ice Cream Icon at Bottom */}
          <View style={{ alignItems: "center", marginBottom: 40 }}>
            <Image
              source={product.img}
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            />
          </View>
        </View>
      </ScrollView>

      {/* Popup Modal */}
      <Modal
        visible={showPopup}
        transparent={true}
        animationType="none"
        onRequestClose={hidePopup}
      >
        <TouchableOpacity 
          style={styles.popupOverlay}
          activeOpacity={1}
          onPress={handlePopupPress}
        >
          <Animated.View 
            style={[
              styles.popupContainer,
              {
                transform: [{ translateY: popupTranslateY }],
              }
            ]}
          >
            <View style={styles.popupContent}>
              <Text style={styles.popupText}>🎉 This item is added to cart!</Text>
              <Text style={styles.popupSubText}>Tap to view cart</Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  popupOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  popupContainer: {
    backgroundColor: '#ffcce0', // Baby pink color
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
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
  popupContent: {
    alignItems: 'center',
  },
  popupText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#660033',
    textAlign: 'center',
  },
  popupSubText: {
    fontSize: 12,
    color: '#660033',
    marginTop: 5,
    opacity: 0.8,
  },
});