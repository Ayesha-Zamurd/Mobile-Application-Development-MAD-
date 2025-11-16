// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const App = () => {
//   const [key, setKey] = useState('');
//   const [value, setValue] = useState('');
//   const [fetchKey, setFetchKey] = useState('');
//   const [removeKey, setRemoveKey] = useState('');
//   const [fetchedData, setFetchedData] = useState('');
//   const [statusMessage, setStatusMessage] = useState('');

//   // Store Data Functionality
//   const storeData = async () => {
//     if (!key.trim()) {
//       showStatusMessage('Please enter a key', 'error');
//       return;
//     }

//     try {
//       await AsyncStorage.setItem(key.trim(), value);
//       showStatusMessage(`Data stored successfully for key: ${key}`, 'success');
//       setKey('');
//       setValue('');
//     } catch (error) {
//       showStatusMessage('Error storing data: ' + error.message, 'error');
//     }
//   };

//   // Fetch Data Functionality
//   const fetchData = async () => {
//     if (!fetchKey.trim()) {
//       showStatusMessage('Please enter a key to fetch', 'error');
//       return;
//     }

//     try {
//       const data = await AsyncStorage.getItem(fetchKey.trim());
//       if (data !== null) {
//         setFetchedData(data);
//         showStatusMessage(`Data fetched successfully for key: ${fetchKey}`, 'success');
//       } else {
//         setFetchedData('');
//         showStatusMessage(`No data found for key: ${fetchKey}`, 'error');
//       }
//     } catch (error) {
//       showStatusMessage('Error fetching data: ' + error.message, 'error');
//       setFetchedData('');
//     }
//   };

//   // Remove Data Functionality
//   const removeData = async () => {
//     if (!removeKey.trim()) {
//       showStatusMessage('Please enter a key to remove', 'error');
//       return;
//     }

//     try {
//       await AsyncStorage.removeItem(removeKey.trim());
//       showStatusMessage(`Data removed successfully for key: ${removeKey}`, 'success');
//       setRemoveKey('');
      
//       // Clear fetched data if it was the same key
//       if (fetchKey === removeKey) {
//         setFetchedData('');
//       }
//     } catch (error) {
//       showStatusMessage('Error removing data: ' + error.message, 'error');
//     }
//   };

//   const showStatusMessage = (message, type) => {
//     setStatusMessage(message);
//     setTimeout(() => setStatusMessage(''), 3000);
//   };

//   const clearAllData = async () => {
//     try {
//       await AsyncStorage.clear();
//       showStatusMessage('All data cleared successfully', 'success');
//       setFetchedData('');
//       setKey('');
//       setValue('');
//       setFetchKey('');
//       setRemoveKey('');
//     } catch (error) {
//       showStatusMessage('Error clearing all data: ' + error.message, 'error');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>AsyncStorage Demo</Text>

//       {/* Status Message */}
//       {statusMessage ? (
//         <View style={[
//           styles.statusContainer,
//           statusMessage.includes('Error') || statusMessage.includes('No data') 
//             ? styles.errorStatus 
//             : styles.successStatus
//         ]}>
//           <Text style={styles.statusText}>{statusMessage}</Text>
//         </View>
//       ) : null}

//       {/* Store Data Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>1. Store Data</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter key (e.g., userToken, theme, language)"
//           value={key}
//           onChangeText={setKey}
//         />
//         <TextInput
//           style={[styles.input, styles.textArea]}
//           placeholder="Enter value"
//           value={value}
//           onChangeText={setValue}
//           multiline
//         />
//         <TouchableOpacity style={styles.button} onPress={storeData}>
//           <Text style={styles.buttonText}>Store Data</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Fetch Data Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>2. Fetch Data</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter key to fetch"
//           value={fetchKey}
//           onChangeText={setFetchKey}
//         />
//         <TouchableOpacity style={styles.button} onPress={fetchData}>
//           <Text style={styles.buttonText}>Fetch Data</Text>
//         </TouchableOpacity>
        
