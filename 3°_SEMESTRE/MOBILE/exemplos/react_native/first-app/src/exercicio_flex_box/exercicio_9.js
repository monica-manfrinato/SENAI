// Crie um semáforo vertical: um retângulo escuro (arredondado) centralizado na
// tela contendo três círculos (vermelho, amarelo, verde) empilhados com
// espaçamento uniforme entre eles. Os círculos devem ter 80x80 com borderRadius:
// 40 .

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
  return <View style={styles.container}>

    <View style={styles.semaforo}> {/* container pai do semáforo, engloba as luzes */}
        <View style={styles.luzVerde}></View>
        <View style={styles.luzAmarela}></View>
        <View style={styles.luzVermelha}></View>

    </View>

  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // alinha a caixa do semáforo no centro da tela (no eixo transversal), pois ela é filha desse container
    justifyContent: "center", // alinha a caixa do semáforo no centro da tela (no eixo principal)
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
    borderRadius: 10, //aredondamento das quinas
    backgroundColor: "black",
    justifyContent: 'space-evenly', //coloca espaços iguais entre as luzes, q são seus filhos
    alignItems: 'center' //alinha as luzes no centro do semáforo 

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