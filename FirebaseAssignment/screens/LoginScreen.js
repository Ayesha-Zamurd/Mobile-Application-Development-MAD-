// // LoginScreen.js
// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
// import { auth, db } from "../firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   // --- SIGNUP FUNCTION ---
//   const handleSignup = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password");
//       return;
//     }

//     setLoading(true);
//     try {
//       console.log("Creating user...");
//       const userCred = await createUserWithEmailAndPassword(auth, email, password);
//       console.log("User created:", userCred.user.uid);

//       // store user info in Firestore
//       try {
//         await setDoc(doc(db, "users", userCred.user.uid), {
//           email: email,
//           createdAt: new Date(),
//           uid: userCred.user.uid
//         });
//         console.log("User data saved to Firestore");
//         Alert.alert("Success", "Account created successfully!");
//       } catch (firestoreError) {
//         console.error("Firestore error:", firestoreError);
//         Alert.alert("Firestore Error", firestoreError.message);
//       }

//     } catch (error) {
//       console.error("Signup error:", error);
//       Alert.alert("Error", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- LOGIN FUNCTION ---
//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Error", "Please enter both email and password");
//       return;
//     }

//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigation.navigate("Home");
//     } catch (error) {
//       console.error("Login error:", error);
//       Alert.alert("Error", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login / Signup</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <View style={styles.btnContainer}>
//         <Button 
//           title={loading ? "Loading..." : "Signup"} 
//           onPress={handleSignup} 
//           disabled={loading}
//         />
//       </View>

//       <View style={styles.btnContainer}>
//         <Button 
//           title={loading ? "Loading..." : "Login"} 
//           onPress={handleLogin} 
//           disabled={loading}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     marginBottom: 30,
//     fontWeight: "bold",
//   },
//   input: {
//     width: "100%",
//     borderWidth: 1,
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 8,
//   },
//   btnContainer: {
//     width: "100%",
//     marginVertical: 5,
//   },
// });






// #########################################################################################
// ###########################################################################################
// #############################################################################################



// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     if (text && !validateEmail(text)) {
//       setEmailError("Please enter a valid email address");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setPasswordError(""); // Clear password error when user starts typing
//     if (text && text.length < 6) {
//       setPasswordError("Password must be at least 6 characters");
//     } else {
//       setPasswordError("");
//     }
//   };

//   const handleLogin = async () => {
//     // Reset errors
//     setEmailError("");
//     setPasswordError("");

//     // Validation
//     let isValid = true;

//     if (!email) {
//       setEmailError("Email is required");
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       isValid = false;
//     }
//     if (!password) {
//       setPasswordError("Password is required");
//       isValid = false;
//     } else if (password.length < 6) {
//       setPasswordError("Password must be at least 6 characters");
//       isValid = false;
//     }

//     if (!isValid) return;

//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigation.navigate("Home");
//     } catch (error) {
//       console.error("Login error:", error);
//       if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
//         setPasswordError("Incorrect password. Please try again.");
//       } else if (error.code === 'auth/user-not-found') {
//         setEmailError("No account found with this email.");
//       } else {
//         setPasswordError(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <LinearGradient colors={["#e3d5ff", "#ffbfd9"]} style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text style={styles.back}>← Back</Text>
//       </TouchableOpacity>

//       <View style={styles.card}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <Text style={styles.subtitle}>Your path is right here.</Text>

//         <TextInput
//           placeholder="Enter email"
//           style={[styles.input, emailError ? styles.inputError : null]}
//           value={email}
//           onChangeText={handleEmailChange}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

//         <View style={[styles.passwordContainer, passwordError ? styles.inputError : null]}>
//           <TextInput
//             placeholder="Password"
//             secureTextEntry={!showPassword}
//             style={{ flex: 1 }}
//             value={password}
//             onChangeText={handlePasswordChange}
//           />
//           <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//             <Ionicons 
//               name={showPassword ? "eye-outline" : "eye-off-outline"} 
//               size={20} 
//               color="#8b8b8b" 
//             />
//           </TouchableOpacity>
//         </View>
//         {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

//         <TouchableOpacity onPress={handleLogin} disabled={loading}>
//           <LinearGradient
//             colors={["#ff8cab", "#b38bff"]}
//             style={styles.loginBtn}
//           >
//             <Text style={styles.loginText}>
//               {loading ? "Loading..." : "Log In"}
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>

