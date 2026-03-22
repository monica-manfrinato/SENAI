// Crie um grid de 2 linhas e 2 colunas. Cada célula deve ter uma cor diferente e
// todas devem ter o mesmo tamanho, preenchendo a tela uniformemente. Use um
// gap de 10 entre as células e um padding de 20 no contêiner principal.

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return <View style={styles.container}>
    <View style={styles.row}>
        <View style={styles.blueBox}></View>
        <View style={styles.greenBox}></View>
    </View>
    <View style={styles.row}>
        <View style={styles.redBox}></View>
        <View style={styles.yellowBox}></View>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,
    width: "100%"
 },
    row:{
        flex:1,
        flexDirection:"row",
        gap: 10,
        padding:20,
    width:"100%"
    },
 
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {

    backgroundColor: "red",
    flex:1,
  },
  greenBox: {
    backgroundColor: "green",
    flex:1
  },
  blueBox: {
    backgroundColor: "blue",
    flex:1
  },

  yellowBox: {
    backgroundColor: "yellow",
    flex:1
  }
});