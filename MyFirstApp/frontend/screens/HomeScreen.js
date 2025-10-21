// frontend/screens/HomeScreen.js
import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import banner from "../../assets/Group 7.png";
import strawberry_icecream from "../../assets/strawberry_icecream.png";
import chocolate_icecream from "../../assets/Chocolate_icecream.png";
import pistachio_icecream from "../../assets/pistasio_icecream.png";
import lady_icecream from "../../assets/Open Doodles Giant Ice Cream.png";

export default function HomeScreen({ navigation }) {
  const popularFlavours = [
    {
      id: 1,
      name: "Pistachio Chocolate Vanilla",
      desc: "There's no refreshing delicate taste and fragrance like pistachio, with a hint of vanilla.",
      price: 2000, // Number format mein
      displayPrice: "Rp 2,000,-", // Display ke liye
      img: pistachio_icecream,
      fullDescription: "Thanks to its refreshing delicate taste and melt-in-your-mouth texture, it will appeal to big and small gourmets. The perfect blend of pistachio, chocolate, and vanilla creates a unique flavor experience.",
      backgroundColor: "#d8f1df"
    },
    {
      id: 2,
      name: "Cherry Strawberry",
      desc: "There's no refreshing delicate taste and fragrance like cherry, with a hint of vanilla.",
      price: 1500, // Number format mein
      displayPrice: "Rp 1,500,-", // Display ke liye
      img: strawberry_icecream,
      fullDescription: "A delightful combination of sweet cherries and fresh strawberries. This fruity blend offers a refreshing taste that's perfect for summer days and will satisfy your fruit cravings.",
      backgroundColor: "#ffe6e6"
    },
    {
      id: 3,
      name: "Double Choc Hazelnut",
      desc: "There's no refreshing delicate taste and fragrance like hazelnut, with a hint of chocolate.",
      price: 2500, // Number format mein
      displayPrice: "Rp 2,500,-", // Display ke liye
      img: chocolate_icecream,
      fullDescription: "Rich double chocolate combined with the nutty flavor of hazelnut. This decadent treat is perfect for chocolate lovers who enjoy a crunchy twist in their dessert.",
      backgroundColor: "#f1e0c6"
    },
  ];

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetails", { product });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 40 }}>
        <Feather name="menu" size={24} color="black" />
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#000" }}>Ice-Cream Shop</Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Feather name="shopping-cart" size={22} color="black" />
          </TouchableOpacity>
          <Feather name="user" size={22} color="black" />
        </View>
      </View>

      {/* Search */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f2f2f2",
          borderRadius: 50,
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop: 20,
        }}
      >
        <Feather name="search" size={18} color="#999" />
        <TextInput
          placeholder="Search"
          style={{ flex: 1, marginLeft: 10, fontSize: 14 }}
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#ff80aa",
            borderRadius: 50,
            padding: 8,
          }}
        >
          <Feather name="sliders" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Main Banner */}
      <View
        style={{
          backgroundColor: "#ffcce0",
          borderRadius: 20,
          paddingVertical: 20,
          paddingHorizontal: 15,
          alignItems: "center",
          marginTop: 25,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            backgroundColor: "#ff6699",
            color: "white",
            fontWeight: "600",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 3,
            fontSize: 12,
            marginBottom: 5,
          }}
        >
          20% Off in all popular flavours
        </Text>
        <Text style={{ color: "#660033", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
          Pick your favorite choice now!
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10, gap: 15, alignItems: "center" }}>
          <Image 
            source={lady_icecream} 
            style={{ width: 120, height: 120, resizeMode: "contain" }} 
          />
          <Image 
            source={strawberry_icecream} 
            style={{ width: 80, height: 80, resizeMode: "contain" }} 
          />
        </View>
      </View>

      {/* All flavours section */}
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#333", marginTop: 20, marginBottom: 20, textAlign: "left" }}>All flavours</Text>
      </View>

      {/* Banner Section - Using the imported banner */}
      <View
        style={{
          borderRadius: 20,
          marginTop: 0,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image 
          source={banner} 
          style={{ 
            width: '100%', 
            height: 120, 
            resizeMode: "cover",
            borderRadius: 20,
          }} 
        />
      </View>

      {/* Most Popular */}
      <Text style={{ fontWeight: "bold", fontSize: 16, color: "#333", marginTop: 25 }}>Most Popular</Text>
      <View style={{ marginTop: 15 }}>
        {popularFlavours.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleProductPress(item)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 10,
              marginBottom: 15,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
              <Image
                source={item.img}
                style={{ width: 65, height: 65, borderRadius: 10, marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "600", fontSize: 13, color: "#333" }}>{item.name}</Text>
                <Text style={{ fontSize: 11, color: "#777", marginVertical: 2 }}>{item.desc}</Text>
                <Text style={{ color: "#ff6699", fontSize: 11, fontWeight: "600" }}>4.9 ⭐</Text>
              </View>
            </View>
            <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>{item.displayPrice}</Text>
              <Text style={{ color: "#ff6699", fontSize: 22, lineHeight: 24 }}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}