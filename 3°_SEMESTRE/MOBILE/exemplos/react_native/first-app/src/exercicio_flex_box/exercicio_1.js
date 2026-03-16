// Crie um layout com três caixas coloridas (vermelha, azul e verde) empilhadas
// verticalmente, uma abaixo da outra. Cada caixa deve ter altura fixa de 80 e 80 de
// largura.


import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return <View style={styles.container}>

        <View style={styles.redBox}> <Text>R</Text> </View>
        <View style={styles.greenBox}> <Text>G</Text> </View>
        <View style={styles.blueBox}> <Text>B</Text> </View>

  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});