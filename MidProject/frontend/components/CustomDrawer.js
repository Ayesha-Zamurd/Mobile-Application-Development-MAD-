// frontend/components/CustomDrawer.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = ({ navigation }) => {
  const [expandWinter, setExpandWinter] = useState(false);
  const [expandSummer, setExpandSummer] = useState(false);
  const [expandPerfume, setExpandPerfume] = useState(false);

  const goTo = (tabName, screenName) => {
    navigation.navigate('MainTabs', {
      screen: tabName,
      params: { screen: screenName },
    });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      {/* 🏠 Home */}
      <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}>
        <Text style={{ fontSize: 18, marginVertical: 10, fontWeight: 'bold'}}>🏠 Home</Text>
      </TouchableOpacity>

      {/* ❄️ Winter */}
      <TouchableOpacity
        onPress={() => setExpandWinter(!expandWinter)}
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 18, marginVertical: 10 , fontWeight: 'bold'}}>❄️ Winter</Text>
        <Ionicons name={expandWinter ? 'chevron-up' : 'chevron-down'} size={20} />
      </TouchableOpacity>
      {expandWinter && (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity onPress={() => goTo('Winter', 'WinterClothes')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>Winter Clothes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goTo('Winter', 'WinterPret')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>Winter Pret</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goTo('Winter', 'WinterUnstitched')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>Winter Unstitched</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* ☀️ Summer */}
      <TouchableOpacity
        onPress={() => setExpandSummer(!expandSummer)}
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 18, marginVertical: 10 , fontWeight: 'bold' }}>☀️Summer</Text>
        <Ionicons name={expandSummer ? 'chevron-up' : 'chevron-down'} size={20} />
      </TouchableOpacity>
      {expandSummer && (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity onPress={() => goTo('Summer', 'SummerClothes')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>Summer Clothes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goTo('Summer', 'SummerPret')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>Summer Pret</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goTo('Summer', 'SummerUnstitched')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>Summer Unstitched</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 🌸 Perfumes */}
      <TouchableOpacity
        onPress={() => setExpandPerfume(!expandPerfume)}
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 18, marginVertical: 10 , fontWeight: 'bold'}}>🌸Perfumes</Text>
        <Ionicons name={expandPerfume ? 'chevron-up' : 'chevron-down'} size={20} />
      </TouchableOpacity>
      {expandPerfume && (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity onPress={() => goTo('Perfumes', 'AllPerfumes')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>All Perfumes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goTo('Perfumes', 'MalePerfumes')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>Male Perfumes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goTo('Perfumes', 'FemalePerfumes')}>
            <Text style={{ fontSize: 16, marginVertical: 5 }}>Female Perfumes</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 🛍️ Sale */}
      <TouchableOpacity onPress={() => goTo('Sale', 'SaleMain')}>
        <Text style={{ fontSize: 18, marginVertical: 10 , fontWeight: 'bold'}}>🛍️Sale</Text>
      </TouchableOpacity>

      {/* ❤️ Favorites */}
      <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Favorites' })}>
        <Text style={{ fontSize: 18, marginVertical: 10 , fontWeight: 'bold'}}>❤️Favorites</Text>
      </TouchableOpacity>

      {/* 🛒 Cart */}
      <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Cart' })}>
        <Text style={{ fontSize: 18, marginVertical: 10 , fontWeight: 'bold'}}>🛒Cart</Text>
      </TouchableOpacity>

      {/* 👤 Profile */}
      <TouchableOpacity onPress={() => navigation.navigate('MainTabs', { screen: 'Profile' })}>
        <Text style={{ fontSize: 18, marginVertical: 10 , fontWeight: 'bold'}}>👤Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CustomDrawer;


















