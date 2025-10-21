import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const MenuScreen = () => {
  const localStyles = {
    container: {
      flex: 1,
    },
    categoryTabs: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 20,
      justifyContent: 'center',
    },
    categoryTab: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      backgroundColor: '#ffd6e7',
    },
    categoryTabActive: {
      backgroundColor: '#ff6b9d',
    },
    categoryText: {
      color: '#d63384',
      fontWeight: '500',
    },
    categoryTextActive: {
      color: 'white',
      fontWeight: 'bold',
    },
    menuItem: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 3,
      borderWidth: 2,
      borderColor: '#ffebf3',
    },
    itemHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    itemEmoji: {
      fontSize: 30,
      marginRight: 15,
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#d63384',
      marginBottom: 5,
    },
    itemDescription: {
      color: '#666',
      fontSize: 14,
      marginBottom: 10,
      lineHeight: 18,
    },
    itemPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#e91e63',
      marginBottom: 15,
    },
    addButton: {
      backgroundColor: '#ff6b9d',
      paddingVertical: 12,
      borderRadius: 15,
    },
    addButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
    },
  };

  const categories = ['All', 'Cakes', 'Cupcakes', 'Cookies', 'Pastries', 'Ice Cream'];
  const [activeCategory, setActiveCategory] = useState('All');

  const menuItems = [
    { 
      id: '1',
      name: 'Red Velvet Cake', 
      category: 'Cakes',
      description: 'Rich red velvet with cream cheese frosting',
      price: '$26.99',
      emoji: '❤️',
    },
    { 
      id: '2',
      name: 'Chocolate Cupcake', 
      category: 'Cupcakes',
      description: 'Moist chocolate cupcake with buttercream',
      price: '$4.99',
      emoji: '🧁',
    },
    { 
      id: '3',
      name: 'Macarons Box', 
      category: 'Pastries',
      description: 'Assorted French macarons - 6 pieces',
      price: '$18.99',
      emoji: '🍪',
    },
    { 
      id: '4',
      name: 'Cookie Dough Ice Cream', 
      category: 'Ice Cream',
      description: 'Vanilla ice cream with cookie dough chunks',
      price: '$6.99',
      emoji: '🍦',
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const renderMenuItem = ({ item }) => (
    <View style={localStyles.menuItem}>
      <View style={localStyles.itemHeader}>
        <Text style={localStyles.itemEmoji}>{item.emoji}</Text>
        <View style={localStyles.itemInfo}>
          <Text style={localStyles.itemName}>{item.name}</Text>
          <Text style={localStyles.itemDescription}>{item.description}</Text>
        </View>
      </View>
      <Text style={localStyles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={localStyles.addButton}>
        <Text style={localStyles.addButtonText}>Add to Cart 🛒</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={localStyles.container}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#d63384', textAlign: 'center', marginBottom: 20 }}>
        Our Sweet Menu 🍭
      </Text>
      
      <View style={localStyles.categoryTabs}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              localStyles.categoryTab,
              activeCategory === category && localStyles.categoryTabActive
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text style={[
              localStyles.categoryText,
              activeCategory === category && localStyles.categoryTextActive
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredItems}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MenuScreen;