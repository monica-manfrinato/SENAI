import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo03 from './jsx_examples/exemplo_03_condicionais';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0cd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
