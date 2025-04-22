import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from './screens/EventsScreen';
import EditEventScreen from './screens/EditEventScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8B8BAE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Events" 
          component={EventsScreen}
          options={{
            title: 'Events',
          }}
        />
        <Stack.Screen 
          name="EditEvent" 
          component={EditEventScreen}
          options={{
            title: 'Edit Event',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 