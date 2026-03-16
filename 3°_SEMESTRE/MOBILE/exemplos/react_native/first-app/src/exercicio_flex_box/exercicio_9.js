// Crie um semáforo vertical: um retângulo escuro (arredondado) centralizado na
// tela contendo três círculos (vermelho, amarelo, verde) empilhados com
// espaçamento uniforme entre eles. Os círculos devem ter 80x80 com borderRadius:
// 40 .

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
  return <View style={styles.container}>

    <View style={styles.semaforo}>
        <View style={styles.luzVerde}></View>
        <View style={styles.luzAmarela}></View>
        <View style={styles.luzVermelha}></View>

    </View>

  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  semaforo:{
    height: 320,
    width: 140,
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: 'space-evenly',
    alignItems: 'center'

  },
  luzVermelha: {
    height: 80,
    width: 80,
    backgroundColor: "red",
    borderRadius:40,
  },

  luzAmarela: {
    height: 80,
    width: 80,
    backgroundColor: "yellow",
    borderRadius:40
  },
  
  luzVerde: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    borderRadius:40
  },
});