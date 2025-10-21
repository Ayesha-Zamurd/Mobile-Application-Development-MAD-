// frontend/screens/CartScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import strawberry_icecream from "../../assets/strawberry_icecream.png";
import chocolate_icecream from "../../assets/Chocolate_icecream.png";
import pistachio_icecream from "../../assets/pistasio_icecream.png";
import lady_icecream from "../../assets/Open Doodles Giant Ice Cream.png";

const CartScreen = ({ navigation, route }) => {
  // Cart items state - AB INITIALLY EMPTY HOGI
  const [cartItems, setCartItems] = useState([]);

  // Route se new item receive karen
  useEffect(() => {
    if (route.params?.newItem) {
      addItemToCart(route.params.newItem);
    }
  }, [route.params?.newItem]);

  // Cart mein item add karna
  const addItemToCart = (newItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === newItem.id);
      
      if (existingItem) {
        // Agar item already hai, quantity increase karen
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Naya item add karen
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  // Quantity increase karna
  const increaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Quantity decrease karna
  const decreaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0) // 0 quantity wale items remove karen
    );
  };

  // Item remove karna
  const removeItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Calculations
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDeliveryFee = () => {
    return cartItems.length > 0 ? 500 : 0; // Delivery fee bhi adjust kiya
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDeliveryFee();
  };

  // Format price for display
  const formatPrice = (price) => {
    return `Rp ${price.toLocaleString('id-ID')},-`;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>My Cart</Text>

          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Feather name="home" size={22} color="#000" style={styles.icon} />
            </TouchableOpacity>
            <Feather name="user" size={22} color="black" />
          </View>
        </View>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
            <TouchableOpacity 
              style={styles.shopNowButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.shopNowText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        ) : (
          cartItems.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image
                source={item.img}
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>

                <View style={styles.itemActions}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                    <AntDesign name="minus" size={14} color="#666" />
                  </TouchableOpacity>
                  
                  <View style={styles.quantityBubble}>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                  </View>
                  
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                    <AntDesign name="plus" size={14} color="#666" />
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={styles.removeButton}
                    onPress={() => removeItem(item.id)}
                  >
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.itemTotal}>
                <Text style={styles.itemTotalText}>
                  {formatPrice(item.price * item.quantity)}
                </Text>
              </View>
            </View>
          ))
        )}

        {/* Add more items button */}
        {cartItems.length > 0 && (
          <TouchableOpacity 
            style={styles.addMoreContainer}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.addMoreText}>+ Add more items</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Bottom Card - Only show if cart has items */}
      {cartItems.length > 0 && (
        <View style={styles.bottomCard}>
          <Image
            source={lady_icecream}
            style={styles.illustration}
          />

          <Text style={styles.mapText}>Total Bill</Text>

          {/* Summary Box */}
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Sub Total</Text>
              <Text style={styles.summaryValue}>{formatPrice(calculateSubtotal())}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>{formatPrice(calculateDeliveryFee())}</Text>
            </View>
            <View style={[styles.summaryRow, { marginTop: 5 }]}>
              <Text style={[styles.summaryLabel, { fontWeight: "700" }]}>Total</Text>
              <Text style={[styles.summaryValue, { fontWeight: "700" }]}>
                {formatPrice(calculateTotal())}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 300,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 6,
  },
  emptyCart: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100,
  },
  emptyCartText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  shopNowButton: {
    backgroundColor: "#ff6699",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  shopNowText: {
    color: "#fff",
    fontWeight: "600",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },
  itemPrice: {
    color: "#777",
    fontSize: 13,
    marginTop: 2,
  },
  itemActions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  quantityBubble: {
    backgroundColor: "#ffe0ec",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  quantityText: {
    fontSize: 12,
    color: "#e91e63",
    fontWeight: "600",
  },
  removeButton: {
    marginLeft: 15,
  },
  removeText: {
    fontSize: 12,
    color: "#ff4444",
  },
  itemTotal: {
    alignItems: "flex-end",
  },
  itemTotalText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  addMoreContainer: {
    padding: 20,
    alignItems: "center",
  },
  addMoreText: {
    fontSize: 14,
    color: "#e91e63",
    fontWeight: "600",
  },
  bottomCard: {
    backgroundColor: "#d78397ff",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingVertical: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  illustration: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  mapText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
  },
  summaryBox: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 20,
    padding: 15,
    marginTop: 15,
    elevation: 4,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  summaryLabel: {
    color: "#444",
  },
  summaryValue: {
    color: "#444",
  },
  checkoutButton: {
    backgroundColor: "#000",
    width: "85%",
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 20,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});