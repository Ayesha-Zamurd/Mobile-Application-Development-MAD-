// export default WelcomePage;
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts, PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";

const images = [
  require("../../assets/images/categories/winter.jpg"),
  require("../../assets/images/subcategories/Turtleneck-men-WP.jpeg"),
  require("../../assets/images/categories/summer.jpg"),
  require("../../assets/images/subcategories/elegant-men-SP.jpeg"),
  require("../../assets/images/categories/perfumes.jpg"),
];

const WelcomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    Poppins_500Medium,
  });

  // Image auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Animate fade + slide in
  useEffect(() => {
    Animated.sequence([
      Animated.delay(500),
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

//   const handleGetStarted = async () => {
//     await AsyncStorage.setItem("hasLaunched", "true");
//     navigation.replace("AppNavigator");
//   };
// WelcomeScreen.js - sirf navigation part change karein
// WelcomeScreen.js - navigation part
const handleGetStarted = async () => {
  await AsyncStorage.setItem("hasLaunched", "true");
  navigation.replace("MainApp"); // ✅ "MainApp" par navigate karein
};

  if (!fontsLoaded) {
    return null; // Wait until fonts load
  }

  return (
    <ImageBackground
      source={images[index]}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.textContainer,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >,
          <Text style={styles.heading}>
  Make Your{'\n'}Shopping Easy!
</Text>

          {/* <Text style={styles.heading}>Make your shopping easy!</Text> */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleGetStarted}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
  },
  textContainer: {
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "PlayfairDisplay_700Bold",
    textAlign: "center",
    marginBottom: 25,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "myCustomFont",
  },
});

export default WelcomeScreen;
