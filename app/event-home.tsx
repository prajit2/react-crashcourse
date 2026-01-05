import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function EventHome() {
  const { id } = useLocalSearchParams();
  
  return (
    <View style={styles.container}>
      {/* This ensures the header is visible */}
      <Stack.Screen options={{ title: 'Event Home', headerTintColor: '#000' }} />
      
      <Text style={styles.header}>Event Home Screen</Text>
      <Text style={styles.subtext}>Selected Event ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffffff' // Forces a white background
  },
  header: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#000000' // Forces black text
  },
  subtext: { 
    fontSize: 16, 
    marginTop: 10, 
    color: '#333333' 
  }
});