//         {fetchedData !== '' && (
//           <View style={styles.resultContainer}>
//             <Text style={styles.resultLabel}>Fetched Value:</Text>
//             <Text style={styles.resultText}>{fetchedData}</Text>
//           </View>
//         )}
//       </View>

//       {/* Remove Data Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>3. Remove Data</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter key to remove"
//           value={removeKey}
//           onChangeText={setRemoveKey}
//         />
//         <TouchableOpacity style={[styles.button, styles.removeButton]} onPress={removeData}>
//           <Text style={styles.buttonText}>Remove Data</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Clear All Data */}
//       <View style={styles.section}>
//         <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearAllData}>
//           <Text style={styles.buttonText}>Clear All Data</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Test Keys Suggestion */}
//       <View style={styles.suggestionSection}>
//         <Text style={styles.suggestionTitle}>Test with these keys:</Text>
//         <Text style={styles.suggestionText}>• userToken</Text>
//         <Text style={styles.suggestionText}>• theme</Text>
//         <Text style={styles.suggestionText}>• language</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//     color: '#333',
//   },
//   section: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#444',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 10,
//     fontSize: 16,
//     backgroundColor: '#fafafa',
//   },
//   textArea: {
//     minHeight: 60,
//     textAlignVertical: 'top',
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   removeButton: {
//     backgroundColor: '#FF3B30',
//   },
//   clearButton: {
//     backgroundColor: '#8E8E93',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   resultContainer: {
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#e8f4fd',
//     borderRadius: 8,
//     borderLeftWidth: 4,
//     borderLeftColor: '#007AFF',
//   },
//   resultLabel: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#666',
//     marginBottom: 5,
//   },
//   resultText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   statusContainer: {
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   successStatus: {
//     backgroundColor: '#d4edda',
//     borderLeftWidth: 4,
//     borderLeftColor: '#28a745',
//   },
//   errorStatus: {
//     backgroundColor: '#f8d7da',
//     borderLeftWidth: 4,
//     borderLeftColor: '#dc3545',
//   },
//   statusText: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   suggestionSection: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   suggestionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#666',
//   },
//   suggestionText: {
//     fontSize: 14,
//     color: '#888',
//     marginLeft: 10,
//   },
// });

// export default App;










import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [fetchKey, setFetchKey] = useState('');
  const [removeKey, setRemoveKey] = useState('');
  const [fetchedData, setFetchedData] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(1));
  const [slideAnim] = useState(new Animated.Value(0));

  // Store Data Functionality
  const storeData = async () => {
    if (!key.trim()) {
      showStatusMessage('Please enter a key', 'error');
      return;
    }

    try {
      await AsyncStorage.setItem(key.trim(), value);
      showStatusMessage(`Data stored successfully for key: ${key}`, 'success');
      animateButton();
      setKey('');
      setValue('');
    } catch (error) {
      showStatusMessage('Error storing data: ' + error.message, 'error');
    }
  };

  // Fetch Data Functionality
  const fetchData = async () => {
    if (!fetchKey.trim()) {
      showStatusMessage('Please enter a key to fetch', 'error');
      return;
    }

    try {
      const data = await AsyncStorage.getItem(fetchKey.trim());
      if (data !== null) {
        setFetchedData(data);
        showStatusMessage(`Data fetched successfully for key: ${fetchKey}`, 'success');
        animateResult();
      } else {
        setFetchedData('');
        showStatusMessage(`No data found for key: ${fetchKey}`, 'error');
      }
    } catch (error) {
      showStatusMessage('Error fetching data: ' + error.message, 'error');
      setFetchedData('');
    }
  };

  // Remove Data Functionality
  const removeData = async () => {
    if (!removeKey.trim()) {
      showStatusMessage('Please enter a key to remove', 'error');
      return;
    }

    try {
      await AsyncStorage.removeItem(removeKey.trim());
      showStatusMessage(`Data removed successfully for key: ${removeKey}`, 'success');
      animateButton();
      setRemoveKey('');
      
      if (fetchKey === removeKey) {
        setFetchedData('');
      }
    } catch (error) {
      showStatusMessage('Error removing data: ' + error.message, 'error');
    }
  };

  const showStatusMessage = (message, type) => {
    setStatusMessage(message);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }).start(() => setStatusMessage(''));
    }, 3000);
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.elastic(1.5),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateResult = () => {
    slideAnim.setValue(-50);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      easing: Easing.out(Easing.back(1.5)),
      useNativeDriver: true,
    }).start();
  };

  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      showStatusMessage('All data cleared successfully', 'success');
      animateButton();
      setFetchedData('');
      setKey('');
      setValue('');
      setFetchKey('');
      setRemoveKey('');
    } catch (error) {
      showStatusMessage('Error clearing all data: ' + error.message, 'error');
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>☕</Text>
        </View>
        <Text style={styles.title}>Chocolate Storage</Text>
        <Text style={styles.subtitle}>Rich data management experience</Text>
      </View>

      {/* Status Message */}
      {statusMessage ? (
        <Animated.View 
          style={[
            styles.statusContainer,
            statusMessage.includes('Error') || statusMessage.includes('No data') 
              ? styles.errorStatus 
              : styles.successStatus,
            { opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0]
            }) }] }
          ]}
        >
          <Text style={styles.statusIcon}>
            {statusMessage.includes('Error') || statusMessage.includes('No data') ? '⚠️' : '✅'}
          </Text>
          <Text style={styles.statusText}>{statusMessage}</Text>
        </Animated.View>
      ) : null}

      {/* Store Data Section */}
      <Animated.View style={[styles.card, styles.storeCard]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>📦</Text>
          <View>
            <Text style={styles.cardTitle}>Store Data</Text>
            <Text style={styles.cardSubtitle}>Save your key-value pairs</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter key (e.g., userToken, theme, language)"
          placeholderTextColor="#A1887F"
          value={key}
          onChangeText={setKey}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter value"
          placeholderTextColor="#A1887F"
          value={value}
          onChangeText={setValue}
          multiline
        />
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity style={[styles.button, styles.storeButton]} onPress={storeData}>
            <Text style={styles.buttonText}>💾 Store Data</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* Fetch Data Section */}
      <Animated.View style={[styles.card, styles.fetchCard]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>🔍</Text>
          <View>
            <Text style={styles.cardTitle}>Fetch Data</Text>
            <Text style={styles.cardSubtitle}>Retrieve your stored data</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter key to fetch"
          placeholderTextColor="#A1887F"
          value={fetchKey}
          onChangeText={setFetchKey}
        />
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity style={[styles.button, styles.fetchButton]} onPress={fetchData}>
            <Text style={styles.buttonText}>📤 Fetch Data</Text>
          </TouchableOpacity>
        </Animated.View>
        
        {fetchedData !== '' && (
          <Animated.View style={[styles.resultContainer, { transform: [{ translateX: slideAnim }] }]}>
            <Text style={styles.resultLabel}>Fetched Value:</Text>
            <Text style={styles.resultText}>{fetchedData}</Text>
          </Animated.View>
        )}
      </Animated.View>

      {/* Remove Data Section */}
      <Animated.View style={[styles.card, styles.removeCard]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>🗑️</Text>
          <View>
            <Text style={styles.cardTitle}>Remove Data</Text>
            <Text style={styles.cardSubtitle}>Delete specific key-value pairs</Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter key to remove"
          placeholderTextColor="#A1887F"
          value={removeKey}
          onChangeText={setRemoveKey}
        />
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity style={[styles.button, styles.removeButton]} onPress={removeData}>
            <Text style={styles.buttonText}>🧹 Remove Data</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* Clear All Data */}
      <Animated.View style={[styles.card, styles.clearCard]}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>💥</Text>
          <View>
            <Text style={styles.cardTitle}>Clear All Data</Text>
            <Text style={styles.cardSubtitle}>Remove everything from storage</Text>
          </View>
        </View>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearAllData}>
            <Text style={styles.buttonText}>🚀 Clear All Data</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/* Test Keys Suggestion */}
      <View style={[styles.card, styles.suggestionCard]}>
        <Text style={styles.suggestionTitle}>💡 Suggested Keys:</Text>
        <View style={styles.suggestionGrid}>
          <View style={styles.suggestionItem}>
            <Text style={styles.suggestionBullet}>•</Text>
            <Text style={styles.suggestionText}>userToken</Text>
          </View>
          <View style={styles.suggestionItem}>
            <Text style={styles.suggestionBullet}>•</Text>
            <Text style={styles.suggestionText}>theme</Text>
          </View>
          <View style={styles.suggestionItem}>
            <Text style={styles.suggestionBullet}>•</Text>
            <Text style={styles.suggestionText}>language</Text>
          </View>
          <View style={styles.suggestionItem}>
            <Text style={styles.suggestionBullet}>•</Text>
            <Text style={styles.suggestionText}>userProfile</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Crafted with ❤️ and ☕</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#5D4037',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#3E2723',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  logo: {
    fontSize: 45,
    color: '#FFF8F0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4E342E',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#8D6E63',
    textAlign: 'center',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#3E2723',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    borderWidth: 1,
  },
  storeCard: {
    borderColor: '#D7CCC8',
    backgroundColor: '#FFFFFF',
  },
  fetchCard: {
    borderColor: '#BCAAA4',
    backgroundColor: '#FFFFFF',
  },
  removeCard: {
    borderColor: '#A1887F',
    backgroundColor: '#FFFFFF',
  },
  clearCard: {
    borderColor: '#8D6E63',
    backgroundColor: '#FFFFFF',
  },
  suggestionCard: {
    borderColor: '#D7CCC8',
    backgroundColor: '#FFFFFF',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardIcon: {
    fontSize: 28,
    marginRight: 15,
    color: '#5D4037',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#8D6E63',
    marginTop: 2,
  },
  input: {
    borderWidth: 2,
    borderColor: '#D7CCC8',
    borderRadius: 15,
    padding: 18,
    marginBottom: 18,
    fontSize: 16,
    backgroundColor: '#FFF8F0',
    color: '#4E342E',
    fontWeight: '500',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  button: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  storeButton: {
    backgroundColor: '#6D4C41',
  },
  fetchButton: {
    backgroundColor: '#8D6E63',
  },
  removeButton: {
    backgroundColor: '#A1887F',
  },
  clearButton: {
    backgroundColor: '#5D4037',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
  resultContainer: {
    marginTop: 25,
    padding: 20,
    backgroundColor: '#EFEBE9',
    borderRadius: 15,
    borderLeftWidth: 6,
    borderLeftColor: '#8D6E63',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  resultLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 17,
    color: '#4E342E',
    fontWeight: '600',
  },
  statusContainer: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 6,
  },
  successStatus: {
    backgroundColor: '#E8F5E8',
    borderLeftWidth: 6,
    borderLeftColor: '#4CAF50',
  },
  errorStatus: {
    backgroundColor: '#FFEBEE',
    borderLeftWidth: 6,
    borderLeftColor: '#F44336',
  },
  statusIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  statusText: {
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
    color: '#4E342E',
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 15,
  },
  suggestionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 10,
  },
  suggestionBullet: {
    fontSize: 16,
    color: '#8D6E63',
    marginRight: 8,
    fontWeight: 'bold',
  },
  suggestionText: {
    fontSize: 15,
    color: '#6D4C41',
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  footerText: {
    fontSize: 14,
    color: '#A1887F',
    fontWeight: '500',
  },
});

export default App;