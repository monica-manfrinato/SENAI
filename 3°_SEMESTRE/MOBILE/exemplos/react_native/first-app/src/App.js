import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo03 from './jsx_examples/exemplo_03_condicionais';
import Exemplo04 from './jsx_examples/exemplo_04_listas';

import Lista01 from './exercicios/lista_01_monica';
import Lista02 from './exercicios/lista_02_monica';
import Lista03 from './exercicios/lista_03_monica';



export default function App() {
  return (
    <View style={styles.container}>
      <Lista02/>
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
