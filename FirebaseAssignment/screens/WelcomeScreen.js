import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient colors={["#e3d5ff", "#ffbfd9"]} style={styles.container}>
      <Text style={styles.title}>Welcome =)</Text>
      <Text style={styles.subtitle}>
        Hi there! {"\n"}
        We're here to help you learn new skills.{"\n"}
        Log in or create an account.
      </Text>

      <Image
        source={require("../assets/welcome2.png")} // Put any illustration here
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.btnPrimaryText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnSecondary}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btnSecondaryText}>Log In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 60,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    opacity: 0.7,
    marginTop: 10,
  },
  image: {
    width: 220,
    height: 260,
    marginVertical: 35,
    resizeMode: "contain",
  },
  btnPrimary: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 40,
    backgroundColor: "white",
    marginBottom: 15,
  },
  btnPrimaryText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  btnSecondary: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnSecondaryText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
