// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";
// import { auth, db } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore";

// export default function SignupScreen({ navigation }) {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
//     if (text && text.length < 6) {
//       setPasswordError("Password must be at least 6 characters");
//     } else {
//       setPasswordError("");
//     }
    
//     // Check if passwords match
//     if (confirmPassword && text !== confirmPassword) {
//       setConfirmPasswordError("Both passwords don't match");
//     } else {
//       setConfirmPasswordError("");
//     }
//   };

//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//     if (password !== text) {
//       setConfirmPasswordError("Both passwords don't match");
//     } else {
//       setConfirmPasswordError("");
//     }
//   };

//   const handleSignup = async () => {
//     // Reset errors
//     setEmailError("");
//     setPasswordError("");
//     setConfirmPasswordError("");

//     // Validation
//     let isValid = true;

//     if (!fullName) {
//       Alert.alert("Error", "Please enter your full name");
//       isValid = false;
//       return;
//     }
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
//     if (!confirmPassword) {
//       setConfirmPasswordError("Please confirm your password");
//       isValid = false;
//     } else if (password !== confirmPassword) {
//       setConfirmPasswordError("Both passwords don't match");
//       isValid = false;
//     }

//     if (!isValid) return;

//     setLoading(true);
//     try {
//       console.log("Creating user...");
//       const userCred = await createUserWithEmailAndPassword(auth, email, password);
//       console.log("User created:", userCred.user.uid);

//       // Store user info in Firestore
//       try {
//         await setDoc(doc(db, "users", userCred.user.uid), {
//           fullName: fullName,
//           email: email,
//           createdAt: new Date(),
//           uid: userCred.user.uid
//         });
//         console.log("User data saved to Firestore");
//         Alert.alert("Success", "Account created successfully!");
//         navigation.navigate("Home");
//       } catch (firestoreError) {
//         console.error("Firestore error:", firestoreError);
//         Alert.alert("Firestore Error", firestoreError.message);
//       }

//     } catch (error) {
//       console.error("Signup error:", error);
//       if (error.code === 'auth/email-already-in-use') {
//         Alert.alert("Error", "This email already exists. Please use a different email or login.");
//       } else {
//         Alert.alert("Error", error.message);
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
//         <Text style={styles.title}>Create Your Account</Text>
//         <Text style={styles.subtitle}>Let's get started!</Text>

//         <TextInput
//           placeholder="Enter full name"
//           style={styles.input}
//           value={fullName}
//           onChangeText={setFullName}
//         />

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
//             placeholder="Enter password"
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

//         <View style={[styles.passwordContainer, confirmPasswordError ? styles.inputError : null]}>
//           <TextInput
//             placeholder="Confirm password"
//             secureTextEntry={!showConfirmPassword}
//             style={{ flex: 1 }}
//             value={confirmPassword}
//             onChangeText={handleConfirmPasswordChange}
//           />
//           <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
//             <Ionicons 
//               name={showConfirmPassword ? "eye-outline" : "eye-off-outline"} 
//               size={20} 
//               color="#8b8b8b" 
//             />
//           </TouchableOpacity>
//         </View>
//         {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

//         <TouchableOpacity onPress={handleSignup} disabled={loading}>
//           <LinearGradient
//             colors={["#ff8cab", "#b38bff"]}
//             style={styles.startBtn}
//           >
//             <Text style={styles.startText}>
//               {loading ? "Creating Account..." : "Get Started"}
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>

//         <Text style={styles.footer}>
//           Already have an account?{" "}
//           <Text
//             style={{ color: "#6E00FF" }}
//             onPress={() => navigation.navigate("Login")}
//           >
//             Log In
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
//   title: { fontSize: 26, fontWeight: "700" },
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
//   startBtn: {
//     paddingVertical: 15,
//     borderRadius: 40,
//     marginTop: 20,
//   },
//   startText: { textAlign: "center", color: "white", fontSize: 16 },
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
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmailExistsModal, setShowEmailExistsModal] = useState(false);

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
    if (text && text.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
    
    // Check if passwords match
    if (confirmPassword && text !== confirmPassword) {
      setConfirmPasswordError("Both passwords don't match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    if (password !== text) {
      setConfirmPasswordError("Both passwords don't match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSignup = async () => {
    // Reset errors
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

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
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Both passwords don't match");
      isValid = false;
    }

    if (!isValid) return;

    setLoading(true);
    try {
      console.log("Creating user...");
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCred.user.uid);

      // Store user info in Firestore
      try {
        await setDoc(doc(db, "users", userCred.user.uid), {
          email: email,
          createdAt: new Date(),
          uid: userCred.user.uid
        });
        console.log("User data saved to Firestore");
        
        // Clear all fields after successful signup
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        
        navigation.navigate("Home");
      } catch (firestoreError) {
        console.error("Firestore error:", firestoreError);
      }

    } catch (error) {
      console.error("Signup error:", error);
      if (error.code === 'auth/email-already-in-use') {
        setShowEmailExistsModal(true);
      } else {
        // For other errors, show alert
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoToLogin = () => {
    setShowEmailExistsModal(false);
    navigation.navigate("Login");
  };

  const handleCancelModal = () => {
    setShowEmailExistsModal(false);
    // Clear all fields when cancel is clicked
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <LinearGradient colors={["#e3d5ff", "#ffbfd9"]} style={styles.container}>
      
      {/* Email Already Exists Modal */}
      <Modal
        visible={showEmailExistsModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Email Already Exists</Text>
            <Text style={styles.modalText}>
              This email address is already registered. Please login with this email.
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
                onPress={handleGoToLogin}
              >
                <LinearGradient
                  colors={["#ff8cab", "#b38bff"]}
                  style={styles.modalButtonGradient}
                >
                  <Text style={styles.modalButtonText}>Log In</Text>
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
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.subtitle}>Let's get started!</Text>

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
          placeholder="Enter password"
          secureTextEntry={true}
          style={[styles.input, passwordError ? styles.inputError : null]}
          value={password}
          onChangeText={handlePasswordChange}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <TextInput
          placeholder="Confirm password"
          secureTextEntry={true}
          style={[styles.input, confirmPasswordError ? styles.inputError : null]}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

        <TouchableOpacity onPress={handleSignup} disabled={loading}>
          <LinearGradient
            colors={["#ff8cab", "#b38bff"]}
            style={styles.startBtn}
          >
            <Text style={styles.startText}>
              {loading ? "Creating Account..." : "Get Started"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text
            style={{ color: "#6E00FF" }}
            onPress={() => navigation.navigate("Login")}
          >
            Log In
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
  title: { fontSize: 26, fontWeight: "700" },
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
  startBtn: {
    paddingVertical: 15,
    borderRadius: 40,
    marginTop: 20,
  },
  startText: { textAlign: "center", color: "white", fontSize: 16 },
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