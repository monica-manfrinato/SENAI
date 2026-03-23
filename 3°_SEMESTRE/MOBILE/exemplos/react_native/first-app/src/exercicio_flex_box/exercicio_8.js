// Crie um layout com uma barra lateral (sidebar) fixa à esquerda com largura 80 e
// cor escura. À direita, crie uma área de conteúdo que ocupa o restante da largura,
// contendo três cards empilhados verticalmente com cores diferentes e altura fixa
// de 100 cada. Use padding de 10 na área de conteúdo.

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return <View style={styles.container}>
        <View style = {styles.sidebar}> <Text> Sidebar</Text> </View>

    <View style={{flex:1, padding: 10, gap: 10}}> {/*não fazer assim, ADICIONA O STYLE LÁ EMBAIXO E SÓ CHAMA AQUI*/}
        <View style = {styles.card1}> <Text> Card 1</Text> </View>
        <View style = {styles.card2}> <Text> Card 1</Text> </View>
        <View style = {styles.card3}> <Text> Card 1</Text> </View>
    </View>


  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 18,
    flexDirection:"row" //os cards serão organizados em linha 
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

    sidebar:{
    
    alignItems: "flex-start",
    width:80,
    backgroundColor: "gray",
    height: "100%",
    justifyContent: "center" //alinha o texto no centro da barra lateral, no eixo principal
  },

  card1: {
    height: 100,
    flex:1, //os três cards dividem o espaço da tela igualmente, já que cada um tem flex: 1
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",

  },
  card2: {
    height: 100,
    flex:1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  card3: {
    height: 100,
    flex:1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },


});