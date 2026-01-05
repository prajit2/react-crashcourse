import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import HelloCard from '../../components/HelloCard';

const MOCK_EVENTS = [
  { id: '1', name: 'Morning Shift', date: 'Jan 5', location: 'Hall A' },
  { id: '2', name: 'Afternoon Shift', date: 'Jan 5', location: 'Hall B' },
  { id: '3', name: 'Inventory', date: 'Jan 6', location: 'Warehouse' },
  { id: '4', name: 'Staff Meet', date: 'Jan 6', location: 'Office' },
  { id: '5', name: 'Security', date: 'Jan 7', location: 'Perimeter' },
  { id: '6', name: 'Closing', date: 'Jan 7', location: 'Main Gate' },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedEvent = MOCK_EVENTS.find(e => e.id === selectedId);

  return (
    <View style={{ flex: 1, padding: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Staff Check-in</Text>
      <HelloCard name="Your Name" /> 
      <Text style={{ marginVertical: 10 }}>Selected: {selectedEvent?.name || 'none'}</Text>

      <FlatList
        data={MOCK_EVENTS}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No events available</Text>}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => setSelectedId(item.id)}
            style={{ 
              padding: 15, borderWidth: 1, marginBottom: 10, borderRadius: 8,
              borderColor: selectedId === item.id ? 'blue' : '#ccc',
              backgroundColor: selectedId === item.id ? '#f0f8ff' : 'white'
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.date} - {item.location}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}