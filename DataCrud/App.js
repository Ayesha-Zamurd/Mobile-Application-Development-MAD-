import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [fetchKey, setFetchKey] = useState('');
  const [removeKey, setRemoveKey] = useState('');
  const [fetchedData, setFetchedData] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Store Data Functionality
  const storeData = async () => {
    if (!key.trim()) {
      showStatusMessage('Please enter a key', 'error');
      return;
    }

    try {
      await AsyncStorage.setItem(key.trim(), value);
      showStatusMessage(`Data stored successfully for key: ${key}`, 'success');
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
      setRemoveKey('');
      
      // Clear fetched data if it was the same key
      if (fetchKey === removeKey) {
        setFetchedData('');
      }
    } catch (error) {
      showStatusMessage('Error removing data: ' + error.message, 'error');
    }
  };

  const showStatusMessage = (message, type) => {
    setStatusMessage(message);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      showStatusMessage('All data cleared successfully', 'success');
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>AsyncStorage Demo</Text>

      {/* Status Message */}
      {statusMessage ? (
        <View style={[
          styles.statusContainer,
          statusMessage.includes('Error') || statusMessage.includes('No data') 
            ? styles.errorStatus 
            : styles.successStatus
        ]}>
          <Text style={styles.statusText}>{statusMessage}</Text>
        </View>
      ) : null}

      {/* Store Data Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Store Data</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter key (e.g., userToken, theme, language)"
          value={key}
          onChangeText={setKey}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter value"
          value={value}
          onChangeText={setValue}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={storeData}>
          <Text style={styles.buttonText}>Store Data</Text>
        </TouchableOpacity>
      </View>

      {/* Fetch Data Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Fetch Data</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter key to fetch"
          value={fetchKey}
          onChangeText={setFetchKey}
        />
        <TouchableOpacity style={styles.button} onPress={fetchData}>
          <Text style={styles.buttonText}>Fetch Data</Text>
        </TouchableOpacity>
        
        {fetchedData !== '' && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Fetched Value:</Text>
            <Text style={styles.resultText}>{fetchedData}</Text>
          </View>
        )}
      </View>

      {/* Remove Data Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Remove Data</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter key to remove"
          value={removeKey}
          onChangeText={setRemoveKey}
        />
        <TouchableOpacity style={[styles.button, styles.removeButton]} onPress={removeData}>
          <Text style={styles.buttonText}>Remove Data</Text>
        </TouchableOpacity>
      </View>

      {/* Clear All Data */}
      <View style={styles.section}>
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearAllData}>
          <Text style={styles.buttonText}>Clear All Data</Text>
        </TouchableOpacity>
      </View>

      {/* Test Keys Suggestion */}
      <View style={styles.suggestionSection}>
        <Text style={styles.suggestionTitle}>Test with these keys:</Text>
        <Text style={styles.suggestionText}>• userToken</Text>
        <Text style={styles.suggestionText}>• theme</Text>
        <Text style={styles.suggestionText}>• language</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  textArea: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: '#FF3B30',
  },
  clearButton: {
    backgroundColor: '#8E8E93',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#e8f4fd',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  statusContainer: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  successStatus: {
    backgroundColor: '#d4edda',
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  errorStatus: {
    backgroundColor: '#f8d7da',
    borderLeftWidth: 4,
    borderLeftColor: '#dc3545',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  suggestionSection: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#666',
  },
  suggestionText: {
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
  },
});

export default App;