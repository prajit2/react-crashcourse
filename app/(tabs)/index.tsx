import { useRouter } from 'expo-router'; // Add this
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
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
  const router = useRouter(); // Initialize router
  const selectedEvent = MOCK_EVENTS.find(e => e.id === selectedId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staff Check-in</Text>
      <HelloCard name="Prajit" />
      <Text style={styles.selectionText}>Selected: {selectedEvent?.name || 'none'}</Text>

      <FlatList
        data={MOCK_EVENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => setSelectedId(item.id)}
            style={[styles.eventCard, { borderColor: selectedId === item.id ? 'blue' : '#ccc' }]}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.date} - {item.location}</Text>
          </Pressable>
        )}
      />

      {/* NAVIGATION BUTTON - Required for Session 3 [cite: 120-121] */}
      <Pressable 
        onPress={() => router.push({ pathname: '/event-home', params: { id: selectedId } })}
        style={[styles.navButton, { opacity: selectedId ? 1 : 0.5 }]}
        disabled={!selectedId}
      >
        <Text style={styles.navButtonText}>Go to Event Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold' },
  selectionText: { marginVertical: 10, fontWeight: '600' },
  eventCard: { padding: 15, borderWidth: 2, marginBottom: 10, borderRadius: 8 },
  navButton: { backgroundColor: 'black', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  navButtonText: { color: 'white', fontWeight: 'bold' }
});