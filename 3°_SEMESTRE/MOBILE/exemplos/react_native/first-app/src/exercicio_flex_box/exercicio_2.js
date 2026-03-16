// Crie um layout com três caixas quadradas (80x80) dispostas lado a lado
// horizontalmente. Use as cores vermelho, azul e verde.

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView02() {

  return <View style={styles.container} >
    <View style ={{flexDirection: 'row', gap: 8}}>
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