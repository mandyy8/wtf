import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EventCard({ event, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={16} color="#8B8BAE" />
            <Text style={styles.detailText}>{event.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="link-outline" size={16} color="#8B8BAE" />
            <Text style={styles.detailText}>{event.source}</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={16} color="#8B8BAE" />
            <Text style={styles.detailText}>{event.time}</Text>
          </View>
        </View>
        <Text style={styles.description}>{event.description}</Text>
      </View>
      <View style={styles.imageContainer}>
        {/* Placeholder for event image */}
        <View style={styles.imagePlaceholder} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 4,
  },
  detailText: {
    marginLeft: 4,
    color: '#666',
    fontSize: 14,
  },
  description: {
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  imagePlaceholder: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    width: '100%',
    height: '100%',
  },
}); 