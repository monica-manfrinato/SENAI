// Crie uma estrutura de página com três seções: um header fixo no topo (altura 60),
// uma área de conteúdo que ocupa todo o espaço restante, e um footer fixo na
// parte inferior (altura 50). O container principal deve ocupar toda a tela.

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return <View style={styles.container}>

        <View style={styles.header}><Text> Header</Text> </View>
        <View style={styles.conteudo}> <Text> Conteúdo </Text> </View>
        <View style={styles.footer}> <Text> Footer </Text> </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // gap: 18,
    maxWidth:"100%"  
},
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },


  header:{
    height: 60,
    width: "100%",
    backgroundColor: "blue",
    justifyContent: "flex-start",
    alignItems: "center"

  },

    conteudo:{
    width: "100%",
    backgroundColor: "gray",
    flex:1,
    alignItems: "center",
  },

    footer:{
    height: 50,
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "green",
    alignItems: "center"

  }

});