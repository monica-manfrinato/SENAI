// Objetivo: Integrar todas as técnicas de Flexbox em um layout complexo e realista.
// Construa um layout de dashboard completo com:
// Um header (altura 50, cor azul escuro);
// Uma linha com 3 cards de tamanho igual com gap de 8;
// Abaixo, uma linha com um painel principal ( flex: 2 ) e um painel lateral ( flex:
// 1 ) com gap de 8;
// Um footer (altura 40, cor escura).
// Todas as seções devem ter padding de 8. O conteúdo central deve expandir para
// preencher o espaço restante.

import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      
      <View style={styles.linhaCards}>
        <View style={styles.redBox}></View>
        <View style={styles.greenBox}></View>
        <View style={styles.blueBox}></View>
      </View>
      
      <View style={styles.painel}>
        <View style={styles.painelPrincipal}></View>
        <View style={styles.painelLateral}></View>
      </View>
      
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 8,
    gap: 8,
  },

  header: {
    width: "100%",
    height: 50,
    backgroundColor: "darkblue",
  },

  linhaCards: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
    padding: 8,
  },

  redBox: {
    flex: 1,
    height: 80,
    backgroundColor: "red",
  },
  greenBox: {
    flex: 1,
    height: 80,
    backgroundColor: "green",
  },
  blueBox: {
    flex: 1,
    height: 80,
    backgroundColor: "blue",
  },

  painel: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    padding: 8,
  },

  painelPrincipal: {
    flex: 2,
    backgroundColor: "pink",
  },

  painelLateral: {
    flex: 1,
    backgroundColor: "blue",
  },

  footer: {
    width: "100%",
    height: 40,
    backgroundColor: "darkblue",
  },
});