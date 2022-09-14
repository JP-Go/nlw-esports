import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Expo</Text>
      <Button title="Click me"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
});
