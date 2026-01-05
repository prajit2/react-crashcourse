import { StyleSheet, Text, View } from 'react-native';

export default function HelloCard({ name }: { name: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Hello, {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 10, marginVertical: 5 },
  text: { fontSize: 18, fontWeight: '500' }
});