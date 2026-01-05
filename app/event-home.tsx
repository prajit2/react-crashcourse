import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function EventHome() {
  const { id } = useLocalSearchParams();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      {/* Forced Header visibility */}
      <Stack.Screen options={{ 
        headerShown: true, 
        title: 'Event Home', 
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'black' 
      }} />
      
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>
        Event Home Screen
      </Text>
      
      <Text style={{ fontSize: 16, marginTop: 10, color: 'blue' }}>
        Selected Event ID: {id}
      </Text>
    </View>
  );
}