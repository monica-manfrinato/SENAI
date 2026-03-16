import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';



import ExercicioView01 from './exercicio_flex_box/exercicio_1';
import ExercicioView02 from './exercicio_flex_box/exercicio_2';
import ExercicioView03 from './exercicio_flex_box/exercicio_3';
import ExercicioView04 from './exercicio_flex_box/exercicio_4';
import ExercicioView05 from './exercicio_flex_box/exercicio_5';
import ExercicioView06 from './exercicio_flex_box/exercicio_6';
import ExercicioView07 from './exercicio_flex_box/exercicio_7';
import ExercicioView08 from './exercicio_flex_box/exercicio_8';
import ExercicioView09 from './exercicio_flex_box/exercicio_9';
import ExercicioView10 from './exercicio_flex_box/exercicio_10';


export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView10/>       {/* se escreve esse aqui primeiro, ele já cria o import la em cima direto */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0cd',
    // alignItems: 'center',
  
  },
});
