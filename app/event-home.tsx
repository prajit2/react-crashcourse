import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function EventHome() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.center}>
      <Stack.Screen options={{ title: 'Event Home' }} />
      <Text style={styles.text}>Event Home Screen</Text>
      <Text>Selected Event ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' }
});