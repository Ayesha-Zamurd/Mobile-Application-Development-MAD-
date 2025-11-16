// import React from "react";
// import { View, Text, Button } from "react-native";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";

// export default function HomeScreen({ navigation }) {
//   const logout = () => {
//     signOut(auth);
//     navigation.replace("Login");
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text style={{ fontSize: 26, fontWeight: "bold" }}>Welcome Home!</Text>

//       <Button title="Logout" onPress={logout} />
//     </View>
//   );
// }






// #########################################################################################
// ###########################################################################################
// #############################################################################################



import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);

  const logout = () => {
    signOut(auth);
    navigation.replace("Login");
  };

  return (
    <LinearGradient colors={["#e3d5ff", "#ffbfd9"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Hello, User 👋</Text>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Explore Your App</Text>
        <Text style={styles.subtitle}>
          Choose an option to continue your journey.
        </Text>

        {/* Display user email */}
        <View style={styles.emailContainer}>
          <Text style={styles.emailLabel}>Your email id is:</Text>
          <Text style={styles.emailText}>{userEmail}</Text>
        </View>

        <TouchableOpacity
          style={styles.menuBox}
          onPress={() => alert("Feature coming soon!")}
        >
          <Ionicons name="person-outline" size={30} color="#6E00FF" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBox}
          onPress={() => alert("Feature coming soon!")}
        >
          <Ionicons name="settings-outline" size={30} color="#6E00FF" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBox}
          onPress={() => alert("Feature coming soon!")}
        >
          <Ionicons name="sparkles-outline" size={30} color="#6E00FF" />
          <Text style={styles.menuText}>Features</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={logout}
        >
          <LinearGradient
            colors={["#ff8cab", "#b38bff"]}
            style={styles.logoutGradient}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    marginTop: 55,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcome: {
    fontSize: 22,
    fontWeight: "700",
  },
  card: {
    marginTop: 30,
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.6,
    marginBottom: 15,
  },
  emailContainer: {
    backgroundColor: "#f0e6ff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#6E00FF",
  },
  emailLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  emailText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6E00FF",
  },
  menuBox: {
    backgroundColor: "#f4f4f4",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  menuText: { fontSize: 16, fontWeight: "500" },
  logoutBtn: { marginTop: 30 },
  logoutGradient: {
    paddingVertical: 15,
    borderRadius: 40,
  },
  logoutText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
});