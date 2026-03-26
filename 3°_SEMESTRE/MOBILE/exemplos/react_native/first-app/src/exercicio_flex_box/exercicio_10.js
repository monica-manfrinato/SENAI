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
<<<<<<< Updated upstream
  return (
    // A ordem que aparece aqui vai ser a ordem de posicionamento na tela, ou seja, primeiro o header, depois a linha dos cards, depois o painel e por último o footer, e como o container principal tem flexDirection 'column', os elementos vão se organizar em coluna, um abaixo do outro

    <View style={styles.container}> {/* container pai, precisa englobar todo o conteúdo */}
      <View style={styles.header}></View>
      
      <View style={styles.linhaCards}> {/* container linhaCards, engloba os boxes coloridos */}
        <View style={styles.redBox}></View>
        <View style={styles.greenBox}></View>
        <View style={styles.blueBox}></View>
      </View>
      
      <View style={styles.painel}> {/* container painel, engloba os painéis principal e lateral */}
        <View style={styles.painelPrincipal}></View>
        <View style={styles.painelLateral}></View>
      </View>
      
      <View style={styles.footer}></View>
    </View>
  );
=======
  return <View style={styles.container}>
    <View style={styles.header}></View>
        <View style={styles.linhaCards}>
            <View style={styles.redBox}><Text style = {styles.textStyle}>Caixa Vermelha</Text></View>
            <View style={styles.greenBox}><Text style = {styles.textStyle}>Caixa Verde</Text></View>
            <View style={styles.blueBox}><Text style = {styles.textStyle}>Caixa Azul</Text></View>
        </View>

            <View style={styles.painel}>
            <View style={styles.painelPrincipal}></View>
            <View style={styles.painelLateral}></View>
        </View>
    <View style={styles.footer}></View>

    



  </View>;
>>>>>>> Stashed changes
}

const styles = StyleSheet.create({ // no container principal, definimos flexDirection 'column' para organizar os elementos em coluna
  container: {
<<<<<<< Updated upstream
    flex: 1, // para ocupar toda a tela
    flexDirection: "column",
    padding: 8, //espaço interno em todas as seções
    gap: 8, // espaço entre os elementos filhos (header, linhaCards, painel, footer)
=======
    flexDirection:"column",
    flex: 1,
    gap: 8,
    padding:8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
>>>>>>> Stashed changes
  },

  header: {
    width: "100%", // para ocupar toda a largura, já q o pai está com flexDirection 'column'
    height: 50, //define tamanho fixo para o header
    backgroundColor: "darkblue",
  },

<<<<<<< Updated upstream
  linhaCards: { //como não tem altura fixa definida, ele vai se ajustar ao conteúdo dos cards (redBox, greenBox, blueBox)
    width: "100%", // para ocupar toda a largura, já q o pai está com flexDirection 'column'
    flexDirection: "row", //modifica o flexDirection para organizar os seus filhos (redBox, greenBox, blueBox) em linha
    gap: 8, //espaço entre os cards
    padding: 8, //espaço interno entre os cards e as bordas do container
  },

  redBox: {
    flex: 1, //vai dividir o espaço disponível igualmente entre os 3 cards, já que cada um tem flex: 1
    height: 80, //define uma altura fixa para os cards
=======
  linhaCards:{
    flexDirection:"row",
    gap: 8,
    padding:4,
    justifyContent:"space-between"
  },

  painel:{
    flex:1,
    flexDirection: "row",
    gap:8
  },

  painelPrincipal:{
    flex: 2,
    backgroundColor:"pink",
  },

  painelLateral:{
    flex:1,
    backgroundColor:"blue",
  },

  footer:{
    height:40,
    width:"100%",
    backgroundColor:"darkblue"

  },
    redBox: {
    height: 80,
    flex: 1,
>>>>>>> Stashed changes
    backgroundColor: "red",
  },

  greenBox: {
    flex: 1,
    height: 80,
<<<<<<< Updated upstream
=======
    flex: 1,
>>>>>>> Stashed changes
    backgroundColor: "green",
  },

  blueBox: {
    flex: 1,
    height: 80,
<<<<<<< Updated upstream
=======
    flex: 1,
>>>>>>> Stashed changes
    backgroundColor: "blue",
  },

  painel: { //container q vai englobar os painéis principal e lateral
    flex: 1,
    flexDirection: "row", //flexDirection 'row' para organizar os painéis em linha, [] [] um ao lado do outro
    gap: 8, //espaço entre os painéis
    padding: 8,
  },

  painelPrincipal: {
    flex: 2, //flex 2 pq vai ocupar o dobro do espaço do painel lateral, q está com flex 1
    backgroundColor: "pink",
  },

  painelLateral: {
    flex: 1, //o conteiner pai foi dividido em 3 partes, e o principal vai ocupar duas delas, e o lateral vai ocupar uma parte
    backgroundColor: "blue",
  },

  footer: {
    width: "100%", //só usa o width aqui porque o pai tem flexDirection, e ele não está aplicando flex, se estivesse com flex a largura seria totalmente ocupada automaticamente 
    height: 40, //altura fixa para o footer
    backgroundColor: "darkblue",
  },
});