// Crie um layout dividido em duas colunas de largura igual, lado a lado, cada uma
// com uma cor diferente. Ambas devem ocupar toda a altura disponível. Use um
// gap de 8 entre elas.


import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return <View style={styles.container}>
    <View style={{maxWidth:"100%",flexDirection: "row", gap:8, flex:1 }}>

        <View style={styles.blueBox}> <Text>Coluna 1</Text> </View>
        <View style={styles.greenBox}> <Text>Coluna 2</Text> </View>

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
    // height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    flex: 1,
    // height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    flex:1,
    // height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});