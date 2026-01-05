import { Text, View } from 'react-native';
export default function HelloCard({ name }: { name: string }) {
  return <View style={{ padding: 10, backgroundColor: '#eee' }}><Text>Hello, {name}</Text></View>;
}