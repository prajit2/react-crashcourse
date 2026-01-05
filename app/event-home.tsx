import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function EventHome() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{ title: 'Event Home' }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Event Home Screen</Text>
      <Text style={{ marginTop: 10 }}>Selected Event ID: {id}</Text>
    </View>
  );
}