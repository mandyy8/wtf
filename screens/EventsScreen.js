import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EventCard from '../components/EventCard';

// Initial dummy data
const initialEvents = [
  {
    id: 1,
    title: 'Tech Conference 2024',
    location: 'San Francisco, CA',
    time: '10:00 AM',
    source: 'Conference Website',
    description: 'Annual technology conference featuring the latest innovations',
  },
];

export default function EventsScreen({ navigation, route }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState(initialEvents);

  // Add this useEffect to handle updates from EditEventScreen
  React.useEffect(() => {
    if (route.params?.updatedEvent) {
      const { updatedEvent, action } = route.params;
      
      if (action === 'add') {
        setEvents(currentEvents => [...currentEvents, { ...updatedEvent, id: Date.now() }]);
      } else if (action === 'edit') {
        setEvents(currentEvents =>
          currentEvents.map(event =>
            event.id === updatedEvent.id ? updatedEvent : event
          )
        );
      } else if (action === 'delete') {
        setEvents(currentEvents =>
          currentEvents.filter(event => event.id !== updatedEvent.id)
        );
      }
      
      // Clear the params after handling
      navigation.setParams({ updatedEvent: null, action: null });
    }
  }, [route.params?.updatedEvent]);

  // Filter events based on search query
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#8B8BAE" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search events..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          clearButtonMode="while-editing"
          enablesReturnKeyAutomatically={true}
        />
      </View>

      <ScrollView style={styles.eventsList}>
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onPress={() => navigation.navigate('EditEvent', { event })}
          />
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="balloon-outline" size={24} color="#fff" />
          <Text style={styles.navText}>events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="star-outline" size={24} color="#fff" />
          <Text style={styles.navText}>saved</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('EditEvent', { event: null })}
        >
          <Ionicons name="pencil-outline" size={24} color="#fff" />
          <Text style={styles.navText}>edit/add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E9F0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  eventsList: {
    flex: 1,
    padding: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8B8BAE',
    padding: 16,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    marginTop: 4,
    fontSize: 12,
  },
}); 