// Crie três caixas quadradas (70x70) em uma linha horizontal. O container deve
// distribuir o espaço igualmente entre as caixas usando justifyContent . A primeira
// caixa deve ficar encostada à esquerda e a última à direita.

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView03() {
  return <View style={styles.container}>

    <View style ={{flexDirection: 'row', justifyContent: "space-between", width: "100%"}}>
        <View style={styles.redBox}> <Text>R</Text> </View>
        <View style={styles.greenBox}> <Text>G</Text> </View>
        <View style={styles.blueBox}> <Text>B</Text></View>
    </View>

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
    height: 70,
    width: 70,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 70,
    width: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 70,
    width: 70,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});