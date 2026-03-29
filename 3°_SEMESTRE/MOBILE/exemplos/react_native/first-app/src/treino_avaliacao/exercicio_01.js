// Objetivo: Combinar linhas com proporções diferentes e espaços flexíveis entre
// elas.
// Construa um layout com três camadas empilhadas verticalmente:
// lex: 1 
// );
// Uma linha no topo (altura 120) com três colunas em proporções 121 — azul,
// vermelho e verde — com gap de 8;
// Uma área central laranja que expande para preencher todo o espaço restante
// (f
// Uma linha no fundo (altura 80) com duas colunas iguais — roxa e cinza —
// com gap de 8.
// O container principal deve ter padding de 8 e gap de 8 entre as camadas.
// Dica: O container é 
// flexDirection: "column" 
// . Use 
// height
//  fixo nas linhas de topo e
// fundo, e 
// flex: 1
//  na área central. Dentro de cada linha, use 
// Lembre que 
// flex: 2
//  ocupa o dobro do espaço de 
// flexDirection: "row" 
// .
// flex: 1
//  na mesma linha.

import { StyleSheet, Text, View } from "react-native";

export default function Treino01() {
  return <View style={styles.container}>

    <View style ={styles.linhaTopo}>
        <View style ={styles.blueColumn}> <Text style = {styles.textStyle}>Azul</Text></View>
        <View style ={styles.redColumn}><Text style = {styles.textStyle}>Vermelho</Text></View>
        <View style ={styles.greenColumn}><Text style = {styles.textStyle}>Verde</Text></View>
    </View>

    <View style={styles.areaCentral}><Text style = {styles.textStyle}>Laranja</Text></View>
    <View style ={styles.linhaFundo}>
        <View style = {styles.purpleColumn}><Text style = {styles.textStyle}>Roxo</Text></View>
        <View style = {styles.grayColumn}><Text style = {styles.textStyle}>Cinza</Text></View>

    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding:8,
    gap:8
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  linhaTopo:{
    flexDirection:"row",
    height: 120,
    gap:8
  },

blueColumn: {
    backgroundColor: "blue",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:4

  },

  redColumn: {
    backgroundColor: "red",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:4

  },

  greenColumn: {
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:4

  },

  areaCentral:{
    backgroundColor: "orange",
    flex:1,
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
    borderRadius:4
  },

  linhaFundo: {
    flexDirection:"row",
    height:80,
    gap: 8
  },

  purpleColumn:{
    backgroundColor:"purple",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:4
  },

  grayColumn:{
    backgroundColor: "gray",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:4
  }

});