//         <Text style={styles.footer}>
//           New here?{" "}
//           <Text
//             style={{ color: "#6E00FF" }}
//             onPress={() => navigation.navigate("Signup")}
//           >
//             Sign Up
//           </Text>
//         </Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   back: {
//     marginTop: 50,
//     marginLeft: 20,
//     fontSize: 16,
//   },
//   card: {
//     marginTop: 30,
//     backgroundColor: "white",
//     flex: 1,
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     paddingHorizontal: 30,
//     paddingTop: 40,
//   },
//   title: { fontSize: 28, fontWeight: "700" },
//   subtitle: { fontSize: 14, opacity: 0.6, marginBottom: 25 },
//   input: {
//     backgroundColor: "#f4f4f4",
//     padding: 15,
//     borderRadius: 12,
//     marginBottom: 5,
//   },
//   inputError: {
//     borderColor: "#ff3b30",
//     borderWidth: 1,
//   },
//   passwordContainer: {
//     backgroundColor: "#f4f4f4",
//     padding: 15,
//     borderRadius: 12,
//     marginBottom: 5,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   loginBtn: {
//     paddingVertical: 15,
//     borderRadius: 40,
//     marginTop: 20,
//   },
//   loginText: { textAlign: "center", color: "white", fontSize: 16 },
//   footer: { textAlign: "center", marginTop: 25, fontSize: 14 },
//   errorText: {
//     color: "#ff3b30",
//     fontSize: 12,
//     marginBottom: 10,
//     marginLeft: 5,
//   },
// });



import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAccountNotFoundModal, setShowAccountNotFoundModal] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text && !validateEmail(text)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError(""); // Clear password error when user starts typing
    if (text && text.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validation
    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Login error:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      
      // Handle different Firebase auth errors
      if (error.code === 'auth/invalid-credential' || 
          error.code === 'auth/wrong-password' ||
          error.code === 'auth/invalid-email') {
        
        // Check if it's likely a non-existent email by the error message
        if (error.message.includes('no user record') || 
            error.message.includes('user-not-found') ||
            error.code === 'auth/invalid-credential') {
          setShowAccountNotFoundModal(true);
        } else {
          setPasswordError("Incorrect password. Please try again.");
        }
      } else if (error.code === 'auth/user-not-found') {
        setShowAccountNotFoundModal(true);
      } else {
        setPasswordError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoToSignup = () => {
    setShowAccountNotFoundModal(false);
    // Clear fields when going to signup
    setEmail("");
    setPassword("");
    navigation.navigate("Signup");
  };

  const handleCancelModal = () => {
    setShowAccountNotFoundModal(false);
    // Clear the email and password fields
    setEmail("");
    setPassword("");
  };

  return (
    <LinearGradient colors={["#e3d5ff", "#ffbfd9"]} style={styles.container}>
      
      {/* Account Not Found Modal */}
      <Modal
        visible={showAccountNotFoundModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Account Not Found</Text>
            <Text style={styles.modalText}>
              This account doesn't exist. Please sign up to create a new account.
            </Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.modalButtonSecondary]}
                onPress={handleCancelModal}
              >
                <Text style={styles.modalButtonSecondaryText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={handleGoToSignup}
              >
                <LinearGradient
                  colors={["#ff8cab", "#b38bff"]}
                  style={styles.modalButtonGradient}
                >
                  <Text style={styles.modalButtonText}>Sign Up</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Your path is right here.</Text>

        <TextInput
          placeholder="Enter email"
          style={[styles.input, emailError ? styles.inputError : null]}
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[styles.input, passwordError ? styles.inputError : null]}
          value={password}
          onChangeText={handlePasswordChange}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <TouchableOpacity onPress={handleLogin} disabled={loading}>
          <LinearGradient
            colors={["#ff8cab", "#b38bff"]}
            style={styles.loginBtn}
          >
            <Text style={styles.loginText}>
              {loading ? "Loading..." : "Log In"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.footer}>
          New here?{" "}
          <Text
            style={{ color: "#6E00FF" }}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  back: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 16,
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
  title: { fontSize: 28, fontWeight: "700" },
  subtitle: { fontSize: 14, opacity: 0.6, marginBottom: 25 },
  input: {
    backgroundColor: "#f9edfad2",
    padding: 15,
    borderRadius: 12,
    marginBottom: 5,
  },
  inputError: {
    borderColor: "#ff3b30",
    borderWidth: 1,
  },
  loginBtn: {
    paddingVertical: 15,
    borderRadius: 40,
    marginTop: 20,
  },
  loginText: { textAlign: "center", color: "white", fontSize: 16 },
  footer: { textAlign: "center", marginTop: 25, fontSize: 14 },
  errorText: {
    color: "#ff3b30",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 5,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    lineHeight: 22,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  modalButton: {
    flex: 1,
  },
  modalButtonSecondary: {
    backgroundColor: '#f4f4f4',
    borderRadius: 25,
    paddingVertical: 12,
  },
  modalButtonSecondaryText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalButtonGradient: {
    paddingVertical: 12,
    borderRadius: 25,
    paddingHorizontal: 30,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});