import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditEventScreen({ route, navigation }) {
  const { event } = route.params || {};
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    time: '',
    source: '',
    description: '',
  });

  useEffect(() => {
    if (event) {
      setFormData(event);
    }
  }, [event]);

  const validateForm = () => {
    if (!formData.title.trim()) {
      Alert.alert('Error', 'Title is required');
      return false;
    }
    if (!formData.location.trim()) {
      Alert.alert('Error', 'Location is required');
      return false;
    }
    if (!formData.time.trim()) {
      Alert.alert('Error', 'Time is required');
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    navigation.navigate('Events', {
      updatedEvent: event?.id ? { ...formData, id: event.id } : formData,
      action: event?.id ? 'edit' : 'add'
    });
  };

  const handleAdd = () => {
    if (!validateForm()) return;

    navigation.navigate('Events', {
      updatedEvent: { ...formData },
      action: 'add'
    });
  };

  const handleDelete = () => {
    if (!event) return;

    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this event?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            navigation.navigate('Events', {
              updatedEvent: event,
              action: 'delete',
            });
          },
        },
      ]
    );
  };

  const renderInputField = ({ icon, label, value, onChangeText, multiline }) => (
    <View style={styles.inputContainer}>
      <Ionicons name={icon} size={24} color="#8B8BAE" style={styles.inputIcon} />
      <View style={styles.inputWrapper}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
          style={[styles.input, multiline && styles.multilineInput]}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          placeholder={`Enter ${label.toLowerCase()}`}
          blurOnSubmit={multiline}
        />
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView 
        style={styles.scrollView}
        keyboardShouldPersistTaps="always"
      >
        {renderInputField({
          icon: "text-outline",
          label: "Title",
          value: formData.title,
          onChangeText: (text) => setFormData({ ...formData, title: text })
        })}
        
        {renderInputField({
          icon: "location-outline",
          label: "Location",
          value: formData.location,
          onChangeText: (text) => setFormData({ ...formData, location: text })
        })}
        
        {renderInputField({
          icon: "time-outline",
          label: "Time",
          value: formData.time,
          onChangeText: (text) => setFormData({ ...formData, time: text })
        })}
        
        {renderInputField({
          icon: "link-outline",
          label: "Source",
          value: formData.source,
          onChangeText: (text) => setFormData({ ...formData, source: text })
        })}
        
        {renderInputField({
          icon: "document-text-outline",
          label: "Description",
          value: formData.description,
          onChangeText: (text) => setFormData({ ...formData, description: text }),
          multiline: true
        })}
      </ScrollView>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Ionicons name="checkmark-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Ionicons name="add-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>add new</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, !event && styles.buttonDisabled]} 
          onPress={handleDelete}
          disabled={!event}
        >
          <Ionicons name="trash-outline" size={24} color={event ? "#fff" : "#ccc"} />
          <Text style={[styles.buttonText, !event && styles.buttonTextDisabled]}>delete</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E9F0',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputIcon: {
    marginRight: 16,
    marginTop: 24,
  },
  inputWrapper: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    color: '#666',
    padding: 8,
    backgroundColor: '#F8F9FA',
    borderRadius: 4,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8B8BAE',
    padding: 16,
  },
  button: {
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    marginTop: 4,
    fontSize: 12,
  },
  buttonTextDisabled: {
    color: '#ccc',
  },
}); 